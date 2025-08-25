import React, { useState, useEffect } from 'react'

const Header = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Computer Science Undergraduate | VIT Vellore"
  
  // Fixed useEffect with proper cleanup
  useEffect(() => {
    let index = 0
    let timer = null
    
    timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        if (timer) {
          clearInterval(timer)
        }
      }
    }, 80)
    
    // Proper cleanup function
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [fullText])

  // Show download notification - moved before handleResumeDownload to fix hoisting issue
  const showDownloadNotification = () => {
    try {
      const notification = document.createElement('div')
      notification.textContent = '📄 Resume downloaded successfully!'
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10B981, #059669);
        color: white;
        padding: 12px 24px;
        border-radius: 12px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        animation: slideIn 0.3s ease-out;
        pointer-events: none;
      `
      
      document.body.appendChild(notification)
      setTimeout(() => {
        if (notification && notification.parentNode) {
          notification.remove()
        }
      }, 3000)
    } catch (error) {
      console.error('Error showing notification:', error)
    }
  }

  // Handle email click
  const handleEmailClick = () => {
    try {
      window.location.href = 'mailto:shubhangam2005singh@gmail.com?subject=Hello%20Shubhangam&body=Hi%20Shubhangam,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards'
    } catch (error) {
      console.error('Error opening email:', error)
      alert('Please email me at: shubhangam2005singh@gmail.com')
    }
  }

  // Handle LinkedIn click
  const handleLinkedInClick = () => {
    try {
      window.open('https://www.linkedin.com/in/shubhangam2005singh/', '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error opening LinkedIn:', error)
      alert('Please visit: https://www.linkedin.com/in/shubhangam2005singh/')
    }
  }

  // Handle resume download
  const handleResumeDownload = () => {
    try {
      const link = document.createElement('a')
      link.href = '/shsi_resume.pdf'
      link.download = 'Shubhangam_Singh_Resume.pdf'
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      showDownloadNotification()
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Fallback: try to open in new tab
      try {
        window.open('/shsi_resume.pdf', '_blank', 'noopener,noreferrer')
        showDownloadNotification()
      } catch (fallbackError) {
        alert('Unable to download resume. Please refresh the page and try again.')
      }
    }
  }

  // Contact info with functionality
  const contactItems = [
    { 
      icon: "📍", 
      text: "Allahabad, UP", 
      label: "LOCATION",
      onClick: () => {
        try {
          window.open('https://maps.google.com/?q=Allahabad,+Uttar+Pradesh', '_blank', 'noopener,noreferrer')
        } catch (error) {
          console.error('Error opening maps:', error)
        }
      },
      cursor: "pointer"
    },
    { 
      icon: "📱", 
      text: "8299363396", 
      label: "CONTACT",
      onClick: () => {
        try {
          window.location.href = 'tel:+918299363396'
        } catch (error) {
          console.error('Error opening phone dialer:', error)
          alert('Phone: +91 8299363396')
        }
      },
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
      {/* Enhanced geometric background */}
      <div className="absolute inset-0">
        {/* Animated orbs with enhanced glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse shadow-2xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse shadow-2xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse shadow-xl" style={{ animationDelay: '4s' }} />
        
        {/* Enhanced diagonal lines */}
        <div className="absolute inset-0 opacity-10">
          {[8, 24, 40, 56, 72, 88].map((left, index) => (
            <div 
              key={index}
              className="absolute top-0 w-0.5 h-full transform rotate-12 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" 
              style={{ 
                left: `${left}%`,
                animationDelay: `${index * 0.5}s`
              }} 
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
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
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        {/* Name with enhanced 3D styling */}
        <div className="relative mb-8 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-wide mb-4 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-up drop-shadow-2xl">
              SHUBHANGAM SINGH
            </span>
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-30 blur-3xl animate-pulse" />
        </div>

        {/* Enhanced typing animation */}
        <div className="mb-16 h-16 flex items-center justify-center px-4">
          <p className="text-lg sm:text-xl lg:text-3xl font-mono text-cyan-300 tracking-wide text-center drop-shadow-lg">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-6 sm:h-8 ml-1 bg-cyan-400 animate-blink drop-shadow-lg" />
          </p>
        </div>

        {/* Enhanced contact info cards with 3D effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 max-w-5xl mx-auto px-4">
          {contactItems.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className="group relative p-6 sm:p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/15 transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-fade-in-up cursor-pointer shadow-xl hover:shadow-2xl"
              style={{ 
                animationDelay: `${index * 200}ms`,
                cursor: item.cursor,
                background: `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
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
              {/* Enhanced hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                {/* Enhanced icon with 3D effect */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-3xl sm:text-4xl shadow-lg group-hover:shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu">
                    <span className="drop-shadow-lg">{item.icon}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xs sm:text-sm text-cyan-300 font-mono mb-2 tracking-widest uppercase">
                    {item.label}
                  </div>
                  <div className="text-sm sm:text-base text-white font-semibold group-hover:text-cyan-100 transition-colors duration-300">
                    {item.text}
                  </div>
                </div>
              </div>
              
              {/* Enhanced hover effects */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-30 group-active:animate-ping rounded-2xl" />
            </div>
          ))}
        </div>

        {/* Enhanced download button with 3D effects */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <button 
            onClick={handleResumeDownload}
            className="group relative px-10 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 border border-white/30 hover:border-white/50 rounded-2xl font-bold text-lg sm:text-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-pink-500/25 focus:outline-none focus:ring-4 focus:ring-pink-500/50 backdrop-blur-sm"
            aria-label="Download resume PDF"
          >
            <span className="relative z-10 flex items-center gap-4 text-white drop-shadow-lg">
              <span className="text-2xl sm:text-3xl animate-bounce">📄</span>
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
              <div className="w-3 h-3 bg-cyan-300 rounded-full animate-ping" />
            </span>
            
            {/* Enhanced button effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-active:opacity-100 rounded-2xl transition-opacity duration-150" />
            
            {/* 3D button shadow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl opacity-30 blur group-hover:opacity-50 transition-opacity duration-300 -z-10" />
          </button>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-8 h-14 border-2 border-cyan-400/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <div className="w-1.5 h-4 bg-cyan-400 rounded-full mt-3 animate-pulse" />
          </div>
          <div className="text-xs text-cyan-400 mt-3 font-mono tracking-wider">SCROLL</div>
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
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
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) translateX(10px) rotate(120deg); 
          }
          66% { 
            transform: translateY(-10px) translateX(-10px) rotate(240deg); 
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 10s ease-in-out infinite;
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
          .animate-bounce,
          .animate-float-particle {
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
