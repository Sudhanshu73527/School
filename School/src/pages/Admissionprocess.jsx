import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaUserCheck, FaMoneyBillWave, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Step 1: Fill the Application Form",
    desc: "Parents can fill the admission form either online through our website or offline by visiting the school campus."
  },
  {
    icon: <FaClipboardList />,
    title: "Step 2: Document Submission",
    desc: "Submit required documents such as Birth Certificate, Aadhaar Card, Previous Report Card and Passport Size Photographs."
  },
  {
    icon: <FaUserCheck />,
    title: "Step 3: Interaction / Assessment",
    desc: "The student may attend a simple interaction or basic assessment depending on the class applied for."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Step 4: Fee Payment & Confirmation",
    desc: "After selection, complete the admission by paying the fees and receive confirmation from the school office."
  }
];

const Admissionprocess = () => {
  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-green-50 via-white to-blue-50">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Admission Process
        </h2>
        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          Our admission process is simple and transparent. Parents can apply 
          either online or by visiting the school campus.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center sm:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-green-600 text-2xl mb-3 flex justify-center sm:justify-start">
              {step.icon}
            </div>

            <h4 className="font-semibold text-gray-800 mb-2 text-base">
              {step.title}
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Online / Offline Highlight */}
      <div className="mt-14 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Apply Online or Visit Us
        </h3>
        <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
          Parents can easily apply through our online admission form available 
          on the website, or they can visit the school office during working 
          hours for offline admission support.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <Link to={"/online-registration"}>
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
            Apply Online
          </button>
          </Link>

          <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 transition">
            Visit School Campus
          </button>
        </div>
      </div>

    </section>
  );
};

export default Admissionprocess;