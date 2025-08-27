import React, { useState, useEffect, Suspense } from 'react'
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

// 3D Components
import BackgroundScene  from './components/3d/BackgroundScene.jsx'
import MouseTrail       from './components/3d/MouseTrail.jsx'

import './styles/MobileNavigation.css'

export default function App() {
  const [currentSection, setCurrentSection] = useState('summary')
  const [isMobile, setIsMobile] = useState(false)
  const [isNavSticky, setIsNavSticky] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [show3D, setShow3D] = useState(false)

  const sections = [
    'summary','skills','education','experience',
    'projects','achievements','volunteering','personal','contact'
  ]
  const mobileSections = ['summary','skills','projects','experience','contact']

  // Basic setup
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    const onScroll = () => setIsNavSticky(window.scrollY > 100)
    
    onResize()
    onScroll()
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShow3D(true)
    }, 1000)
    
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [])

  // Scroll spy
  useEffect(() => {
    if (isLoading) return

    const observerOptions = {
      threshold: 0.3,
      rootMargin: isMobile ? '-100px 0px -200px 0px' : '-120px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      let maxRatio = 0
      let activeSection = currentSection

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          activeSection = entry.target.id
        }
      })

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

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [isLoading, isMobile, sections, currentSection])

  const scrollMarginClass = isMobile ? 'scroll-mt-24' : isNavSticky ? 'scroll-mt-36' : 'scroll-mt-24'

  const goTo = id => {
    setCurrentSection(id)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      const offset = isMobile ? 100 : isNavSticky ? 140 : 80
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      })
    }, 50)
  }

  // Dark themed loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin h-16 w-16 border-4 border-transparent border-t-cyan-400 rounded-full mx-auto mb-4"></div>
            <div className="absolute inset-0 animate-ping h-16 w-16 border-4 border-transparent border-t-cyan-400/30 rounded-full mx-auto"></div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Loading Portfolio...</h3>
          <p className="text-gray-300">Initializing your experience</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* 3D Background Scene */}
      {show3D && (
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>
      )}
      
      {/* Mouse Trail - Desktop only */}
      {show3D && !isMobile && (
        <Suspense fallback={null}>
          <MouseTrail />
        </Suspense>
      )}
      
      {/* Main Content with glass morphism */}
      <div className="relative z-10">
        <div className="glass-container">
          <Header />
        </div>

        {!isMobile && (
          <div className="glass-container">
            <Navigation current={currentSection} onSelect={goTo} />
          </div>
        )}

        <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
          <section id="summary" className={`${scrollMarginClass} glass-section`}>
            <Summary />
          </section>
          <section id="skills" className={`${scrollMarginClass} glass-section`}>
            <Skills />
          </section>
          <section id="education" className={`${scrollMarginClass} glass-section`}>
            <Education />
          </section>
          <section id="experience" className={`${scrollMarginClass} glass-section`}>
            <Experience />
          </section>
          <section id="projects" className={`${scrollMarginClass} glass-section`}>
            <Projects />
          </section>
          <section id="achievements" className={`${scrollMarginClass} glass-section`}>
            <Achievements />
          </section>
          <section id="volunteering" className={`${scrollMarginClass} glass-section`}>
            <Volunteering />
          </section>
          <section id="personal" className={`${scrollMarginClass} glass-section`}>
            <Personal />
          </section>
          <section id="contact" className={`${scrollMarginClass} glass-section`}>
            <Contact />
          </section>
        </main>

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
            className={`fixed z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-3 ${isMobile ? 'bottom-28 left-4' : 'bottom-6 left-6'} glass-button`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M5 10l7-7 7 7M12 3v18"/>
            </svg>
          </button>
        )}
      </div>

      {/* Enhanced 3D Toggle Button */}
      {!isMobile && (
        <button
          onClick={() => setShow3D(!show3D)}
          className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 glass-button ${
            show3D 
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30 shadow-cyan-500/25' 
              : 'bg-gray-700/20 text-gray-400 border-gray-500/30'
          }`}
          title={show3D ? "Disable 3D Effects" : "Enable 3D Effects"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
          </svg>
        </button>
      )}
    </div>
  )
}
