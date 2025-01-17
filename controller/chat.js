const ChatDoc = require("../models/chatDocs");

const addChatDoc = async (req, res) => {
	const { chatId, docData } = req.body;
	let data = await ChatDoc.findOne({ chatId });
	if (!data) {
		data = new ChatDoc({
			chatId,
		});
	}
	data.chatDoc.push(docData);
	data.save();
	return res.send(data);
};

const getChatDoc = async (req, res) => {
	const { chatId } = req.body;
	const data = await ChatDoc.findOne({ chatId });
	return res.send({ data: data.chatDoc });
};

module.exports = {
	addChatDoc,
	getChatDoc,
};
