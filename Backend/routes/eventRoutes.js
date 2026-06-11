const express = require("express");

const router = express.Router();

const upload = require("../Config/multer");

const {
  addEvent,
  getEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");


router.post(
  "/",
  upload.single("image"),
  addEvent
);

router.get("/", getEvents);

router.put(
  "/:id",
  upload.single("image"),
  updateEvent
);

router.delete(
  "/:id",
  deleteEvent
);

module.exports = router;