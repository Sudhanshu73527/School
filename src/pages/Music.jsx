import React from "react";
import { motion } from "framer-motion";
import { FaMusic } from "react-icons/fa";

const Music = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold mb-4"
        >
          Music & Talent
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Music Section
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Every Saturday, we organize exciting <span className="font-semibold text-purple-600">music competitions</span> for our students, 
          encouraging creativity, confidence, and stage presence. Join us and let your child shine!
        </p>
      </div>

      {/* Music Icon & Info Card */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <FaMusic className="text-purple-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Weekly Music Competition
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Every Saturday, students showcase their talent in friendly competitions, 
            helping them improve musical skills and confidence on stage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fun & Learning
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Students not only learn music but also gain teamwork, confidence, and stage presence. 
            Friendly competitions make learning fun and memorable!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Music;