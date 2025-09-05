import { useState, useEffect, createContext, useContext } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

const ScrollContext = createContext()

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}

export const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('up')
  const [isScrolling, setIsScrolling] = useState(false)
  
  // Framer Motion values for smooth animations
  const scrollYMotion = useMotionValue(0)
  const scrollYSpring = useSpring(scrollYMotion, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    let timeoutId = null
    let lastScrollY = 0

    const updateScrollInfo = () => {
      const currentScrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0

      // Update scroll values
      setScrollY(currentScrollY)
      setScrollProgress(Math.min(progress, 100))
      scrollYMotion.set(currentScrollY)

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      lastScrollY = currentScrollY

      // Set scrolling state
      setIsScrolling(true)
      
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      // Set scrolling to false after scrolling stops
      timeoutId = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollInfo()
          ticking = false
        })
        ticking = true
      }
    }

    // Initial call
    updateScrollInfo()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [scrollYMotion])

  // Smooth scroll to element
  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Check if element is in viewport
  const isElementInViewport = (element, threshold = 0) => {
    if (!element) return false
    
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    
    return (
      rect.top <= windowHeight * (1 - threshold) &&
      rect.bottom >= windowHeight * threshold
    )
  }

  // Get scroll percentage of an element
  const getElementScrollProgress = (element) => {
    if (!element) return 0
    
    const rect = element.getBoundingClientRect()
    const elementHeight = rect.height
    const windowHeight = window.innerHeight
    
    if (rect.top > windowHeight) return 0
    if (rect.bottom < 0) return 100
    
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
    return (visibleHeight / elementHeight) * 100
  }

  const value = {
    scrollY,
    scrollProgress,
    scrollDirection,
    isScrolling,
    scrollYMotion,
    scrollYSpring,
    scrollToElement,
    scrollToTop,
    isElementInViewport,
    getElementScrollProgress
  }

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  )
}