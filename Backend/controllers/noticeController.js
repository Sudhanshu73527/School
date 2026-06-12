import { create, find, findById, findByIdAndUpdate, findByIdAndDelete } from "../models/notice";

// Add Notice
export async function addNotice(req, res) {
  try {
    const notice = await create(req.body);

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
}

// Get All Notices
export async function getAllNotices(req, res) {
  try {
    const notices = await find().sort({
      createdAt: -1,
    });

    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Get Single Notice
export async function getNoticeById(req, res) {
  try {
    const notice = await findById(req.params.id);

    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

// Update Notice
export async function updateNotice(req, res) {
  try {
    const notice = await findByIdAndUpdate(
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
}

// Delete Notice
export async function deleteNotice(req, res) {
  try {
    await findByIdAndDelete(req.params.id);

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
}