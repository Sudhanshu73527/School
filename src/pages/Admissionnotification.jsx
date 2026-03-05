import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Admissionnotification = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-yellow-50 via-white to-red-50">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4"
        >
          Admission Open 2026-27
        </motion.div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Admission Notification
        </h2>

        <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
          Applications are now invited for the new academic session. 
          Please check the important dates below.
        </p>
      </div>

      {/* Date Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaCalendarAlt className="text-green-600 text-3xl mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-800">
            Admission Start Date
          </h4>
          <p className="text-gray-600 mt-2">
            01 April 2026
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center border-2 border-red-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaBell className="text-red-600 text-3xl mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-800">
            Last Date to Apply
          </h4>
          <p className="text-gray-600 mt-2 font-medium">
            30 June 2026
          </p>
        </motion.div>

      </div>

      {/* Important Note */}
      <div className="mt-12 max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-xl text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Important Notice
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Admissions will be granted based on seat availability and document verification.
          Parents are requested to complete the admission process before the last date
          to avoid inconvenience.
        </p>

        <div className="mt-6">
        <Link to={"/online-registration"}>
          <button className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition w-full sm:w-auto">
            Apply Now
          </button>
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Admissionnotification;