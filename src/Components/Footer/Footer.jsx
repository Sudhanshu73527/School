import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaSchool,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F3F8F5] via-[#ECF3EF] to-[#E3EEE8] text-gray-700">

      {/* Top Strip */}
      <div className="bg-yellow-600 text-white text-sm py-2 text-center">
        Admissions Open • Quality Education • Holistic Development
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* School Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaSchool className="text-green-700 text-2xl" />
            <h3 className="text-2xl font-bold text-green-800">
              RC International School
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 mb-4">
            RC International School is dedicated to nurturing young minds through
            academic excellence, moral values, discipline, and modern education.
            We prepare students to excel confidently in a global environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              "About Us",
              "Admissions",
              "Academics",
              "Infrastructure",
              "Gallery",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-green-700 hover:pl-1 transition-all duration-300"
                >
                  ➜ {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">
            Contact Information
          </h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-green-700 mt-1" />
              <span>
                Near Main Road, City Name <br />
                State – 000000, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-700" />
              <span>+91 77396 92245</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-700" />
              <span>info@rcinternationalschool.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaClock className="text-green-700" />
              <span>Mon – Sat : 8:00 AM – 2:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Social + Extra */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">
            Stay Connected
          </h4>
          <p className="text-sm text-gray-600 mb-5">
            Follow us on social media to get the latest updates, announcements,
            events, and achievements of our students.
          </p>

          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full
                             bg-white shadow-md hover:bg-green-700 hover:text-white
                             transition-all duration-300"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-200 py-5 text-center text-sm text-gray-600">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-green-800">
          RC International School
        </span>
        . All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
