import React from "react";
import { motion } from "framer-motion";
import { FaBookReader, FaChalkboardTeacher, FaLaptopCode, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaBookReader />,
    title: "Strong Academic Foundation",
    desc: "We build strong fundamentals in core subjects through structured and engaging lessons."
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Experienced Faculty",
    desc: "Our qualified teachers focus on conceptual clarity and individual student development."
  },
  {
    icon: <FaLaptopCode />,
    title: "Smart Class Learning",
    desc: "Digital tools and interactive smart boards make learning more effective and interesting."
  },
  {
    icon: <FaUsers />,
    title: "Holistic Development",
    desc: "We encourage leadership, teamwork and personality growth through co-curricular activities."
  }
];

const Primary = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug">
          Primary Education
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          Our Primary section focuses on strengthening academic fundamentals 
          while nurturing creativity, discipline and confidence in every student.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/class1.png"
            alt="Primary Students"
            className="rounded-2xl shadow-xl w-full max-w-md md:max-w-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Building Knowledge with Confidence
          </h3>

          <p className="text-gray-600 mt-4 mb-8 text-sm sm:text-base leading-relaxed">
            At the primary level, students develop essential skills in language, 
            mathematics, science and social studies. Our modern teaching approach 
            ensures clarity of concepts and practical understanding.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center sm:text-left"
                whileHover={{ scale: 1.04 }}
              >
                <div className="text-indigo-500 text-2xl mb-3 flex justify-center sm:justify-start">
                  {item.icon}
                </div>

                <h4 className="font-semibold text-gray-800 text-base mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="mt-14 sm:mt-16 max-w-3xl mx-auto text-center bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 leading-snug">
          "Empowering Young Minds for Academic Excellence"
        </h4>
        <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
          We prepare students not only for higher classes but also for real-life 
          challenges through discipline, knowledge and moral values.
        </p>
      </div>

    </section>
  );
};

export default Primary;