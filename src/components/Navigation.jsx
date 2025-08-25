import React, { useState, useEffect, useRef, useCallback } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [isSticky, setIsSticky] = useState(false);
  const observerRef = useRef(null);
  const sectionsRef = useRef(new Map());

  // Define your sections
  const sections = [
    { id: 'summary', name: 'Summary' },
    { id: 'skills', name: 'Skills' },
    { id: 'education', name: 'Education' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'volunteering', name: 'Volunteering' },
    { id: 'personal', name: 'Personal' },
    { id: 'contact', name: 'Contact' }
  ];

  // Throttled scroll handler for performance
  const throttledScrollHandler = useCallback(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          setIsSticky(scrollPosition > 100);
          
          // Fallback scroll spy when Intersection Observer isn't precise enough
          const currentSection = getCurrentSectionByScroll();
          if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    return handleScroll;
  }, [activeSection]);

  // Get current section based on scroll position (fallback method)
  const getCurrentSectionByScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 150; // Offset for better detection
    let currentSection = 'summary';

    // Check sections from bottom to top
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i].id);
      if (element) {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        
        // Check if we're in this section
        if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
          currentSection = sections[i].id;
          break;
        }
        // If we've scrolled past this section's start, it's the current section
        else if (scrollPosition >= elementTop) {
          currentSection = sections[i].id;
          break;
        }
      }
    }

    return currentSection;
  }, [sections]);

  // Enhanced Intersection Observer
  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerOptions = {
      threshold: [0.1, 0.25, 0.5, 0.75], // Multiple thresholds for better detection
      rootMargin: '-80px 0px -60% 0px' // Adjust based on your header height
    };

    const observerCallback = (entries) => {
      const visibleSections = new Map();
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, {
            ratio: entry.intersectionRatio,
            element: entry.target
          });
        }
      });

      if (visibleSections.size > 0) {
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let newActiveSection = activeSection;

        visibleSections.forEach((data, sectionId) => {
          if (data.ratio > maxRatio) {
            maxRatio = data.ratio;
            newActiveSection = sectionId;
          }
        });

        // Only update if we have a significant intersection
        if (maxRatio > 0.1 && newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current.observe(element);
        sectionsRef.current.set(id, element);
      }
    });

    // Add scroll listener as fallback
    const scrollHandler = throttledScrollHandler();
    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [sections, throttledScrollHandler, activeSection]);

  // Smooth scroll to section with improved offset calculation
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update active section immediately for better UX
      setActiveSection(sectionId);
      
      // Calculate dynamic offset based on sticky nav
      const navHeight = 80;
      const additionalOffset = isSticky ? 20 : 0;
      const totalOffset = navHeight + additionalOffset;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [isSticky]);

  return (
    <>
      <nav className={`desktop-navigation ${isSticky ? 'sticky' : ''}`}>
        <div className="nav-container">
          {sections.map(({ id, name }) => (
            <button
              key={id}
              className={`nav-item ${activeSection === id ? 'active' : ''}`}
              onClick={() => scrollToSection(id)}
              aria-label={`Navigate to ${name}`}
            >
              {name}
            </button>
          ))}
        </div>
      </nav>

      {/* Enhanced CSS for smooth animations */}
      <style jsx>{`
        .desktop-navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
        }

        .desktop-navigation.sticky {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .nav-container::-webkit-scrollbar {
          display: none;
        }

        .nav-item {
          position: relative;
          padding: 16px 20px;
          margin: 0 4px;
          border: none;
          background: none;
          font-size: 14px;
          font-weight: 500;
          color: #64748b;
          cursor: pointer;
          white-space: nowrap;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }

        .nav-item:hover {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
          transform: translateY(-1px);
        }

        .nav-item.active {
          color: #ffffff;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translateX(-50%) scale(1.2);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 16px;
          }
          
          .nav-item {
            padding: 12px 16px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
