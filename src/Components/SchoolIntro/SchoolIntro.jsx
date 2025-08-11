import React from "react";
import { FaMedal, FaChalkboardTeacher, FaSchool, FaRunning, FaShieldAlt } from "react-icons/fa";
import campusImg from "../../assets/iqra1.webp"; // ✅ Imported image

const SchoolIntro = () => {
  return (
    <div className="flex flex-col md:flex-row items-start w-full max-w-7xl mx-auto">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-12">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
          Welcome to S.D. Public School
        </h1>

        {/* Sub-heading */}
        <p className="text-lg text-gray-600 mb-6">
          Empowering Generations Since 1994...
        </p>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed mb-8">
          At SDPS, we believe in nurturing young minds through a perfect blend of
          academic excellence, moral values, and creative learning. With a legacy
          of 30+ years, we continue to shape the leaders of tomorrow with a vision
          rooted in knowledge, discipline, and compassion.
        </p>

        {/* Features List */}
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
              <FaMedal size={20} />
            </div>
            <span className="font-semibold text-gray-900">Top-ranked Pre-School</span>
          </li>
          <li className="flex items-center">
            <div className="bg-red-500 text-white p-3 rounded-full mr-4">
              <FaChalkboardTeacher size={20} />
            </div>
            <span className="font-semibold text-gray-900">
              Experienced and passionate faculty
            </span>
          </li>
          <li className="flex items-center">
            <div className="bg-yellow-500 text-white p-3 rounded-full mr-4">
              <FaSchool size={20} />
            </div>
            <span className="font-semibold text-gray-900">
              Smart classrooms with modern facilities
            </span>
          </li>
          <li className="flex items-center">
            <div className="bg-teal-500 text-white p-3 rounded-full mr-4">
              <FaRunning size={20} />
            </div>
            <span className="font-semibold text-gray-900">
              Strong emphasis on co-curricular activities
            </span>
          </li>
          <li className="flex items-center">
            <div className="bg-green-500 text-white p-3 rounded-full mr-4">
              <FaShieldAlt size={20} />
            </div>
            <span className="font-semibold text-gray-900">
              Safe, secure, and caring environment
            </span>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <img
          src={campusImg} // ✅ Using imported image
          alt="SDPS Campus"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SchoolIntro;
