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

  /*
   * =========================================================
   * FLOATING PARTICLES
   * =========================================================
   *
   * Each particle has its own position, size and animation
   * duration to make the background feel natural.
   */

  const particles = [
    {
      id: 1,
      left: "8%",
      top: "18%",
      size: 4,
      duration: 7,
      delay: 0,
    },
    {
      id: 2,
      left: "18%",
      top: "72%",
      size: 3,
      duration: 9,
      delay: 1,
    },
    {
      id: 3,
      left: "30%",
      top: "30%",
      size: 5,
      duration: 8,
      delay: 2,
    },
    {
      id: 4,
      left: "42%",
      top: "80%",
      size: 3,
      duration: 10,
      delay: 0.5,
    },
    {
      id: 5,
      left: "55%",
      top: "16%",
      size: 4,
      duration: 8,
      delay: 1.5,
    },
    {
      id: 6,
      left: "65%",
      top: "65%",
      size: 3,
      duration: 11,
      delay: 2,
    },
    {
      id: 7,
      left: "75%",
      top: "28%",
      size: 5,
      duration: 9,
      delay: 0.5,
    },
    {
      id: 8,
      left: "88%",
      top: "75%",
      size: 4,
      duration: 8,
      delay: 1,
    },
    {
      id: 9,
      left: "93%",
      top: "15%",
      size: 3,
      duration: 10,
      delay: 2.5,
    },
    {
      id: 10,
      left: "12%",
      top: "48%",
      size: 3,
      duration: 12,
      delay: 1,
    },
    {
      id: 11,
      left: "48%",
      top: "45%",
      size: 4,
      duration: 9,
      delay: 3,
    },
    {
      id: 12,
      left: "82%",
      top: "52%",
      size: 3,
      duration: 11,
      delay: 1.5,
    },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F8FAFC] pt-24"
    >
      {/* =====================================================
          ANIMATED BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* -------------------------------------------------
            SUBTLE BACKGROUND GRID
        -------------------------------------------------- */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#142336 1px, transparent 1px), linear-gradient(90deg, #142336 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* -------------------------------------------------
            MOVING GRADIENT BLOB #1
        -------------------------------------------------- */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 80, -30, 0],
                  y: [0, 40, -20, 0],
                  scale: [1, 1.12, 0.95, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-[#E2BF41]/15 blur-3xl"
        />

        {/* -------------------------------------------------
            MOVING GRADIENT BLOB #2
        -------------------------------------------------- */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -60, 30, 0],
                  y: [0, -40, 50, 0],
                  scale: [1, 0.92, 1.08, 1],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-48 -left-48 h-[32rem] w-[32rem] rounded-full bg-[#142336]/[0.07] blur-3xl"
        />

        {/* -------------------------------------------------
            MOVING GRADIENT BLOB #3
        -------------------------------------------------- */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 45, -45, 0],
                  y: [0, -35, 25, 0],
                  scale: [1, 1.08, 0.94, 1],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[35%] top-[35%] h-72 w-72 rounded-full bg-[#E2BF41]/[0.06] blur-3xl"
        />

        {/* -------------------------------------------------
            SOFT NAVY GLOW
        -------------------------------------------------- */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.45, 0.25],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[45%] top-[10%] h-56 w-56 rounded-full bg-[#142336]/[0.04] blur-3xl"
        />

        {/* =================================================
            FLOATING PARTICLES
        ================================================== */}

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-[#E2BF41]/40"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -20, 0, 15, 0],
                    x: [0, 8, -8, 5, 0],
                    opacity: [0.2, 0.7, 0.3, 0.6, 0.2],
                    scale: [1, 1.4, 0.8, 1.2, 1],
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* -------------------------------------------------
            VERY SUBTLE LARGE PARTICLES
        -------------------------------------------------- */}

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                  opacity: [0.05, 0.15, 0.05],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[22%] top-[20%] h-20 w-20 rounded-full bg-[#E2BF41]/10 blur-xl"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 30, 0],
                  x: [0, -20, 0],
                  opacity: [0.04, 0.12, 0.04],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[20%] top-[55%] h-28 w-28 rounded-full bg-[#142336]/10 blur-2xl"
        />
      </div>

      {/* =====================================================
          MAIN HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-2 lg:px-8 lg:py-24">

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
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative z-10 text-center lg:text-left"
        >
          {/* Introduction */}

          <motion.p
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
              delay: 0.1,
            }}
            className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#E2BF41]"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}

          <motion.h1
            id="hero-heading"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
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
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-5xl font-bold leading-tight tracking-tight text-[#142336] sm:text-6xl lg:text-7xl"
          >
            {personal.firstName}
            <br />
            {personal.lastName}
          </motion.h1>

          {/* Gold divider */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    width: 0,
                    opacity: 0,
                  }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    width: "5rem",
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mx-auto mt-7 h-1 rounded-full bg-[#E2BF41] lg:mx-0"
          />

          {/* Professional title */}

          <motion.h2
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
              delay: 0.55,
            }}
            className="mt-6 text-xl font-semibold text-slate-700 sm:text-2xl"
          >
            {personal.title}
          </motion.h2>

          {/* Tagline */}

          <motion.p
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
              delay: 0.65,
            }}
            className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0"
          >
            {personal.tagline}
          </motion.p>

          {/* =================================================
              CTA BUTTONS
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
              delay: 0.75,
            }}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            {/* Projects */}

            <motion.a
              href="#projects"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.02,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="inline-flex items-center gap-2 rounded-lg bg-[#142336] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#1d334b] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E2BF41] focus:ring-offset-2"
            >
              View My Work

              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        x: [0, 4, 0],
                      }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={18} aria-hidden="true" />
              </motion.span>
            </motion.a>

            {/* CV */}

            <motion.a
              href={personal.cv}
              download="Abongile_Bakubaku_CV.pdf"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.02,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.98,
                    }
              }
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#142336] shadow-sm transition-all hover:border-[#E2BF41] hover:bg-slate-50 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E2BF41] focus:ring-offset-2"
            >
              Download CV

              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, 2, 0],
                      }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Download size={18} aria-hidden="true" />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* =================================================
              SCROLL INDICATOR
          ================================================== */}

          <motion.a
            href="#about"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: 3,
                  }
            }
            className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#142336] focus:outline-none focus:ring-2 focus:ring-[#E2BF41] focus:ring-offset-2"
          >
            Scroll to explore

            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, 5, 0],
                    }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={16} aria-hidden="true" />
            </motion.span>
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
          {/* =================================================
              PROFILE GLOW
          ================================================== */}

          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.05, 1],
                    opacity: [0.25, 0.4, 0.25],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-6 rounded-[2rem] bg-[#E2BF41]/10 blur-2xl"
          />

          {/* =================================================
              MAIN PROFILE CARD
          ================================================== */}

          <motion.div
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -5,
                  }
            }
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Gold corner decoration */}

            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.05, 1],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-0 z-10 h-24 w-24 rounded-bl-full bg-[#E2BF41]"
            />

            {/* Profile image */}

            <div className="relative h-full w-full">
              <img
                src="/images/profile/abongile-profile.jpg"
                alt="Professional portrait of Abongile Bakubaku"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Image overlay */}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#142336]/70 via-transparent to-transparent"
              />

              {/* Image information */}

              <div className="absolute bottom-0 left-0 right-0 p-7 text-left sm:p-8">
                <motion.p
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 10,
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
                    delay: 0.9,
                  }}
                  className="text-sm font-bold uppercase tracking-[0.2em] text-[#E2BF41]"
                >
                  ICT • Development • Technology
                </motion.p>

                <motion.p
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 10,
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
                    delay: 1,
                  }}
                  className="mt-2 text-sm leading-6 text-white/80"
                >
                  Building digital solutions through technology,
                  development and data.
                </motion.p>
              </div>
            </div>
          </motion.div>

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
                    y: [0, -6, 0],
                  }
            }
            transition={{
              opacity: {
                duration: 0.6,
                delay: 0.8,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
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

          {/* =================================================
              DECORATIVE GOLD CIRCLE
          ================================================== */}

          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -8, 0],
                    rotate: [0, 5, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 bottom-16 hidden h-16 w-16 rounded-full border-4 border-[#E2BF41]/30 sm:block"
          />

          {/* =================================================
              SMALL FLOATING GOLD DOT
          ================================================== */}

          <motion.div
            aria-hidden="true"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -12, 0],
                    x: [0, 5, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 top-20 hidden h-3 w-3 rounded-full bg-[#E2BF41] shadow-lg shadow-[#E2BF41]/30 sm:block"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;