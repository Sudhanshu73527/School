import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/events"
      );

      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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

        {/* No Events */}
        {events.length === 0 && (
          <div className="text-center text-gray-300 text-xl">
            No Upcoming Events Available
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {events.map((event, index) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="group relative rounded-2xl overflow-hidden"
            >

              {/* Glow Border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-yellow-400/40 via-transparent to-emerald-400/40 opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col">

                {/* Image */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={`http://localhost:5000/uploads/${event.image}`}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
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