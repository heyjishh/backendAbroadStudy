var express = require("express");
var router = express.Router();
var studentdata = require("../controller/students");
/* GET home page. */
router.post("/home", studentdata.create);
router.put("/update", studentdata.studentDataUpdate);
router.post("/application/add", studentdata.addApplication);
router.post("/createDoc", studentdata.createDoc);
router.put("/updateDoc", studentdata.updateDoc);
router.delete("/deleteDoc", studentdata.deleteDoc);

module.exports = router;
