import React, { useState, useEffect, useRef } from 'react'
import { Send, Mail, Phone, MapPin, Linkedin, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState('')
  const ref = useRef(null)

  // Simple scroll animation hook
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

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')
    
    try {
      const resp = await fetch('https://formspree.io/f/xdklnzed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (resp.ok) {
        setStatus('ok')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      setStatus('err')
      const subject = `Contact from ${formData.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      window.location.href = `mailto:shubhangam2005singh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    } finally {
      setIsSubmitting(false)
    }
  }

  // Contact info with click handlers
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'Send me an email',
      fullContent: 'shubhangam2005singh@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      delay: '100ms',
      onClick: () => window.location.href = 'mailto:shubhangam2005singh@gmail.com?subject=Hello%20Shubhangam&body=Hi%20Shubhangam,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: 'Give me a call',
      fullContent: '+91 8299363396',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      delay: '200ms',
      onClick: () => window.location.href = 'tel:+918299363396'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Allahabad, Uttar Pradesh',
      fullContent: 'Allahabad, UP 211002',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      delay: '300ms',
      onClick: () => window.open('https://maps.google.com/?q=Allahabad,+Uttar+Pradesh,+India', '_blank', 'noopener,noreferrer')
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Connect with me',
      fullContent: 'Professional Profile',
      gradient: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      delay: '400ms',
      onClick: () => window.open('https://www.linkedin.com/in/shubhangam2005singh/', '_blank', 'noopener,noreferrer')
    }
  ]

  return (
    <div className="card bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-2xl overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-200/30 to-orange-200/30 rounded-full translate-x-16 translate-y-16"></div>
      
      <div ref={ref} className="relative z-10 p-6 sm:p-8">
        {/* Animated Title */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              📞 Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Let's connect and discuss how we can work together. I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8">Let's Connect!</h3>
            
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div
                  key={index}
                  onClick={info.onClick}
                  className={`group relative overflow-hidden rounded-2xl p-4 sm:p-6 transition-all duration-500 hover:scale-105 cursor-pointer ${
                    info.bgColor
                  } border border-gray-100 shadow-md hover:shadow-xl active:scale-95 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: info.delay }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      info.onClick()
                    }
                  }}
                  aria-label={`${info.title}: ${info.content}`}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 group-active:opacity-15 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                    <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${info.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 group-active:scale-95 transition-all duration-300`}>
                      <IconComponent size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors duration-300 text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300 text-sm">
                        {info.content}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">
                        {info.fullContent}
                      </p>
                    </div>
                    
                    {/* Enhanced click indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${info.gradient} text-white shadow-md group-active:scale-75 transition-transform duration-150`}>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Click ripple effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 group-active:animate-ping rounded-2xl transition-opacity duration-150"></div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label 
                    className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                      focusedField === 'name' ? 'text-blue-600' : 'text-gray-700'
                    }`} 
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <div className="relative">
                    <input
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:scale-105 hover:border-blue-300 ${
                        focusedField === 'name' 
                          ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-white' 
                          : 'border-gray-200'
                      }`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Your full name"
                      required
                    />
                    {formData.name && (
                      <div className="absolute right-3 top-3 text-green-500 animate-bounce-subtle">
                        <CheckCircle size={20} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label 
                    className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-blue-600' : 'text-gray-700'
                    }`}
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:scale-105 hover:border-blue-300 ${
                        focusedField === 'email' 
                          ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-white' 
                          : 'border-gray-200'
                      }`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder="your.email@example.com"
                      required
                    />
                    {formData.email && (
                      <div className="absolute right-3 top-3 text-green-500 animate-bounce-subtle">
                        <CheckCircle size={20} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label 
                    className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                      focusedField === 'message' ? 'text-blue-600' : 'text-gray-700'
                    }`}
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      rows="4"
                      className={`w-full px-4 py-3 border-2 rounded-xl resize-none transition-all duration-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:scale-105 hover:border-blue-300 ${
                        focusedField === 'message' 
                          ? 'border-blue-500 shadow-lg shadow-blue-500/20 bg-white' 
                          : 'border-gray-200'
                      }`}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Tell me about your project or just say hello!"
                      required
                    />
                    {formData.message && (
                      <div className="absolute right-3 top-3 text-green-500 animate-bounce-subtle">
                        <CheckCircle size={16} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 overflow-hidden ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105 focus:scale-105 active:scale-95'
                  }`}
                >
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Button content */}
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                        <span>Send Message</span>
                        <div className="w-0 group-hover:w-2 h-2 bg-white rounded-full transition-all duration-300"></div>
                      </>
                    )}
                  </div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 group-active:animate-ping rounded-xl"></div>
                </button>
              </form>

              {/* Status Messages */}
              {status === 'ok' && (
                <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800 animate-fade-in-up">
                  <div className="flex items-center gap-3">
                    <div className="text-green-600 animate-bounce-subtle">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Message sent successfully!</h4>
                      <p className="text-sm text-green-600 mt-1">Thank you for reaching out. I'll get back to you soon!</p>
                    </div>
                  </div>
                </div>
              )}

              {status === 'err' && (
                <div className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-800 animate-fade-in-up">
                  <div className="flex items-center gap-3">
                    <div className="text-red-600 animate-bounce-subtle">
                      <AlertCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Oops! Something went wrong.</h4>
                      <p className="text-sm text-red-600 mt-1">Please try again or contact me directly.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-8 sm:mt-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 shadow-md">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 font-medium text-sm sm:text-base">
                Usually responds within <strong className="text-blue-600">24 hours</strong>
              </span>
            </div>
            <div className="text-xl sm:text-2xl animate-bounce-subtle">⚡</div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
