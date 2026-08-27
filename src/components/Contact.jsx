import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (event) => {
    event.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        "service_fg3zwui",
        "template_nmv46fa",
        form.current,
        {
          publicKey: "zVSzyZ6d-8y-4WDwl",
        },
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        },
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#F8FAFC] px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#E2BF41]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#142336] sm:text-5xl">
            Let's build something useful.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Have a project, opportunity or collaboration in mind?
            I'd love to hear from you. Let's connect and turn ideas
            into practical digital solutions.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-3xl bg-[#142336] p-8 text-white shadow-xl sm:p-10">

              <div className="mb-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E2BF41]/10 text-[#E2BF41]">

                  {/* Email Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                    />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>

                </div>

                <h3 className="text-2xl font-bold">
                  Get in touch
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  I'm open to opportunities, collaborations,
                  application development projects, IT support
                  opportunities and technical discussions.
                </p>
              </div>

              <div className="space-y-7">

                {/* Email */}
                <a
                  href="mailto:abongileloyiso@gmail.com"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#E2BF41] transition group-hover:bg-[#E2BF41] group-hover:text-[#142336]">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="16"
                        x="2"
                        y="4"
                        rx="2"
                      />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>

                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E2BF41]">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-slate-200">
                      abongileloyiso@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+27738182811"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#E2BF41] transition group-hover:bg-[#E2BF41] group-hover:text-[#142336]">

                    {/* Phone Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                    </svg>

                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E2BF41]">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-slate-200">
                      073 818 2811
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abongile-bakubaku/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#E2BF41] transition group-hover:bg-[#E2BF41] group-hover:text-[#142336]">

                    {/* LinkedIn Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                    </svg>

                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E2BF41]">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-sm text-slate-200">
                      Abongile Bakubaku
                    </p>
                  </div>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#E2BF41] transition group-hover:bg-[#E2BF41] group-hover:text-[#142336]">

                    {/* TikTok Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77A4.83 4.83 0 0 1 15.72 2h-3.08v13.39a2.93 2.93 0 1 1-2.93-2.93c.2 0 .4.02.59.06v-3.13a6.06 6.06 0 1 0 5.42 6V8.93a7.86 7.86 0 0 0 3.87 1.02V6.87a4.86 4.86 0 0 1-1.99-.18Z" />
                    </svg>

                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E2BF41]">
                      TikTok
                    </p>

                    <p className="mt-1 text-sm text-slate-200">
                      Abongile Loyiso Bakubaku
                    </p>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
            >

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#142336]">
                  Send me a message
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Send a message directly from this portfolio.
                </p>
              </div>

              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-[#142336]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#142336] outline-none transition placeholder:text-slate-400 focus:border-[#E2BF41] focus:bg-white focus:ring-2 focus:ring-[#E2BF41]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#142336]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#142336] outline-none transition placeholder:text-slate-400 focus:border-[#E2BF41] focus:bg-white focus:ring-2 focus:ring-[#E2BF41]/20"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="mt-6">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-[#142336]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Job opportunity / Project / Collaboration"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#142336] outline-none transition placeholder:text-slate-400 focus:border-[#E2BF41] focus:bg-white focus:ring-2 focus:ring-[#E2BF41]/20"
                />
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#142336]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about the opportunity or project..."
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#142336] outline-none transition placeholder:text-slate-400 focus:border-[#E2BF41] focus:bg-white focus:ring-2 focus:ring-[#E2BF41]/20"
                />
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  ✅ Your message has been sent successfully. Thank you for
                  getting in touch!
                </div>
              )}

              {status === "error" && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  ❌ Something went wrong while sending your message.
                  Please try again or email me directly.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#142336] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#1d334b] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    {/* Send Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 14-7-4 14-3-6-7-1Z" />
                    </svg>
                  </>
                )}
              </button>

            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-[#E2BF41]/30 bg-[#E2BF41]/10 px-6 py-5 text-center"
        >
          <p className="text-sm font-medium text-[#142336]">
            Open to opportunities in{" "}
            <span className="font-bold">
              Application Development, Full-Stack Development,
              IT Support and Data Analytics.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;