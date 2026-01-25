import React from "react";

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
    <section className="py-28 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-7xl font-semibold text-[#2E1C14] mb-4">
            Upcoming Events
          </h2>
          <div className="w-28 h-[2px] bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Carefully planned events that nurture patriotism, creativity,
            discipline and joyful learning experiences for our students.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-3xl overflow-hidden
                border border-gray-200
                shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_28px_55px_rgba(0,0,0,0.18)]
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-105
                    transition-transform duration-700
                  "
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Date badge */}
                <span className="
                  absolute top-4 left-4
                  bg-white/90 backdrop-blur
                  px-4 py-1 rounded-full
                  text-sm font-semibold text-blue-700
                  shadow
                ">
                  {event.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  {event.description}
                </p>

                <button
                  className="
                    inline-flex items-center gap-2
                    text-sm font-semibold text-blue-600
                    hover:text-blue-800
                    transition-colors
                  "
                >
                  View Details
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpcomingEvents;
