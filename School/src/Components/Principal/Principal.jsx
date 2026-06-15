import React from "react";
import { Quote } from "lucide-react";

const Principal = () => {
  return (
    <section className="relative py-10 md:py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50">
      
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative">
        <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100 p-5 sm:p-8 md:p-12">

          {/* Quote Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <Quote size={24} className="text-white md:w-8 md:h-8" />
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center">
            <span className="bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
              Principal's Message
            </span>
          </div>

          {/* Heading */}
          <div className="text-center mt-6">
          

            <p className="mt-3 text-blue-600 text-sm md:text-lg font-medium">
              Empowering Students For A Better Tomorrow
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-5 mb-8"></div>

          {/* Message */}
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-center">
              Welcome to Modern Public School. Our mission is to provide a
              nurturing, innovative, and value-based learning environment where
              every child can discover their unique potential and achieve
              excellence. Through quality education, dedicated mentorship, and
              strong moral values, we strive to develop confident,
              responsible, and future-ready individuals who are prepared to
              contribute positively to society and become the leaders of
              tomorrow.
            </p>
          </div>

          {/* Principal Info */}
          <div className="mt-10 flex flex-col items-center">

            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
              AS
            </div>

            <h3 className="mt-4 text-xl md:text-2xl font-bold text-slate-900">
              Ashish Singh
            </h3>

            <p className="text-slate-500 text-sm md:text-base mt-1">
              Principal, Modern Public School
            </p>

            <div className="w-12 h-[2px] bg-blue-600 mt-4"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Principal;