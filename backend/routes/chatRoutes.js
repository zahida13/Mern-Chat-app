const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  accessChats,
  fetchAllChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
  deleteChat,
} = require("../controller/chatControler");

router.route("/").post(protect, accessChats);
router.get("/", protect, fetchAllChats);
router.route("/group").post(protect, createGroupChat);
router.put("/rename", protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/").delete(protect, deleteChat);

module.exports = router;
