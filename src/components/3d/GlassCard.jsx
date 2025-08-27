import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function GlassCard({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`
        backdrop-blur-lg bg-white/10 
        border border-white/20 
        rounded-2xl p-6 
        shadow-xl hover:shadow-2xl 
        transition-all duration-300 
        hover:bg-white/15 
        hover:border-white/30
        hover:scale-105
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
