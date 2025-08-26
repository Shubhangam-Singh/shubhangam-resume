import React, { useState, useEffect } from 'react'
import { 
  User, Code, GraduationCap, Briefcase, FolderOpen, 
  Award, Heart, UserCheck, Mail 
} from 'lucide-react'

const MobileTabBar = ({ sections, currentSection, onSectionChange }) => {
  const [isIconOnly, setIsIconOnly] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  // Enhanced dark theme configuration
  const sectionConfig = {
    summary: { 
      icon: User, 
      short: 'About', 
      full: 'Summary',
      color: '#60A5FA', // Lighter blue for dark theme
      priority: 1
    },
    skills: { 
      icon: Code, 
      short: 'Skills', 
      full: 'Skills',
      color: '#34D399', // Brighter green
      priority: 2
    },
    education: { 
      icon: GraduationCap, 
      short: 'Edu', 
      full: 'Education',
      color: '#A78BFA', // Lighter purple
      priority: 6
    },
    experience: { 
      icon: Briefcase, 
      short: 'Work', 
      full: 'Experience',
      color: '#FBBF24', // Brighter amber
      priority: 4
    },
    projects: { 
      icon: FolderOpen, 
      short: 'Proj',
      full: 'Projects',
      color: '#F87171', // Lighter red
      priority: 3
    },
    achievements: { 
      icon: Award, 
      short: 'Awards', 
      full: 'Achievements',
      color: '#FB923C', // Brighter orange
      priority: 7
    },
    volunteering: { 
      icon: Heart, 
      short: 'Vol', 
      full: 'Volunteer',
      color: '#F472B6', // Brighter pink
      priority: 8
    },
    personal: { 
      icon: UserCheck, 
      short: 'Me', 
      full: 'Personal',
      color: '#22D3EE', // Brighter cyan
      priority: 9
    },
    contact: { 
      icon: Mail, 
      short: 'Talk', 
      full: 'Contact',
      color: '#A3E635', // Brighter lime
      priority: 5
    }
  }

  // Your original logic - determine which sections to show based on screen size
  const getVisibleSections = () => {
    if (screenWidth <= 360) {
      return ['summary', 'skills', 'projects', 'contact']
    } else if (screenWidth <= 400) {
      return ['summary', 'skills', 'experience', 'projects', 'contact']
    } else if (screenWidth <= 480) {
      return ['summary', 'skills', 'education', 'experience', 'projects', 'contact']
    } else {
      return sections.slice(0, Math.min(sections.length, 7))
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setScreenWidth(width)
      setIsIconOnly(width <= 360)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleTabClick = (section) => {
    if (section === currentSection) return

    if ('vibrate' in navigator) {
      navigator.vibrate(50)
    }

    onSectionChange(section)
    
    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  const handleKeyDown = (e, section) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleTabClick(section)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
      navigateWithKeyboard(e.key === 'ArrowRight' ? 1 : -1)
    }
  }

  const navigateWithKeyboard = (direction) => {
    const visibleSections = getVisibleSections()
    const currentIndex = visibleSections.indexOf(currentSection)
    const nextIndex = (currentIndex + direction + visibleSections.length) % visibleSections.length
    handleTabClick(visibleSections[nextIndex])
  }

  const getLabel = (section) => {
    const config = sectionConfig[section]
    if (!config) return section

    if (isIconOnly || screenWidth <= 360) return ''
    if (screenWidth <= 400) return config.short.slice(0, 3)
    return config.short
  }

  const getIconSize = () => {
    if (screenWidth <= 360) return 18
    if (screenWidth <= 400) return 19
    return 20
  }

  const visibleSections = getVisibleSections()

  return (
    <>
      <div 
        className={`mobile-tab-bar ${isIconOnly ? 'icon-only' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {visibleSections.map((section, index) => {
          const config = sectionConfig[section]
          if (!config) return null
          
          const IconComponent = config.icon
          const isActive = currentSection === section
          const label = getLabel(section)
          
          return (
            <div
              key={section}
              className={`tab-item ${isActive ? 'active' : ''}`}
              onClick={() => handleTabClick(section)}
              onKeyDown={(e) => handleKeyDown(e, section)}
              role="button"
              tabIndex={0}
              aria-label={`Navigate to ${config.full}`}
              aria-pressed={isActive}
              title={isIconOnly ? config.full : undefined}
              style={{
                '--tab-color': config.color
              }}
            >
              {/* Tab Icon */}
              <div className="tab-icon">
                <IconComponent 
                  size={getIconSize()} 
                  strokeWidth={isActive ? 2.5 : 2}
                  aria-hidden="true"
                />
              </div>
              
              {/* Tab Label */}
              {label && (
                <span className="tab-label">
                  {label}
                </span>
              )}
              
              {/* Active Indicator */}
              <div className="tab-indicator" aria-hidden="true" />
              
              {/* Glow Effect */}
              <div className="tab-glow" aria-hidden="true" />
              
              {/* Ripple Effect Container */}
              <div className="tab-ripple" aria-hidden="true" />
            </div>
          )
        })}
        
        <div className="sr-only" aria-live="polite">
          Currently viewing: {sectionConfig[currentSection]?.full || currentSection}
        </div>
      </div>

      {/* Enhanced Dark Theme Styles */}
      <style jsx>{`
        .mobile-tab-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
          gap: 3px;
          padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
          
          /* Dark gradient background */
          background: linear-gradient(135deg, 
            rgba(17, 24, 39, 0.95) 0%,
            rgba(31, 41, 55, 0.95) 25%,
            rgba(55, 65, 81, 0.95) 50%,
            rgba(75, 85, 99, 0.95) 75%,
            rgba(17, 24, 39, 0.95) 100%
          );
          
          /* Enhanced backdrop blur */
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          backdrop-filter: saturate(180%) blur(20px);
          
          /* Dark border with glow */
          border-top: 1px solid rgba(156, 163, 175, 0.2);
          box-shadow: 
            0 -8px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset,
            0 -4px 16px rgba(59, 130, 246, 0.1);
          
          /* Animated background gradient */
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite;
        }

        /* Floating glow orbs in background */
        .mobile-tab-bar::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          right: -20%;
          bottom: -20%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15), transparent 50%);
          pointer-events: none;
          z-index: -1;
          animation: float 8s ease-in-out infinite;
        }

        /* Moving light streaks */
        .mobile-tab-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          right: -100%;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent,
            rgba(59, 130, 246, 0.6),
            rgba(139, 92, 246, 0.6),
            transparent
          );
          animation: lightStreak 4s linear infinite;
        }

        .tab-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 10px 6px 8px;
          border-radius: 14px;
          color: #9CA3AF;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
          user-select: none;
          min-height: 52px;
          isolation: isolate;
          
          /* Dark glass effect */
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .tab-item:focus-visible {
          box-shadow: 
            0 0 0 2px rgba(17, 24, 39, 0.8), 
            0 0 0 4px var(--tab-color),
            0 0 20px rgba(var(--tab-color), 0.3);
        }

        .tab-item:active {
          transform: scale(0.95);
        }

        .tab-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .tab-label {
          font-size: 10px;
          font-weight: 600;
          line-height: 1;
          color: #D1D5DB;
          transition: all 0.3s ease;
          text-align: center;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .tab-indicator {
          position: absolute;
          left: 6px;
          right: 6px;
          bottom: 4px;
          height: 3px;
          border-radius: 3px;
          background: var(--tab-color);
          opacity: 0;
          transform: scaleX(0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 12px var(--tab-color);
        }

        .tab-glow {
          position: absolute;
          inset: -2px;
          border-radius: 16px;
          background: var(--tab-color);
          opacity: 0;
          filter: blur(8px);
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .tab-ripple {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          overflow: hidden;
        }

        /* Active state - enhanced for dark theme */
        .tab-item.active {
          color: var(--tab-color);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        }

        .tab-item.active .tab-icon {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1), 
            rgba(255, 255, 255, 0.05)
          );
          color: var(--tab-color);
          transform: translateY(-1px);
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.2),
            0 0 20px var(--tab-color);
        }

        .tab-item.active .tab-label {
          color: var(--tab-color);
          font-weight: 700;
          text-shadow: 0 0 10px var(--tab-color);
        }

        .tab-item.active .tab-indicator {
          opacity: 1;
          transform: scaleX(1);
        }

        .tab-item.active .tab-glow {
          opacity: 0.3;
        }

        /* Hover effects */
        @media (hover: hover) {
          .tab-item:hover:not(.active) {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.08);
          }
          
          .tab-item:hover:not(.active) .tab-icon {
            background: rgba(255, 255, 255, 0.08);
            color: #F3F4F6;
            transform: translateY(-0.5px);
          }
          
          .tab-item:hover:not(.active) .tab-label {
            color: #F3F4F6;
          }
        }

        /* Ripple effect - enhanced */
        .tab-item:active .tab-ripple::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--tab-color), transparent 70%);
          transform: translate(-50%, -50%) scale(1);
          animation: rippleDark 0.5s ease-out forwards;
        }

        /* Animations */
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        @keyframes lightStreak {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes rippleDark {
          from {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(18);
          }
        }

        /* Icon-only mode */
        .mobile-tab-bar.icon-only .tab-label {
          display: none;
        }

        .mobile-tab-bar.icon-only .tab-item {
          gap: 0;
          padding: 12px 6px 10px;
        }

        /* Small screen adjustments */
        @media (max-width: 360px) {
          .mobile-tab-bar {
            gap: 2px;
            padding: 10px 12px calc(10px + env(safe-area-inset-bottom, 0px));
          }
          
          .tab-item {
            padding: 8px 4px 6px;
            min-height: 48px;
          }
          
          .tab-icon {
            width: 28px;
            height: 28px;
          }
        }

        /* Screen reader only */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  )
}

export default MobileTabBar
