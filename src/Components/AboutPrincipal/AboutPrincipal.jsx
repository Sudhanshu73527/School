import React from "react";
import { motion } from "framer-motion";
import principalImg from "../../assets/aray6.png"; // principal image

const PrincipalMessage = () => {
  return (
    <section className="bg-[#FAFAFA] py-20 font-playfair">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative max-w-md w-full">
            <img
              src={principalImg}
              alt="Principal"
              className="w-full h-full object-cover rounded-3xl shadow-xl"
            />
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D7A86E] rounded-3xl -z-10"></div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#2E1C14]"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Principal’s Message
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At <span className="font-semibold text-[#5D4037]">Aryabhat Public School</span>, 
            we believe that education is not merely about academic achievement, 
            but about shaping character, nurturing curiosity, and building confident individuals.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Our aim is to provide a learning environment where students are encouraged 
            to explore their potential, develop strong values, and grow into responsible 
            citizens prepared to face the challenges of the future.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Together with dedicated teachers and supportive parents, we strive to 
            create a school culture that inspires excellence, discipline, and lifelong learning.
          </p>

          {/* SIGNATURE */}
          <div className="mt-6">
            <p className="font-bold text-[#2E1C14] text-lg">
               Principal
            </p>
            <p className="text-sm text-gray-500">
              S.K Pathak
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PrincipalMessage;
