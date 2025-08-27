import { useEffect, useRef, useState } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [ripples, setRipples] = useState([])
  const [backgroundType, setBackgroundType] = useState('default')

  // Current mouse position
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = dotRef.current
    let animationId
    let lastBackgroundCheck = 0
    const backgroundCheckInterval = 150 // Reduced frequency to improve performance

    // Fast and smooth cursor movement - both elements move together
    const updateCursor = (timestamp) => {
      if (cursor && dot) {
        // Both cursor and dot follow mouse at same position for perfect centering
        cursor.style.left = `${mousePos.current.x}px`
        cursor.style.top = `${mousePos.current.y}px`
        dot.style.left = `${mousePos.current.x}px`
        dot.style.top = `${mousePos.current.y}px`
      }

      // Throttled background detection for better performance
      if (timestamp - lastBackgroundCheck > backgroundCheckInterval) {
        detectBackground()
        lastBackgroundCheck = timestamp
      }

      animationId = requestAnimationFrame(updateCursor)
    }

    // Optimized background detection
    const detectBackground = () => {
      const elementUnder = document.elementFromPoint(mousePos.current.x, mousePos.current.y)
      if (!elementUnder || !cursor || !dot) return

      let newBackgroundType = 'default'

      // Check for light backgrounds (glass cards, white sections)
      if (elementUnder.classList.contains('glass-card') ||
          elementUnder.closest('.glass-card') ||
          elementUnder.classList.contains('portfolio-content') ||
          elementUnder.closest('.portfolio-content') ||
          elementUnder.classList.contains('card-3d-enhanced') ||
          elementUnder.closest('.card-3d-enhanced')) {
        
        newBackgroundType = 'light'
      }
      // Check for colored/gradient backgrounds
      else if (elementUnder.classList.contains('gradient-background') ||
               elementUnder.closest('.gradient-background') ||
               elementUnder.classList.contains('gradient-overlay') ||
               elementUnder.closest('.gradient-overlay')) {
        
        newBackgroundType = 'colored'
      }

      // Only update if background type changed
      if (newBackgroundType !== backgroundType) {
        setBackgroundType(newBackgroundType)
        
        // Smooth class transitions
        cursor.classList.remove('on-light', 'on-colored')
        dot.classList.remove('on-light', 'on-colored', 'gradient-transition')
        
        if (newBackgroundType === 'light') {
          cursor.classList.add('on-light')
          dot.classList.add('on-light')
        } else if (newBackgroundType === 'colored') {
          cursor.classList.add('on-colored')
          dot.classList.add('gradient-transition')
        }
      }
    }

    const handleMouseMove = (e) => {
      // Direct position update for instant response
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
    }

    const handleMouseDown = (e) => {
      setIsClicking(true)
      
      // Create ripple effect
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        backgroundType: backgroundType
      }
      setRipples(prev => [...prev, newRipple])
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
      }, 600)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('cursor-hover') ||
          target.closest('a') ||
          target.closest('button')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('cursor-hover') ||
          target.closest('a') ||
          target.closest('button')) {
        setIsHovering(false)
      }
    }

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)

    // Hide default cursor
    document.body.style.cursor = 'none'

    // Start animation loop
    animationId = requestAnimationFrame(updateCursor)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      document.body.style.cursor = 'auto'
      
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [backgroundType])

  return (
    <>
      {/* Outer Circle - Perfectly Centered */}
      <div
        ref={cursorRef}
        className={`custom-cursor-circle ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)', // Perfect centering
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          willChange: 'transform'
        }}
      />
      
      {/* Inner Dot - Perfectly Centered */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          backgroundColor: 'white',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)', // Perfect centering
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          willChange: 'transform'
        }}
      />
      
      {/* Click Ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className={`cursor-ripple ${ripple.backgroundType === 'light' ? 'on-light' : ripple.backgroundType === 'colored' ? 'on-colored' : ''}`}
          style={{
            position: 'fixed',
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </>
  )
}

export default CustomCursor
