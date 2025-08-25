import React, { useState, useEffect, useRef } from 'react'

export default function Skills() {
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

  const cats = [
    { 
      title: 'Languages', 
      skills: [
        { name: 'Java', level: 90, color: 'from-orange-500 to-red-600' },
        { name: 'C/C++', level: 85, color: 'from-blue-500 to-indigo-600' },
        { name: 'Python', level: 88, color: 'from-green-500 to-emerald-600' },
        { name: 'Shell', level: 75, color: 'from-gray-500 to-gray-700' }
      ],
      icon: '💻',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      delay: '0ms'
    },
    { 
      title: 'Web', 
      skills: [
        { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500' },
        { name: 'React', level: 88, color: 'from-cyan-400 to-blue-500' },
        { name: 'NodeJS', level: 80, color: 'from-green-500 to-green-700' },
        { name: 'Django', level: 75, color: 'from-green-600 to-teal-600' }
      ],
      icon: '🌐',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      delay: '100ms'
    },
    { 
      title: 'Blockchain', 
      skills: [
        { name: 'Solidity', level: 78, color: 'from-purple-500 to-indigo-600' },
        { name: 'Solana', level: 70, color: 'from-green-400 to-purple-500' }
      ],
      icon: '⛓️',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      delay: '200ms'
    },
    { 
      title: 'Database', 
      skills: [
        { name: 'MySQL', level: 82, color: 'from-blue-600 to-indigo-700' }
      ],
      icon: '🗄️',
      color: 'from-blue-600 to-indigo-700',
      bgColor: 'bg-blue-50',
      delay: '300ms'
    },
    { 
      title: 'Data & Tools', 
      skills: [
        { name: 'R (statistical analysis)', level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'MATLAB (Simulink)', level: 75, color: 'from-orange-500 to-red-600' },
        { name: 'Linux', level: 85, color: 'from-yellow-400 to-orange-500' }
      ],
      icon: '📊',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50',
      delay: '400ms'
    },
    { 
      title: 'Concepts', 
      skills: [
        { name: 'Data structures & algorithms', level: 90, color: 'from-purple-500 to-pink-600' },
        { name: 'Software development lifecycle', level: 85, color: 'from-green-500 to-teal-600' },
        { name: 'Basic ML concepts', level: 75, color: 'from-indigo-500 to-purple-600' }
      ],
      icon: '🧠',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50',
      delay: '500ms'
    },
    { 
      title: 'Soft Skills', 
      skills: [
        { name: 'Problem solving', level: 92, color: 'from-green-500 to-emerald-600' },
        { name: 'Collaboration', level: 88, color: 'from-blue-500 to-cyan-600' },
        { name: 'Communication', level: 85, color: 'from-purple-500 to-pink-600' }
      ],
      icon: '🤝',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      delay: '600ms'
    },
    { 
      title: 'Languages (Spoken)', 
      skills: [
        { name: 'English', level: 95, color: 'from-blue-500 to-indigo-600' },
        { name: 'Hindi', level: 100, color: 'from-orange-500 to-red-600' }
      ],
      icon: '🗣️',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      delay: '700ms'
    }
  ]

  return (
    <div className="card bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-100/30 to-pink-100/30 rounded-full translate-y-16 -translate-x-16"></div>
      
      <div ref={ref} className="relative z-10">
        {/* Animated Title */}
        <h2 className={`section-title text-4xl font-bold text-center mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🛠️ Technical Arsenal
          </span>
        </h2>

        <p className={`text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          A comprehensive toolkit of technologies, languages, and methodologies I've mastered
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cats.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group relative overflow-hidden rounded-2xl ${category.bgColor} border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: category.delay }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="text-sm text-gray-500 font-medium">
                      {category.skills.length} skill{category.skills.length > 1 ? 's' : ''}
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ 
                        transitionDelay: `${parseInt(category.delay) + (skillIndex * 100) + 400}ms`
                      }}
                    >
                      {/* Skill Name and Percentage */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="relative">
                        {/* Background Bar */}
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          {/* Progress Bar */}
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1500 ease-out relative overflow-hidden ${
                              isVisible ? '' : 'w-0'
                            }`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${parseInt(category.delay) + (skillIndex * 100) + 800}ms`
                            }}
                          >
                            {/* Animated shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full animate-pulse"></div>
                          </div>
                        </div>
                        
                        {/* Skill Badge */}
                        <div 
                          className={`absolute -top-1 bg-gradient-to-r ${skill.color} text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform transition-all duration-1500 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{
                            left: isVisible ? `${Math.max(skill.level - 8, 0)}%` : '0%',
                            transitionDelay: `${parseInt(category.delay) + (skillIndex * 100) + 1000}ms`
                          }}
                        >
                          {skill.level}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Progress Bar */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${category.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}></div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Corner Decoration */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${category.color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              💡 Skills Overview
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: `${cats.reduce((acc, cat) => acc + cat.skills.length, 0)}+`, label: 'Total Skills', icon: '🎯' },
                { number: '8', label: 'Skill Categories', icon: '📂' },
                { number: '90%', label: 'Avg. Proficiency', icon: '📊' },
                { number: '∞', label: 'Always Learning', icon: '🚀' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 hover:scale-110 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${1000 + (index * 100)}ms` }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className={`mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-3xl">🎓</div>
              <h3 className="text-xl font-bold text-gray-800">Continuous Learning Philosophy</h3>
              <div className="text-3xl">✨</div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Technology evolves rapidly, and so do I. Each skill represents not just current knowledge, 
              but a commitment to staying at the forefront of innovation and best practices.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1400ms' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-full border border-green-100 shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold">
                Ready to apply these <strong className="text-blue-600">skills</strong> in your next project
              </span>
            </div>
            <div className="text-2xl animate-bounce-subtle">💪</div>
          </div>
        </div>
      </div>
    </div>
  )
}
