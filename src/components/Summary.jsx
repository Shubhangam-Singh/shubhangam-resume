import React, { useState, useEffect, useRef } from 'react'

export default function Summary() {
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

  const highlights = [
    {
      icon: '🎓',
      title: 'Academic Excellence',
      description: 'B.Tech Computer Science at VIT Vellore with strong foundation',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      delay: '200ms'
    },
    {
      icon: '💻',
      title: 'Technical Proficiency',
      description: 'Proficient in Java, C/C++, Python and modern web technologies',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      delay: '400ms'
    },
    {
      icon: '🚀',
      title: 'Innovation Focus',
      description: 'Passionate about ML, web development, and real-world solutions',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      delay: '600ms'
    },
    {
      icon: '🎯',
      title: 'Career Ready',
      description: 'Seeking opportunities to contribute to impactful projects',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      delay: '800ms'
    }
  ]

  return (
    <div className="card bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-200/20 to-orange-200/20 rounded-full translate-x-32 translate-y-32"></div>
      
      <div ref={ref} className="relative z-10">
        {/* Animated Title */}
        <h2 className={`section-title text-4xl font-bold text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            👤 Professional Summary
          </span>
        </h2>

        {/* Main Summary Card */}
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 shadow-lg p-8 mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          {/* Quote decoration */}
          <div className="absolute top-4 left-4 text-6xl text-blue-200 font-serif opacity-50">"</div>
          <div className="absolute bottom-4 right-4 text-6xl text-blue-200 font-serif opacity-50">"</div>
          
          {/* Main content */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white shadow-lg">
                <span className="text-3xl">💡</span>
              </div>
            </div>
            
            <p className={`text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <span className="font-semibold text-gray-800">Motivated and detail-oriented</span> Computer Science undergraduate (B.Tech, VIT Vellore) with a 
              <span className="font-semibold text-blue-600"> strong foundation in programming, algorithms, and software development</span>. 
              Proficient in <span className="font-semibold text-green-600">Java, C/C++, Python</span>, and familiar with 
              <span className="font-semibold text-purple-600"> web technologies and MATLAB</span>. 
              Passionate about <span className="font-semibold text-orange-600">machine learning, web development</span>, and 
              solving real-world problems through code. Seeking <span className="font-semibold text-red-600">internship opportunities</span> to 
              contribute to impactful projects and gain practical industry experience.
            </p>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl ${highlight.bgColor} border border-gray-100 shadow-md hover:shadow-xl transition-all duration-700 hover:scale-105 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: highlight.delay }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className="text-2xl">{highlight.icon}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {highlight.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {highlight.description}
                </p>
                
                {/* Animated underline */}
                <div className={`mt-4 h-1 bg-gradient-to-r ${highlight.color} rounded-full transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1000ms' }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            🎯 Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Programming Languages',
                items: ['Java', 'C/C++', 'Python'],
                icon: '💻',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Development Areas',
                items: ['Web Development', 'Machine Learning', 'Algorithms'],
                icon: '🚀',
                color: 'from-green-500 to-teal-500'
              },
              {
                title: 'Tools & Technologies',
                items: ['MATLAB', 'Web Technologies', 'Problem Solving'],
                icon: '🛠️',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((competency, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
                style={{ transitionDelay: `${1200 + (index * 100)}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${competency.color} rounded-lg text-white`}>
                    <span className="text-xl">{competency.icon}</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">{competency.title}</h4>
                </div>
                
                <div className="space-y-2">
                  {competency.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${competency.color}`}></div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Objective */}
        <div className={`mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1400ms' }}>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
            <div className="text-center">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="text-3xl">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800">Career Objective</h3>
                <div className="text-3xl">✨</div>
              </div>
              
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
                To leverage my technical skills and academic foundation in a dynamic internship role where I can 
                contribute to innovative projects, learn from industry experts, and make a meaningful impact 
                while growing as a software developer.
              </p>
              
              {/* Status indicators */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for Internships</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Open to Remote Work</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Quick Learner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1600ms' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold">
                Ready to contribute to your <strong className="text-blue-600">next big project</strong>
              </span>
            </div>
            <div className="text-2xl animate-bounce-subtle">🚀</div>
          </div>
        </div>
      </div>
    </div>
  )
}
