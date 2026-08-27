import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import education from "../data/education";

function Education() {
  return (
    <section id="education" className="bg-[#F8FAFC] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#E2BF41]">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#142336] sm:text-5xl">
            Academic journey.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {education.map((item, index) => (
            <motion.article
              key={`${item.qualification}-${item.year}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
            >
              {/* Year */}
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#142336] px-4 py-2 text-sm font-bold text-white">
                {item.year}
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#142336] text-[#E2BF41]">
                <GraduationCap size={22} />
              </div>

              <h3 className="mt-7 pr-14 text-xl font-bold leading-7 text-[#142336]">
                {item.qualification}
              </h3>

              <p className="mt-3 font-medium text-slate-500">
                {item.institution}
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              {item.result && (
                <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5">
                  <Award size={18} className="text-[#E2BF41]" />

                  <span className="text-sm font-bold text-[#142336]">
                    Result: {item.result}
                  </span>
                </div>
              )}

              {item.thesis && (
                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Thesis
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[#142336]">
                    {item.thesis}
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;