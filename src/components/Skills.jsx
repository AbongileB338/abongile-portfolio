import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Monitor,
  BarChart3,
  Wrench,
  Users,
} from "lucide-react";

import skills from "../data/skills";

const icons = {
  code: Code2,
  layers: Layers3,
  monitor: Monitor,
  chart: BarChart3,
  tools: Wrench,
  users: Users,
};

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F8FAFC] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#E2BF41]">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#142336] sm:text-5xl">
            Technical toolkit.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A combination of development, ICT support, data analytics and
            professional skills developed through academic and practical
            experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => {
            const Icon = icons[skill.icon];

            return (
              <motion.article
                key={skill.category}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#142336] text-[#E2BF41]">
                  {Icon ? <Icon size={22} /> : null}
                </div>

                {/* Category */}
                <h3 className="mt-6 text-lg font-bold text-[#142336]">
                  {skill.category}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {skill.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items?.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;