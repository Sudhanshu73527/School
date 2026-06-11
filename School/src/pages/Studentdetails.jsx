import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const Studentdetails = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-indigo-200 text-indigo-800 px-4 py-1 rounded-full text-sm font-semibold mb-4"
        >
          Our Students
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Student Details & Insights
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Being a new school, we focus on <span className="font-semibold text-indigo-600">modern teaching methods</span> 
          and provide <span className="font-semibold text-indigo-600">quality education</span> to each student. 
          Currently, we have a small but growing number of students, ensuring personalized attention and excellent learning outcomes.
        </p>
      </div>

      {/* Info Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <FaUsers className="text-indigo-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Personalized Attention
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Every student receives focused guidance thanks to our small class sizes. 
            This ensures quality education and better understanding of concepts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Growing Community
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Our school is steadily growing, and more students are joining every day 
            due to our modern teaching approach and high-quality education.
          </p>
        </motion.div>
      </div>

      {/* Note */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-gray-600 text-sm sm:text-base">
          Join our community and let your child benefit from focused learning and modern education methods.
        </p>
      </div>

    </section>
  );
};

export default Studentdetails;