const mongoose = require("mongoose");

const admissionNotificationSchema = new mongoose.Schema(
  {
    admissionOpen: {
      type: String,
      required: true,
    },

    startDate: {
      type: String,
      required: true,
    },

    lastDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "AdmissionNotification",
  admissionNotificationSchema
);