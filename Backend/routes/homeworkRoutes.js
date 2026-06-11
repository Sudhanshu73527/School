const express = require("express");

const router = express.Router();

const {
  getHomework,
  addHomework,
  updateHomework,
  deleteHomework,
} = require(
  "../controllers/homeworkController"
);

router.get("/", getHomework);

router.post("/", addHomework);

router.put(
  "/:id",
  updateHomework
);

router.delete(
  "/:id",
  deleteHomework
);

module.exports = router;