import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#E2BF41]">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#142336] sm:text-5xl">
            Where I've applied my skills.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            My professional and academic experience across IT support,
            application development, data analytics and ICT education.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mt-14">

          {/* Timeline Line */}
          <div className="absolute left-[11px] top-2 hidden h-full w-px bg-slate-200 sm:block" />

          <div className="space-y-10">

            {experience.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.year}`}
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative sm:pl-12"
              >

                {/* Timeline Point */}
                <div className="absolute left-0 top-1 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-[#E2BF41] shadow sm:flex" />

                {/* Experience Card */}
                <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                  {/* Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>

                      {/* Year */}
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#E2BF41]">
                        <Briefcase size={16} />
                        {item.year}
                      </div>

                      {/* Role */}
                      <h3 className="mt-3 text-xl font-bold text-[#142336]">
                        {item.role}
                      </h3>

                      {/* Company */}
                      <p className="mt-1 font-medium text-slate-500">
                        {item.company}
                      </p>

                    </div>

                    {/* Type Badge */}
                    <span className="w-fit rounded-full bg-[#142336] px-3 py-1 text-xs font-medium text-white">
                      {item.type}
                    </span>

                  </div>

                  {/* Description */}
                  <p className="mt-5 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">

                    {item.responsibilities.map((responsibility) => (
                      <div
                        key={responsibility}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >

                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-[#E2BF41]"
                        />

                        <span>
                          {responsibility}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </motion.article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;