import React from "react";

import img1 from "../../assets/class1.png";
import img2 from "../../assets/class2.png";
import img3 from "../../assets/class3.png";
import img4 from "../../assets/class4.png";
import img5 from "../../assets/class5.png";
import img6 from "../../assets/class6.jpeg";
import classroomVideo from "../../assets/classroom.mp4"; // 👈 apna video yaha import karo

const Classroom = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-24">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Our Modern <span className="text-yellow-500">Classrooms</span>
        </h2>
        <div className="w-24 h-[2px] bg-gray-900 mx-auto mt-4"></div>
      </div>

      {/* Paragraph */}
      <p className="max-w-5xl mx-auto text-center text-gray-700 text-base sm:text-lg leading-relaxed mb-16">
        Our classrooms are thoughtfully designed to provide a focused,
        technology-enabled, and inspiring learning environment. With structured
        seating, digital smart boards, proper lighting, and a disciplined
        academic atmosphere, we ensure every child learns in a space that
        reflects excellence, innovation, and global standards.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {[img1, img2, img3, img4,img5,img6].map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md">
            <img
              src={img}
              alt={`Classroom ${index + 1}`}
              className="w-full h-[320px] lg:h-[400px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* 🎬 Video Section */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <video
            src={classroomVideo}
            controls
            autoPlay
            muted
            loop
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
          />
        </div>
      </div>

    </section>
  );
};

export default Classroom;