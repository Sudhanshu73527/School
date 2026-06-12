import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Gallary = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const res = await axios.get(
        "https://school-backend-o5im.onrender.com/api/gallery"
      );

      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-gray-50 to-blue-50">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our School Gallery
        </h2>

        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          Explore moments from our vibrant campus life,
          classrooms, events and activities that reflect
          our commitment to quality education and holistic
          development.
        </p>
      </div>

      {/* No Images */}
      {images.length === 0 && (
        <div className="text-center text-gray-500 text-lg">
          No Gallery Images Available
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {images.map((img, index) => (
          <motion.div
            key={img._id}
            className="overflow-hidden rounded-2xl shadow-lg group"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <img
              src={`https://school-backend-o5im.onrender.com/uploads/${img.image}`}
              alt="School Gallery"
              className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Gallary;