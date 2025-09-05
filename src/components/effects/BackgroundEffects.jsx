import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const BackgroundEffects = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let matrixColumns = []
    const chars = '01'
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize matrix columns
    const columnCount = Math.floor(canvas.width / 20)
    for (let i = 0; i < columnCount; i++) {
      matrixColumns[i] = {
        x: i * 20,
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 1,
        chars: []
      }
      
      // Initialize characters for each column
      for (let j = 0; j < 20; j++) {
        matrixColumns[i].chars.push({
          char: chars[Math.floor(Math.random() * chars.length)],
          opacity: Math.random()
        })
      }
    }

    // Initialize floating particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2
      })
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw matrix rain
      ctx.font = '14px "Fira Code", monospace'
      matrixColumns.forEach(column => {
        column.chars.forEach((charObj, index) => {
          const y = column.y + index * 16
          
          if (y > canvas.height) {
            column.y = -20 * 16
            charObj.char = chars[Math.floor(Math.random() * chars.length)]
            charObj.opacity = Math.random()
          }

          // Color gradient based on position
          const alpha = Math.max(0, charObj.opacity - (index * 0.05))
          ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`
          
          // Randomly change characters
          if (Math.random() < 0.01) {
            charObj.char = chars[Math.floor(Math.random() * chars.length)]
          }
          
          ctx.fillText(charObj.char, column.x, y)
        })
        
        column.y += column.speed
      })

      // Draw floating particles
      particles.forEach(particle => {
        particle.pulse += 0.02
        const pulsation = Math.sin(particle.pulse) * 0.3
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size + pulsation, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 136, ${particle.opacity + pulsation * 0.2})`
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Canvas for dynamic effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Static matrix background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-rain">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="matrix-column"
              style={{
                left: `${(i / 20) * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {Array.from({ length: 30 }, (_, j) => (
                <span key={j}>
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Neural network nodes */}
      <div className="neural-network absolute inset-0 opacity-20">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="neural-node"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 60}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}

        {/* Neural connections */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="neural-connection"
            style={{
              left: `${15 + (i % 3) * 25}%`,
              top: `${30 + Math.floor(i / 3) * 40}%`,
              width: '20%',
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.7
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-matrix-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
      
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5" />
      
      {/* Scanning lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ backgroundPosition: '0 0' }}
        animate={{ backgroundPosition: '0 100vh' }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 98px, rgba(0,255,136,0.1) 100px)',
        }}
      />
    </div>
  )
}

export default BackgroundEffects