import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaHandshake, FaStar } from "react-icons/fa";

const aimData = [
  {
    icon: <FaLightbulb />,
    title: "Our Vision",
    description:
      "As a new-generation school, we aim to introduce modern teaching methodologies that combine smart classrooms, digital tools and activity-based learning to make education engaging and future-ready.",
  },
  {
    icon: <FaHandshake />,
    title: "Our Commitment",
    description:
      "We are committed to building a safe, disciplined and inclusive environment where every child feels valued, respected and motivated to grow academically and personally.",
  },
  {
    icon: <FaStar />,
    title: "Our Goal",
    description:
      "Our goal is to develop confident, creative and responsible learners who are equipped with leadership qualities, strong character and a lifelong passion for learning.",
  },
];

const AimSection = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 bg-gradient-to-b from-white to-slate-50">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-yellow-500">
            Our Philosophy
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mt-4 mb-6">
            Preparing Students for a <span className="text-yellow-500">Bright Future</span>
          </h2>

          <div className="w-20 h-[2px] bg-yellow-500 mx-auto mb-6"></div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At our newly established institution, we blend innovation,
            discipline and modern teaching skills to create a strong
            academic foundation for every learner.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {aimData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* Icon Box */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-50 text-yellow-500 text-xl mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {item.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-8 w-10 h-[2px] bg-yellow-500 group-hover:w-16 transition-all duration-500"></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AimSection;