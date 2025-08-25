/*  src/App.jsx – with advanced scrolling footer animation */

import React, { useState, useEffect } from 'react'
import Header           from './components/Header.jsx'
import Navigation       from './components/Navigation.jsx'
import Summary          from './components/Summary.jsx'
import Skills           from './components/Skills.jsx'
import Education        from './components/Education.jsx'
import Experience       from './components/Experience.jsx'
import Projects         from './components/Projects.jsx'
import Achievements     from './components/Achievements.jsx'
import Volunteering     from './components/Volunteering.jsx'
import Personal         from './components/Personal.jsx'
import Contact          from './components/Contact.jsx'
import MobileNavigation from './components/MobileNavigation.jsx'
import './styles/MobileNavigation.css'

// Advanced Scrolling Footer Component (inline)
const AdvancedScrollingFooter = () => {
  const [isVisible, setIsVisible] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    const footer = document.getElementById('advanced-footer')
    if (footer) observer.observe(footer)

    return () => observer.disconnect()
  }, [])

  return (
    <footer id="advanced-footer" className="advanced-scrolling-footer">
      {/* Animated Background Elements */}
      <div className="background-layers">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Main Scrolling Content */}
      <div className={`scroll-container ${isVisible ? 'animate' : ''}`}>
        <div className="scroll-content">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="scroll-segment">
              <span className="text-item glow">Made with</span>
              <span className="emoji heart">❤️</span>
              <span className="text-item glow">by Shubhangam Singh</span>
              <span className="separator pulse">•</span>
              <span className="text-item">© {currentYear}</span>
              <span className="separator pulse">•</span>
              <span className="text-item tech">Built with React</span>
              <span className="emoji react">⚛️</span>
              <span className="separator pulse">•</span>
              <span className="text-item tech">Styled with Tailwind CSS</span>
              <span className="emoji tailwind">🎨</span>
              <span className="separator pulse">•</span>
              <span className="text-item tech">Deployed on Vercel</span>
              <span className="emoji vercel">▲</span>
              <span className="separator pulse">•</span>
              <span className="text-item inspiring">Crafting digital experiences</span>
              <span className="emoji star">✨</span>
              <span className="separator pulse">•</span>
              <span className="text-item inspiring">One pixel at a time</span>
              <span className="emoji rocket">🚀</span>
              <span className="separator pulse">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="float-item float-1">💻</div>
        <div className="float-item float-2">🌟</div>
        <div className="float-item float-3">⚡</div>
        <div className="float-item float-4">🎯</div>
      </div>

      <style jsx>{`
        .advanced-scrolling-footer {
          position: relative;
          width: 100%;
          min-height: 120px;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 60px;
        }

        /* Background Layers */
        .background-layers {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .background-layers::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, 
            #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607, #ff006e
          );
          background-size: 300% 300%;
          animation: rainbowWave 8s ease-in-out infinite;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
        }

        .orb-1 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #ff006e, #8338ec);
          top: -100px;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, #3a86ff, #06ffa5);
          bottom: -75px;
          right: 20%;
          animation-delay: -3s;
        }

        .orb-3 {
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, #ffbe0b, #fb5607);
          top: 50%;
          left: 60%;
          animation-delay: -6s;
        }

        /* Main Scroll Container */
        .scroll-container {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 30px 0;
        }

        .scroll-content {
          display: flex;
          animation: infiniteScroll 45s linear infinite;
          will-change: transform;
        }

        .scroll-content.animate {
          animation-play-state: running;
        }

        .scroll-segment {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-right: 80px;
          font-size: 20px;
          font-weight: 700;
          white-space: nowrap;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Text Styling */
        .text-item {
          letter-spacing: 0.5px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .text-item.glow {
          background: linear-gradient(45deg, #ffffff, #f8fafc, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }

        .text-item.tech {
          background: linear-gradient(45deg, #06ffa5, #3a86ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-item.inspiring {
          background: linear-gradient(45deg, #ff006e, #8338ec);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Emoji Animations */
        .emoji {
          font-size: 24px;
          display: inline-block;
          transition: all 0.3s ease;
          user-select: none;
        }

        .heart {
          animation: heartbeat 2.5s ease-in-out infinite;
          filter: drop-shadow(0 0 15px rgba(255, 182, 193, 0.8));
        }

        .react {
          animation: reactSpin 6s linear infinite;
          filter: drop-shadow(0 0 12px rgba(97, 218, 251, 0.8));
        }

        .tailwind {
          animation: colorCycle 4s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.6));
        }

        .vercel {
          animation: bounce 3s ease-in-out infinite;
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.8));
        }

        .star {
          animation: twinkle 2s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(255, 235, 59, 0.8));
        }

        .rocket {
          animation: rocket 3s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(255, 152, 0, 0.8));
        }

        .separator {
          color: rgba(255, 255, 255, 0.6);
          font-size: 24px;
          font-weight: bold;
        }

        .separator.pulse {
          animation: separatorPulse 2s ease-in-out infinite;
        }

        /* Floating Elements */
        .floating-elements {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .float-item {
          position: absolute;
          font-size: 30px;
          opacity: 0.2;
          animation: floatRandom 12s ease-in-out infinite;
        }

        .float-1 {
          top: 20%;
          left: 15%;
          animation-delay: 0s;
        }

        .float-2 {
          top: 60%;
          right: 25%;
          animation-delay: -3s;
        }

        .float-3 {
          bottom: 30%;
          left: 70%;
          animation-delay: -6s;
        }

        .float-4 {
          top: 40%;
          right: 10%;
          animation-delay: -9s;
        }

        /* Core Animations */
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }

        @keyframes rainbowWave {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 200% 50%; }
          75% { background-position: 300% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.1); }
          50% { transform: scale(1.3); }
          75% { transform: scale(1.1); }
        }

        @keyframes reactSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes colorCycle {
          0%, 100% { 
            filter: hue-rotate(0deg) drop-shadow(0 0 10px rgba(168, 85, 247, 0.6)); 
          }
          25% { 
            filter: hue-rotate(90deg) drop-shadow(0 0 10px rgba(34, 197, 94, 0.6)); 
          }
          50% { 
            filter: hue-rotate(180deg) drop-shadow(0 0 10px rgba(239, 68, 68, 0.6)); 
          }
          75% { 
            filter: hue-rotate(270deg) drop-shadow(0 0 10px rgba(59, 130, 246, 0.6)); 
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes twinkle {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            opacity: 0.8; 
          }
          50% { 
            transform: scale(1.2) rotate(180deg); 
            opacity: 1; 
          }
        }

        @keyframes rocket {
          0%, 100% { 
            transform: translateY(0) rotate(-5deg); 
          }
          25% { 
            transform: translateY(-4px) rotate(5deg); 
          }
          75% { 
            transform: translateY(-2px) rotate(-2deg); 
          }
        }

        @keyframes separatorPulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1); 
          }
        }

        @keyframes floatRandom {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-30px) translateX(20px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-10px) translateX(-15px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-25px) translateX(10px) rotate(270deg); 
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .advanced-scrolling-footer {
            min-height: 100px;
          }

          .scroll-container {
            padding: 20px 0;
          }

          .scroll-segment {
            font-size: 16px;
            gap: 15px;
            padding-right: 60px;
          }

          .emoji {
            font-size: 20px;
          }

          .separator {
            font-size: 20px;
          }

          .scroll-content {
            animation-duration: 35s;
          }

          .float-item {
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .scroll-segment {
            font-size: 14px;
            gap: 12px;
            padding-right: 45px;
          }

          .emoji {
            font-size: 18px;
          }

          .separator {
            font-size: 18px;
          }

          .scroll-content {
            animation-duration: 30s;
          }

          .float-item {
            font-size: 20px;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .scroll-content,
          .heart, .react, .tailwind, .vercel, .star, .rocket,
          .separator, .gradient-orb, .float-item {
            animation: none !important;
          }

          .advanced-scrolling-footer::before {
            animation: none !important;
          }
        }

        /* Interactive States */
        .advanced-scrolling-footer:hover .scroll-content {
          animation-play-state: paused;
        }

        .advanced-scrolling-footer:hover .text-item {
          transform: scale(1.05);
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
        }

        .advanced-scrolling-footer:hover .emoji {
          transform: scale(1.2);
        }
      `}</style>
    </footer>
  )
}

