import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from '@/hooks/useScroll'

const ScrollProgress = () => {
  const { scrollProgress } = useScroll()

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-dark-border/50">
        <motion.div
          className="h-full bg-gradient-to-r from-matrix-primary via-matrix-secondary to-cyber-purple relative overflow-hidden"
          style={{ scaleX: scrollProgress / 100 }}
          initial={{ scaleX: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          transformOrigin="0%"
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ width: '50%' }}
          />
        </motion.div>
      </div>

      {/* Circular progress indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: scrollProgress > 5 ? 1 : 0,
          scale: scrollProgress > 5 ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <div className="relative w-14 h-14">
          {/* Background circle */}
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 44 44"
          >
            <circle
              cx="22"
              cy="22"
              r="20"
              stroke="rgba(42, 42, 42, 0.8)"
              strokeWidth="3"
              fill="none"
            />
            <motion.circle
              cx="22"
              cy="22"
              r="20"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: scrollProgress / 100 }}
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              style={{
                strokeDasharray: "125.6 125.6",
                filter: "drop-shadow(0 0 6px rgba(0, 255, 136, 0.6))"
              }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ff88" />
                <stop offset="50%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#b000ff" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-dark-card/90 backdrop-blur-sm rounded-full border border-matrix-primary/30 flex items-center justify-center">
              <span className="text-xs font-bold text-matrix-primary font-code">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>

          {/* Pulse effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 rounded-full border border-matrix-primary/20"
          />
        </div>
      </motion.div>
    </>
  )
}

export default ScrollProgress