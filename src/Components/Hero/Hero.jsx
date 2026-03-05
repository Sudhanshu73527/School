import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

import img1 from "../../assets/mod4.png";

const images = [img1];

const Herosection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden font-outfit text-white">

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="Campus"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Professional Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/85 via-black/70 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">

          <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0">

            {/* Badge */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block bg-yellow-400 text-black px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-lg"
            >
              Admissions Open 2026-27
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Building Future Leaders <br className="hidden sm:block" />
              <span className="text-yellow-400">
                With Modern Public School
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              भविष्य की चुनौतियों के लिए तैयार करने वाला प्रगतिशील शिक्षण वातावरण,
              जहाँ शिक्षा के साथ-साथ चरित्र, नेतृत्व और आत्मविश्वास का विकास किया जाता है।
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button className="bg-yellow-400 text-black py-3 px-8 rounded-full font-semibold shadow-xl flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300">
                Apply Now <HiArrowRight />
              </button>

              <a
                href="https://wa.me/917352205506"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/40 backdrop-blur-md py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                Enquire Now
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/917352205506"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>

    </section>
  );
};

export default Herosection;