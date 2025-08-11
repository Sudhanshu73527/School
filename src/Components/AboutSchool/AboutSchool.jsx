import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import schoolImg from "../../assets/iqra2.webp"; // Replace with your image

const prompts = [
  "Shaping Minds, Building Futures.",
  "Where Knowledge Meets Excellence.",
  "Inspiring Curiosity, Igniting Dreams.",
  "Empowering Students for Tomorrow.",
  "Learning Beyond Classrooms.",
  "Creating Leaders for a Better World.",
  "Where Tradition Meets Innovation."
];

const AboutSchool = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % prompts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-green-50 to-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden">
      
      {/* Decorative Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-green-300 blur-[120px] opacity-20 rounded-full"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 blur-[120px] opacity-20 rounded-full"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-white/70 p-10 rounded-3xl shadow-2xl border border-white/40"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-800 to-emerald-500 bg-clip-text text-transparent tracking-tight">
            About Our School
          </h2>

          {/* Rotating Prompt with Typewriter Feel */}
          <div className="h-16 flex items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPrompt}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.6 }}
                className="text-xl font-semibold text-green-700 border-l-4 border-green-500 pl-3 italic"
              >
                {prompts[currentPrompt]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            Our school is committed to nurturing young minds through{" "}
            <span className="text-green-600 font-semibold">holistic education</span>, fostering creativity, discipline, and a love for lifelong learning. 
            With <span className="text-green-600 font-semibold">state-of-the-art facilities</span> and a passionate faculty, we create an environment where students 
            can explore their full potential and achieve academic excellence.  
            From <span className="text-green-600 font-semibold">cultural programs</span> to innovative <span className="text-green-600 font-semibold">tech labs</span>, we ensure every child 
            is prepared for the challenges of tomorrow.
          </p>
        </motion.div>

        {/* Right: Image with Glow & Floating */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/40"
          >
            <img
              src={schoolImg}
              alt="About School"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute inset-0 shadow-[0_0_50px_rgba(16,185,129,0.6)]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSchool;
