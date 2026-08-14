import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import img1 from "../../assets/mode1.jpeg";
import img2 from "../../assets/mode2.jpeg";
import img3 from "../../assets/mode3.jpeg";
import img4 from "../../assets/mode4.jpeg";

const images = [img1, img2, img3, img4];

const particles = Array.from({ length: 30 });

const Herosection = () => {
  const [current, setCurrent] = useState(0);

  /* ================= IMAGE SLIDER ================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white font-outfit">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <AnimatePresence mode="wait">

        <motion.img
          key={current}
          src={images[current]}
          alt="Modern Public School Campus"
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

      </AnimatePresence>


      {/* =====================================================
          CINEMATIC OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-black/60
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black
          via-black/75
          to-black/20
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-transparent
          to-black/30
        "
      />


      {/* =====================================================
          TRICOLOR AMBIENT GLOW
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Saffron */}

        <div
          className="
            absolute
            -top-40
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-500/15
            blur-[140px]
          "
        />

        {/* Green */}

        <div
          className="
            absolute
            -bottom-40
            right-[-100px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-green-600/15
            blur-[140px]
          "
        />

      </div>


      {/* =====================================================
          TOP TRICOLOR LINE
      ===================================================== */}

      <div className="absolute top-0 left-0 z-50 w-full">

        <div className="h-[2px] bg-orange-500" />
        <div className="h-[2px] bg-white" />
        <div className="h-[2px] bg-green-600" />

      </div>


      {/* =====================================================
          FLOATING PARTICLES
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">

        {particles.map((_, index) => {

          const particleColors = [
            "bg-orange-400",
            "bg-white",
            "bg-green-400",
          ];

          return (
            <motion.span
              key={index}
              initial={{
                x: `${Math.random() * 100}%`,
                y: "105%",
                opacity: 0,
              }}
              animate={{
                y: "-10%",
                opacity: [0, 0.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 7,
                ease: "linear",
              }}
              className={`
                absolute
                h-1
                w-1
                rounded-full
                ${particleColors[index % 3]}
              `}
            />
          );
        })}

      </div>


      {/* =====================================================
          LARGE ASHOKA CHAKRA
      ===================================================== */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          right-[-90px]
          top-[12%]
          hidden
          h-[520px]
          w-[520px]
          items-center
          justify-center
          rounded-full
          border
          border-blue-300/10
          lg:flex
        "
      >

        <div
          className="
            flex
            h-[420px]
            w-[420px]
            items-center
            justify-center
            rounded-full
            border
            border-blue-300/10
          "
        >

          <span
            className="
              text-[350px]
              font-thin
              text-blue-300/[0.055]
            "
          >
            ☸
          </span>

        </div>

      </motion.div>


      {/* =====================================================
          DECORATIVE LIGHT LINE
      ===================================================== */}

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
        }}
        className="
          absolute
          left-5
          top-1/2
          hidden
          h-52
          w-[2px]
          origin-top
          bg-gradient-to-b
          from-orange-500
          via-white
          to-green-500
          md:block
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          flex
          min-h-screen
          items-center
        "
      >

        <div
          className="
            mx-auto
            w-full
            max-w-[1450px]
            px-5
            py-24
            sm:px-8
            md:px-12
            lg:px-20
            xl:px-24
          "
        >

          <div className="grid items-center lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16">


            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div className="max-w-3xl">

              {/* DATE LABEL */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="mb-6 flex items-center gap-3"
              >

                <div className="h-[1px] w-10 bg-orange-400" />

                <span
                  className="
                    text-[11px]
                    font-bold
                    tracking-[0.35em]
                    text-white/80
                    sm:text-xs
                  "
                >
                  15 AUGUST 2026
                </span>

                <div className="h-[1px] w-10 bg-green-400" />

              </motion.div>


              {/* =================================================
                  MAIN HEADLINE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                }}
              >

                <p
                  className="
                    mb-2
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                    sm:text-base
                  "
                >
                  Celebrating
                </p>

                <h2
                  className="
                    text-5xl
                    font-black
                    leading-[0.9]
                    tracking-tight
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[88px]
                  "
                >

                  <span className="block text-white">
                    FREEDOM
                  </span>

                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-orange-400
                      via-white
                      to-green-400
                      bg-clip-text
                      text-transparent
                    "
                  >
                    & UNITY
                  </span>

                </h2>

              </motion.div>


              {/* =================================================
                  SCHOOL BRANDING
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
                className="mt-8"
              >

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-white/60
                    sm:text-sm
                  "
                >
                  Welcome to
                </p>

                <h1
                  className="
                    mt-2
                    text-3xl
                    font-extrabold
                    tracking-tight
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  Modern Public School
                </h1>

                <div className="mt-4 flex h-[3px] w-44 overflow-hidden rounded-full">

                  <div className="w-1/3 bg-orange-500" />
                  <div className="w-1/3 bg-white" />
                  <div className="w-1/3 bg-green-600" />

                </div>

              </motion.div>


              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.8,
                }}
                className="
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-gray-200
                  sm:text-base
                  md:text-lg
                "
              >
                This Independence Day, we celebrate the spirit of
                freedom while empowering young minds with knowledge,
                confidence, discipline and the vision to build a
                stronger India.
              </motion.p>


              {/* =================================================
                  MODERN INFO ROW
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.7,
                }}
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >

                {/* 79 */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-4
                    py-2
                    backdrop-blur-xl
                  "
                >

                  <span className="text-lg font-black text-orange-400">
                    79
                  </span>

                  <span className="text-[10px] uppercase tracking-wider text-white/70">
                    Years of Independence
                  </span>

                </div>


                {/* Admissions */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-green-400/20
                    bg-green-400/10
                    px-4
                    py-2
                    backdrop-blur-xl
                  "
                >

                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-300 sm:text-xs">
                    Admissions Open 2026-27
                  </span>

                </div>

              </motion.div>


              {/* =================================================
                  CTA
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                <Link
                  to="/online-registration"
                  className="w-full sm:w-auto"
                >

                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-white
                      px-8
                      py-3.5
                      font-bold
                      text-black
                      shadow-2xl
                      transition
                      sm:w-auto
                    "
                  >

                    Begin Your Journey

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-black
                        text-white
                        transition-transform
                        group-hover:translate-x-1
                      "
                    >
                      <HiArrowRight size={15} />
                    </span>

                  </motion.button>

                </Link>


                <Link
                  to="/contact"
                  className="w-full sm:w-auto"
                >

                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      w-full
                      rounded-full
                      border
                      border-white/25
                      bg-white/10
                      px-8
                      py-3.5
                      font-semibold
                      text-white
                      backdrop-blur-xl
                      transition
                      hover:bg-white/15
                      sm:w-auto
                    "
                  >
                    Enquire Now
                  </motion.button>

                </Link>

              </motion.div>


              {/* =================================================
                  PATRIOTIC FOOTER
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.1,
                  duration: 1,
                }}
                className="mt-8"
              >

                <div className="flex items-center gap-3">

                  <span className="text-xs font-bold tracking-[0.2em] text-orange-400">
                    JAI HIND
                  </span>

                  <span className="text-white/30">•</span>

                  <span className="text-xs font-bold tracking-[0.2em] text-white/80">
                    VANDE MATARAM
                  </span>

                  <span className="text-white/30">•</span>

                  <span className="text-xs font-bold tracking-[0.2em] text-green-400">
                    JAI BHARAT
                  </span>

                </div>

              </motion.div>

            </div>


            {/* =================================================
                RIGHT — PREMIUM INDEPENDENCE CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="
                relative
                hidden
                justify-center
                lg:flex
              "
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  h-[420px]
                  w-[420px]
                  rounded-full
                  bg-orange-500/10
                  blur-[100px]
                "
              />


              {/* Main Glass Card */}

              <div
                className="
                  relative
                  w-[360px]
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/20
                  bg-white/[0.08]
                  p-7
                  shadow-[0_30px_100px_rgba(0,0,0,0.4)]
                  backdrop-blur-2xl
                "
              >

                {/* Card Top */}

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
                      India
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white/80">
                      Independence Day
                    </p>

                  </div>

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-300/30
                      text-3xl
                      text-blue-200/80
                    "
                  >
                    ☸
                  </motion.div>

                </div>


                {/* Big Date */}

                <div className="mt-12">

                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-orange-300">
                    15
                  </p>

                  <h3
                    className="
                      text-8xl
                      font-black
                      leading-none
                      tracking-[-0.06em]
                    "
                  >
                    AUG
                  </h3>

                  <div className="mt-3 flex items-center gap-3">

                    <div className="h-[2px] flex-1 bg-gradient-to-r from-orange-500 via-white to-green-500" />

                    <span className="text-xs font-bold text-white/60">
                      2026
                    </span>

                  </div>

                </div>


                {/* Message */}

                <div className="mt-10">

                  <p className="text-lg font-bold leading-snug">
                    Celebrating the courage,
                    <br />
                    dreams & spirit of India.
                  </p>

                  <p className="mt-3 text-xs leading-5 text-white/50">
                    May every young mind grow with freedom,
                    knowledge and responsibility.
                  </p>

                </div>


                {/* Bottom */}

                <div className="mt-8 flex items-center justify-between">

                  <div className="flex -space-x-1">

                    <span className="h-3 w-3 rounded-full bg-orange-500" />
                    <span className="h-3 w-3 rounded-full bg-white" />
                    <span className="h-3 w-3 rounded-full bg-green-600" />

                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                    Proud Indian
                  </span>

                </div>


                {/* Animated Card Shine */}

                <motion.div
                  animate={{
                    x: ["-120%", "160%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    h-full
                    w-20
                    skew-x-12
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                  "
                />

              </div>

            </motion.div>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM TRICOLOR WAVE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-30
          h-20
          w-full
          overflow-hidden
        "
      >

        <motion.div
          animate={{
            x: [0, -25, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-18px]
            left-[-5%]
            h-16
            w-[110%]
            rounded-[50%]
            bg-orange-500/90
          "
        />

        <motion.div
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-27px]
            left-[-5%]
            h-14
            w-[110%]
            rounded-[50%]
            bg-white/90
          "
        />

        <motion.div
          animate={{
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-36px]
            left-[-5%]
            h-14
            w-[110%]
            rounded-[50%]
            bg-green-600/90
          "
        />

      </div>


      {/* =====================================================
          SLIDER DOTS
      ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-40
          flex
          -translate-x-1/2
          gap-2
        "
      >

        {images.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`
              h-1.5
              rounded-full
              transition-all
              duration-500
              ${
                current === index
                  ? "w-9 bg-white"
                  : "w-2 bg-white/30"
              }
            `}
          />

        ))}

      </div>


      {/* =====================================================
          WHATSAPP
      ===================================================== */}

      <motion.a
        href="https://wa.me/917352205506"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="
          fixed
          bottom-5
          right-5
          z-50
          rounded-full
          bg-green-500
          p-4
          text-white
          shadow-[0_10px_40px_rgba(34,197,94,0.35)]
        "
      >

        <FaWhatsapp size={24} />

      </motion.a>


      {/* =====================================================
          MOBILE TRICOLOR LINE
      ===================================================== */}

      <div className="absolute bottom-0 left-0 z-40 w-full">

        <div className="h-[2px] bg-orange-500" />
        <div className="h-[2px] bg-white" />
        <div className="h-[2px] bg-green-600" />

      </div>

    </section>
  );
};

export default Herosection;