import React, { useState, useEffect, useRef } from 'react'

export default function Experience() {
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

  const exps = [
    {
      title: 'Intern',
      company: 'Local NGO',
      duration: '2024-2025',
      type: 'Volunteer',
      location: 'Allahabad, UP',
      icon: '🤝',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      status: 'completed',
      delay: '0ms',
      bullets: [
        'Supported community-focused tech initiatives and awareness programs.',
        'Volunteered with NSS/Environmental Club to organize events and drive community outreach.',
        'Improved communication materials and helped coordinate volunteer activities.'
      ]
    }
  ]

  return (
    <div className="card bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-green-100/40 to-blue-100/40 rounded-full -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-100/40 to-pink-100/40 rounded-full translate-x-16 translate-y-16"></div>
      
      <div ref={ref} className="relative z-10">
        {/* Animated Title */}
        <h2 className={`section-title text-4xl font-bold text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            💼 Professional Experience
          </span>
        </h2>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line - for future multiple experiences */}
          <div className={`absolute left-8 md:left-12 top-8 bottom-8 w-1 bg-gradient-to-b from-green-200 to-blue-200 rounded-full transition-all duration-1500 ${
            isVisible ? 'scale-y-100' : 'scale-y-0'
          } origin-top`} style={{ transitionDelay: '300ms' }}></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {exps.map((exp, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: exp.delay }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-10 top-8 z-20">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} shadow-lg border-4 border-white group-hover:scale-150 transition-all duration-300`}>
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} group-hover:animate-none`}></div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className={`ml-16 md:ml-24 relative overflow-hidden rounded-2xl ${exp.bgColor} border-l-4 ${exp.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                          <span className="text-3xl">{exp.icon}</span>
                        </div>
                        
                        {/* Title and Company */}
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-gray-600 font-semibold group-hover:text-gray-700 transition-colors duration-300">
                            🏢 {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-lg">📅</span>
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-lg">📍</span>
                        <span className="font-medium">{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-lg">💼</span>
                        <span className="font-medium">{exp.type}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-xl">🎯</span>
                        Key Responsibilities
                      </h4>
                      
                      <div className="space-y-3">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <div
                            key={bulletIndex}
                            className={`flex items-start gap-3 p-3 rounded-lg bg-white/60 border border-gray-100 hover:shadow-md transition-all duration-300 ${
                              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                            }`}
                            style={{ 
                              transitionDelay: `${parseInt(exp.delay) + (bulletIndex * 100) + 400}ms`
                            }}
                          >
                            {/* Bullet Point */}
                            <div className={`flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2`}></div>
                            
                            {/* Bullet Text */}
                            <p className="text-gray-700 leading-relaxed">{bullet}</p>
                            
                            {/* Achievement Icon */}
                            <div className={`flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                              <div className="text-green-500 text-lg">✅</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="text-xl">🛠️</span>
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Community Outreach', 'Event Management', 'Communication', 'Leadership', 'Coordination'].map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-sm font-medium rounded-full shadow-md hover:scale-110 transition-all duration-300 cursor-pointer ${
                              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ 
                              transitionDelay: `${parseInt(exp.delay) + (skillIndex * 50) + 800}ms`
                            }}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className={`mt-6 h-1 bg-gradient-to-r ${exp.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}></div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Corner Decoration */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${exp.color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className={`mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-100 shadow-lg">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-4xl">🌟</div>
              <h3 className="text-2xl font-bold text-gray-800">Building Tomorrow, Today</h3>
              <div className="text-4xl">🚀</div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Committed to making a positive impact through technology and community engagement. 
              Always ready to tackle new challenges and contribute to meaningful projects.
            </p>
            
            {/* Call to Action */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <span className="font-semibold">Ready for New Opportunities</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className={`text-center mt-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 font-medium">
                Looking to expand <strong className="text-blue-600">professional experience</strong>
              </span>
            </div>
            <div className="text-2xl animate-bounce-subtle">💫</div>
          </div>
        </div>
      </div>
    </div>
  )
}
