import React from 'react'
import { motion } from 'framer-motion'
import resumePDF from '../assets/resume.pdf'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-blue-700 to-cyan-600 pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >

          {/* TEXT SECTION */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5  ">
              Hi, I'm <span className="text-yellow-400">Tom Maeta</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-200 font-semibold mb-6 typewritter ">
              DevOps - <span className="text-orange-400">Cybersecurity Enthusiast</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              I design and develop secure, scalable software applications using modern technologies.
              My focus is on performance, clean architecture, and cybersecurity best practices.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 bg-yellow-400 text-black font-medium rounded-md shadow hover:bg-yellow-500 transition text-center"
              >
                View Projects
              </a>

              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition text-center"
              >
                View Resume
              </a>

            </div>

          </div>

          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">

            <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 animate-pulse-">

              <img
                src="/profile.png"
                alt="Tom Maeta"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top rounded-2xl border border-white/20 shadow-lg"
              />

              {/* decorative glow */}
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-yellow-400 to-cyan-400 opacity-20 blur-2xl -z-10"></div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero