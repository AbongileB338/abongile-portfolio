import {
  ArrowUpRight,
  BarChart3,
  Car,
  Database,
  Droplets,
  FileSpreadsheet,
  LayoutDashboard,
  Monitor,
  Package,
  Search,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    title: "Water Delivery Management System",
    category: "Web Application",
    shortCategory: "Operations",
    description:
      "A centralized web-based platform designed to manage water delivery operations, drivers, trips, stations, storage and operational reporting.",
    technologies: ["React", "JavaScript", "Node.js", "Database"],
    icon: Droplets,
    number: "01",
    featured: true,
    visual: "water",
  },
  {
    title: "PPE Management System",
    category: "ICT Management System",
    shortCategory: "Management",
    description:
      "A digital PPE tracking solution designed to improve employee PPE distribution records, reduce duplicate entries and provide better visibility of issued equipment.",
    technologies: [
      "Power Apps",
      "Microsoft Lists",
      "Power Automate",
      "Excel",
    ],
    icon: ShieldCheck,
    number: "02",
    featured: false,
    visual: "ppe",
  },
  {
    title: "Student Profiling Dashboard",
    category: "Data Analytics",
    shortCategory: "Analytics",
    description:
      "An interactive Power BI dashboard for analysing registered student profiles, demographics, qualifications, faculties, departments and admission information.",
    technologies: ["Power BI", "Excel", "Data Analytics", "DAX"],
    icon: BarChart3,
    number: "03",
    featured: false,
    visual: "analytics",
  },
  {
    title: "Car Wash Tracking Solution",
    category: "Business Data Solution",
    shortCategory: "Business Data",
    description:
      "A structured Excel-based solution for tracking customer visits, vehicle information, wash activity, returning clients and operational reporting.",
    technologies: [
      "Microsoft Excel",
      "XLOOKUP",
      "Data Validation",
      "Power BI",
    ],
    icon: Car,
    number: "04",
    featured: false,
    visual: "carwash",
  },
  {
    title: "eGraduate Finder",
    category: "Career Technology",
    shortCategory: "Career Tech",
    description:
      "A platform concept designed to help graduates discover career opportunities, connect with employers and improve access to employment opportunities.",
    technologies: ["Web Development", "Database", "JavaScript", "UI/UX"],
    icon: Search,
    number: "05",
    featured: false,
    visual: "career",
  },
  {
    title: "Personal Developer Portfolio",
    category: "Web Development",
    shortCategory: "Portfolio",
    description:
      "A modern responsive portfolio website showcasing my development experience, technical skills, education, projects and professional journey.",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    icon: Monitor,
    number: "06",
    featured: false,
    visual: "portfolio",
  },
];

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/* ============================================================
   PROJECT VISUAL
============================================================ */

