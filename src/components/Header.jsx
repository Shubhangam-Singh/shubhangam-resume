import React, { useState, useEffect } from 'react'

const Header = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Computer Science Undergraduate | VIT Vellore"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden flex items-center justify-center">
      {/* Sophisticated geometric background */}
      <div className="absolute inset-0">
        {/* Subtle animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Elegant diagonal lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ width: '2px', height: '200%', left: '10%' }} />
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ width: '2px', height: '200%', left: '30%' }} />
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ width: '2px', height: '200%', left: '50%' }} />
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ width: '2px', height: '200%', left: '70%' }} />
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ width: '2px', height: '200%', left: '90%' }} />
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        {/* Name with elegant styling */}
        <div className="relative mb-8">
          <h1 className="text-4xl md:text-7xl font-black tracking-wider mb-2">
            <span className="bg-gradient-to-r from-white via-gray-200 to-amber-100 bg-clip-text text-transparent animate-fade-in-up">
              SHUBHANGAM SINGH
            </span>
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-amber-200/10 opacity-20 blur-2xl animate-pulse" />
        </div>

        {/* Typing animation */}
        <div className="mb-12 h-12 flex items-center justify-center">
          <p className="text-lg md:text-2xl font-mono text-amber-200 tracking-wide">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-6 ml-1 bg-amber-400 animate-blink" />
          </p>
        </div>

        {/* Contact info cards with professional styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {[
            { icon: "📍", text: "Allahabad, UP", label: "LOCATION" },
            { icon: "📱", text: "8299363396", label: "CONTACT" },
            { icon: "📧", text: "Email", label: "EMAIL" },
            { icon: "💼", text: "LinkedIn", label: "NETWORK" }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-amber-300/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-2xl mb-2 filter grayscale hover:grayscale-0 transition-all duration-300">{item.icon}</div>
              <div className="text-xs text-amber-300 font-mono mb-1 tracking-widest">{item.label}</div>
              <div className="text-sm text-gray-200 font-medium">{item.text}</div>
              
              {/* Subtle hover line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400/50 to-orange-400/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Professional download button */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-white/20 hover:border-amber-300/40 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/20">
            <span className="relative z-10 flex items-center gap-3 text-white">
              <span className="text-xl">📄</span>
              Download Resume
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
            </span>
            
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
          </div>
          <div className="text-xs text-amber-400 mt-2 font-mono">SCROLL</div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </header>
  )
}

export default Header
