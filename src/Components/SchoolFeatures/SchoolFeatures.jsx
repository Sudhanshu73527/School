import React from "react";
import { FaBell, FaClipboardList, FaChalkboardTeacher, FaBookOpen, FaClipboard, FaFlag } from "react-icons/fa";

const features = [
  {
    icon: <FaBell className="text-3xl text-gray-600" />,
    title: "Admission Open",
    description:
      "Admission Open for 2025-2026 session at Top School in Bihar, Patna.",
  },
  {
    icon: <FaClipboardList className="text-3xl text-gray-600" />,
    title: "Notice Board",
    description:
      "Stay updated with all the activities and events at School. Updated regularly.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-gray-600" />,
    title: "Daily Class Updates",
    description:
      "Detailed daily updates, outlining each class for every Subject as well as the homework assigned.",
  },
  {
    icon: <FaBookOpen className="text-3xl text-gray-600" />,
    title: "Diverse Curricula",
    description:
      "Ensures better Comprehension of the Subject Matter by the students.",
  },
  {
    icon: <FaClipboard className="text-3xl text-gray-600" />,
    title: "Co Curricular Activities",
    description:
      "Wide range of Activities for Holistic Development.",
  },
  {
    icon: <FaFlag className="text-3xl text-gray-600" />,
    title: "Boarding School",
    description:
      "TGS Patna offers boarding for boys (Grades III-XII) and girls (Grades VIII-XII) with a hostel inside campus.",
  },
];

const SchoolFeatures = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-6 flex flex-col justify-start items-start h-48 w-full hover:shadow-md transition-shadow"
          >
            <div className="mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SchoolFeatures;
