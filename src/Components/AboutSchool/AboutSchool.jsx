import React from "react";
import { motion } from "framer-motion";
import schoolImg from "../../assets/aray3.webp";

const AboutSchool = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-green-50 to-white py-14 md:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      
      {/* Soft Background Glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-green-300 blur-[120px] opacity-20 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-400 blur-[120px] opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center relative z-10">

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40">
            <img
              src={schoolImg}
              alt="Aryabhat Public School"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/75 backdrop-blur-xl rounded-3xl shadow-xl p-6 sm:p-8 md:p-10"
        >
          <p className="uppercase tracking-widest text-green-700 font-semibold mb-3">
            About Aryabhat Public School
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Nurturing Excellence Through Education & Values
          </h2>

          {/* CONTENT BLOCKS */}
          <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">

            <div>
              <h4 className="font-semibold text-green-800 mb-2">
                Who We Are
              </h4>
              <p>
                Aryabhat Public School is a progressive educational institution
                committed to academic excellence, character development, and
                holistic growth of every student.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-green-800 mb-2">
                Our Educational Philosophy
              </h4>
              <p>
                We believe education should inspire curiosity, critical thinking,
                and strong moral values while fostering a lifelong love for learning.
              </p>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSchool;
