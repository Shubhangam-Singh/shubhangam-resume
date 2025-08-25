import React, { useState } from 'react';
import { 
  MoreHorizontal, 
  X, 
  Download, 
  Palette, 
  Share2,
  GraduationCap,
  Award,
  Heart,
  UserCheck 
} from 'lucide-react';

const FloatingActionButton = ({ 
  allSections = [], 
  primarySections = [], 
  currentSection, 
  onSectionChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Secondary sections that don't fit in main tab bar
  const secondarySections = allSections.filter(s => !primarySections.includes(s));
  
  // Configuration for secondary sections
  const sectionConfig = {
    education: { icon: GraduationCap, label: 'Education', color: '#8B5CF6' },
    achievements: { icon: Award, label: 'Awards', color: '#F97316' },
    volunteering: { icon: Heart, label: 'Volunteer', color: '#EC4899' },
    personal: { icon: UserCheck, label: 'About Me', color: '#06B6D4' }
  };

  // Combine regular actions with secondary sections
  const fabItems = [
    { action: 'resume', icon: Download, label: 'Resume' },
    { action: 'theme', icon: Palette, label: 'Theme' },
    { action: 'share', icon: Share2, label: 'Share' },
    // Add secondary sections
    ...secondarySections.map(section => ({
      action: 'section',
      section: section,
      icon: sectionConfig[section]?.icon || UserCheck,
      label: sectionConfig[section]?.label || section.charAt(0).toUpperCase() + section.slice(1),
      color: sectionConfig[section]?.color || '#6B7280'
    }))
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  const handleAction = (action, section = null) => {
    switch (action) {
      case 'section':
        if (section && onSectionChange) {
          onSectionChange(section);
        }
        break;
      case 'resume':
        downloadResume();
        break;
      case 'theme':
        toggleTheme();
        break;
      case 'share':
        shareProfile();
        break;
      default:
        break;
    }
    toggleMenu();
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/shsi_resume.pdf';
    link.download = 'Shubhangam_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showNotification('Resume downloaded!', 'success');
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    showNotification(`${isDark ? 'Dark' : 'Light'} theme activated!`, 'info');
  };

  const shareProfile = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Shubhangam Singh - Portfolio',
          text: 'Check out my portfolio and projects!',
          url: window.location.href
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showNotification('Profile link copied to clipboard!', 'success');
    });
  };

  const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `mobile-notification ${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%) translateY(-100%)',
      background: type === 'success' ? '#10B981' : 
                  type === 'error' ? '#EF4444' : '#3B82F6',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '25px',
      fontSize: '14px',
      fontWeight: '600',
      zIndex: '10000',
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(-50%) translateY(-100%)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  return (
    <div className="floating-action-container">
      {/* Backdrop Overlay - ONLY for background blur */}
      {isOpen && (
        <div 
          className="fab-backdrop-overlay"
          onClick={toggleMenu}
        />
      )}

      {/* Floating Action Menu - NO overlay here */}
      <div className="floating-action-menu">
        {/* Sub-menu items - These should NOT be affected by backdrop blur */}
        <div className={`fab-submenu ${isOpen ? 'active' : ''}`}>
          {fabItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={`${item.action}-${item.section || index}`}
                className="fab-item"
                onClick={() => handleAction(item.action, item.section)}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                  '--item-color': item.color || '#667eea'
                }}
                role="button"
                tabIndex={0}
                aria-label={item.label}
                title={item.label}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Main FAB */}
        <div 
          className={`fab-main ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="fab-icon">
            {isOpen ? <X size={24} /> : <MoreHorizontal size={24} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingActionButton;
