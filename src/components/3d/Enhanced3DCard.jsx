import { motion } from 'framer-motion'
import { useState } from 'react'

function Enhanced3DCard({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        z: 50
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Glow effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      {/* Your existing card content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default Enhanced3DCard
