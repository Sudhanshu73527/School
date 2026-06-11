import React from "react";
import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaIdCard,
  FaTshirt,
  FaBook,
  FaSchool,
} from "react-icons/fa";

const fees = [
  {
    title: "Registration Fee",
    price: "₹300",
    icon: <FaMoneyBillWave />,
    desc: "One time registration fee during admission process.",
  },
  {
    title: "Admission Fee",
    price: "FREE",
    icon: <FaSchool />,
    desc: "We do not charge any admission fee.",
  },
  {
    title: "Tie / Belt",
    price: "₹100",
    icon: <FaTshirt />,
    desc: "School tie and belt required for uniform.",
  },
  {
    title: "School Dress",
    price: "₹500 - ₹550",
    icon: <FaTshirt />,
    desc: "Complete school uniform set.",
  },
  {
    title: "ID Card",
    price: "₹60",
    icon: <FaIdCard />,
    desc: "Student identity card issued by the school.",
  },
  {
    title: "Books & Monthly Fee",
    price: "As per Class",
    icon: <FaBook />,
    desc: "Books and first month fee depend on the student's class.",
  },
];

const Amissionstructure = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">
            Admission Structure
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We maintain a transparent and affordable fee structure for all
            students. Below are the basic charges required during admission.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

          {fees.map((fee, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center
              hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-green-700 text-3xl mb-4 flex justify-center">
                {fee.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {fee.title}
              </h3>

              <p className="text-green-700 font-bold text-xl mt-2">
                {fee.price}
              </p>

              <p className="text-sm text-gray-500 mt-3">
                {fee.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Bottom Notice */}
        <div className="mt-12 bg-green-700 text-white p-6 rounded-xl text-center">
          <h3 className="text-lg font-semibold">
            📢 Admissions Open for Nursery to 8th Class
          </h3>
          <p className="text-sm mt-2">
            For more information regarding admission, please visit the school
            office or contact us.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Amissionstructure;