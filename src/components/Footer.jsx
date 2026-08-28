import {
  ArrowUp,
  BriefcaseBusiness,
  ChevronRight,
  GraduationCap,
  House,
  Mail,
  MessageCircle,
  Monitor,
  Send,
  UserRound,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  /*
   * ==========================================================
   * QUICK NAVIGATION
   * ==========================================================
   */

  const navigation = [
    {
      name: "Home",
      href: "#home",
      icon: House,
    },
    {
      name: "About",
      href: "#about",
      icon: UserRound,
    },
    {
      name: "Skills",
      href: "#skills",
      icon: Wrench,
    },
    {
      name: "Experience",
      href: "#experience",
      icon: BriefcaseBusiness,
    },
    {
      name: "Education",
      href: "#education",
      icon: GraduationCap,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: Monitor,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Send,
    },
  ];

  /*
   * ==========================================================
   * SOCIAL / CONTACT LINKS
   * ==========================================================
   */

  const connectLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abongile-bakubaku/",
      icon: null,
      external: true,
      type: "linkedin",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/27738182811",
      icon: MessageCircle,
      external: true,
      type: "icon",
    },
    {
      name: "Email",
      href: "mailto:abongileloyiso@gmail.com",
      icon: Mail,
      external: false,
      type: "icon",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#142336] text-white">
      {/* ======================================================
          BACKGROUND DECORATION
      ======================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Gold glow */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#E2BF41]/[0.07] blur-3xl"
        />

        {/* Navy / blue glow */}
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400/[0.04] blur-3xl"
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ======================================================
          MAIN FOOTER
      ======================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* ==================================================
              ABOUT
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h2 className="text-2xl font-bold tracking-tight">
              Abongile Loyiso Bakubaku
            </h2>

            <p className="mt-3 text-sm font-semibold text-[#E2BF41]">
              ICT Application Developer
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Full-Stack Developer and IT Support Specialist focused on
              building practical digital solutions through application
              development, data analytics and technology.
            </p>

            {/* Availability indicator */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/[0.03] px-3 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E2BF41] opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E2BF41]" />
              </span>

              <span className="text-xs font-medium text-slate-300">
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* ==================================================
              QUICK LINKS
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#E2BF41]">
              Quick Links
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group flex items-center gap-2.5 text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-[#E2BF41]"
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.8}
                        className="text-slate-500 transition-colors duration-200 group-hover:text-[#E2BF41]"
                        aria-hidden="true"
                      />

                      <span>{item.name}</span>

                      <ChevronRight
                        size={13}
                        className="ml-auto opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* ==================================================
              CONNECT
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#E2BF41]">
              Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Interested in working together or discussing a project? Feel
              free to connect with me.
            </p>

            {/* Contact links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {connectLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={
                      link.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    aria-label={`Connect with me on ${link.name}`}
                    className="group inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-slate-300 shadow-sm transition-all duration-300 hover:border-[#E2BF41] hover:bg-[#E2BF41]/10 hover:text-[#E2BF41] hover:shadow-lg hover:shadow-[#E2BF41]/5 focus:outline-none focus:ring-2 focus:ring-[#E2BF41] focus:ring-offset-2 focus:ring-offset-[#142336]"
                  >
                    {/* LinkedIn custom icon */}
                    {link.type === "linkedin" ? (
                      <span
                        className="flex h-[17px] w-[17px] items-center justify-center rounded-[3px] bg-current text-[11px] font-bold leading-none text-[#142336] transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        in
                      </span>
                    ) : (
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />
                    )}

                    {link.name}
                  </motion.a>
                );
              })}
            </div>

            {/* Direct email */}
            <a
              href="mailto:abongileloyiso@gmail.com"
              className="group mt-5 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#E2BF41]"
            >
              <Mail
                size={15}
                aria-hidden="true"
              />

              <span>abongileloyiso@gmail.com</span>

              <ArrowUp
                size={13}
                className="rotate-45 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>

        {/* ======================================================
            DIVIDER
        ======================================================= */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* ======================================================
            BOTTOM FOOTER
        ======================================================= */}

        <div className="flex flex-col gap-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p>
            © {currentYear} Abongile Loyiso Bakubaku.
            <span className="hidden sm:inline"> </span>

            <span className="block sm:inline">
              All rights reserved.
            </span>
          </p>

          {/* Built with */}
          <div className="flex items-center gap-2">
            <span>Built with</span>

            <span className="font-medium text-white">
              React + Vite
            </span>
          </div>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{
              y: -2,
            }}
            className="group inline-flex items-center gap-2 transition-colors hover:text-[#E2BF41] focus:outline-none focus:ring-2 focus:ring-[#E2BF41] focus:ring-offset-2 focus:ring-offset-[#142336]"
          >
            <span>Back to top</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 transition-all duration-300 group-hover:border-[#E2BF41] group-hover:bg-[#E2BF41] group-hover:text-[#142336]">
              <ArrowUp
                size={15}
                aria-hidden="true"
              />
            </span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
