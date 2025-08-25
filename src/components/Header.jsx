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

  // Handle email click
  const handleEmailClick = () => {
    window.location.href = 'mailto:shubhangam2005singh@gmail.com?subject=Hello%20Shubhangam&body=Hi%20Shubhangam,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards'
  }

  // Handle LinkedIn click
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/shubhangam2005singh/', '_blank', 'noopener,noreferrer')
  }

  // Handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/shsi_resume.pdf'
    link.download = 'Shubhangam_Singh_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Optional: Show a brief notification
    showDownloadNotification()
  }

  // Show download notification
  const showDownloadNotification = () => {
    const notification = document.createElement('div')
    notification.textContent = '📄 Resume downloaded successfully!'
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #10B981, #059669);
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      z-index: 10000;
      animation: slideIn 0.3s ease-out;
    `
    
    document.body.appendChild(notification)
    setTimeout(() => {
      notification.remove()
    }, 3000)
  }

  // Contact info with functionality
  const contactItems = [
    { 
      icon: "📍", 
      text: "Allahabad, UP", 
      label: "LOCATION",
      onClick: () => window.open('https://maps.google.com/?q=Allahabad,+Uttar+Pradesh', '_blank'),
      cursor: "pointer"
    },
    { 
      icon: "📱", 
      text: "8299363396", 
      label: "CONTACT",
      onClick: () => window.location.href = 'tel:+918299363396',
      cursor: "pointer"
    },
    { 
      icon: "📧", 
      text: "Email Me", 
      label: "EMAIL",
      onClick: handleEmailClick,
      cursor: "pointer"
    },
    { 
      icon: "💼", 
      text: "LinkedIn", 
      label: "NETWORK",
      onClick: handleLinkedInClick,
      cursor: "pointer"
    }
  ]

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden flex items-center justify-center">
      {/* Sophisticated geometric background */}
      <div className="absolute inset-0">
        {/* Subtle animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Elegant diagonal lines */}
        <div className="absolute inset-0 opacity-5">
          {[10, 30, 50, 70, 90].map((left, index) => (
            <div 
              key={index}
              className="absolute top-0 w-0.5 h-full transform rotate-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" 
              style={{ left: `${left}%` }} 
            />
          ))}
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
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
        {/* Name with elegant styling */}
        <div className="relative mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-wider mb-2 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-amber-100 bg-clip-text text-transparent animate-fade-in-up">
              SHUBHANGAM SINGH
            </span>
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-amber-200/10 opacity-20 blur-2xl animate-pulse" />
        </div>

        {/* Typing animation */}
        <div className="mb-12 h-12 flex items-center justify-center px-4">
          <p className="text-base sm:text-lg lg:text-2xl font-mono text-amber-200 tracking-wide text-center">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-4 sm:h-6 ml-1 bg-amber-400 animate-blink" />
          </p>
        </div>

        {/* Contact info cards with functionality */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto px-4">
          {contactItems.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className="group relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-amber-300/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up cursor-pointer transform hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 150}ms`,
                cursor: item.cursor
              }}
              role="button"
              tabIndex={0}
              aria-label={`${item.label}: ${item.text}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  item.onClick()
                }
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl mb-2 filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="text-xs text-amber-300 font-mono mb-2 tracking-widest">
                  {item.label}
                </div>
                <div className="text-sm sm:text-base text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                  {item.text}
                </div>
              </div>
              
              {/* Interactive hover line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400/50 to-orange-400/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              
              {/* Click ripple effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-active:opacity-30 group-active:animate-ping rounded-xl" />
            </div>
          ))}
        </div>

        {/* Enhanced download button */}
        <div className="relative animate-fade-in-up px-4" style={{ animationDelay: '800ms' }}>
          <button 
            onClick={handleResumeDownload}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-white/20 hover:border-amber-300/40 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
            aria-label="Download resume PDF"
          >
            <span className="relative z-10 flex items-center gap-3 text-white">
              <span className="text-xl sm:text-2xl">📄</span>
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-ping" />
            </span>
            
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            {/* Click feedback */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-100 rounded-xl transition-opacity duration-150" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse" />
          </div>
          <div className="text-xs text-amber-400 mt-2 font-mono">SCROLL</div>
        </div>
      </div>

      {/* Enhanced CSS animations */}
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
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation-duration: 0.8s;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-blink,
          .animate-pulse,
          .animate-bounce {
            animation: none;
          }
          
          * {
            transition-duration: 0.01s !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
