import React from "react";

import img1 from "../../assets/mode1.jpeg";
import img2 from "../../assets/mode2.jpeg";
import img3 from "../../assets/mode3.jpeg";
import img4 from "../../assets/mode4.jpeg";
import img5 from "../../assets/mode5.jpeg";
import img6 from "../../assets/mode6.jpeg";

const Recentactivities = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 lg:px-24 g-red-500">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold tracking-wide shadow-sm">
            School Life
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Recent <span className="text-yellow-500">Activities</span>
          </h2>

          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-5"></div>
        </div>

        {/* Description */}
        <p className="max-w-5xl mx-auto text-center text-gray-600 text-lg leading-9 mb-16">
          Here are some memorable moments featuring our talented students and
          proud winners who have excelled in various school activities and
          competitions.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img}
                alt={`Activity ${index + 1}`}
                className="w-full h-[340px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Badge */}
              <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                🏆 School Activity
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white text-xl font-bold">
                  Activity #{index + 1}
                </h3>

                <p className="text-gray-200 text-sm mt-2 leading-6">
                  Inspiring students through sports, competitions, physical
                  activities, and memorable achievements.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            "Healthy Body, Healthy Mind"
          </h3>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            We believe that every student deserves opportunities to learn,
            compete, explore, and grow. Through academics, sports, and
            extracurricular activities, we nurture confident, creative, and
            responsible future leaders.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recentactivities;