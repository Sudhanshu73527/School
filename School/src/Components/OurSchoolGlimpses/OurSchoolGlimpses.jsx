import React from "react";
import { motion } from "framer-motion";

const schoolGlimpses = [
  {
    title: "Annual Foundation Events",
    desc: "Well-organized annual events that promote creativity, confidence, and teamwork among students.",
    img: "/inter1.jpeg",
  },
  {
    title: "Dance Competition",
    desc: "Energetic dance competitions encouraging expression, discipline, and stage confidence.",
    img: "/inter2.jpeg",
  },
  {
    title: "Teacher’s Meetup",
    desc: "Professional meetups fostering collaboration, planning, and academic excellence.",
    img: "/inter4.jpeg",
  },
  {
    title: "Cultural Programs",
    desc: "Cultural activities that celebrate diversity and build leadership skills.",
    img: "/inter3.jpeg",
  },
  {
    title: "Festival Celebrations",
    desc: "Festivals celebrated with values, joy, and student participation.",
    img: "/holi.jpg",
  },
];

const OurSchoolGlimpses = () => {
  return (
    <section className="bg-[#F5F9F7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Our School <span className="text-yellow-500">Glimpses</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            A snapshot of activities, events, and campus life at RC International School.
          </p>
        </div>

        {/* Horizontal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolGlimpses.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm 
                         hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover 
                             hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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
