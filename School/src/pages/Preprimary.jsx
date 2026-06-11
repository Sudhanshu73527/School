import React from "react";
import { motion } from "framer-motion";
import { FaChild, FaPaintBrush, FaBookOpen, FaSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaChild />,
    title: "Child-Centered Learning",
    desc: "We focus on every child’s emotional, social and intellectual growth through personalized attention."
  },
  {
    icon: <FaPaintBrush />,
    title: "Creative Activities",
    desc: "Art, craft, music and fun-based activities help children explore their imagination."
  },
  {
    icon: <FaBookOpen />,
    title: "Modern Teaching Methods",
    desc: "Smart learning techniques, storytelling and activity-based education make learning joyful."
  },
  {
    icon: <FaSmile />,
    title: "Safe & Caring Environment",
    desc: "A warm, secure and friendly atmosphere where children feel happy and confident."
  }
];

const Preprimary = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 overflow-hidden">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 leading-snug">
          Pre-Primary Education
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          We nurture young minds with modern teaching methods and a joyful
          learning environment where children grow with confidence, creativity
          and strong moral values.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/class4.png"
            alt="Pre Primary Students"
            className="rounded-2xl shadow-xl w-full max-w-md md:max-w-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Learning Through Play & Exploration
          </h3>

          <p className="text-gray-600 mt-4 mb-8 text-sm sm:text-base leading-relaxed">
            Our pre-primary section focuses on activity-based learning,
            storytelling, smart classroom experiences and interactive sessions
            that make education fun and engaging for small children.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 text-center sm:text-left"
                whileHover={{ scale: 1.04 }}
              >
                <div className="text-pink-500 text-2xl mb-3 flex justify-center sm:justify-start">
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

      {/* Bottom Quote */}
      <div className="mt-14 sm:mt-16 max-w-3xl mx-auto text-center bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 leading-snug">
          "Building Strong Foundations for a Bright Future"
        </h4>
        <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
          Early childhood education shapes personality, confidence and lifelong success.
        </p>
      </div>

    </section>
  );
};

export default Preprimary;