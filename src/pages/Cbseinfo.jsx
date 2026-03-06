import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaBook } from "react-icons/fa";

const Cbseinfo = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold mb-4"
        >
          CBSE Education
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          About CBSE
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          The <span className="font-semibold text-yellow-600">Central Board of Secondary Education (CBSE)</span> is a national education board 
          in India that provides a well-structured curriculum, regular examinations, and holistic education. 
          It is recognized across India and ensures quality learning for students at every grade level.
        </p>
      </div>

      {/* CBSE Info Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <FaSchool className="text-yellow-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What is CBSE?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            CBSE is a board of education for public and private schools, providing a standardized curriculum 
            from nursery to 12th grade, ensuring students get a strong foundation in academics and life skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          <FaBook className="text-yellow-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            How CBSE Works
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            CBSE conducts board exams for 10th and 12th grades, follows NCERT curriculum, 
            and encourages practical learning and co-curricular activities. This helps students perform well in academics and competitive exams.
          </p>
        </motion.div>
      </div>

      {/* Note */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-gray-600 text-sm sm:text-base">
          Choosing CBSE ensures your child receives structured, recognized, and high-quality education that is accepted across India.
        </p>
      </div>

    </section>
  );
};

export default Cbseinfo;