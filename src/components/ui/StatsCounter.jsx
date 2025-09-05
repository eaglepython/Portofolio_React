import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Calendar, Cpu, Star, TrendingUp, Users, Award, Zap } from 'lucide-react'

const StatsCounter = ({ 
  value, 
  suffix = '', 
  label, 
  description, 
  icon = 'Code', 
  color = '#00ff88', 
  inView = false, 
  delay = 0,
  animationDelay = 0 
}) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Icon mapping
  const iconMap = {
    Code,
    Calendar,
    Cpu,
    Star,
    TrendingUp,
    Users,
    Award,
    Zap
  }

  const IconComponent = iconMap[icon] || Code

  // Animate counter when in view
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
      
      const timer = setTimeout(() => {
        const duration = 2000 // Animation duration in ms
        const steps = 60 // Number of animation steps
        const increment = value / steps
        let current = 0
        
        const counter = setInterval(() => {
          current += increment
          if (current >= value) {
            setCount(value)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [inView, value, delay, hasAnimated])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : { 
        opacity: 0, 
        y: 50, 
        scale: 0.8 
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: animationDelay
      }}
      className="relative group"
    >
      <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6 text-center hover:border-matrix-primary/50 transition-all duration-300 hover:scale-105">
        {/* Icon */}
        <motion.div
          className="relative mx-auto mb-4 w-16 h-16 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {/* Icon background */}
          <div 
            className="absolute inset-0 rounded-full opacity-20"
            style={{ backgroundColor: color }}
          />
          
          {/* Pulsing ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: color }}
          />
          
          {/* Icon */}
          <IconComponent 
            size={28} 
            style={{ color }} 
            className="relative z-10"
          />
        </motion.div>

        {/* Counter */}
        <div className="mb-3">
          <motion.div
            className="text-3xl md:text-4xl font-bold text-white font-code"
            key={count} // Force re-render for smooth animation
          >
            <motion.span
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {count.toLocaleString()}
            </motion.span>
            <span style={{ color }}>{suffix}</span>
          </motion.div>
        </div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-matrix-primary transition-colors duration-300">
          {label}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Progress indicator */}
        <motion.div
          className="mt-4 h-1 bg-dark-bg rounded-full overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, delay: animationDelay + 0.5 }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : { width: 0 }}
            transition={{ duration: 2, delay: animationDelay + 1 }}
          />
        </motion.div>

        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at center, ${color}, transparent)`
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-matrix-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-matrix-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-matrix-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-matrix-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Floating particles on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: color,
              left: '50%',
              top: '50%'
            }}
            animate={{
              x: [0, Math.cos(i * Math.PI / 3) * 20, Math.cos(i * Math.PI / 3) * 40],
              y: [0, Math.sin(i * Math.PI / 3) * 20, Math.sin(i * Math.PI / 3) * 40],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default StatsCounter