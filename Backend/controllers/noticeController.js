const Notice = require("../models/Notice");

// Add Notice
exports.addNotice = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);

    res.status(201).json({
      success: true,
      message: "Notice Added Successfully",
      notice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Notices
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({
      createdAt: -1,
    });

    res.status(200).json(notices); 
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Notice
exports.getNoticeById = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);

    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Notice
exports.updateNotice = async (req, res) => {
  try {
    const notice = await Notice.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Notice Updated",
      notice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Notice
exports.deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Notice Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};