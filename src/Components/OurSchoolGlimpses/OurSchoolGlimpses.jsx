import React from "react";
import { motion } from "framer-motion";

const schoolGlimpses = [
  {
    title: "Annual Funation Events",
    desc: "Our smart and spacious classrooms are designed to create an engaging learning environment with digital boards, proper ventilation, and student-friendly seating.",
    img: "/inter1.jpeg",
  },
  {
    title: "Dance Competation",
    desc: "Our laboratories provide hands-on learning experiences, encouraging curiosity, innovation, and scientific thinking among students.",
    img: "/inter2.jpeg",
  },
  {
    title: "Teacher's Meetup",
    desc: "A peaceful library with a wide collection of academic and general knowledge books to develop reading habits and intellectual growth.",
    img: "/inter4.jpeg",
  },
  {
    title: "Cultural & Annual Events",
    desc: "We promote physical fitness through outdoor sports, indoor games, and structured physical education programs.",
    img: "/inter3.jpeg",
  },
  {
    title: "Cultural & Annual Events",
    desc: "Our school regularly organizes cultural programs, annual functions, and celebrations to nurture creativity and confidence.",
    img: "/holi.jpg",
  },
];

const OurSchoolGlimpses = () => {
  return (
    <section className="bg-[#F5F9F7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-green-800">
            Our School Glimpses
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A glimpse into the vibrant campus life, modern facilities, and
            nurturing environment of RC International School.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-16">
          {schoolGlimpses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10 bg-white rounded-2xl shadow-lg overflow-hidden`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full h-72 md:h-96">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSchoolGlimpses;
