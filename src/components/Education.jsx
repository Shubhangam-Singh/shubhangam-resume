import React, { useState, useEffect, useRef } from 'react'

export default function Education() {
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
      degree: 'B.Tech, Computer Science & Engineering',
      institution: 'VIT Vellore',
      period: 'Expected Graduation: July 2027',
      grade: 'CGPA: 8.99 / 10',
      icon: '🎓',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      status: 'current',
      delay: '0ms',
      gradePercent: 90
    },
    {
      degree: 'Class XII (CBSE)',
      institution: 'MV Convent, Allahabad',
      period: '2023',
      grade: 'Percentage: 93%',
      icon: '📚',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      status: 'completed',
      delay: '200ms',
      gradePercent: 93
    },
    {
      degree: 'Class X (ICSE)',
      institution: "Boys' High School & College, Allahabad",
      period: '2021',
      grade: 'Percentage: 95%',
      icon: '🏫',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
      status: 'completed',
      delay: '400ms',
      gradePercent: 95
    }
  ]

  return (
    <div className="card bg-white shadow-xl rounded-2xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16 lg:-translate-y-20 lg:translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-tr from-green-100/40 to-blue-100/40 rounded-full translate-y-10 -translate-x-10 sm:translate-y-12 sm:-translate-x-12 lg:translate-y-16 lg:-translate-x-16"></div>
      
      <div ref={ref} className="relative z-10">
        {/* Title */}
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎓 Education Journey
          </span>
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-6 sm:left-8 lg:left-12 top-6 sm:top-8 bottom-6 sm:bottom-8 w-0.5 sm:w-1 bg-gradient-to-b from-blue-200 via-green-200 to-purple-200 rounded-full transition-all duration-1200 ${
            isVisible ? 'scale-y-100' : 'scale-y-0'
          } origin-top`} style={{ transitionDelay: '300ms' }}></div>

          {/* Education Items */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {items.map((item, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: item.delay }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 sm:left-6 lg:left-10 top-6 sm:top-8 z-20">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg border-2 sm:border-3 lg:border-4 border-white group-hover:scale-125 sm:group-hover:scale-140 lg:group-hover:scale-150 transition-all duration-300`}>
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} ${item.status === 'current' ? 'animate-pulse' : ''} group-hover:animate-none`}></div>
                  </div>
                </div>

                {/* Education Card */}
                <div className={`ml-12 sm:ml-16 lg:ml-24 relative overflow-hidden rounded-xl sm:rounded-2xl ${item.bgColor} border-l-2 sm:border-l-3 lg:border-l-4 ${item.borderColor} shadow-md hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 group-hover:scale-102 sm:group-hover:scale-105`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 p-4 sm:p-5 lg:p-6">
                    {/* FIXED: Header with proper spacing to prevent overlap */}
                    <div className="flex flex-col gap-3 mb-4">
                      {/* Icon and Status Row */}
                      <div className="flex items-center justify-between">
                        <div className={`p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg group-hover:rotate-6 sm:group-hover:rotate-12 group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                          <span className="text-lg sm:text-xl lg:text-2xl">{item.icon}</span>
                        </div>
                        
                        {/* Status Badge - Fixed positioning */}
                        <div className="flex-shrink-0">
                          {item.status === 'current' && (
                            <div className="px-3 py-1.5 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold rounded-full shadow-md animate-pulse whitespace-nowrap">
                              🔄 Current
                            </div>
                          )}
                          {item.status === 'completed' && (
                            <div className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold rounded-full shadow-md whitespace-nowrap">
                              ✅ Completed
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Degree Title - Full width without overlap */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight w-full">
                        {item.degree}
                      </h3>
                    </div>

                    {/* Institution */}
                    <p className="text-gray-600 font-semibold mb-4 group-hover:text-gray-700 transition-colors duration-300 text-sm sm:text-base">
                      🏛️ {item.institution}
                    </p>

                    {/* Period and Grade - Better spacing */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                        <span className="text-sm sm:text-lg">📅</span>
                        <span className="font-medium">{item.period}</span>
                      </div>
                      
                      {/* Grade with Progress Circle */}
                      <div className="flex items-center gap-2 sm:gap-3 justify-end">
                        <span className="text-xs sm:text-sm font-medium text-gray-600">{item.grade}</span>
                        
                        {/* Progress Circle */}
                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                          <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 36 36">
                            {/* Background Circle */}
                            <path
                              className="text-gray-200"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="transparent"
                              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            {/* Progress Circle */}
                            <path
                              className={`transition-all duration-1500 ease-out ${item.color.includes('blue') ? 'text-blue-500' : item.color.includes('green') ? 'text-green-500' : 'text-purple-500'}`}
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              fill="transparent"
                              strokeDasharray={`${isVisible ? item.gradePercent : 0}, 100`}
                              d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                              style={{ transitionDelay: `${parseInt(item.delay) + 800}ms` }}
                            />
                          </svg>
                          {/* Percentage Text */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-gray-700">{item.gradePercent}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Animated Underline */}
                    <div className={`mt-4 h-0.5 sm:h-1 bg-gradient-to-r ${item.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Corner Decoration */}
                  <div className={`absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br ${item.color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badge */}
        <div className={`text-center mt-8 sm:mt-10 lg:mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full border border-yellow-200 shadow-lg max-w-full">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-gray-700 font-semibold text-sm sm:text-base">
                Consistent <strong className="text-orange-600">Academic Excellence</strong>
              </span>
            </div>
            <div className="text-xl sm:text-2xl animate-bounce-subtle flex-shrink-0">🌟</div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .group-hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  )
}
