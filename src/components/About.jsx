import { motion } from "framer-motion";
import { MapPin, Code2, Database, BarChart3 } from "lucide-react";
import personal from "../data/personal";

const highlights = [
  {
    icon: Code2,
    title: "Application Development",
    description: "Building practical software and web solutions.",
  },
  {
    icon: Database,
    title: "Database Development",
    description: "Designing and working with structured data systems.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turning data into useful insights and reports.",
  },
];

function About() {
  return (
    <section id="about" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#E2BF41]">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#142336] sm:text-5xl">
            Building technology with purpose.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <MapPin size={17} className="text-[#E2BF41]" />
              {personal.location}
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {personal.description}
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              My experience spans application development, ICT support, data
              analytics and academic technology environments. I enjoy working
              at the intersection of technology and real-world problems.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From developing applications and databases to supporting users
              and analyzing institutional data, I am continuously developing
              my technical and problem-solving abilities.
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#142336] text-[#E2BF41]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#142336]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;