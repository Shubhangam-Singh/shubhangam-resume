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
  
  const items = [
    {
      text: 'Qualified JEE Mains 2023 — 98.5 percentile',
      icon: '🎯',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      delay: '0ms'
    },
    {
      text: 'Qualified KVPY SA (2022) — AIR 731',
      icon: '🚀',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      delay: '100ms'
    },
    {
      text: 'Qualified NTSE Stage 1 (2021) — State Rank 15',
      icon: '🏆',
      color: 'from-green-400 to-teal-500',
      bgColor: 'bg-green-50',
      delay: '200ms'
    },
    {
      text: 'Qualified PRMO (2019, 2021)',
      icon: '🎖️',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      delay: '300ms'
    },
    {
      text: 'Qualified NSEJS (2019)',
      icon: '⭐',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-50',
      delay: '400ms'
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
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-700 hover:scale-105 cursor-pointer ${
                achievement.bgColor
              } border border-gray-100 shadow-md hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: isVisible ? achievement.delay : '0ms'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
              
              {/* Achievement Content */}
              <div className="relative z-10 flex items-start gap-4">
                {/* Animated Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
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
                  
                  {/* Animated underline */}
                  <div className={`mt-3 h-0.5 bg-gradient-to-r ${achievement.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`}></div>
                </div>
                
                {/* Achievement Badge */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white text-xs font-semibold shadow-md`}>
                    ✨ Achieved
                  </div>
                </div>
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Corner decoration */}
              <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${achievement.color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-300`}></div>
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
              </span>
            </div>
            <div className="text-2xl">🎉</div>
          </div>
        </div>
      </div>
    </div>
  )
}
