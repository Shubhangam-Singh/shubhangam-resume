import React, { useState, useEffect } from 'react';
import MobileTabBar from './MobileTabBar';
import FloatingActionButton from './FloatingActionButton';
import '../styles/MobileNavigation.css';

const MobileNavigation = ({ 
  currentSection = 'about', 
  onSectionChange,
  sections = ['about', 'skills', 'education', 'projects', 'contact']
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollProgress(progress);
    };

    const handleResize = () => {
      setIsVisible(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Progress Bar */}
      <div className="nav-progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Navigation */}
      <nav className="mobile-nav">
        <MobileTabBar 
          sections={sections}
          currentSection={currentSection}
          onSectionChange={onSectionChange}
        />
        
        <FloatingActionButton />
      </nav>
    </>
  );
};

export default MobileNavigation;
