import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [isSystemDark, setIsSystemDark] = useState(false)

  // Check system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsSystemDark(mediaQuery.matches)

    const handleChange = (e) => setIsSystemDark(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme && ['light', 'dark', 'auto'].includes(savedTheme)) {
      setTheme(savedTheme)
    } else {
      setTheme('auto')
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    const effectiveTheme = theme === 'auto' ? (isSystemDark ? 'dark' : 'light') : theme
    
    if (effectiveTheme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
    }

    // Update meta theme color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', effectiveTheme === 'dark' ? '#0a0a0a' : '#ffffff')
    }
  }, [theme, isSystemDark])

  const toggleTheme = () => {
    const themes = ['light', 'dark', 'auto']
    const currentIndex = themes.indexOf(theme)
    const nextTheme = themes[(currentIndex + 1) % themes.length]
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
  }

  const setThemeMode = (mode) => {
    if (['light', 'dark', 'auto'].includes(mode)) {
      setTheme(mode)
      localStorage.setItem('theme', mode)
    }
  }

  const getEffectiveTheme = () => {
    return theme === 'auto' ? (isSystemDark ? 'dark' : 'light') : theme
  }

  const value = {
    theme,
    effectiveTheme: getEffectiveTheme(),
    toggleTheme,
    setTheme: setThemeMode,
    isSystemDark
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}