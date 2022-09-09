const express = require("express");
const router = express.Router();
const { sendMessage, allMessages } = require("../controller/messageController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, sendMessage);
router.get("/:chatId", protect, allMessages);

module.exports = router;
