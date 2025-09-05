import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CursorTrail = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trails, setTrails] = useState([])
  const [clicks, setClicks] = useState([])
  const trailsRef = useRef([])
  const clicksRef = useRef([])

  useEffect(() => {
    let animationFrame

    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      
      // Add trail point
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      }
      
      trailsRef.current = [...trailsRef.current, newTrail].slice(-20) // Keep last 20 points
      setTrails([...trailsRef.current])
    }

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handleClick = (e) => {
      const newClick = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY
      }
      
      clicksRef.current = [...clicksRef.current, newClick]
      setClicks([...clicksRef.current])

      // Remove click effect after animation
      setTimeout(() => {
        clicksRef.current = clicksRef.current.filter(click => click.id !== newClick.id)
        setClicks([...clicksRef.current])
      }, 600)
    }

    // Clean up old trails
    const cleanupTrails = () => {
      const now = Date.now()
      trailsRef.current = trailsRef.current.filter(trail => now - trail.timestamp < 500)
      setTrails([...trailsRef.current])
      animationFrame = requestAnimationFrame(cleanupTrails)
    }

    document.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)
    document.addEventListener('click', handleClick)
    
    animationFrame = requestAnimationFrame(cleanupTrails)

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      document.removeEventListener('click', handleClick)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  // Don't render on touch devices
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50 mix-blend-difference">
      {/* Main cursor */}
      <motion.div
        className={`fixed w-4 h-4 border-2 border-matrix-primary rounded-full transition-all duration-200 ${
          isHovering ? 'scale-150 bg-matrix-primary/20' : 'scale-100'
        }`}
        animate={{
          x: cursorPosition.x - 8,
          y: cursorPosition.y - 8,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 255, 136, 0.2)' : 'transparent'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />

      {/* Cursor dot */}
      <motion.div
        className="fixed w-1 h-1 bg-matrix-primary rounded-full"
        animate={{
          x: cursorPosition.x - 2,
          y: cursorPosition.y - 2
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 35,
          mass: 0.1
        }}
      />

      {/* Trail dots */}
      <AnimatePresence>
        {trails.map((trail, index) => {
          const age = Date.now() - trail.timestamp
          const opacity = Math.max(0, 1 - age / 500)
          const scale = Math.max(0.1, 1 - age / 500)
          
          return (
            <motion.div
              key={trail.id}
              className="fixed w-1 h-1 bg-matrix-primary rounded-full pointer-events-none"
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{
                x: trail.x - 2,
                y: trail.y - 2,
                opacity,
                scale
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                delay: index * 0.01
              }}
            />
          )
        })}
      </AnimatePresence>

      {/* Click ripples */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            className="fixed border border-matrix-primary rounded-full pointer-events-none"
            initial={{
              x: click.x - 10,
              y: click.y - 10,
              width: 20,
              height: 20,
              opacity: 0.8,
              scale: 0
            }}
            animate={{
              scale: [0, 1, 1.5],
              opacity: [0.8, 0.4, 0],
              borderWidth: [2, 1, 0]
            }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut'
            }}
          />
        ))}
      </AnimatePresence>

      {/* Hover glow effect */}
      {isHovering && (
        <motion.div
          className="fixed w-8 h-8 bg-matrix-primary/10 rounded-full blur-sm pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: cursorPosition.x - 16,
            y: cursorPosition.y - 16,
            opacity: 1,
            scale: 1
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25
          }}
        />
      )}

      {/* Particle burst on hover */}
      {isHovering && (
        <div className="fixed pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-matrix-primary rounded-full"
              animate={{
                x: [
                  cursorPosition.x,
                  cursorPosition.x + Math.cos(i * Math.PI / 3) * 20,
                  cursorPosition.x + Math.cos(i * Math.PI / 3) * 40
                ],
                y: [
                  cursorPosition.y,
                  cursorPosition.y + Math.sin(i * Math.PI / 3) * 20,
                  cursorPosition.y + Math.sin(i * Math.PI / 3) * 40
                ],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeOut'
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CursorTrail