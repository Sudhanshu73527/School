import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaBookReader } from "react-icons/fa";

const Rte = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4"
        >
          Right to Education
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          About RTE (Right to Education)
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          The <span className="font-semibold text-blue-600">Right to Education (RTE)</span> is a fundamental 
          right in India that ensures free and compulsory education for all children aged 6 to 14. 
          It helps parents and students understand that every child has the right to quality education.
        </p>
      </div>

      {/* RTE Info Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <FaUserGraduate className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What is RTE?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            RTE guarantees that all children have the right to free and compulsory education, 
            enabling access to learning opportunities and improving literacy and skills across the country.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <FaBookReader className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            How it Helps
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            RTE ensures children from all backgrounds can attend school without financial burden. 
            It promotes inclusive education, equal opportunities, and overall student development.
          </p>
        </motion.div>
      </div>

      {/* Note */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-gray-600 text-sm sm:text-base">
          By understanding RTE, parents can ensure their children get the education they deserve, 
          and students know their rights towards learning.
        </p>
      </div>

    </section>
  );
};

export default Rte;