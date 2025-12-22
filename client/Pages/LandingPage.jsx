
const LandingPage = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 h-full px-4">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center flex-1 flex items-center justify-center">
        <div className="w-full">
          <div className="mb-4 inline-block">
            <span className="px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs sm:text-sm font-semibold">
              ✨ Modern Connection
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600">
            Connect Faster
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl text-slate-400 mb-6 sm:mb-12 max-w-2xl mx-auto">
            Experience the fastest, most secure messaging platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12">
            <a href="/login" className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-brand-500/50 transition-all duration-200 transform hover:scale-105 text-center">
              Get Started
            </a>
            <a href="#features" className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-slate-300 bg-slate-800 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-700 transition-all text-center">
              Learn More
            </a>
          </div>

          {/* Features Grid */}
          <div id="features" className="grid grid-cols-1 gap-4 mt-8 sm:mt-12 sm:gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 sm:p-6 shadow-lg border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🚀</div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-white">Lightning Fast</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Messages deliver in milliseconds.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 sm:p-6 shadow-lg border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🔒</div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-white">Secure & Private</h3>
              <p className="text-slate-400 text-xs sm:text-sm">End-to-end encryption.</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 sm:p-6 shadow-lg border border-slate-700 hover:border-blue-500/50 transition-all">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎨</div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-white">Beautiful Design</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Modern & intuitive interface.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LandingPage