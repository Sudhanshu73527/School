import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F4F8F6] to-[#E8F1EC] text-gray-700">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* School Info */}
        <div>
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Aryabhat International School
          </h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Aryabhat International School is committed to delivering quality
            education with strong values, discipline, and holistic development,
            empowering students to become confident and responsible citizens.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Admissions", "Academics", "Infrastructure", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-green-700 transition"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-700 mt-1" />
              <span>
                Near Main Road, City Name,  
                <br /> State – 000000
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-700" />
              <span>+91 77396 92245</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-700" />
              <span>info@aryabhatschool.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-green-800 mb-4">
            Connect With Us
          </h4>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center
                             bg-white shadow hover:bg-green-700 hover:text-white
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
      <div className="border-t border-green-200 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Aryabhat International School. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
