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
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navItems = [
    { name: "HOME" },
    {
      name: "ABOUT US",
      subItems: ["About School", "Chairman Message", "Principal Message"],
    },
    {
      name: "ACADEMICS",
      subItems: ["Pre-Primary", "Primary", "Secondary", "Senior Secondary"],
    },
    {
      name: "ADMISSION",
      subItems: ["Admission Process", "Fee Structure", "Online Registration"],
    },
    {
      name: "FACILITIES",
      subItems: ["Library", "Laboratory", "Transport", "Sports"],
    },
    { name: "GALLERY" },
    {
      name: "EXTRA CURRICULUM",
      subItems: ["Music", "Dance", "Yoga", "Art & Craft"],
    },
    {
      name: "MANDATORY PUBLIC DISCLOSURE",
      subItems: ["CBSE Info", "Staff Details", "Affiliation"],
    },
  ];

  return (
    <header className="w-full shadow-md font-outfit top-0 z-50">
      {/* 🔹 Top Bar */}
      <div className="bg-green-900 text-white text-xs md:text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91-70703 23285</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <span>RCInternationalSchool@.in</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="cursor-pointer hover:text-yellow-400 transition">
              CBSE
            </span>
            <span className="flex items-center space-x-2 cursor-pointer hover:text-yellow-400 transition">
              <FaLock /> <span>Login</span>
            </span>
            <button className="bg-yellow-400 text-black font-semibold px-5 py-1 rounded-sm hover:bg-yellow-300 transition">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Middle Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <img src={logo} alt="logo" className="h-14 md:h-20 w-auto" />
            <h1 className="text-sm font-bold text-green-800 uppercase md:hidden truncate">
              RC International School
            </h1>
          </div>

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

          <div className="hidden lg:flex flex-col space-y-1 text-green-900">
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" /> +91-70703 23285
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" /> RCInternationalSchool@.in
            </span>
          </div>

          <button
            className="lg:hidden text-green-800 text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* 🔹 Desktop Navbar */}
      <nav className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 hidden lg:block">
        <ul className="max-w-7xl mx-auto flex justify-between px-4 text-white font-semibold">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="px-3 py-3 cursor-pointer relative group tracking-wide hover:text-yellow-300 transition-all"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all"></span>

              {item.subItems && (
                <ul className="absolute top-full left-0 mt-3 bg-white text-gray-800 shadow-xl rounded-xl min-w-[240px]
                               opacity-0 invisible group-hover:opacity-100 group-hover:visible
                               transition-all duration-300 z-50 border border-gray-100">
                  {item.subItems.map((sub, idx) => (
                    <li
                      key={idx}
                      className="px-5 py-3 text-sm font-medium flex items-center gap-2
                                 hover:bg-green-50 hover:text-green-800 transition-all"
                    >
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 left-0 w-full bg-white z-50 rounded-b-3xl lg:hidden"
            >
              <div className="flex items-center gap-2 px-4 py-4 border-b">
                <img src={logo} alt="logo" className="h-11 w-auto" />
                <h2 className="font-semibold text-green-800 text-sm flex-1 truncate">
                  Araybhat National Public School
                </h2>
                <button onClick={() => setMenuOpen(false)}>
                  <FaTimes className="text-xl text-green-800" />
                </button>
              </div>

              <ul className="divide-y">
                {navItems.map((item, i) => (
                  <li key={i} className="px-5 py-4">
                    <div
                      className="flex justify-between items-center text-gray-800 font-semibold tracking-wide"
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === i ? null : i)
                      }
                    >
                      {item.name}
                      {item.subItems && (
                        <span className="text-green-700">
                          {openSubmenu === i ? "−" : "+"}
                        </span>
                      )}
                    </div>

                    {item.subItems && openSubmenu === i && (
                      <ul className="mt-3 ml-4 pl-4 border-l-2 border-green-200 space-y-3">
                        {item.subItems.map((sub, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-700 flex items-center gap-2 hover:text-green-700 transition"
                            onClick={() => setMenuOpen(false)}
                          >
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

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





// 
// 70703 23285

