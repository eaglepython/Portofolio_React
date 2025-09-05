import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

const ThemeToggle = () => {
  const { theme, effectiveTheme, toggleTheme } = useTheme()

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'auto', icon: Monitor, label: 'Auto' }
  ]

  const currentTheme = themes.find(t => t.name === theme)
  const Icon = currentTheme?.icon || Moon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed top-20 right-4 z-40"
    >
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group p-3 bg-dark-card/80 backdrop-blur-sm border border-dark-border rounded-xl shadow-lg hover:border-matrix-primary/50 transition-all duration-300"
        title={`Current: ${currentTheme?.label} (Press T to toggle)`}
      >
        {/* Icon container */}
        <div className="relative w-6 h-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Icon 
                size={20} 
                className={`
                  transition-colors duration-300
                  ${effectiveTheme === 'dark' 
                    ? 'text-matrix-primary' 
                    : 'text-blue-500'
                  }
                `} 
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-matrix-primary/0 via-matrix-primary/10 to-matrix-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-matrix-primary/50"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0 }}
          whileTap={{ scale: 1.2, opacity: [0, 1, 0] }}
          transition={{ duration: 0.3 }}
        />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-sm text-gray-300 whitespace-nowrap shadow-xl">
            <div className="font-medium text-matrix-primary">{currentTheme?.label} Theme</div>
            <div className="text-xs text-gray-400">Press T to cycle</div>
          </div>
          {/* Arrow */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-dark-border border-y-4 border-y-transparent" />
        </div>
      </motion.button>

      {/* Theme indicator dots */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {themes.map((t, index) => (
          <motion.div
            key={t.name}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              theme === t.name 
                ? 'bg-matrix-primary scale-125' 
                : 'bg-gray-600 scale-100'
            }`}
            animate={{
              scale: theme === t.name ? 1.25 : 1,
              backgroundColor: theme === t.name ? '#00ff88' : '#6b7280'
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ThemeToggle