import React, { useState, useEffect, useRef } from 'react'

export default function Personal() {
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

  const personalInfo = [
    {
      label: 'Date of Birth',
      value: '28 March 2005',
      icon: '🎂',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      delay: '0ms'
    },
    {
      label: 'Nationality',
      value: 'Indian',
      icon: '🇮🇳',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      delay: '100ms'
    },
    {
      label: 'Gender',
      value: 'Male',
      icon: '👨',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      delay: '200ms'
    },
    {
      label: 'Age',
      value: '20 Years',
      icon: '⏳',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      delay: '300ms'
    },
    {
      label: 'Languages',
      value: 'English, Hindi',
      icon: '🗣️',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      delay: '400ms'
    },
    {
      label: 'Interests',
      value: 'Technology, Coding, Community Service',
      icon: '🎯',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      delay: '500ms'
    }
  ]

  return (
    <div className="card bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100/40 to-green-100/40 rounded-full translate-y-16 -translate-x-16"></div>
      
      <div ref={ref} className="relative z-10">
        {/* Animated Title */}
        <h2 className={`section-title text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            👤 Personal Profile
          </span>
        </h2>

        {/* Personal Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInfo.map((info, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-700 hover:scale-105 cursor-pointer ${
                info.bgColor
              } border border-gray-100 shadow-md hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: info.delay }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                </div>

                {/* Label */}
                <div className="text-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {info.label}
                  </h3>
                </div>

                {/* Value */}
                <div className="text-center">
                  <p className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {info.value}
                  </p>
                </div>

                {/* Animated underline */}
                <div className={`mt-4 h-1 bg-gradient-to-r ${info.color} rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Corner decoration */}
              <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${info.color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Personal Motto/Quote Section */}
        <div className={`mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 shadow-lg relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-4 left-4 text-6xl text-purple-200 font-serif">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-purple-200 font-serif">"</div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="text-3xl">💫</div>
                <h3 className="text-2xl font-bold text-gray-800">Personal Philosophy</h3>
                <div className="text-3xl">✨</div>
              </div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium italic">
                "Passionate about leveraging technology to solve real-world problems and make a positive impact in the community. 
                Always eager to learn, grow, and contribute to meaningful projects."
              </p>
              
              {/* Signature */}
              <div className="mt-6 flex justify-center">
                <div className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md text-sm font-semibold">
                  - Shubhangam Singh
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className={`mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            🎉 Fun Facts About Me
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎮', fact: 'Enjoys problem-solving through competitive programming' },
              { icon: '🌱', fact: 'Actively involved in environmental conservation initiatives' },
              { icon: '📚', fact: 'Loves reading about emerging technologies and innovations' },
              { icon: '🤝', fact: 'Believes in the power of community-driven development' }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 bg-white/80 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: `${1200 + (index * 100)}ms` }}
              >
                <div className="text-3xl">{item.icon}</div>
                <p className="text-gray-700 font-medium">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Status Badge */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1400ms' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-100 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold">
                Currently seeking <strong className="text-blue-600">internship opportunities</strong> in tech
              </span>
            </div>
            <div className="text-2xl animate-bounce-subtle">🚀</div>
          </div>
        </div>
      </div>
    </div>
  )
}
