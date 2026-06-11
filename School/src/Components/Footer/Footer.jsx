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
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#f6fbf8] via-[#edf6f1] to-[#e3efe8] text-gray-700">

      {/* Top Strip */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white text-sm py-3 text-center font-medium tracking-wide">
        Admissions Open • Quality Education • Holistic Development
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* School Info */}
        <div>
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Modern Public School
          </h3>

          <p className="text-sm leading-relaxed text-gray-600 mb-6">
            Modern Public School is committed to nurturing young minds with
            academic excellence, discipline, strong moral values and modern
            learning methods. Our mission is to empower students with knowledge,
            confidence and leadership qualities for a successful future.
          </p>

          {/* small divider */}
          <div className="w-16 h-[3px] bg-green-600 rounded-full"></div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-6">
            Contact Information
          </h4>

          <ul className="space-y-4 text-sm text-gray-600">

            <li className="flex gap-3 items-start">
              <FaMapMarkerAlt className="text-green-700 mt-1" />
              <span>
                Mahui, Ramnagar <br />
                West Champaran, Bihar – 845106, India
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-700" />
              <span>+91 99059 92967</span>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-700" />
              <span>info@modernpublicschool.com</span>
            </li>

            <li className="flex items-center gap-3">
              <FaClock className="text-green-700" />
              <span>Mon – Sat : 8:00 AM – 2:00 PM</span>
            </li>

          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-6">
            Stay Connected
          </h4>

          <p className="text-sm text-gray-600 mb-6">
            Follow us on social media to stay updated with school activities,
            announcements, events and student achievements.
          </p>

          <div className="flex gap-4">

            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-full
                  bg-white shadow-lg hover:shadow-xl
                  hover:bg-green-700 hover:text-white
                  transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon />
                </a>
              )
            )}

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-200 py-5 text-center text-sm text-gray-600 flex flex-col sm:flex-row justify-center items-center gap-2">

        <span>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-800">
            Modern Public School
          </span>
          . All Rights Reserved.
        </span>

        <span>
          Powered by{" "}
          <a
            href="https://www.webala.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 font-semibold hover:underline"
          >
            Webala
          </a>
        </span>

      </div>
    </footer>
  );
};

export default Footer;