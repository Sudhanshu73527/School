import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import principalImg from "../../assets/iqra1.webp"; // Replace with your image path

const prompts = [
  "Leading with Vision and Purpose.",
  "Inspiring Excellence Every Day.",
  "Guiding Students Towards Greatness.",
  "Building the Leaders of Tomorrow.",
  "Where Compassion Meets Leadership."
];

const AboutPrincipal = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % prompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-300 blur-3xl opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <img
              src={principalImg}
              alt="Principal"
              className="rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/70 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
            About Our Principal
          </h2>

          {/* Animated Prompt */}
          <div className="h-14 mb-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPrompt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-semibold text-green-700"
              >
                {prompts[currentPrompt]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our principal is the guiding light of our institution — a visionary
            leader committed to shaping the future with compassion, dedication,
            and excellence. With a strong belief that{" "}
            <span className="text-green-600 font-semibold">
              education is the most powerful tool for change
            </span>
            , they inspire both students and teachers to achieve their full
            potential.
          </p>

          <ul className="space-y-3 text-gray-700">
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
