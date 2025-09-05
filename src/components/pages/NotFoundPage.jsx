import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, Zap, AlertTriangle } from 'lucide-react'
import GlitchText from '@components/ui/GlitchText'

const NotFoundPage = () => {
  const [glitchTrigger, setGlitchTrigger] = useState(false)

  // Trigger glitch effect periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchTrigger(prev => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Matrix-style falling characters
  const MatrixRain = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-matrix-primary font-code text-sm"
          style={{
            left: `${i * 5}%`,
            fontSize: `${10 + Math.random() * 4}px`
          }}
          animate={{
            y: ['-100vh', '100vh']
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5
          }}
        >
          {Array.from({ length: 50 }, (_, j) => (
            <div key={j} style={{ marginBottom: '8px' }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg">
      {/* Background Effects */}
      <MatrixRain />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
          className="mb-8"
        >
          <div className="relative mx-auto w-32 h-32">
            <div className="absolute inset-0 border-4 border-red-500/30 rounded-full animate-pulse" />
            <div className="absolute inset-4 border-2 border-red-400/20 rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle size={48} className="text-red-400" />
            </div>
            
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 border border-red-500/20 rounded-full"
            />
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <GlitchText
            text="404"
            className="text-8xl md:text-9xl font-bold font-code text-red-400"
            triggerGlitch={glitchTrigger}
            glitchDuration={400}
          />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 space-y-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-matrix-primary">System.Error:</span> Page Not Found
          </h1>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            <p className="mb-4">
              The requested resource has been moved, deleted, or never existed in this dimension of the matrix.
            </p>
            <div className="font-code text-sm bg-dark-card/50 border border-dark-border rounded-lg p-4 text-left">
              <div className="text-red-400 mb-2">Error Details:</div>
              <div className="text-gray-300">
                <div>• Status: 404 - Resource Not Found</div>
                <div>• Location: /unknown-path</div>
                <div>• Timestamp: {new Date().toISOString()}</div>
                <div>• Suggestion: Navigate to known coordinates</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            to="/"
            className="group flex items-center gap-2 px-8 py-4 bg-matrix-primary text-black font-semibold rounded-lg hover:bg-matrix-secondary transition-all duration-300 hover:scale-105"
          >
            <Home size={20} />
            Return to Base
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.div>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 px-8 py-4 border-2 border-matrix-primary text-matrix-primary font-semibold rounded-lg hover:bg-matrix-primary hover:text-black transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-semibold text-white mb-4">
            Or explore these areas:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { name: 'About Me', path: '/about', icon: '👤', description: 'Learn about my background' },
              { name: 'Projects', path: '/projects', icon: '💼', description: 'View my work portfolio' },
              { name: 'Contact', path: '/contact', icon: '📧', description: 'Get in touch' }
            ].map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="block p-4 bg-dark-card/50 border border-dark-border rounded-lg hover:border-matrix-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-white group-hover:text-matrix-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 text-center"
        >
          <div className="text-xs text-gray-500 font-code mb-2">
            Fun fact: This 404 page has more animations than some entire websites 
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <Zap size={12} />
            <span>Powered by React + Framer Motion</span>
          </div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
