import React from 'react'
import { motion } from 'framer-motion'
import {
  FaShieldAlt,
  FaBullseye,
  FaLightbulb,
  FaCode,
  FaRocket,
  FaBookOpen
} from 'react-icons/fa'

/* =========================
   DATA (clean separation)
========================= */
const features = [
  {
    icon: FaShieldAlt,
    title: "Security Focused",
    desc: "Implementing secure coding practices and protecting applications from vulnerabilities."
  },
  {
    icon: FaBullseye,
    title: "Goal-Oriented",
    desc: "Focused on delivering efficient solutions aligned with project objectives."
  },
  {
    icon: FaLightbulb,
    title: "Problem Solver",
    desc: "Analyzing complex challenges and building scalable, practical solutions."
  },
  {
    icon: FaCode,
    title: "Clean Architecture",
    desc: "Writing structured, maintainable code designed for long-term scalability."
  },
  {
    icon: FaRocket,
    title: "Performance Driven",
    desc: "Optimizing applications for speed, efficiency, and reliability."
  },
  {
    icon: FaBookOpen,
    title: "Continuous Learning",
    desc: "Actively improving skills and staying current with modern technologies."
  }
]

/* =========================
   CARD COMPONENT
========================= */
function FeatureCard({ icon: Icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group flex items-start gap-4 bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition"
    >
      {/* ICON */}
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition">
        <Icon size={18} />
      </div>

      {/* TEXT */}
      <div>
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

/* =========================
   MAIN COMPONENT
========================= */
function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gray-50 pt-20 sm:pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center  bg-purple-50 p-8 rounded-lg shadow-md">

          {/* LEFT SIDE */}
          <div className="md:col-span-7">

            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left mb-10"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                About <span className="text-blue-600">Me</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
                I am a DevOps Engineer / Cybersecurity Enthusiast focused on building secure, scalable, and efficient systems. I specialize in developing and managing modern web applications with an emphasis on performance, reliability, and clean architecture.

With <span className="font-bold text-blue-600">2 years</span> of experience in full-stack development and system operations, I leverage modern technologies and best practices to deliver robust, maintainable solutions. I am particularly interested in automation, cloud infrastructure, and integrating security throughout the development lifecycle.

I am a detail-oriented problem solver who values continuous improvement, collaboration, and delivering high-quality, real-world solutions aligned with industry standards.
              </p>
            </motion.div>

            {/* CARDS GRID */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {features.map((item, index) => (
                <FeatureCard key={index} {...item} index={index} />
              ))}
            </div>

          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="md:col-span-5 flex justify-center md:justify-end">

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md"
            >

              {/* BACKGROUND ACCENT */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-10 blur-xl"></div>

            
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl border border-gray-200 shadow-md bg-white/5 ring-1 ring-white/5">
                <img
                  src="/profile.png"
                  alt="Tom Maeta"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top rounded-2xl border-none"
                />
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About