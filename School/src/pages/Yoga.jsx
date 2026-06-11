import React from "react";
import { motion } from "framer-motion";
import { FaSpa } from "react-icons/fa";

const Yoga = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-green-200 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4"
        >
          Health & Wellness
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Yoga Sessions
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Once a month, we organize <span className="font-semibold text-green-600">yoga sessions</span> for our students to keep their minds relaxed 
          and focus on overall health and well-being.
        </p>
      </div>

      {/* Yoga Info Card */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <FaSpa className="text-green-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Monthly Yoga Session
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Students participate once a month in guided yoga sessions to relax their minds, 
            improve concentration, and enhance overall health.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Mind & Body Wellness
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Yoga sessions are designed to maintain mental calmness, flexibility, and 
            overall physical well-being of our students in a fun and engaging way.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Yoga;