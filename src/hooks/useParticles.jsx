import { useState, useEffect, useRef, createContext, useContext } from 'react'

const ParticlesContext = createContext()

export const useParticles = () => {
  const context = useContext(ParticlesContext)
  if (!context) {
    throw new Error('useParticles must be used within a ParticlesProvider')
  }
  return context
}

export const ParticlesProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true)
  const [particles, setParticles] = useState([])
  const animationRef = useRef(null)
  const particleIdRef = useRef(0)

  // Check performance preference
  useEffect(() => {
    const savedPreference = localStorage.getItem('particlesEnabled')
    if (savedPreference !== null) {
      setIsEnabled(JSON.parse(savedPreference))
    }

    // Disable on low-end devices
    const isLowEndDevice = () => {
      return (
        navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4 ||
        navigator.deviceMemory && navigator.deviceMemory < 4 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      )
    }

    if (isLowEndDevice()) {
      setIsEnabled(false)
    }
  }, [])

  // Save preference
  useEffect(() => {
    localStorage.setItem('particlesEnabled', JSON.stringify(isEnabled))
  }, [isEnabled])

  // Particle class
  class Particle {
    constructor(x, y, options = {}) {
      this.id = particleIdRef.current++
      this.x = x
      this.y = y
      this.vx = options.vx || (Math.random() - 0.5) * 2
      this.vy = options.vy || (Math.random() - 0.5) * 2
      this.size = options.size || Math.random() * 3 + 1
      this.life = options.life || 1
      this.maxLife = options.maxLife || 60
      this.color = options.color || '#00ff88'
      this.opacity = options.opacity || 1
      this.gravity = options.gravity || 0
      this.friction = options.friction || 0.99
      this.type = options.type || 'default'
      this.angle = options.angle || 0
      this.angularVelocity = options.angularVelocity || 0
    }

    update() {
      // Apply physics
      this.vx *= this.friction
      this.vy *= this.friction
      this.vy += this.gravity

      this.x += this.vx
      this.y += this.vy
      this.angle += this.angularVelocity

      // Update life
      this.life -= 1 / this.maxLife
      this.opacity = Math.max(0, this.life)

      return this.life > 0
    }

    draw(ctx) {
      if (!ctx) return

      ctx.save()
      ctx.globalAlpha = this.opacity
      ctx.translate(this.x, this.y)
      ctx.rotate(this.angle)

      switch (this.type) {
        case 'circle':
          ctx.beginPath()
          ctx.arc(0, 0, this.size, 0, Math.PI * 2)
          ctx.fillStyle = this.color
          ctx.fill()
          break

        case 'square':
          ctx.fillStyle = this.color
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
          break

        case 'line':
          ctx.strokeStyle = this.color
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(-this.size, 0)
          ctx.lineTo(this.size, 0)
          ctx.stroke()
          break

        case 'star':
          this.drawStar(ctx, 0, 0, 5, this.size, this.size * 0.5)
          ctx.fillStyle = this.color
          ctx.fill()
          break

        default:
          ctx.beginPath()
          ctx.arc(0, 0, this.size, 0, Math.PI * 2)
          ctx.fillStyle = this.color
          ctx.fill()
      }

      ctx.restore()
    }

    drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
      let rot = (Math.PI / 2) * 3
      let x = cx
      let y = cy
      const step = Math.PI / spikes

      ctx.beginPath()
      ctx.moveTo(cx, cy - outerRadius)

      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius
        y = cy + Math.sin(rot) * outerRadius
        ctx.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius
        y = cy + Math.sin(rot) * innerRadius
        ctx.lineTo(x, y)
        rot += step
      }

      ctx.lineTo(cx, cy - outerRadius)
      ctx.closePath()
    }
  }

  // Create particles
  const createParticle = (x, y, options = {}) => {
    if (!isEnabled) return null
    return new Particle(x, y, options)
  }

  // Add particles to system
  const addParticles = (newParticles) => {
    if (!isEnabled) return
    setParticles(prev => [...prev, ...newParticles].slice(-200)) // Limit particles
  }

  // Create explosion effect
  const createExplosion = (x, y, count = 10, options = {}) => {
    if (!isEnabled) return

    const explosionParticles = []
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count
      const velocity = options.velocity || 5
      const particle = createParticle(x, y, {
        vx: Math.cos(angle) * velocity * (0.5 + Math.random() * 0.5),
        vy: Math.sin(angle) * velocity * (0.5 + Math.random() * 0.5),
        size: options.size || Math.random() * 4 + 2,
        color: options.color || '#00ff88',
        life: 1,
        maxLife: options.maxLife || 60,
        friction: options.friction || 0.95,
        gravity: options.gravity || 0.1,
        type: options.type || 'circle'
      })
      explosionParticles.push(particle)
    }
    addParticles(explosionParticles)
  }

  // Create trail effect
  const createTrail = (x, y, options = {}) => {
    if (!isEnabled) return

    const trailParticles = []
    const count = options.count || 3
    
    for (let i = 0; i < count; i++) {
      const particle = createParticle(
        x + (Math.random() - 0.5) * 10,
        y + (Math.random() - 0.5) * 10,
        {
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: options.size || Math.random() * 2 + 1,
          color: options.color || '#00ff88',
          life: 1,
          maxLife: options.maxLife || 30,
          friction: 0.98,
          type: options.type || 'circle'
        }
      )
      trailParticles.push(particle)
    }
    addParticles(trailParticles)
  }

  // Create typing effect particles
  const createTypingEffect = (x, y) => {
    if (!isEnabled) return

    const typingParticles = []
    for (let i = 0; i < 5; i++) {
      const particle = createParticle(x, y, {
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 3 - 1,
        size: Math.random() * 2 + 1,
        color: '#00ff88',
        life: 1,
        maxLife: 40,
        friction: 0.96,
        gravity: 0.05,
        type: 'circle'
      })
      typingParticles.push(particle)
    }
    addParticles(typingParticles)
  }

  // Create success effect
  const createSuccessEffect = (x, y) => {
    if (!isEnabled) return

    createExplosion(x, y, 15, {
      velocity: 8,
      color: '#00ff88',
      size: 3,
      maxLife: 80,
      friction: 0.92,
      gravity: 0.15,
      type: 'star'
    })
  }

  // Create error effect
  const createErrorEffect = (x, y) => {
    if (!isEnabled) return

    createExplosion(x, y, 12, {
      velocity: 6,
      color: '#ff4444',
      size: 2,
      maxLife: 60,
      friction: 0.94,
      gravity: 0.1,
      type: 'square'
    })
  }

  // Create hover effect
  const createHoverEffect = (x, y) => {
    if (!isEnabled) return

    const hoverParticles = []
    for (let i = 0; i < 3; i++) {
      const particle = createParticle(x, y, {
        vx: (Math.random() - 0.5) * 3,
        vy: -Math.random() * 2 - 1,
        size: Math.random() * 1.5 + 0.5,
        color: '#00d4ff',
        life: 1,
        maxLife: 25,
        friction: 0.97,
        gravity: 0.02,
        type: 'circle'
      })
      hoverParticles.push(particle)
    }
    addParticles(hoverParticles)
  }

  // Animation loop
  useEffect(() => {
    if (!isEnabled) return

    const animate = () => {
      setParticles(prev => 
        prev.map(particle => {
          particle.update()
          return particle
        }).filter(particle => particle.life > 0)
      )
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isEnabled])

  // Clear all particles
  const clearParticles = () => {
    setParticles([])
  }

  // Toggle particles
  const toggleParticles = () => {
    setIsEnabled(prev => !prev)
    if (!isEnabled) {
      clearParticles()
    }
  }

  // Get particle count
  const getParticleCount = () => particles.length

  const value = {
    isEnabled,
    particles,
    createParticle,
    addParticles,
    createExplosion,
    createTrail,
    createTypingEffect,
    createSuccessEffect,
    createErrorEffect,
    createHoverEffect,
    clearParticles,
    toggleParticles,
    getParticleCount,
    setIsEnabled
  }

  return (
    <ParticlesContext.Provider value={value}>
      {children}
    </ParticlesContext.Provider>
  )
}