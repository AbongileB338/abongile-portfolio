import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Mail,
  Download,
} from "lucide-react";

import personal from "../data/personal";

const navigation = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Code2,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderGit2,
  },
  {
    name: "Education",
    href: "#education",
    icon: GraduationCap,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting,
        );

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8"
        aria-label="Main navigation"
      >
        {/* ==================== LOGO ==================== */}
        <a
          href="#home"
          className="group flex items-center gap-2"
          aria-label={`${personal.name} home`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142336] text-sm font-bold text-[#E2BF41] shadow-sm transition-transform duration-300 group-hover:scale-105">
            AB
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-wide text-[#142336]">
              ABONGILE
              <span className="text-[#E2BF41]">.</span>
            </p>

            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
              ICT Developer
            </p>
          </div>
        </a>

        {/* ==================== DESKTOP NAVIGATION ==================== */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-slate-100 text-[#142336]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#142336]"
                }`}
              >
                <Icon
                  size={16}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`transition-colors ${
                    isActive
                      ? "text-[#E2BF41]"
                      : "text-slate-400 group-hover:text-[#E2BF41]"
                  }`}
                />

                <span>{item.name}</span>

                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[#E2BF41]" />
                )}
              </a>
            );
          })}

          {/* Download CV */}
          <a
            href={personal.cv}
            download
            className="ml-3 flex items-center gap-2 rounded-lg bg-[#142336] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d334b] hover:shadow-md"
          >
            <Download size={16} />

            <span>Download CV</span>
          </a>
        </div>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#142336] shadow-sm transition-all hover:border-[#E2BF41] hover:text-[#E2BF41] md:hidden"
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ==================== MOBILE NAVIGATION ==================== */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col gap-1">
            {navigation.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#142336] text-white"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#142336]"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      isActive
                        ? "text-[#E2BF41]"
                        : "text-slate-400"
                    }
                  />

                  <span>{item.name}</span>

                  {isActive && (
                    <span className="ml-auto h-2 w-2 rounded-full bg-[#E2BF41]" />
                  )}
                </a>
              );
            })}

            {/* Mobile CV Button */}
            <a
              href={personal.cv}
              download
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#142336] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1d334b]"
            >
              <Download size={18} />

              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;