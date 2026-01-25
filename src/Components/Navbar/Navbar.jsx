import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLock,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo1.jfif";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT US",
    "ACADEMICS",
    "ADMISSION",
    "FACILITIES",
    "GALLERY",
    "EXTRA CURRICULUM",
    "MANDATORY PUBLIC DISCLOSURE",
  ];

  return (
    <header className="w-full shadow-md font-outfit top-0 z-50">
      {/* 🔹 Top Bar (Desktop only) */}
      <div className="bg-green-900 text-white text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91-70703 23285 / +91-70703 23285</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <span>RCInternationalSchool@.in</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="cursor-pointer hover:text-yellow-400">CBSE</span>
            <span className="flex items-center space-x-2 cursor-pointer hover:text-yellow-400">
              <FaLock /> <span>Login</span>
            </span>
            <button className="bg-yellow-400 text-black font-semibold px-5 py-1 rounded-sm">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Middle Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          
          {/* ✅ MOBILE + DESKTOP LOGO BLOCK */}
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            {/* Logo */}
            <img
              src={logo}
              alt="logo"
              className="h-14 md:h-20 w-auto flex-shrink-0"
            />

            {/* Mobile School Name */}
            <h1 className="text-sm font-bold text-green-800 uppercase md:hidden whitespace-nowrap overflow-hidden text-ellipsis">
              RC International School
            </h1>
          </div>

          {/* 🔹 Desktop School Name (UNCHANGED) */}
          <div className="text-center flex-1 hidden md:block">
            <h1 className="text-3xl font-extrabold text-green-800 uppercase">
              RC International School
            </h1>
            <h2 className="text-xl font-bold text-purple-800">
              Chautarwa, Bihar 845101
            </h2>
            <p className="text-yellow-500 font-bold">
              School No.: 12345, Affiliation Code - 000000
            </p>
          </div>

          {/* Desktop Contact */}
          <div className="hidden lg:flex flex-col space-y-1 text-green-900">
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" /> +91-70703 23285
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" /> RCInternationalSchool@.in
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-green-800 text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* 🔹 Desktop Navbar (UNCHANGED) */}
      <nav className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 hidden lg:block">
        <ul className="max-w-7xl mx-auto flex justify-between px-4 text-white font-semibold">
          {navItems.map((item, i) => (
            <li key={i} className="px-3 py-3 cursor-pointer relative group">
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔹 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 left-0 w-full bg-white z-50 rounded-b-3xl lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-2 px-4 py-4 border-b min-w-0">
                <img
                  src={logo}
                  alt="logo"
                  className="h-11 w-auto flex-shrink-0"
                />

                <h2 className="font-semibold text-green-800 text-sm whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                  RC International School
                </h2>

                <button onClick={() => setMenuOpen(false)}>
                  <FaTimes className="text-xl text-green-800" />
                </button>
              </div>

              {/* Menu Items */}
              <ul className="divide-y">
                {navItems.map((item, i) => (
                  <li
                    key={i}
                    className="px-5 py-4 text-gray-800 font-medium hover:bg-green-50"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="p-4">
                <button className="w-full bg-gradient-to-r from-green-700 to-green-900 text-white py-3 rounded-xl font-semibold shadow-md">
                  Apply for Admission
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
