import React from "react";
import { motion } from "framer-motion";
import principalImg from "../../assets/mod5.jpeg";

const Principal = () => {
  return (
    <section className="relative bg-gray-50 py-24 px-6 overflow-hidden">

      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Decorative Border Frame */}
            <div className="absolute -inset-4 border-2 border-emerald-500 rounded-3xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <img
              src={principalImg}
              alt="Principal"
              className="relative w-[280px] sm:w-[360px] md:w-[420px] rounded-3xl shadow-2xl object-cover"
            />

            {/* Name Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl px-6 py-3 rounded-full text-center">
              <p className="text-base font-semibold text-gray-900">
                Mr. R.K Sharma 
              </p>
              <p className="text-xs uppercase tracking-widest text-emerald-600">
                Director 
              </p>
            </div>

          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-emerald-600 font-semibold">
            Director Message
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Inspiring Excellence <br />
            Through Values & Vision
          </h2>

          <div className="w-20 h-1 bg-emerald-500 mt-6 mb-8 mx-auto lg:mx-0"></div>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 max-w-xl mx-auto lg:mx-0">
            True education is not limited to textbooks. At Modern Public School,
            we nurture discipline, confidence, and leadership alongside
            academic excellence to prepare students for real-world challenges.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-10 max-w-xl mx-auto lg:mx-0">
            Our mission is to build responsible citizens who are innovative,
            compassionate, and equipped with the skills necessary to thrive in
            a rapidly evolving world.
          </p>

          {/* <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-700 transition-all"
          >
            Read Full Message
          </motion.button> */}
        </motion.div>

      </div>
    </section>
  );
};

export default Principal;