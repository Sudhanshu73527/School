import React from "react";
import { motion } from "framer-motion";
import principalImg from "../../assets/iqra1.webp"; // Replace with your image path

const AboutPrincipal = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-12 px-4 md:py-20 md:px-16 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-52 h-52 md:w-72 md:h-72 bg-green-200 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 md:w-72 md:h-72 bg-emerald-300 blur-3xl opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
        
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group w-full max-w-sm md:max-w-md"
          >
            <img
              src={principalImg}
              alt="Principal"
              className="rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500 object-cover w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/70 p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
            About Our Principal
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
            Our principal is the guiding light of our institution — a visionary
            leader committed to shaping the future with compassion, dedication,
            and excellence. With a strong belief that{" "}
            <span className="text-green-600 font-semibold">
              education is the most powerful tool for change
            </span>
            , they inspire both students and teachers to achieve their full
            potential.
          </p>

          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              Leading with empathy and integrity
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              Inspiring innovation in learning
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">✔</span>
              Building a culture of respect and excellence
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPrincipal;
