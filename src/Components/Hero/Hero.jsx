import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../../assets/iqra1.webp";
import bgImg2 from "../../assets/iqra2.webp";
import bgImg3 from "../../assets/iqra3.webp";

const images = [bgImg, bgImg2, bgImg3];
const prompts = [
  <> Unlock the power of <span className="text-orange-500 font-semibold">knowledge</span> – your future begins here. </>,
  <> Launch your dreams with quality <span className="text-orange-500 font-semibold">education</span>. </>,
  <> <span className="text-orange-500 font-semibold">Education</span> is the passport to tomorrow – prepare today. </>,
  <> Learning today, <span className="text-orange-500 font-semibold">leading</span> tomorrow. </>,
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] overflow-hidden">
  {/* Background image with smooth fade */}
  <img
    src={images[currentIndex]}
    alt="Hero Background"
    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
  />

  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black opacity-60"></div>

  {/* Text content */}
  <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
    <div className="space-y-6 max-w-4xl">
      <AnimatePresence mode="wait">
 <motion.p
  key={currentIndex}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.8 }}
  style={{ fontFamily: '"Playfair Display", serif' }}
  className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold bg-white bg-clip-text text-transparent drop-shadow-lg"
>
  {prompts[currentIndex]}
</motion.p>


      </AnimatePresence>

      <a
        href="#"
        className="inline-block bg-green-600 text-white text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-2.5 rounded-md hover:bg-green-700 transition"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        Enquire Now
      </a>
    </div>
  </div>
</section>

  );
};

export default Hero;
