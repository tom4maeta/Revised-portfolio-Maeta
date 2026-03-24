import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('#home')

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-600/90 backdrop-blur-md shadow-md border-b border-white/10">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 text-xl font-semibold text-white">
          Tom <span className="text-yellow-400">Maeta</span>
          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`relative text-sm transition-colors duration-200 ${
                active === link.href
                  ? 'text-white'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              {link.name}

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full bg-cyan-300 transition-transform duration-300 origin-left ${
                  active === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 border-t border-white/10' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 bg-blue-600/95 backdrop-blur-md gap-5">
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
                  : 'text-blue-100 hover:text-white'
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