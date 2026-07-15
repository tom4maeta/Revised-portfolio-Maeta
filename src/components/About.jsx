import { createElement } from 'react'
import { motion } from 'framer-motion'
import { aboutContent } from '../data/homeContent'
import SectionHeader from './SectionHeader'
import SectionShell from './SectionShell'

const MotionDiv = motion.div

function FeatureCard({ feature, index }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500/50"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600 transition group-hover:bg-amber-100 group-hover:text-amber-600 dark:bg-blue-500/10 dark:text-blue-300 dark:group-hover:bg-amber-300/10 dark:group-hover:text-amber-300">
        {createElement(feature.icon, { size: 18 })}
      </div>

      <div>
        <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
          {feature.title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-600 dark:text-slate-300 sm:text-sm">
          {feature.description}
        </p>
      </div>
    </MotionDiv>
  )
}

function About({ content = aboutContent }) {
  return (
    <SectionShell id="about" className="bg-gray-50 dark:bg-slate-950">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              title={content.title}
              highlightedTitle={content.highlightedTitle}
              description={content.description}
              align="left"
            />

            <div className="space-y-4 text-sm leading-relaxed text-gray-700 dark:text-slate-300 sm:text-base">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </MotionDiv>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <img
              src={content.image}
              alt="Tom Maeta"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </MotionDiv>
      </div>
    </SectionShell>
  )
}

export default About
