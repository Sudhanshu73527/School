import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-green-100 to-green-200 text-gray-700 pt-12 pb-6 shadow-inner">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-700">Our School</h2>
          <p className="text-sm leading-relaxed">
            Providing quality education with a focus on knowledge, discipline, and all-round
            development. We believe in nurturing young minds to become future leaders.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-700">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-green-600">About Us</a></li>
            <li><a href="#admissions" className="hover:text-green-600">Admissions</a></li>
            <li><a href="#academics" className="hover:text-green-600">Academics</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-700">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-800">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-800">
              <FaTwitter />
            </a>
            <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-800">
              <FaInstagram />
            </a>
            <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-800">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-green-300 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} IQRA PUBLIC SCHOOL. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
