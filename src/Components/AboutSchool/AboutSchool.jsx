import React from "react";
import { motion } from "framer-motion";
import schoolImg from "../../assets/mod4.png";

const AboutSchool = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0b1220] to-[#0f172a] py-20 sm:py-28 lg:py-32 px-5 sm:px-8 overflow-hidden">

      {/* Premium Soft Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.07),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.07),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md">

              {/* Elegant Border Frame */}
              <div className="absolute -inset-3 rounded-3xl border border-amber-400/30 group-hover:border-amber-400 transition duration-500"></div>

              <img
                src={schoolImg}
                alt="Modern Public School"
                className="relative rounded-3xl w-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              />

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-amber-400 text-[#0b1220] text-[10px] tracking-[0.3em] px-4 py-2 uppercase font-semibold rounded-full shadow-lg">
                New Generation School
              </div>

            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-white text-center lg:text-left"
          >

            <span className="inline-block text-[11px] tracking-[0.4em] uppercase text-amber-400 mb-6">
              About Our School
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold leading-snug mb-6">
              A New Beginning with <br className="hidden sm:block" />
              Modern Teaching Excellence
            </h2>

            <div className="w-16 h-[2px] bg-amber-400 mb-6 mx-auto lg:mx-0"></div>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-2xl mx-auto lg:mx-0">
              Modern Public School ek nayi shuruaat hai jahan hum
              modern teaching skills aur innovative learning methods ka
              use karte hain. Hamara focus sirf syllabus complete karna
              nahi, balki students ko real-world ready banana hai.
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-2xl mx-auto lg:mx-0">
              Smart classrooms, activity-based learning, digital tools
              aur experienced teachers ke guidance mein hum har student
              ki individual growth par kaam karte hain.
            </p>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Hum critical thinking, creativity aur leadership skills
              develop karne par zor dete hain aur ek safe, disciplined
              aur inspiring environment provide karte hain.
            </p>

            {/* School Name */}
            <div className="flex items-center justify-center lg:justify-start gap-5 mt-6">
              <div className="w-1 h-12 bg-amber-400 rounded-full"></div>
              <div className="text-left">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {[
            { value: "New Era", label: "Modern Beginning" },
            { value: "Smart", label: "Teaching Methods" },
            { value: "Activity", label: "Based Learning" },
            { value: "100%", label: "Student Focused" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-400">
                {item.value}
              </p>
              <p className="text-[10px] sm:text-xs tracking-widest uppercase text-gray-400 mt-2">
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