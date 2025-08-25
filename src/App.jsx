/*  src/App.jsx – fixed scroll spy navigation */

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
    }, 50) // Reduced delay for more responsive navigation
  }

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-blue-600"/>
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

      <footer className={`bg-gray-900 text-white text-center py-4 mt-12 ${isMobile?'pb-24':''}`}>
        <p>© 2025 Shubhangam Singh</p>
      </footer>

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
          className="fixed z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110 bottom-24 left-4 sm:bottom-6 sm:left-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M5 10l7-7 7 7M12 3v18"/>
          </svg>
        </button>
      )}
    </div>
  )
}
