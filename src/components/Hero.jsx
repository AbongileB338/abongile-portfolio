import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import personal from "../data/personal";

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
      };

  const imageAnimation = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
      };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F8FAFC] pt-24"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E2BF41]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#142336]/5 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <motion.div
          {...fadeUp}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 text-center lg:text-left"
        >
          {/* Introduction */}
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#E2BF41]">
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-tight tracking-tight text-[#142336] sm:text-6xl lg:text-7xl"
          >
            {personal.firstName}
            <br />
            {personal.lastName}
          </h1>

          {/* Gold divider */}
          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#E2BF41] lg:mx-0" />

          {/* Professional title */}
          <h2 className="mt-6 text-xl font-semibold text-slate-700 sm:text-2xl">
            {personal.title}
          </h2>

          {/* Tagline */}
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0">
            {personal.tagline}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

            {/* Projects */}
            <motion.a
              href="#projects"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="inline-flex items-center gap-2 rounded-lg bg-[#142336] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#1d334b] focus:outline-none focus:ring-2 focus:ring-[#E2BF41] focus:ring-offset-2"
            >
              View My Work
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>

            {/* CV */}
            <motion.a
              href={personal.cv}
              download="Abongile_Bakubaku_CV.pdf"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#142336] shadow-sm transition-colors hover:border-[#E2BF41] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#E2BF41] focus:ring-offset-2"
            >
              Download CV
              <Download size={18} aria-hidden="true" />
            </motion.a>
          </div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: 2,
                  }
            }
            className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#142336] focus:outline-none focus:ring-2 focus:ring-[#E2BF41] focus:ring-offset-2"
          >
            Scroll to explore
            <ArrowDown size={16} aria-hidden="true" />
          </motion.a>
        </motion.div>

        {/* =====================================================
            RIGHT PROFILE AREA
        ====================================================== */}
        <motion.div
          {...imageAnimation}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Main profile card */}
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

            {/* Gold corner decoration */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 z-10 h-24 w-24 rounded-bl-full bg-[#E2BF41]"
            />

            {/* Profile image */}
            <div className="relative h-full w-full">

              <img
                src={`${import.meta.env.BASE_URL}images/profile/abongile-profile.jpg`}
                alt="Professional portrait of Abongile Bakubaku"
                className="h-full w-full scale-110 object-cover object-center transition-transform duration-700 hover:scale-115"
              />

              {/* Image overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#142336]/70 via-transparent to-transparent"
              />

              {/* Image information */}
              <div className="absolute bottom-0 left-0 right-0 p-7 text-left sm:p-8">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E2BF41]">
                  ICT • Development • Technology
                </p>

                <p className="mt-2 text-sm leading-6 text-white/80">
                  Building digital solutions through technology,
                  development and data.
                </p>

              </div>
            </div>
          </div>

          {/* =================================================
              FLOATING FOCUS CARD
          ================================================== */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 15,
                  }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="absolute -bottom-5 -left-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-left-5"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Focus
            </p>

            <p className="mt-1 font-semibold text-[#142336]">
              Building Digital Solutions
            </p>
          </motion.div>

          {/* Decorative gold circle */}
          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 bottom-16 hidden h-16 w-16 rounded-full border-4 border-[#E2BF41]/30 sm:block"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;