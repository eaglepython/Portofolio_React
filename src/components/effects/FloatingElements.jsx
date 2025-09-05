import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements = () => {
  // Generate random floating elements
  const generateElements = (count, type) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      amplitude: Math.random() * 50 + 20,
      type
    }))
  }

  const particles = generateElements(15, 'particle')
  const codes = generateElements(8, 'code')
  const geometricShapes = generateElements(6, 'geometric')

  // Binary code snippets
  const codeSnippets = [
    '{ AI: true }',
    'const future = async () => {}',
    'npm install innovation',
    '=> quantum.compute()',
    'blockchain.verify()',
    'neural.network.train()',
    'algorithm.optimize()',
    'data.transform()'
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-matrix-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
          }}
          animate={{
            y: [0, -particle.amplitude, 0],
            x: [0, particle.amplitude * 0.3, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Floating code elements */}
      {codes.map((code) => (
        <motion.div
          key={`code-${code.id}`}
          className="absolute text-xs font-code text-matrix-primary/30 whitespace-nowrap"
          style={{
            left: `${code.initialX}%`,
            top: `${code.initialY}%`,
          }}
          animate={{
            y: [0, -code.amplitude * 1.5, -code.amplitude * 3],
            opacity: [0, 0.7, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: code.duration,
            repeat: Infinity,
            delay: code.delay,
            ease: 'linear'
          }}
        >
          {codeSnippets[code.id % codeSnippets.length]}
        </motion.div>
      ))}

      {/* Geometric shapes */}
      {geometricShapes.map((shape) => (
        <motion.div
          key={`geometric-${shape.id}`}
          className="absolute border border-matrix-primary/20"
          style={{
            width: shape.size * 6,
            height: shape.size * 6,
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
            borderRadius: shape.id % 2 === 0 ? '50%' : '0%'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, shape.amplitude * 0.5, 0],
            y: [0, -shape.amplitude, 0]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'linear'
          }}
        />
      ))}

      {/* DNA Helix-like structures */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={`dna-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: '10%',
              height: '80%',
              width: '2px'
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5
            }}
          >
            {Array.from({ length: 20 }, (_, j) => (
              <motion.div
                key={j}
                className="absolute w-1 h-1 bg-matrix-primary/40 rounded-full"
                style={{
                  top: `${j * 5}%`,
                }}
                animate={{
                  x: [
                    Math.sin((j * Math.PI) / 10) * 20,
                    Math.sin((j * Math.PI) / 10 + Math.PI) * 20
                  ],
                  opacity: [0.2, 0.8, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: j * 0.1 + i * 0.5,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Quantum dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={`quantum-${i}`}
            className="absolute w-2 h-2"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut'
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-matrix-primary to-cyber-purple rounded-full blur-sm" />
          </motion.div>
        ))}
      </div>

      {/* Neural network connections */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.svg
            key={`neural-${i}`}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.1 }}
          >
            <motion.path
              d={`M ${20 + i * 20},${20 + i * 15} Q ${50 + i * 10},${50 + i * 20} ${80 + i * 5},${30 + i * 25}`}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0], 
                opacity: [0, 0.3, 0] 
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: 'easeInOut'
              }}
            />
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ff88" />
                <stop offset="50%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#b000ff" />
              </linearGradient>
            </defs>
          </motion.svg>
        ))}
      </div>

      {/* Data streams */}
      <div className="absolute right-0 top-0 h-full w-1/3">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute right-0 w-px bg-gradient-to-b from-transparent via-matrix-primary/30 to-transparent"
            style={{
              height: '100%',
              right: `${i * 15}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Holographic grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Energy pulses */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute rounded-full border border-matrix-primary/20"
            style={{
              left: '50%',
              top: '50%',
              width: 100 + i * 200,
              height: 100 + i * 200,
              marginLeft: -(50 + i * 100),
              marginTop: -(50 + i * 100)
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default FloatingElements