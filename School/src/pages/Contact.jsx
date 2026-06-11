import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
New Contact Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}
`;

    const whatsappURL = `https://wa.me/919905992967?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-3">
          If you have any questions about admission, facilities, or school
          activities, feel free to contact us. Fill the form and our team will
          connect with you shortly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
            <FaPhoneAlt className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+91 9939995043</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
            <FaWhatsapp className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">WhatsApp</h4>
              <p className="text-gray-600">Send us message directly</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
            <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Address</h4>
              <p className="text-gray-600">
                Mahui, Ramnagar <br />
                West Champaran, Bihar
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="4"
              required
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Submit Message 
            </button>

          </form>
        </motion.div>

      </div>

    </section>
  );
};

export default Contact;