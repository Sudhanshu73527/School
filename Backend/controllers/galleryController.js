const Gallery = require("../models/Gallery");


// GET ALL IMAGES
exports.getGalleryImages = async (
  req,
  res
) => {
  try {
    const images =
      await Gallery.find().sort({
        createdAt: -1,
      });

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ADD IMAGE
exports.addGalleryImage = async (
  req,
  res
) => {
  try {
    const gallery =
      await Gallery.create({
        image: req.file.filename,
      });

    res.status(201).json(gallery);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE IMAGE
exports.deleteGalleryImage =
  async (req, res) => {
    try {
      await Gallery.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Image Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };