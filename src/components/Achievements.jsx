import React, { useState, useEffect, useRef } from 'react'

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  
  // Simple scroll animation hook built-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  // Download KVPY certificate
  const downloadKVPY = () => {
    const link = document.createElement('a')
    link.href = '/kvpy.png'
    link.download = 'KVPY_Certificate_Shubhangam_Singh.png'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Show download notification
    showDownloadNotification('📜 KVPY Certificate downloaded successfully!')
  }

  // Show download notification
  const showDownloadNotification = (message) => {
    const notification = document.createElement('div')
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #3B82F6, #8B5CF6);
      color: white;
      padding: 12px 24px;
      border-radius: 12px;
      font-weight: 600;
      z-index: 10000;
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      animation: slideInRight 0.4s ease-out;
    `
    
    // Add keyframe animation
    if (!document.querySelector('#download-notification-styles')) {
      const style = document.createElement('style')
      style.id = 'download-notification-styles'
      style.textContent = `
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `
      document.head.appendChild(style)
    }
    
    document.body.appendChild(notification)
    setTimeout(() => {
      notification.style.animation = 'slideInRight 0.4s ease-out reverse'
      setTimeout(() => notification.remove(), 400)
    }, 3000)
  }
  
  const items = [
    {
      text: 'Qualified JEE Mains 2023 — 98.5 percentile',
      icon: '🎯',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      delay: '0ms',
      clickable: false
    },
    {
      text: 'Qualified KVPY SA (2022) — AIR 731',
      icon: '🚀',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      delay: '100ms',
      clickable: true,
      onClick: downloadKVPY,
      downloadText: 'Click to download certificate'
    },
    {
      text: 'Qualified NTSE Stage 1 (2021) — State Rank 15',
      icon: '🏆',
      color: 'from-green-400 to-teal-500',
      bgColor: 'bg-green-50',
      delay: '200ms',
      clickable: false
    },
    {
      text: 'Qualified PRMO (2019, 2021)',
      icon: '🎖️',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      delay: '300ms',
      clickable: false
    },
    {
      text: 'Qualified NSEJS (2019)',
      icon: '⭐',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-50',
      delay: '400ms',
      clickable: false
    }
  ]

  return (
    <div className="card bg-white shadow-xl rounded-2xl p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
      
      <div ref={ref} className="relative z-10">
        {/* Animated Title */}
        <h2 className={`section-title text-3xl font-bold text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🏆 Achievements & Competitive Exams
          </span>
        </h2>
        
        {/* Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((achievement, i) => (
            <div
              key={i}
              onClick={achievement.clickable ? achievement.onClick : undefined}
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-700 hover:scale-105 ${
                achievement.clickable ? 'cursor-pointer hover:shadow-2xl' : 'cursor-default hover:shadow-xl'
              } ${achievement.bgColor} border border-gray-100 shadow-md ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${achievement.clickable ? 'hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50' : ''}`}
              style={{ 
                transitionDelay: isVisible ? achievement.delay : '0ms'
              }}
              role={achievement.clickable ? "button" : undefined}
              tabIndex={achievement.clickable ? 0 : undefined}
              aria-label={achievement.clickable ? `${achievement.text} - ${achievement.downloadText}` : achievement.text}
              onKeyDown={(e) => {
                if (achievement.clickable && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault()
                  achievement.onClick()
                }
              }}
            >
              {/* Enhanced gradient overlay for clickable items */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 ${
                achievement.clickable 
                  ? 'group-hover:opacity-15 group-active:opacity-20' 
                  : 'group-hover:opacity-10'
              } transition-opacity duration-300 rounded-xl`}></div>
              
              {/* Achievement Content */}
              <div className="relative z-10 flex items-start gap-4">
                {/* Animated Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 ${
                    achievement.clickable ? 'group-hover:rotate-12 group-active:scale-95' : 'group-hover:rotate-12'
                  } transition-all duration-300`}>
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {achievement.icon}
                    </span>
                  </div>
                </div>
                
                {/* Achievement Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {achievement.text}
                  </p>
                  
                  {/* Download hint for clickable items */}
                  {achievement.clickable && (
                    <p className="text-xs text-blue-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      📥 {achievement.downloadText}
                    </p>
                  )}
                  
                  {/* Animated underline */}
                  <div className={`mt-3 h-0.5 bg-gradient-to-r ${achievement.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}></div>
                </div>
                
                {/* Achievement Badge */}
                <div className={`flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0`}>
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white text-xs font-semibold shadow-md`}>
                    {achievement.clickable ? '📥 Download' : '✨ Achieved'}
                  </div>
                </div>

                {/* Download Icon for clickable items */}
                {achievement.clickable && (
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Enhanced shine effect for clickable items */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                  achievement.clickable ? 'via-white/30' : 'via-white/20'
                } to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}></div>
              </div>
              
              {/* Corner decoration */}
              <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${achievement.color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-300`}></div>

              {/* Click ripple effect for clickable items */}
              {achievement.clickable && (
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-active:opacity-20 group-active:animate-ping rounded-xl transition-opacity duration-150"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className={`mt-12 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 font-medium">
                <strong className="text-blue-600">{items.length}</strong> Major Achievements
                <span className="text-blue-500 ml-2">📥 1 Certificate Available</span>
              </span>
            </div>
            <div className="text-2xl">🎉</div>
          </div>
        </div>

        {/* Download Instructions */}
        <div className={`mt-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Click on KVPY achievement to download certificate</span>
          </div>
        </div>
      </div>
    </div>
  )
}
