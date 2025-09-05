// Utility functions for the portfolio application

/**
 * Clsx utility for conditional className concatenation
 * @param {...any} classes - Class names and conditions
 * @returns {string} - Concatenated class names
 */
export const cn = (...classes) => {
  return classes
    .flat()
    .filter(Boolean)
    .join(' ')
    .trim()
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately flag
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func(...args)
  }
}

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Format number with appropriate suffix (K, M, B)
 * @param {number} num - Number to format
 * @param {number} digits - Decimal places
 * @returns {string} - Formatted number string
 */
export const formatNumber = (num, digits = 1) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" }
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  const item = lookup.slice().reverse().find(item => num >= item.value)
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0"
}

/**
 * Generate a random ID string
 * @param {number} length - Length of the ID
 * @returns {string} - Random ID string
 */
export const generateId = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Format date to readable string
 * @param {Date|string} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const finalOptions = { ...defaultOptions, ...options }
  return new Intl.DateTimeFormat('en-US', finalOptions).format(new Date(date))
}

/**
 * Calculate reading time for text
 * @param {string} text - Text to analyze
 * @param {number} wpm - Words per minute (default: 200)
 * @returns {number} - Reading time in minutes
 */
export const calculateReadingTime = (text, wpm = 200) => {
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wpm)
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export const copyToClipboard = async (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const success = document.execCommand('copy')
      document.body.removeChild(textArea)
      return success
    }
  } catch (error) {
    console.error('Failed to copy text:', error)
    return false
  }
}

/**
 * Get device type based on viewport width
 * @returns {string} - Device type (mobile, tablet, desktop)
 */
export const getDeviceType = () => {
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} - Whether user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Smooth scroll to element or position
 * @param {string|number} target - Element selector or scroll position
 * @param {object} options - Scroll options
 */
export const smoothScrollTo = (target, options = {}) => {
  const defaultOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  }
  
  if (typeof target === 'string') {
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ ...defaultOptions, ...options })
    }
  } else if (typeof target === 'number') {
    window.scrollTo({
      top: target,
      ...defaultOptions,
      ...options
    })
  }
}

/**
 * Get scroll position and document dimensions
 * @returns {object} - Scroll and dimension data
 */
export const getScrollData = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100
  
  return {
    scrollTop,
    scrollHeight,
    clientHeight,
    scrollPercent: Math.min(Math.max(scrollPercent, 0), 100)
  }
}

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 * @param {number} threshold - Intersection threshold (0-1)
 * @returns {boolean} - Whether element is in viewport
 */
export const isInViewport = (element, threshold = 0) => {
  if (!element) return false
  
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  const windowWidth = window.innerWidth || document.documentElement.clientWidth
  
  const verticalVisible = rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold
  const horizontalVisible = rect.left <= windowWidth * (1 - threshold) && rect.right >= windowWidth * threshold
  
  return verticalVisible && horizontalVisible
}

/**
 * Generate CSS custom properties from object
 * @param {object} vars - Object with CSS variable names and values
 * @returns {object} - React style object
 */
export const generateCSSVars = (vars) => {
  const cssVars = {}
  Object.entries(vars).forEach(([key, value]) => {
    cssVars[`--${key}`] = value
  })
  return cssVars
}

/**
 * Load script dynamically
 * @param {string} src - Script source URL
 * @param {object} options - Script options
 * @returns {Promise} - Load promise
 */
export const loadScript = (src, options = {}) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = options.async !== false
    script.defer = options.defer || false
    
    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    
    if (options.id) script.id = options.id
    if (options.type) script.type = options.type
    
    document.head.appendChild(script)
  })
}

/**
 * Local storage helpers with error handling
 */
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error(`Error reading from localStorage:`, error)
      return defaultValue
    }
  },
  
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.error(`Error writing to localStorage:`, error)
      return false
    }
  },
  
  remove: (key) => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error(`Error removing from localStorage:`, error)
      return false
    }
  },
  
  clear: () => {
    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.error(`Error clearing localStorage:`, error)
      return false
    }
  }
}

/**
 * Color utility functions
 */
export const colors = {
  hexToRgb: (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  },
  
  rgbToHex: (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  },
  
  adjustOpacity: (color, opacity) => {
    const rgb = colors.hexToRgb(color)
    return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})` : color
  }
}

/**
 * Performance monitoring utilities
 */
export const performance = {
  measure: (name, fn) => {
    const start = window.performance.now()
    const result = fn()
    const end = window.performance.now()
    console.log(`${name} took ${end - start} milliseconds`)
    return result
  },
  
  markTime: (label) => {
    if (window.performance && window.performance.mark) {
      window.performance.mark(label)
    }
  },
  
  measureTime: (startMark, endMark, measureName) => {
    if (window.performance && window.performance.measure) {
      window.performance.measure(measureName, startMark, endMark)
    }
  }
}