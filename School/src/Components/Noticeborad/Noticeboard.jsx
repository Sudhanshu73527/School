import React, { useEffect, useState } from "react";
import axios from "axios";
import { BellRing, CalendarDays } from "lucide-react";

const Noticeboard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await axios.get(
        "https://school-backend-o5im.onrender.com/api/notices" 
      );

      setNotices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Latest Update
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-4">
            School Notice Board
          </h2>

          <p className="text-gray-600 mt-3">
            Important announcements and updates for students and parents.
          </p>
        </div>

        {notices.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
            <h3 className="text-xl font-semibold text-gray-600">
              No Notices Available
            </h3>
          </div>
        ) : (
          notices.map((notice) => (
            <div
              key={notice._id}
              className="bg-white rounded-3xl shadow-xl border border-green-100 overflow-hidden hover:shadow-2xl transition duration-300 mb-8"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-700 to-green-500 p-6 flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <BellRing
                    className="text-white"
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="text-white text-2xl font-bold">
                    {notice.title}
                  </h3>

                  <div className="flex items-center gap-2 text-green-100 mt-1">
                    <CalendarDays size={16} />
                    <span>{notice.date}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-700 leading-8 text-lg">
                  {notice.description}
                </p>

                <div className="mt-6">
                  <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-medium transition">
                    Read Full Notice
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

      </div>
    </section>
  );
};

export default Noticeboard;