const express = require("express");
const router = express.Router();

const multer = require("multer");

const {
  getGalleryImages,
  addGalleryImage,
  deleteGalleryImage,
} = require(
  "../controllers/galleryController"
);


// Multer
const storage = multer.diskStorage({
  destination: (
    req,
    file,
    cb
  ) => {
    cb(null, "uploads/");
  },

  filename: (
    req,
    file,
    cb
  ) => {
    cb(
      null,
      Date.now() +
        "-" +
        file.originalname
    );
  },
});

const upload = multer({
  storage,
});


// GET
router.get(
  "/",
  getGalleryImages
);


// POST
router.post(
  "/",
  upload.single("image"),
  addGalleryImage
);


// DELETE
router.delete(
  "/:id",
  deleteGalleryImage
);

module.exports = router;