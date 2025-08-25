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
    <div className="card bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-100/50 to-blue-100/50 rounded-full translate-y-16 -translate-x-16"></div>
      
      <div ref={ref} className="relative z-10">
        {/* Animated Title */}
        <h2 className={`section-title text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎓 Education Journey
          </span>
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-12 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-200 via-green-200 to-purple-200 rounded-full transition-all duration-1500 ${
            isVisible ? 'scale-y-100' : 'scale-y-0'
          } origin-top`} style={{ transitionDelay: '300ms' }}></div>

          {/* Education Items */}
          <div className="space-y-12">
            {items.map((item, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: item.delay }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-10 top-6 z-20">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} shadow-lg border-4 border-white group-hover:scale-150 transition-all duration-300`}>
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} animate-pulse group-hover:animate-none`}></div>
                  </div>
                </div>

                {/* Education Card */}
                <div className={`ml-16 md:ml-24 relative overflow-hidden rounded-2xl ${item.bgColor} border-l-4 ${item.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 p-6">
                    {/* Header with Icon and Status */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        {item.status === 'current' && (
                          <div className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-semibold rounded-full shadow-md animate-pulse">
                            🔄 Current
                          </div>
                        )}
                        {item.status === 'completed' && (
                          <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold rounded-full shadow-md">
                            ✅ Completed
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-gray-600 font-semibold mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      🏛️ {item.institution}
                    </p>

                    {/* Period and Grade */}
                    <div className="flex flex-wrap justify-between items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="text-lg">📅</span>
                        <span className="font-medium">{item.period}</span>
                      </div>
                      
                      {/* Animated Grade Display */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-600">{item.grade}</span>
                        
                        {/* Grade Progress Circle */}
                        <div className="relative w-12 h-12">
                          <svg className="transform -rotate-90 w-12 h-12" viewBox="0 0 36 36">
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
                    <div className={`mt-4 h-1 bg-gradient-to-r ${item.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Corner Decoration */}
                  <div className={`absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br ${item.color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Summary Stats */}
        <div className={`mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Overall GPA */}
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">8.99</div>
              <div className="text-sm text-gray-600 font-medium">Current CGPA</div>
            </div>

            {/* Highest Score */}
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-sm text-gray-600 font-medium">Highest Score</div>
            </div>

            {/* Years of Education */}
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-2">⏰</div>
              <div className="text-2xl font-bold text-purple-600 mb-1">16+</div>
              <div className="text-sm text-gray-600 font-medium">Years Learning</div>
            </div>
          </div>
        </div>

        {/* Achievement Badge */}
        <div className={`text-center mt-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1000ms' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full border border-yellow-200 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold">
                Consistent <strong className="text-orange-600">Academic Excellence</strong>
              </span>
            </div>
            <div className="text-2xl animate-bounce-subtle">🌟</div>
          </div>
        </div>
      </div>
    </div>
  )
}
