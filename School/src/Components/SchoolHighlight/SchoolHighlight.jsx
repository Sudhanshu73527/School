import React from "react";
import { FaSchool } from "react-icons/fa";

const SchoolHighlight = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative rounded-2xl border border-gray-200 shadow-sm 
        bg-gradient-to-r from-[#F8FAF9] via-white to-[#F8FAF9] 
        py-8 px-6 flex flex-col items-center justify-center text-center">

          {/* Top Icon */}
          <div className="absolute -top-5 bg-white px-3">
            <FaSchool className="text-red-600 text-2xl" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold text-green-800 tracking-wide">
            RC INTERNATIONAL SCHOOL
            <span className="block text-green-700 mt-1">
              Best CBSE School in Chautarwa, Bihar
            </span>
          </h2>

          {/* Bottom Icon */}
          <div className="absolute -bottom-5 bg-white px-3">
            <FaSchool className="text-red-600 text-2xl" />
          </div>

        </div>         

      </div>
    </section>
  );
};

export default SchoolHighlight;
