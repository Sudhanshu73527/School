const Homework = require("../models/Homework");


// GET ALL HOMEWORK

exports.getHomework = async (
  req,
  res
) => {
  try {
    const homework =
      await Homework.find().sort({
        createdAt: -1,
      });

    res.status(200).json(homework);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ADD HOMEWORK

exports.addHomework = async (
  req,
  res
) => {
  try {
    const homework =
      await Homework.create(req.body);

    res.status(201).json(homework);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE HOMEWORK

exports.updateHomework =
  async (req, res) => {
    try {
      const homework =
        await Homework.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.status(200).json(homework);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


// DELETE HOMEWORK

exports.deleteHomework =
  async (req, res) => {
    try {
      await Homework.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Homework Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };