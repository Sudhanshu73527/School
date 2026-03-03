import React from "react";
import { motion } from "framer-motion";
import schoolImg from "../../assets/mod4.png";

const AboutSchool = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0b1220] to-[#0f172a] py-24 sm:py-32 px-4 overflow-hidden">

      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.08),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(16,185,129,0.08),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">

              {/* Soft Border Frame */}
              <div className="absolute -inset-3 rounded-2xl border border-amber-400/30 group-hover:border-amber-400 transition duration-500"></div>

              <img
                src={schoolImg}
                alt="Modern Public School"
                className="relative rounded-2xl w-[320px] sm:w-[380px] lg:w-[420px] object-cover shadow-2xl"
              />

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-amber-400 text-[#0b1220] text-xs tracking-widest px-4 py-2 uppercase font-semibold rounded-full shadow-lg">
                New Generation School
              </div>

            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 text-white"
          >

            <span className="inline-block text-[11px] tracking-[0.4em] uppercase text-amber-400 mb-6">
              About Our School
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight mb-8">
              A New Beginning with 
              Modern Teaching Excellence
            </h2>

            <div className="w-20 h-[2px] bg-amber-400 mb-8"></div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              Modern Public School ek nayi shuruaat hai jahan hum
              modern teaching skills aur innovative learning methods ka
              use karte hain. Hamara focus sirf syllabus complete karna
              nahi, balki students ko real-world ready banana hai.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              Smart classrooms, activity-based learning, digital tools
              aur experienced teachers ke guidance mein hum har student
              ki individual growth par kaam karte hain. Hum critical thinking,
              creativity aur leadership skills ko develop karne par
              zor dete hain.
            </p>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Bhale hi hamara school naya hai, lekin hamari planning,
              dedication aur vision bahut strong hai. Hum har bacche ko
              ek safe, disciplined aur inspiring environment dete hain
              jahan se unka bright future start hota hai.
            </p>

            {/* School Name */}
            <div className="flex items-center gap-6">
              <div className="w-1 h-12 bg-amber-400 rounded-full"></div>
              <div>
                <p className="text-lg font-semibold">
                  Modern Public School
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Mauhai, Ramnagar
                </p>
              </div>
            </div>

          </motion.div>

        </div>

        {/* STATS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "New Era", label: "Modern Beginning" },
            { value: "Smart", label: "Teaching Methods" },
            { value: "Activity", label: "Based Learning" },
            { value: "100%", label: "Student Focused" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:scale-105 transition duration-300"
            >
              <p className="text-xl sm:text-2xl font-semibold text-amber-400">
                {item.value}
              </p>
              <p className="text-xs tracking-widest uppercase text-gray-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSchool;