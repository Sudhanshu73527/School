const express = require("express");

const router = express.Router();

const {
  getAdmissionNotification,
  updateAdmissionNotification,
} = require("../controllers/admissionNotificationController");

router.get(
  "/",
  getAdmissionNotification
);

router.put(
  "/",
  updateAdmissionNotification
);

module.exports = router;