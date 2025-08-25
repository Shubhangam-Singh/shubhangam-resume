import React, { useState, useEffect } from 'react';
import { 
  User, 
  Code, 
  GraduationCap, 
  Briefcase, 
  FolderOpen, 
  Award, 
  Heart, 
  UserCheck, 
  Mail 
} from 'lucide-react';

const MobileTabBar = ({ sections, currentSection, onSectionChange }) => {
  const [isIconOnly, setIsIconOnly] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Smart configuration for each section
  const sectionConfig = {
    summary: { 
      icon: User, 
      short: 'About', 
      full: 'Summary',
      color: '#3B82F6',
      priority: 1
    },
    skills: { 
      icon: Code, 
      short: 'Skills', 
      full: 'Skills',
      color: '#10B981',
      priority: 2
    },
    education: { 
      icon: GraduationCap, 
      short: 'Edu', 
      full: 'Education',
      color: '#8B5CF6',
      priority: 6
    },
    experience: { 
      icon: Briefcase, 
      short: 'Work', 
      full: 'Experience',
      color: '#F59E0B',
      priority: 4
    },
    projects: { 
  icon: FolderOpen, 
  short: 'Proj',     // Even shorter for tiny screens
  full: 'Projects',
  color: '#EF4444',
  priority: 3
},

    achievements: { 
      icon: Award, 
      short: 'Awards', 
      full: 'Achievements',
      color: '#F97316',
      priority: 7
    },
    volunteering: { 
      icon: Heart, 
      short: 'Vol', 
      full: 'Volunteer',
      color: '#EC4899',
      priority: 8
    },
    personal: { 
      icon: UserCheck, 
      short: 'Me', 
      full: 'Personal',
      color: '#06B6D4',
      priority: 9
    },
    contact: { 
      icon: Mail, 
      short: 'Talk', 
      full: 'Contact',
      color: '#84CC16',
      priority: 5
    }
  };

  // Determine which sections to show based on screen size
  const getVisibleSections = () => {
    if (screenWidth <= 360) {
      // Extra small screens - only top 4 sections
      return ['summary', 'skills', 'projects', 'contact'];
    } else if (screenWidth <= 400) {
      // Small screens - top 5 sections
      return ['summary', 'skills', 'experience', 'projects', 'contact'];
    } else if (screenWidth <= 480) {
      // Medium small screens - top 6 sections
      return ['summary', 'skills', 'education', 'experience', 'projects', 'contact'];
    } else {
      // Larger mobile screens - show more sections
      return sections.slice(0, Math.min(sections.length, 7));
    }
  };

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsIconOnly(width <= 360);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle tab click with animations and feedback
  const handleTabClick = (section) => {
    // Prevent unnecessary clicks
    if (section === currentSection) return;

    // Haptic feedback for supported devices
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }

    // Call parent handler
    onSectionChange(section);
    
    // Smooth scroll to section with offset for header
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        const headerOffset = 80; // Adjust based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure state update
  };

  // Handle keyboard navigation
  const handleKeyDown = (e, section) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabClick(section);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      navigateWithKeyboard(e.key === 'ArrowRight' ? 1 : -1);
    }
  };

  // Navigate with keyboard arrows
  const navigateWithKeyboard = (direction) => {
    const visibleSections = getVisibleSections();
    const currentIndex = visibleSections.indexOf(currentSection);
    const nextIndex = (currentIndex + direction + visibleSections.length) % visibleSections.length;
    handleTabClick(visibleSections[nextIndex]);
  };

  // Get label text based on screen size
  const getLabel = (section) => {
    const config = sectionConfig[section];
    if (!config) return section;

    if (isIconOnly || screenWidth <= 360) return '';
    if (screenWidth <= 400) return config.short.slice(0, 3);
    return config.short;
  };

  // Get icon size based on screen size
  const getIconSize = () => {
    if (screenWidth <= 360) return 18;
    if (screenWidth <= 400) return 19;
    return 20;
  };

  const visibleSections = getVisibleSections();

  return (
    <div 
      className={`mobile-tab-bar ${isIconOnly ? 'icon-only' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {visibleSections.map((section, index) => {
        const config = sectionConfig[section];
        if (!config) return null;
        
        const IconComponent = config.icon;
        const isActive = currentSection === section;
        const label = getLabel(section);
        
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
            title={isIconOnly ? config.full : undefined} // Tooltip for icon-only mode
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
            
            {/* Tab Label - conditional rendering */}
            {label && (
              <span className="tab-label">
                {label}
              </span>
            )}
            
            {/* Active Indicator */}
            <div 
              className="tab-indicator"
              aria-hidden="true"
            />
            
            {/* Ripple Effect Container */}
            <div className="tab-ripple" aria-hidden="true" />
          </div>
        );
      })}
      
      {/* Screen Reader Navigation Info */}
      <div className="sr-only" aria-live="polite">
        Currently viewing: {sectionConfig[currentSection]?.full || currentSection}
      </div>
    </div>
  );
};

export default MobileTabBar;
