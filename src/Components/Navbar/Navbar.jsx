import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/iqra.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    "Home",
    "About Us",
    "Admissions",
    "Mandatory Details",
    "",
    "Contact",
    
  ];

  // Detect scroll for animation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 shadow-xl"
          : "bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + School Name */}
        <div className="flex items-center space-x-3 group">
          <img
            src={logo}
            alt="School Logo"
            className="h-12 md:h-16 w-auto drop-shadow-md transform transition-transform duration-300 group-hover:scale-110"
          />
         <div className="leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
  <h1 className="text-blue-700 font-bold text-xl md:text-2xl transition-colors duration-300 group-hover:text-blue-800">
    Iqra Public School
  </h1>
  
  <p className="text-xs md:text-sm text-gray-600">
    Inspiring Learning, Building Future
  </p>
</div>

        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-blue-900 font-large uppercase text-sm tracking-wide">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="relative hover:text-blue-600 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
              // style={{ fontFamily: '"Playfair Display", serif' }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* WhatsApp + Call */}
          <div className="flex items-center bg-white/90 shadow-sm px-3 py-2 rounded-full space-x-3 border border-blue-200 hover:shadow-md transition duration-300">
            <a
              href="https://wa.me/917739692245"
              className="text-gray-700 hover:text-green-600 transition"
            >
              <FaWhatsapp size={18}  className="animate-pulse"/>
            </a>
            <div className="h-4 w-px bg-gray-400" />
            <a
              href="tel:+917739692245"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              <FaPhone size={18} className="animate-pulse " />
            </a>
          </div>

          {/* Get in Touch */}
          <a
            href="#signin"
            className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-400/50 transition-all duration-300 transform hover:scale-105"
          >
            ERP Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700 transition-transform duration-300 hover:scale-110"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <div
    className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4 animate-slideDown"
    style={{
      animation: "slideDown 0.3s ease forwards",
    }}
  >
    {navLinks.map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
        className="block text-blue-900 font-medium hover:text-blue-600 transition"
        onClick={() => setIsOpen(false)}
      >
        {item}
      </a>
    ))}

    {/* ERP Login button for mobile */}
    <a
      href="#signin"
      className="block text-center bg-blue-600 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-400/50 transition-all duration-300 transform hover:scale-105"
    >
      ERP Login
    </a>

    <div className="flex items-center justify-center gap-4 pt-4 border-t">
      <a href="https://wa.me/917739692245" className="text-green-600">
        <FaWhatsapp size={20} className="animate-bounce"/>
      </a>
      <a href="tel:+917739692245" className="text-blue-600">
        <FaPhone size={20} className="animate-bounce"/>
      </a>
    </div>
  </div>
)}


      {/* Slide animation for mobile */}
      <style>
        {`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </header>
  );
};

export default Navbar;
