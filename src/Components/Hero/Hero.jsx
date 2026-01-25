import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import img1 from "../../assets/rc1.jpeg";
import img2 from "../../assets/rc2.jpeg";

const images = [img1, img2];

const Herosection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden font-outfit">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="School Campus"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-5 py-2 text-sm tracking-wider uppercase rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30"
          >
            Excellence in Education
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Welcome to <br />
            <span className="text-yellow-400 drop-shadow-lg">
              RC International School
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto"
          >
            A modern learning environment focused on academic excellence,
            discipline, innovation, and holistic student development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all shadow-lg">
              View Admissions
            </button>

            <button className="border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-full transition-all">
              Download Prospectus
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === current ? "bg-yellow-400 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/917352205506"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={26} />
      </motion.a>
    </section>
  );
};

export default Herosection;
