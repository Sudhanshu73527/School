import React from "react";
import { motion } from "framer-motion";

const images = [
  "/class1.png",
  "/class2.png",
  "/school3.jpg",
  "/school4.jpg",
  "/school5.jpg",
  "/school6.jpg",
];

const Gallary = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-gray-50 to-blue-50">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Our School Gallery
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          Explore moments from our vibrant campus life, classrooms, events and 
          activities that reflect our commitment to quality education and holistic development.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg group"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={img}
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