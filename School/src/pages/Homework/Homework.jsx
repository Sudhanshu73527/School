import React, { useState, useEffect } from "react";
import {
  CalendarDays,
  Search,
  BookOpen,
} from "lucide-react";
import axios from "axios";

const Homework = () => {
  const [homeworkData, setHomeworkData] = useState([]);
  const [selectedClass, setSelectedClass] =
    useState("All");
  const [selectedSubject, setSelectedSubject] =
    useState("All");
  const [searchTerm, setSearchTerm] =
    useState("");
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchHomework();
  }, []);

  const fetchHomework = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/homework"
      );

      setHomeworkData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredHomework =
    homeworkData.filter((item) => {
      const classMatch =
        selectedClass === "All" ||
        item.className === selectedClass;

      const subjectMatch =
        selectedSubject === "All" ||
        item.subject === selectedSubject;

      const searchMatch =
        item.title
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        item.description
          ?.toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      return (
        classMatch &&
        subjectMatch &&
        searchMatch
      );
    });

  return (
    <section className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}

        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl p-8 md:p-12 text-white shadow-xl mb-8">

          <h1 className="text-4xl md:text-5xl font-bold">
            Homework Portal
          </h1>

          <p className="mt-3 text-blue-100">
            Check all class-wise and
            subject-wise homework
            assigned by teachers.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-white/20 px-4 py-2 rounded-xl">
              📚 All Classes
            </span>

            <span className="bg-white/20 px-4 py-2 rounded-xl">
              📝 Subject Wise
            </span>

            <span className="bg-white/20 px-4 py-2 rounded-xl">
              📅 Due Date Tracking
            </span>
          </div>
        </div>

        {/* FILTERS */}

        <div className="bg-white rounded-3xl p-6 shadow-md mb-8">
          <div className="grid md:grid-cols-3 gap-4">

            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search homework..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={selectedClass}
              onChange={(e) =>
                setSelectedClass(
                  e.target.value
                )
              }
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
            </select>

            <select
              value={selectedSubject}
              onChange={(e) =>
                setSelectedSubject(
                  e.target.value
                )
              }
              className="border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>Social Science</option>
              <option>Computer</option>
            </select>

          </div>
        </div>

        {/* TABLE */}

        <div className="bg-white rounded-3xl shadow-md overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <BookOpen size={24} />
              Assigned Homework
            </h2>
          </div>

          {loading ? (
            <div className="p-10 text-center">
              Loading Homework...
            </div>
          ) : filteredHomework.length >
            0 ? (
            <>
              {/* Desktop Table */}

              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left px-6 py-4">
                        Class
                      </th>
                      <th className="text-left px-6 py-4">
                        Subject
                      </th>
                      <th className="text-left px-6 py-4">
                        Title
                      </th>
                      <th className="text-left px-6 py-4">
                        Description
                      </th>
                      <th className="text-left px-6 py-4">
                        Due Date
                      </th>
                      <th className="text-left px-6 py-4">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredHomework.map(
                      (homework) => (
                        <tr
                          key={
                            homework._id
                          }
                          className="border-t hover:bg-slate-50"
                        >
                          <td className="px-6 py-4">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                              {
                                homework.className
                              }
                            </span>
                          </td>

                          <td className="px-6 py-4">
                            {
                              homework.subject
                            }
                          </td>

                          <td className="px-6 py-4 font-semibold">
                            {
                              homework.title
                            }
                          </td>

                          <td className="px-6 py-4 text-slate-600 max-w-sm">
                            {
                              homework.description
                            }
                          </td>

                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-red-500">
                              <CalendarDays size={16} />
                              {new Date(
                                homework.dueDate
                              ).toLocaleDateString(
                                "en-IN"
                              )}
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                              Active
                            </span>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}

              <div className="lg:hidden p-4 space-y-4">
                {filteredHomework.map(
                  (homework) => (
                    <div
                      key={
                        homework._id
                      }
                      className="border rounded-2xl p-5"
                    >
                      <div className="flex justify-between mb-4">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {
                            homework.className
                          }
                        </span>

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          {
                            homework.subject
                          }
                        </span>
                      </div>

                      <h3 className="font-bold text-lg mb-2">
                        {
                          homework.title
                        }
                      </h3>

                      <p className="text-slate-600 mb-4">
                        {
                          homework.description
                        }
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="text-red-500 flex items-center gap-2">
                          <CalendarDays size={16} />
                          {new Date(
                            homework.dueDate
                          ).toLocaleDateString(
                            "en-IN"
                          )}
                        </div>

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                          Active
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </>
          ) : (
            <div className="p-12 text-center">
              <h2 className="text-2xl font-semibold text-gray-500">
                No Homework Found
              </h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Homework;