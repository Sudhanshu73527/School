import React from "react";
import { motion } from "framer-motion";
import { FaTheaterMasks } from "react-icons/fa";

const Dance = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-pink-200 text-pink-800 px-4 py-1 rounded-full text-sm font-semibold mb-4"
        >
          Dance & Performance
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Dance Section
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Every Saturday, we host exciting <span className="font-semibold text-pink-600">dance competitions</span> for our students, 
          encouraging confidence, creativity, and stage performance. Let your child move to the rhythm!
        </p>
      </div>

      {/* Dance Info Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <FaTheaterMasks className="text-pink-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Weekly Dance Competition
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Students showcase their dance skills every Saturday, learning rhythm, 
            coordination, and stage presence in a fun and encouraging environment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fun & Confidence
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Dance competitions help students build confidence, teamwork, and self-expression, 
            making learning fun and memorable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Dance;