function ProjectVisual({ project, shouldReduceMotion }) {
  const Icon = project.icon;

  return (
    <div className="relative h-64 overflow-hidden bg-[#0B1625]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#142336] via-[#102033] to-[#07111e]" />

      {/* Animated gradient glow */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 40, -20, 0],
                y: [0, -20, 30, 0],
                scale: [1, 1.12, 0.95, 1],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#E2BF41]/10 blur-3xl"
      />

      {/* Secondary glow */}
      <motion.div
        aria-hidden="true"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -30, 20, 0],
                y: [0, 20, -15, 0],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-blue-400/[0.06] blur-3xl"
      />

      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Project number */}
      <div className="absolute left-6 top-5 z-20">
        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-white/40">
          PROJECT / {project.number}
        </span>
      </div>

      {/* Category */}
      <div className="absolute right-6 top-5 z-20">
        <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 backdrop-blur-md">
          {project.shortCategory}
        </span>
      </div>

      {/* ======================================================
          WATER DELIVERY VISUAL
      ====================================================== */}

      {project.visual === "water" && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Dashboard window */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -5, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[78%] rounded-xl border border-white/10 bg-white/[0.07] p-3 shadow-2xl backdrop-blur-md"
          >
            {/* Window header */}
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>

              <Droplets
                size={13}
                className="text-[#E2BF41]"
                aria-hidden="true"
              />
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/[0.06] p-2">
                <p className="text-[7px] uppercase text-white/40">
                  Trips
                </p>
                <p className="mt-1 text-sm font-bold text-white">24</p>
              </div>

              <div className="rounded-lg bg-white/[0.06] p-2">
                <p className="text-[7px] uppercase text-white/40">
                  Drivers
                </p>
                <p className="mt-1 text-sm font-bold text-white">12</p>
              </div>

              <div className="rounded-lg bg-[#E2BF41]/10 p-2">
                <p className="text-[7px] uppercase text-[#E2BF41]/70">
                  Stations
                </p>
                <p className="mt-1 text-sm font-bold text-[#E2BF41]">
                  150+
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-3 rounded-lg bg-white/[0.04] p-3">
              <div className="flex items-end gap-1.5">
                {[35, 55, 45, 70, 52, 82, 65, 90].map(
                  (height, index) => (
                    <motion.div
                      key={index}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              height: [`${height}%`, `${height + 8}%`, `${height}%`],
                            }
                      }
                      transition={{
                        duration: 3,
                        delay: index * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex-1 rounded-t bg-[#E2BF41]/60"
                      style={{ height: `${height}%`, minHeight: "12px" }}
                    />
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Floating icon */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -10, 0],
                    rotate: [0, 3, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[#E2BF41]/20 bg-[#E2BF41]/10 text-[#E2BF41] backdrop-blur-md"
          >
            <Droplets size={20} />
          </motion.div>
        </div>
      )}

      {/* ======================================================
          PPE VISUAL
      ====================================================== */}

      {project.visual === "ppe" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -5, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[70%] rounded-xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E2BF41]/10 text-[#E2BF41]">
                  <ShieldCheck size={16} />
                </div>

                <div>
                  <div className="h-2 w-20 rounded bg-white/20" />
                  <div className="mt-1 h-1.5 w-12 rounded bg-white/10" />
                </div>
              </div>

              <Package
                size={16}
                className="text-white/40"
              />
            </div>

            <div className="mt-5 space-y-2">
              {["Helmet", "Safety Shoes", "Gloves"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            opacity: [0.5, 1, 0.5],
                          }
                    }
                    transition={{
                      duration: 3,
                      delay: index * 0.5,
                      repeat: Infinity,
                    }}
                    className="flex items-center justify-between rounded-lg bg-white/[0.05] px-3 py-2"
                  >
                    <span className="text-[10px] text-white/60">
                      {item}
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#E2BF41]" />
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* ======================================================
          ANALYTICS VISUAL
      ====================================================== */}

      {project.visual === "analytics" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[76%] rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-24 rounded bg-white/20" />
                <div className="mt-1 h-1.5 w-14 rounded bg-white/10" />
              </div>

              <BarChart3
                size={17}
                className="text-[#E2BF41]"
              />
            </div>

            <div className="mt-5 flex h-28 items-end gap-2">
              {[45, 65, 55, 80, 62, 92, 72].map(
                (height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{
                      height: `${height}%`,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                    }}
                    className="flex-1 rounded-t bg-gradient-to-t from-[#E2BF41]/70 to-[#E2BF41]/20"
                  />
                )
              )}
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-[8px] text-white/30">
                Students
              </span>
              <span className="text-[8px] text-white/30">
                2026
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================
          CAR WASH VISUAL
      ====================================================== */}

      {project.visual === "carwash" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[78%] rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <FileSpreadsheet
                size={18}
                className="text-[#E2BF41]"
              />

              <div className="h-2 w-20 rounded-full bg-white/10" />
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-white/[0.06]">
              <div className="grid grid-cols-3 bg-white/[0.06] px-2 py-2">
                <span className="text-[7px] text-white/40">
                  Vehicle
                </span>
                <span className="text-[7px] text-white/40">
                  Visits
                </span>
                <span className="text-[7px] text-white/40">
                  Status
                </span>
              </div>

              {["Mercedes", "Toyota", "Ford"].map(
                (vehicle, index) => (
                  <motion.div
                    key={vehicle}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            x: [0, 3, 0],
                          }
                    }
                    transition={{
                      duration: 4,
                      delay: index * 0.4,
                      repeat: Infinity,
                    }}
                    className="grid grid-cols-3 border-t border-white/[0.05] px-2 py-2"
                  >
                    <span className="text-[8px] text-white/60">
                      {vehicle}
                    </span>

                    <span className="text-[8px] text-white/40">
                      {index + 2}
                    </span>

                    <span className="text-[8px] text-[#E2BF41]">
                      Active
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================
          CAREER VISUAL
      ====================================================== */}

      {project.visual === "career" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -5, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[76%] rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E2BF41]/10 text-[#E2BF41]">
                <Search size={17} />
              </div>

              <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                <span className="text-[9px] text-white/40">
                  Search opportunities...
                </span>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {[
                "Software Developer",
                "Data Analyst",
                "ICT Graduate",
              ].map((role, index) => (
                <div
                  key={role}
                  className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <Users
                      size={12}
                      className="text-white/30"
                    />

                    <span className="text-[9px] text-white/60">
                      {role}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={12}
                    className={
                      index === 0
                        ? "text-[#E2BF41]"
                        : "text-white/20"
                    }
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* ======================================================
          PORTFOLIO VISUAL
      ====================================================== */}

      {project.visual === "portfolio" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[76%] rounded-xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              </div>

              <Monitor
                size={12}
                className="text-[#E2BF41]"
              />
            </div>

            <div className="flex gap-3 p-3">
              <div className="w-1/3 space-y-2">
                <div className="h-2 w-full rounded bg-[#E2BF41]/30" />
                <div className="h-1.5 w-4/5 rounded bg-white/10" />
                <div className="h-1.5 w-full rounded bg-white/10" />
                <div className="h-1.5 w-3/4 rounded bg-white/10" />
              </div>

              <div className="flex-1 rounded-lg bg-white/[0.04] p-3">
                <div className="h-2 w-16 rounded bg-white/20" />
                <div className="mt-3 h-12 rounded bg-gradient-to-br from-[#E2BF41]/20 to-white/[0.02]" />
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#E2BF41]/50 to-transparent" />
    </div>
  );
}

/* ============================================================
   PROJECTS COMPONENT
============================================================ */

function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-white px-6 py-24 lg:px-8"
    >
      {/* ======================================================
          SECTION BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#142336 1px, transparent 1px), linear-gradient(90deg, #142336 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 60, -30, 0],
                  y: [0, 30, -20, 0],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#E2BF41]/[0.06] blur-3xl"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -40, 20, 0],
                  y: [0, -20, 30, 0],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#142336]/[0.04] blur-3xl"
        />
      </div>

      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#E2BF41]" />

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#E2BF41]">
              Selected Projects
            </p>
          </div>

          {/* Heading */}

          <h2
            id="projects-heading"
            className="mt-5 text-4xl font-bold tracking-tight text-[#142336] sm:text-5xl lg:text-6xl"
          >
            Things I've{" "}
            <span className="relative inline-block">
              built.
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-1 w-1/2 rounded-full bg-[#E2BF41]"
              />
            </span>
          </h2>

          {/* Description */}

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A selection of digital solutions, applications and data
            projects developed through academic, professional and
            personal experience.
          </p>

          {/* Small stats */}

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Zap
                size={16}
                className="text-[#E2BF41]"
              />

              <span className="text-sm font-medium text-slate-600">
                Digital Solutions
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Database
                size={16}
                className="text-[#E2BF41]"
              />

              <span className="text-sm font-medium text-slate-600">
                Data & Systems
              </span>
            </div>

            <div className="flex items-center gap-2">
              <LayoutDashboard
                size={16}
                className="text-[#E2BF41]"
              />

              <span className="text-sm font-medium text-slate-600">
                Modern Applications
              </span>
            </div>
          </div>
        </motion.div>

        {/* ====================================================
            PROJECT GRID
        ===================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                      }
                }
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-2xl ${
                  project.featured
                    ? "border-[#E2BF41]/40 md:col-span-2 lg:col-span-2"
                    : "border-slate-200"
                }`}
              >
                {/* Featured badge */}

                {project.featured && (
                  <div className="absolute left-5 top-5 z-30">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#E2BF41]/30 bg-[#142336]/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#E2BF41] shadow-lg backdrop-blur-md">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E2BF41]" />
                      Featured Project
                    </span>
                  </div>
                )}

                {/* Project visual */}

                <ProjectVisual
                  project={project}
                  shouldReduceMotion={shouldReduceMotion}
                />

                {/* ==================================================
                    PROJECT CONTENT
                =================================================== */}

                <div className="flex flex-1 flex-col p-7">

                  {/* Icon + category */}

                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E2BF41]/20 bg-[#E2BF41]/10 text-[#B99418] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E2BF41]/15">
                      <Icon size={20} aria-hidden="true" />
                    </div>

                    <span className="font-mono text-xs font-medium text-slate-300">
                      {project.number}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-[#142336] transition-colors duration-300 group-hover:text-[#1d4d73]">
                    {project.title}
                  </h3>

                  {/* Category */}

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#B99418]">
                    {project.category}
                  </p>

                  {/* Description */}

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 transition-colors duration-200 group-hover:border-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Bottom action */}

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-[#142336]">
                      Explore project
                    </span>

                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              rotate: 45,
                            }
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[#142336] transition-colors duration-300 group-hover:border-[#E2BF41] group-hover:bg-[#E2BF41] group-hover:text-[#142336]"
                    >
                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Hover shine */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* ====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:flex-row sm:p-8"
        >
          <div>
            <p className="font-semibold text-[#142336]">
              Interested in how these projects were built?
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Explore the technologies, systems and ideas behind my work.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#142336] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d334b] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E2BF41] focus:ring-offset-2"
          >
            Let's Connect
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;