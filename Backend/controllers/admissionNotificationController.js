const AdmissionNotification = require(
  "../models/AdmissionNotification"
);

// Get Data
exports.getAdmissionNotification = async (
  req,
  res
) => {
  try {
    const data =
      await AdmissionNotification.findOne();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Data
exports.updateAdmissionNotification =
  async (req, res) => {
    try {
      let data =
        await AdmissionNotification.findOne();

      if (!data) {
        data =
          await AdmissionNotification.create(
            req.body
          );
      } else {
        data =
          await AdmissionNotification.findByIdAndUpdate(
            data._id,
            req.body,
            {
              new: true,
            }
          );
      }

      res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };