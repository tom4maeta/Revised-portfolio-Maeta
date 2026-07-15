import { createElement, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { heroContent } from '../data/homeContent'

const MotionSection = motion.section
const MotionDiv = motion.div

const actionStyles = {
  primary:
    'bg-amber-400 text-gray-950 shadow-sm shadow-amber-500/30 hover:bg-amber-300',
  secondary:
    'border border-white/25 text-white hover:border-white/50 hover:bg-white/10'
}

function TypewriterRole({ role, roleHighlight }) {
  const prefix = `${role} - `
  const fullText = `${prefix}${roleHighlight}`
  const [visibleCharacters, setVisibleCharacters] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const shouldReduceMotion = useReducedMotion()
  const displayedCharacters = shouldReduceMotion
    ? fullText.length
    : visibleCharacters

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined
    }

    const isAtEnd = visibleCharacters === fullText.length
    const isAtStart = visibleCharacters === 0
    const delay = isTyping
      ? isAtEnd ? 1600 : 55
      : isAtStart ? 500 : 30

    const timeoutId = window.setTimeout(() => {
      if (isTyping) {
        if (isAtEnd) {
          setIsTyping(false)
        } else {
          setVisibleCharacters((current) => current + 1)
        }
      } else if (isAtStart) {
        setIsTyping(true)
      } else {
        setVisibleCharacters((current) => current - 1)
      }
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [fullText.length, isTyping, shouldReduceMotion, visibleCharacters])

  const visiblePrefix = prefix.slice(0, displayedCharacters)
  const visibleHighlight = roleHighlight.slice(
    0,
    Math.max(0, displayedCharacters - prefix.length)
  )

  return (
    <h2 className="typewriter mt-5 text-cyan-50" aria-label={fullText}>
      <span className="typewriter-spacer" aria-hidden="true">
        {prefix}
        <span className="text-amber-200">{roleHighlight}</span>
      </span>

      <span className="typewriter-output" aria-hidden="true">
        {visiblePrefix}
        <span className="text-amber-200">{visibleHighlight}</span>
        {!shouldReduceMotion && <span className="typewriter-caret" />}
      </span>
    </h2>
  )
}

function Hero({ content = heroContent }) {
  return (
    <MotionSection
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-screen min-h-[100svh] items-start overflow-x-hidden bg-gradient-to-br from-blue-700 via-cyan-700 to-emerald-700 pt-24 pb-14 transition-colors duration-200 dark:from-slate-950 dark:via-blue-950 dark:to-emerald-950 sm:pt-28 sm:pb-16 lg:items-center lg:pt-16"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="min-w-0 text-center lg:text-left">
            <h1 className="break-words text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {content.titlePrefix}{' '}
              <span className="text-amber-300">{content.name}</span>
            </h1>

            <TypewriterRole
              key={`${content.role}-${content.roleHighlight}`}
              role={content.role}
              roleHighlight={content.roleHighlight}
            />

            <p className="mx-auto mt-6 max-w-2xl break-words text-base leading-relaxed text-cyan-50/90 sm:text-lg lg:mx-0">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              {content.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition sm:w-auto ${actionStyles[action.variant]}`}
                >
                  {createElement(action.icon, { size: 15 })}
                  {action.label}
                </a>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 text-left sm:grid-cols-3">
              {content.highlights.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur transition-colors last:col-span-2 dark:border-white/10 dark:bg-white/5 sm:col-span-1 sm:p-4 sm:last:col-span-1"
                >
                  <p className="text-xl font-bold text-white sm:text-2xl">{item.value}</p>
                  <p className="mt-1 break-words text-[0.65rem] font-medium uppercase tracking-wide text-cyan-50/80 sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative mx-auto w-64 max-w-full sm:w-72 md:w-80 lg:mx-0 lg:w-[22rem] xl:w-96"
            >
              <div className="relative overflow-hidden rounded-lg border border-white/25 bg-white/10 p-2 shadow-2xl shadow-blue-950/30 ring-1 ring-white/15 backdrop-blur transition-colors dark:border-white/10 dark:bg-white/5 sm:p-3">
                <div className="aspect-[4/5] overflow-hidden rounded-md bg-white/10">
                  <img
                    src={content.image}
                    alt={content.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-[center_18%]"
                  />
                </div>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}

export default Hero
