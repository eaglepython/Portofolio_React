import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GlitchText = ({ 
  text, 
  className = '', 
  glitchDuration = 300,
  glitchInterval = 3000,
  autoGlitch = true,
  triggerGlitch = false 
}) => {
  const [isGlitching, setIsGlitching] = useState(false)
  const [glitchText, setGlitchText] = useState(text)

  // Character sets for glitch effect
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
  // Generate random glitch characters
  const generateGlitchText = (originalText) => {
    return originalText
      .split('')
      .map(char => {
        if (char === ' ') return ' '
        return Math.random() < 0.7 ? char : glitchChars[Math.floor(Math.random() * glitchChars.length)]
      })
      .join('')
  }

  // Glitch animation effect
  const performGlitch = () => {
    if (isGlitching) return

    setIsGlitching(true)
    let iterations = 0
    const maxIterations = 8

    const glitchInterval = setInterval(() => {
      setGlitchText(generateGlitchText(text))
      iterations++

      if (iterations >= maxIterations) {
        clearInterval(glitchInterval)
        setGlitchText(text)
        setIsGlitching(false)
      }
    }, glitchDuration / maxIterations)
  }

  // Auto glitch effect
  useEffect(() => {
    if (autoGlitch) {
      const interval = setInterval(performGlitch, glitchInterval)
      return () => clearInterval(interval)
    }
  }, [autoGlitch, glitchInterval])

  // Manual trigger effect
  useEffect(() => {
    if (triggerGlitch) {
      performGlitch()
    }
  }, [triggerGlitch])

  // Reset text when original text changes
  useEffect(() => {
    setGlitchText(text)
  }, [text])

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => !autoGlitch && performGlitch()}
      animate={isGlitching ? {
        x: [0, -2, 2, -1, 1, 0],
        y: [0, 1, -1, 2, -2, 0]
      } : {}}
      transition={{
        duration: glitchDuration / 1000,
        ease: "easeInOut"
      }}
    >
      {/* Main text */}
      <span className="relative z-10 block">
        {glitchText}
      </span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          {/* Red glitch layer */}
          <motion.span
            className="absolute top-0 left-0 text-red-500 opacity-70 mix-blend-multiply"
            animate={{
              x: [-2, 2, -1, 1, 0],
              opacity: [0.7, 0.3, 0.9, 0.1, 0.7]
            }}
            transition={{
              duration: glitchDuration / 1000,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {generateGlitchText(text)}
          </motion.span>

          {/* Blue glitch layer */}
          <motion.span
            className="absolute top-0 left-0 text-blue-500 opacity-70 mix-blend-multiply"
            animate={{
              x: [2, -2, 1, -1, 0],
              opacity: [0.3, 0.8, 0.2, 0.9, 0.3]
            }}
            transition={{
              duration: glitchDuration / 1000,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.1
            }}
          >
            {generateGlitchText(text)}
          </motion.span>

          {/* Green glitch layer */}
          <motion.span
            className="absolute top-0 left-0 text-matrix-primary opacity-50 mix-blend-screen"
            animate={{
              x: [1, -1, 2, -2, 0],
              y: [1, -1, 0, 1, 0],
              opacity: [0.5, 0.8, 0.3, 0.9, 0.5]
            }}
            transition={{
              duration: glitchDuration / 1000,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2
            }}
          >
            {generateGlitchText(text)}
          </motion.span>
        </>
      )}

      {/* Scan lines effect */}
      {isGlitching && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-matrix-primary opacity-80"
            animate={{
              y: [0, 100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: glitchDuration / 1000,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-cyber-pink opacity-60"
            animate={{
              y: [100, 0, 100],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: glitchDuration / 1000,
              repeat: Infinity,
              ease: "linear",
              delay: 0.3
            }}
          />
        </div>
      )}

      {/* RGB split effect during glitch */}
      {isGlitching && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 mix-blend-screen"
            style={{
              background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,0,0,0.03) 2px, rgba(255,0,0,0.03) 4px, rgba(0,255,0,0.03) 4px, rgba(0,255,0,0.03) 6px, rgba(0,0,255,0.03) 6px, rgba(0,0,255,0.03) 8px)'
            }}
          />
        </div>
      )}
    </motion.div>
  )
}

export default GlitchText