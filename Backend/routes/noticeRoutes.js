const express = require("express");
const router = express.Router();

const {
  addNotice,
  getAllNotices,
  getNoticeById,
  updateNotice,
  deleteNotice,
} = require("../controllers/noticeController");

router.post("/", addNotice);

router.get("/", getAllNotices);

router.get("/:id", getNoticeById);

router.put("/:id", updateNotice);

router.delete("/:id", deleteNotice);

module.exports = router;