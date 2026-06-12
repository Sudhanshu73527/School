import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const GalleryManagement = () => {
  const [images, setImages] =
    useState([]);

  const [image, setImage] =
    useState(null);

  const fetchImages =
    async () => {
      const res =
        await axios.get(
          "https://school-backend-o5im.onrender.com/api/gallery"
        );

      setImages(res.data);
    };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload =
    async () => {
      if (!image) return;

      const formData =
        new FormData();

      formData.append(
        "image",
        image
      );

      await axios.post(
        "https://school-backend-o5im.onrender.com/api/gallery",
        formData
      );

      fetchImages();

      setImage(null);

      alert(
        "Image Uploaded"
      );
    };

  const handleDelete =
    async (id) => {
      await axios.delete(
        `https://school-backend-o5im.onrender.com/api/gallery/${id}`
      );

      fetchImages();

      alert(
        "Deleted Successfully"
      );
    };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Gallery Management
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">

        <input
          type="file"
          onChange={(e) =>
            setImage(
              e.target.files[0]
            )
          }
        />

        <button
          onClick={
            handleUpload
          }
          className="bg-green-600 text-white px-6 py-2 rounded-lg ml-4"
        >
          Upload
        </button>

      </div>

      <div className="grid md:grid-cols-4 gap-6">

        {images.map((img) => (
          <div
            key={img._id}
            className="bg-white rounded-xl shadow"
          >
            <img
              src={`https://school-backend-o5im.onrender.com/uploads/${img.image}`}
              alt=""
              className="w-full h-48 object-cover rounded-t-xl"
            />

            <button
              onClick={() =>
                handleDelete(
                  img._id
                )
              }
              className="w-full bg-red-500 text-white py-2"
            >
              Delete
            </button>
          </div>
        ))}

      </div>

    </div>
  );
};

export default GalleryManagement;