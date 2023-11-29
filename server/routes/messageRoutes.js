const { addMessage, getMessages } = require("../controllers/messageControllers");
const router = require("express").Router();

router.post("/addmessage/", addMessage);
router.post("/getmessages/", getMessages);

module.exports = router;