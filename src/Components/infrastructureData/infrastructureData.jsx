import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaFlask,
  FaDesktop,
  FaUtensils,
  FaBookOpen,
  FaBasketballBall,
  FaMusic,
  FaPaintBrush,
  FaBus,
  FaHeartbeat,
  FaGlobeAmericas,
  FaLeaf,
  FaTheaterMasks,
} from "react-icons/fa";

const infrastructureData = [
  {
    icon: <FaChalkboardTeacher />,
    color: "from-red-400 to-red-600",
    title: "Maths Lab",
    description:
      "Equipped with modern tools to make learning mathematics interactive and fun.",
  },
  {
    icon: <FaFlask />,
    color: "from-yellow-400 to-yellow-600",
    title: "Science Labs",
    description:
      "Spacious Physics, Chemistry & Biology labs for hands-on experiments.",
  },
  {
    icon: <FaDesktop />,
    color: "from-blue-400 to-blue-600",
    title: "IT Labs",
    description:
      "High-tech computer labs providing cutting-edge digital education.",
  },
  {
    icon: <FaUtensils />,
    color: "from-orange-400 to-orange-600",
    title: "Canteen",
    description:
      "Hygienic and nutritious meals served fresh for students and staff.",
  },
  {
    icon: <FaBookOpen />,
    color: "from-green-400 to-green-600",
    title: "Library",
    description:
      "A treasure of books, journals, and digital resources to inspire learning.",
  },
  {
    icon: <FaBasketballBall />,
    color: "from-purple-400 to-purple-600",
    title: "Sports Facilities",
    description:
      "Playgrounds and courts to encourage physical fitness and teamwork.",
  },
  {
    icon: <FaMusic />,
    color: "from-pink-400 to-pink-600",
    title: "Music Room",
    description:
      "Instruments and training for classical, folk, and modern music.",
  },
  {
    icon: <FaPaintBrush />,
    color: "from-indigo-400 to-indigo-600",
    title: "Art & Craft Studio",
    description: "A creative space for painting, sculpting, and crafts.",
  },
  {
    icon: <FaBus />,
    color: "from-teal-400 to-teal-600",
    title: "Transport",
    description: "Safe and comfortable buses with GPS tracking.",
  },
  {
    icon: <FaHeartbeat />,
    color: "from-rose-400 to-rose-600",
    title: "Medical Room",
    description: "First-aid facilities with a qualified nurse on campus.",
  },
  {
    icon: <FaGlobeAmericas />,
    color: "from-emerald-400 to-emerald-600",
    title: "Language Lab",
    description:
      "Enhancing communication skills with interactive language learning tools.",
  },
  {
    icon: <FaLeaf />,
    color: "from-lime-400 to-lime-600",
    title: "Eco Garden",
    description:
      "A green initiative to connect students with nature and sustainability.",
  },
  {
    icon: <FaTheaterMasks />,
    color: "from-yellow-500 to-yellow-700",
    title: "Drama & Theatre",
    description: "Stage performances to boost confidence and creativity.",
  },
];

const Infrastructure = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let isPaused = false;

    const autoScroll = setInterval(() => {
      if (!isPaused && scrollContainer) {
        scrollAmount += 320;
        if (scrollAmount >= scrollContainer.scrollWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    scrollContainer.addEventListener("mouseenter", () => (isPaused = true));
    scrollContainer.addEventListener("mouseleave", () => (isPaused = false));

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-16 font-playfair">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-4 
                       bg-gradient-to-r from-green-700 via-emerald-500 to-lime-500 
                       bg-clip-text text-transparent drop-shadow-lg"
        >
          Our Infrastructure
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600 opacity-90">
          We provide{" "}
          <span className="text-green-600 font-semibold">
            world-class facilities
          </span>
          to encourage holistic learning, creativity, and all-round development.
        </p>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 no-scrollbar pb-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {infrastructureData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-shrink-0 w-80 h-[340px] p-[3px] rounded-2xl 
                         bg-gradient-to-r from-green-400 via-emerald-500 to-lime-500
                         group"
            >
              {/* Rotating border effect */}
              <div
                className="absolute inset-0 rounded-2xl border-transparent group-hover:animate-spin-slow 
                              bg-[conic-gradient(var(--tw-gradient-stops))] from-green-400 via-emerald-500 to-lime-500 p-[2px]"
              ></div>

              <div
                className="relative flex flex-col items-center justify-center rounded-2xl shadow-xl p-6 
                              text-center bg-white/80 backdrop-blur-lg h-full
                              hover:shadow-2xl transform transition-all duration-300"
              >
                <div
                  className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center 
                                 bg-gradient-to-br ${item.color} text-white text-4xl shadow-lg mb-4 animate-bounce`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-700">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                <button
                  className="text-green-600 font-semibold flex items-center justify-center space-x-2 
                                   hover:underline hover:text-green-800 transition"
                >
                  <span>Read More</span>
                  <span>➜</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
