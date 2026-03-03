import React from "react";
import { motion } from "framer-motion";

const eventsData = [
  {
    title: "Republic Day Celebration",
    date: "26 January",
    image: "/rep.jpg",
    description:
      "A patriotic celebration with flag hoisting, cultural programs and inspiring performances by students.",
  },
  {
    title: "Annual Sports Day",
    date: "February",
    image: "/annual.jpg",
    description:
      "A day full of energy featuring athletic events, team games and prize distribution.",
  },
  {
    title: "Holi Celebration",
    date: "March",
    image: "/holi.jpg",
    description:
      "A joyful festival of colours promoting unity, happiness and cultural values among students.",
  },
  {
    title: "Annual Cultural Fest",
    date: "April",
    image: "/fest.png",
    description:
      "A vibrant showcase of dance, music, drama and creativity by our talented students.",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="relative py-24 sm:py-32 px-4 bg-gradient-to-b from-[#0f172a] to-[#0b1220] text-white overflow-hidden">

      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(250,204,21,0.07),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(16,185,129,0.08),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-yellow-400">
            School Activities
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            Upcoming <span className="text-yellow-400">Events</span>
          </h2>

          <div className="w-24 h-[2px] bg-yellow-400 mx-auto mb-6" />

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Events designed to inspire leadership, patriotism,
            creativity and joyful learning experiences for every student.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {eventsData.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
            >

              {/* Glow Border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-yellow-400/40 via-transparent to-emerald-400/40 opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col">

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                    {event.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow text-center">

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-yellow-400 transition">
                    {event.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {event.description}
                  </p>

                  {/* <button className="mt-auto text-sm font-semibold tracking-wide text-yellow-400 hover:text-white transition flex items-center justify-center gap-2">
                    View Details
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button> */}

                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default UpcomingEvents;