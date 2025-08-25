import React, { useState, useEffect, useRef } from "react";

const Projects = () => {
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

  const projects = [
    {
      name: "Parking Lot Management",
      description: "A comprehensive parking lot management system using advanced OOP concepts for efficient space allocation and vehicle tracking.",
      tech: "C++",
      link: "https://github.com/Shubhangam-Singh/Parking-Lot-Management-Project",
      icon: "🚗",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      category: "System Design",
      features: ["OOP Implementation", "Space Management", "Real-time Tracking"],
      delay: "0ms"
    },
    {
      name: "YOLO Logo Detection",
      description: "AI-powered logo detection system that identifies company logos and provides stock market information using machine learning.",
      tech: "Python, YOLO",
      link: "https://github.com/Shubhangam-Singh/Yolo_Logo_Detection",
      icon: "🔍",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      category: "Machine Learning",
      features: ["YOLO Algorithm", "Image Processing", "Stock API Integration"],
      delay: "200ms"
    },
    {
      name: "Logitrack System",
      description: "Advanced logistics tracking application for efficient resource management with real-time monitoring capabilities.",
      tech: "Python",
      link: "https://github.com/Shubhangam-Singh/logitrack-system",
      icon: "📦",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      category: "Web Application",
      features: ["Resource Management", "Real-time Tracking", "Analytics Dashboard"],
      delay: "400ms"
    },
    {
      name: "Oscillatory System",
      description: "Interactive physics simulation featuring dynamic oscillatory systems with smooth animations and user controls.",
      tech: "JavaScript",
      link: "https://github.com/Shubhangam-Singh/Oscillatory-System",
      icon: "🌊",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      category: "Interactive Simulation",
      features: ["Physics Engine", "Interactive Controls", "Smooth Animations"],
      delay: "600ms"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-200/20 to-orange-200/20 rounded-full translate-x-32 translate-y-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref}>
          {/* Animated Title */}
          <h2 className={`text-4xl font-bold text-center mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🚀 Featured Projects
            </span>
          </h2>
          
          <p className={`text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '200ms' }}>
            A showcase of innovative solutions combining cutting-edge technology with practical applications
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: project.delay }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Project Icon */}
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <span className="text-3xl">{project.icon}</span>
                      </div>
                      
                      {/* Project Info */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300">
                          {project.name}
                        </h3>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.color} shadow-md`}>
                          {project.category}
                        </div>
                      </div>
                    </div>

                    {/* GitHub Link Icon */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    >
                      <div className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </div>
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex items-center gap-2">
                      <div className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full shadow-sm`}>
                        {project.tech}
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`flex items-center gap-2 transition-all duration-300 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                          }`}
                          style={{ transitionDelay: `${parseInt(project.delay) + (featureIndex * 100) + 400}ms` }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn inline-flex items-center gap-3 w-full px-6 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:scale-105 justify-center`}
                  >
                    <span>View on GitHub</span>
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    
                    {/* Button ripple effect */}
                    <div className="absolute inset-0 bg-white opacity-0 group-active/btn:opacity-20 group-active/btn:animate-ping rounded-xl"></div>
                  </a>

                  {/* Progress Bar Animation */}
                  <div className={`mt-6 h-1 bg-gradient-to-r ${project.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}></div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Corner Decoration */}
                <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${project.color} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Portfolio Stats */}
          <div className={`mt-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '800ms' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                🏆 Portfolio Impact
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: '4+', label: 'Projects Completed', icon: '🚀' },
                  { number: '4', label: 'Programming Languages', icon: '💻' },
                  { number: '100%', label: 'Open Source', icon: '📖' },
                  { number: '∞', label: 'Learning Journey', icon: '🌟' }
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

          {/* Call to Action */}
          <div className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1200ms' }}>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-semibold">
                  Explore all projects on <strong className="text-blue-600">GitHub</strong>
                </span>
              </div>
              <div className="text-2xl animate-bounce-subtle">💫</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
