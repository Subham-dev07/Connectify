import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="h-auto md:h-[10vh] bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 shadow-lg relative">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-3 sm:px-6 py-3 sm:py-0 md:h-full">
        <Link to="/" className="flex items-center gap-2">
          {/* Gradient cursive for >= sm, plain white fallback for smaller screens */}
          <div aria-label="Connectify Home">
            <span className=" sm:inline italic text-2xl sm:text-3xl font-bold bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600"
              style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", letterSpacing: '0.5px' }}>
              Connectify
            </span>
            <span className="inline sm:hidden text-2xl font-bold text-slate-100"
              style={{ fontFamily: "'Lucida Sans', system-ui, -apple-system, sans-serif" }}>
              Connectify
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 px-3 py-2 rounded-lg transition-colors">
            Home
          </Link>
          <a href="#features" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 px-3 py-2 rounded-lg transition-colors">
            Features
          </a>
          <a href="#about" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 px-3 py-2 rounded-lg transition-colors">
            About
          </a>
          <Link to="/login" className="text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 px-3 py-2 rounded-lg transition-colors">
            Login
          </Link>
          
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span className={`w-5 h-0.5 bg-blue-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-blue-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-blue-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-700 md:hidden z-50">
            <nav className="flex flex-col p-3 gap-1">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors hover:bg-slate-700"
              >
                Home
              </Link>
              <a 
                href="#features" 
                onClick={() => setIsOpen(false)}
                className="text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors hover:bg-slate-700"
              >
                Features
              </a>
              <a 
                href="#about" 
                onClick={() => setIsOpen(false)}
                className="text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors hover:bg-slate-700"
              >
                About
              </a>
              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)}
                className="text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors hover:bg-slate-700"
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header