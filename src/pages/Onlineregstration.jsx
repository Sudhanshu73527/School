import React, { useState } from "react";
import { motion } from "framer-motion";

const Onlineregstration = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentClass: "",
    studentAadhaar: "",
    parentName: "",
    parentMobile: "",
    parentAadhaar: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Submitted Successfully!");
  };

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Online Registration
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
          Please fill in the details carefully to complete the online admission registration.
        </p>
      </div>

      {/* Form Card */}
      <motion.div
        className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Student Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Student Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="studentName"
                placeholder="Student Full Name"
                value={formData.studentName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                name="studentClass"
                placeholder="Class Applying For"
                value={formData.studentClass}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                name="studentAadhaar"
                placeholder="Student Aadhaar Number"
                value={formData.studentAadhaar}
                onChange={handleChange}
                maxLength="12"
                required
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Parent Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Parent Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="parentName"
                placeholder="Parent / Guardian Name"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="tel"
                name="parentMobile"
                placeholder="Parent Mobile Number"
                value={formData.parentMobile}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />

              <input
                type="text"
                name="parentAadhaar"
                placeholder="Parent Aadhaar Number"
                value={formData.parentAadhaar}
                onChange={handleChange}
                maxLength="12"
                required
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
            >
              Submit Registration
            </button>
          </div>

        </form>
      </motion.div>

    </section>
  );
};

export default Onlineregstration;