export default function App () {
  const [currentSection, setCurrentSection] = useState('summary')
  const [isMobile,       setIsMobile]       = useState(false)
  const [isNavSticky,    setIsNavSticky]    = useState(false)
  const [isLoading,      setIsLoading]      = useState(true)

  const sections        = [
    'summary','skills','education','experience',
    'projects','achievements','volunteering','personal','contact'
  ]
  const mobileSections  = ['summary','skills','projects','experience','contact']

  // Resize and basic scroll detection
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    const onScroll = () => setIsNavSticky(window.scrollY > 100)
    onResize(); onScroll(); setIsLoading(false)
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll',  onScroll, { passive:true })
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll',  onScroll)
    }
  }, [])

  // Improved scroll spy for both mobile and desktop
  useEffect(() => {
    if (isLoading) return

    // Use Intersection Observer for better performance
    const observerOptions = {
      threshold: 0.3,
      rootMargin: isMobile ? '-100px 0px -200px 0px' : '-120px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      // Find the section that's most visible
      let maxRatio = 0
      let activeSection = currentSection

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          activeSection = entry.target.id
        }
      })

      // Fallback: if no section is intersecting enough, use scroll position
      if (maxRatio < 0.3) {
        const scrollPosition = window.scrollY + (isMobile ? 150 : 200)
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i])
          if (element && element.offsetTop <= scrollPosition) {
            activeSection = sections[i]
            break
          }
        }
      }

      if (activeSection !== currentSection) {
        setCurrentSection(activeSection)
      }
    }, observerOptions)

    // Observe all sections
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    // Additional scroll-based detection for edge cases
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + (isMobile ? 150 : 200)
          let newSection = currentSection

          // Check from bottom to top to prioritize later sections
          for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i])
            if (element && element.offsetTop <= scrollPosition) {
              newSection = sections[i]
              break
            }
          }

          if (newSection !== currentSection) {
            setCurrentSection(newSection)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isLoading, isMobile, sections, currentSection])

  const scrollMarginClass =
    isMobile ? 'scroll-mt-24' : isNavSticky ? 'scroll-mt-36' : 'scroll-mt-24'

  const goTo = id => {
    setCurrentSection(id)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      const offset = isMobile ? 100 : isNavSticky ? 140 : 80
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior:'smooth'
      })
    }, 50)
  }

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="animate-spin h-16 w-16 rounded-full border-4 border-blue-200 border-t-blue-600 shadow-2xl"/>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-ping"/>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Loading Portfolio</h3>
            <p className="text-gray-600 animate-pulse">Preparing something amazing...</p>
          </div>
        </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {!isMobile && <Navigation current={currentSection} onSelect={goTo} />}

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <section id="summary"      className={scrollMarginClass}><Summary /></section>
        <section id="skills"       className={scrollMarginClass}><Skills /></section>
        <section id="education"    className={scrollMarginClass}><Education /></section>
        <section id="experience"   className={scrollMarginClass}><Experience /></section>
        <section id="projects"     className={scrollMarginClass}><Projects /></section>
        <section id="achievements" className={scrollMarginClass}><Achievements /></section>
        <section id="volunteering" className={scrollMarginClass}><Volunteering /></section>
        <section id="personal"     className={scrollMarginClass}><Personal /></section>
        <section id="contact"      className={scrollMarginClass}><Contact /></section>
      </main>

      {/* Advanced Scrolling Footer */}
      <AdvancedScrollingFooter />

      {isMobile && (
        <MobileNavigation
          currentSection={currentSection}
          onSectionChange={goTo}
          sections={mobileSections}
          allSections={sections}
        />
      )}

      {isNavSticky && (
        <button
          aria-label="Scroll to top"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setCurrentSection('summary');
          }}
          className={`fixed z-50 p-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 ${
            isMobile ? 'bottom-28 right-4' : 'bottom-6 right-6'
          }`}
          style={{
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M5 10l7-7 7 7M12 3v18"/>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </button>
      )}
    </div>
  )
}
