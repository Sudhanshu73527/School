const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    dueDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Homework",
  homeworkSchema
);