import { useEffect, useState } from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const savedTheme = window.localStorage.getItem('theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function ThemeToggle({ isDark, onToggle }) {
  const nextTheme = isDark ? 'light' : 'dark'
  const Icon = isDark ? FaSun : FaMoon

  return (
    <div className="group relative">
      <button
        type="button"
        onClick={onToggle}
        className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/20 bg-white/10 text-white transition focus:outline-none focus:ring-2 ${
          isDark
            ? 'hover:border-amber-300 hover:bg-amber-300 hover:text-slate-950 focus:ring-amber-300'
            : 'hover:border-slate-950 hover:bg-slate-950 hover:text-amber-300 focus:ring-slate-950'
        }`}
        aria-label={`Switch to ${nextTheme} mode`}
        title={`Switch to ${nextTheme} mode`}
      >
        <Icon size={isDark ? 17 : 16} />
      </button>

      <span className="pointer-events-none absolute right-0 top-full mt-2 translate-y-1 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:bg-white dark:text-slate-950">
        Switch to {nextTheme}
      </span>
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [theme, setTheme] = useState(getInitialTheme)

  const isDark = theme === 'dark'

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', isDark)
    root.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [isDark, theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-blue-600/90 shadow-md backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => setActive('#home')}
          className="flex items-center gap-2 text-xl font-semibold text-white"
        >
          Tom <span className="text-amber-300">Maeta</span>
          <span className="h-2 w-2 rounded-full bg-amber-300" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`group relative text-sm transition-colors duration-200 ${
                  active === link.href
                    ? 'text-white'
                    : 'text-blue-100 hover:text-white dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full origin-left bg-amber-300 transition-transform duration-300 ${
                    active === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            ))}
          </div>

          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-xl text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-5 bg-blue-600/95 px-6 py-4 backdrop-blur-md transition-colors dark:bg-slate-950/95">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.href)
                setIsOpen(false)
              }}
              className={`text-sm transition-colors duration-200 ${
                active === link.href
                  ? 'text-white'
                  : 'text-blue-100 hover:text-white dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
