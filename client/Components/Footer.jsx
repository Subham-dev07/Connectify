import React from 'react'

const Footer = () => {
  return (
    <footer className="h-auto md:h-[20vh] border-t border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-3 sm:px-6 pt-4 sm:pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="hidden md:block">
            <h3
              className="italic text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 mb-2"
              style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive", letterSpacing: '0.5px' }}
            >
              Connectify
            </h3>
            <p className="text-xs text-slate-400 leading-tight">
              Fast, secure, modern messaging.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 mb-2 text-xs">Product</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 mb-2 text-xs">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <h4 className="font-semibold text-slate-200 mb-2 text-xs">Legal</h4>
            <ul className="space-y-1">
              <li><a href="#privacy" className="text-xs text-slate-400 hover:text-blue-400 transition-colors">Privacy</a></li>
              <li><a href="#terms" className="text-xs text-slate-400 hover:text-blue-400 transition-colors">Terms</a></li>
              <li><a href="#" className="text-xs text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-3 sm:px-6 pb-4 sm:pb-3 border-t border-slate-700 pt-3 sm:pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <p className="text-xs text-slate-500 leading-tight">
            © {new Date().getFullYear()} Connectify
          </p>
          <div className="flex gap-3 sm:gap-4">
            <a href="#" className="text-slate-400 hover:text-blue-400 text-xs transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-xs transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-blue-400 text-xs transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer