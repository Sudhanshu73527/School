import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const Mission = () => {
  return (
    <section className="relative bg-[#0f172a] text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(250,204,21,0.06),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.06),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Mission & Vision
          </h2>
          <div className="w-20 h-[2px] bg-yellow-400 mx-auto mt-6"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400 text-black p-3 rounded-full">
                <FaBullseye size={20} />
              </div>
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              As a newly established institution, our mission is to create a
              progressive and student-focused learning environment where
              education goes beyond textbooks. We are committed to nurturing
              strong academic foundations while developing character,
              leadership, confidence, and critical thinking skills in every
              child. Our aim is to prepare students not only for examinations
              but for real-life challenges with discipline, values, and a
              growth mindset.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400 text-black p-3 rounded-full">
                <FaEye size={20} />
              </div>
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Our vision is to become a center of excellence in modern
              education by building a safe, inspiring, and innovative campus
              where young minds discover their true potential. Though we are a
              new school, our vision is bold — to shape responsible global
              citizens who lead with integrity, creativity, and compassion.
              We aspire to grow as a trusted educational institution known for
              quality learning, strong values, and holistic development.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Mission;