import React from "react";
import { Quote } from "lucide-react";

const Principal = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 md:px-10 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="bg-white rounded-[30px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100 p-6 md:p-12">

          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
              <Quote size={30} className="text-white" />
            </div>
          </div>

          {/* Badge */}
          <div className="flex justify-center">
            <span className="bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
              Principal's Message
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-5xl font-bold text-slate-900 mt-6 leading-tight">
            Empowering Students
            <br />
            <span className="text-blue-600">
              For A Better Tomorrow
            </span>
          </h2>

          {/* Line */}
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-5 mb-8"></div>

          {/* Message */}
          <div className="space-y-5 text-slate-600 text-[15px] md:text-lg leading-8 text-center">
            <p>
              Welcome to Modern Public School, where education goes beyond
              academics. Our goal is to inspire curiosity, creativity, and
              confidence in every student while nurturing strong values and
              lifelong learning habits.
            </p>

            <p>
              We believe that every child has unique talents and potential.
              Through quality education, dedicated teachers, and a supportive
              environment, we help students grow into responsible and capable
              individuals.
            </p>

            <p>
              Together with parents and our school community, we are committed
              to shaping future leaders who will contribute positively to
              society and make a meaningful impact on the world.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10 flex flex-col items-center">
            <div className="w-16 h-[2px] bg-blue-600 mb-4"></div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Ashish Singh
            </h3>

            <p className="text-blue-600 font-medium text-sm md:text-base mt-1">
              Principal, Modern Public School
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Principal;