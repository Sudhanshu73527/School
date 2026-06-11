import React from "react";
import { motion } from "framer-motion";

const feeData = [
  { class: "Nursery", fee: "₹450 / Month" },
  { class: "KG", fee: "₹475 / Month" },
  { class: "1st Grade", fee: "₹525 / Month" },
  { class: "2nd Grade", fee: "₹550 / Month" },
  { class: "3rd Grade", fee: "₹575 / Month" },
  { class: "4th Grade", fee: "₹600 / Month" },
  { class: "5th Grade", fee: "₹625 / Month" },
  { class: "6th Grade", fee: "₹650 / Month" },
  { class: "7th Grade", fee: "₹675 / Month" },
  { class: "8th Grade", fee: "₹700 / Month" },
];

const Feestructure = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Fee Structure (Nursery – 8th Grade)
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
          Our transparent fee structure ensures quality education at affordable rates. 
          Fees are payable monthly.
        </p>
      </div>

      {/* Fee Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {feeData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.class}</h3>
            <p className="text-gray-600 font-medium">{item.fee}</p>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-gray-600 text-sm sm:text-base">
          * Fees may vary slightly depending on additional activities and resources.
        </p>
      </div>
    </section>
  );
};

export default Feestructure;