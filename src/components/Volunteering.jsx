import React, { useState, useEffect, useRef } from 'react'

export default function Volunteering() {
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

  const activities = [
    {
      text: 'Volunteer, NSS / Environmental Club — organized community service activities and awareness programs.',
      icon: '🌱',
      color: 'from-green-500 to-emerald-600',
      delay: '0ms'
    },
    {
      text: 'Active participant in college technical and coding groups',
      icon: '💻', 
      color: 'from-blue-500 to-indigo-600',
      delay: '200ms'
    }
  ]

  return (
    <div className="card bg-white shadow-xl rounded-2xl p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full -translate-y-16 translate-x-16"></div>
      
      <div ref={ref} className="relative z-10">
        {/* Title */}
        <h2 className={`section-title text-3xl font-bold text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🤝 Co-curricular & Volunteering
          </span>
        </h2>

        {/* Activities */}
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`group flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: activity.delay }}
            >
              {/* Icon */}
              <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${activity.color} rounded-xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                <span className="text-2xl">{activity.icon}</span>
              </div>
              
              {/* Text */}
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 flex-1">
                {activity.text}
              </p>
            </div>
          ))}
        </div>

        {/* Simple footer */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-100 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">Committed to community service</span>
          </div>
        </div>
      </div>
    </div>
  )
}
