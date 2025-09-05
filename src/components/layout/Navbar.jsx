import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Mail, Zap } from 'lucide-react'
import { useScroll } from '@/hooks/useScroll'
import { useTheme } from '@/hooks/useTheme'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { scrollY } = useScroll()
  const { theme } = useTheme()

  // Handle scroll effect
  useEffect(() => {
    setIsScrolled(scrollY > 100)
  }, [scrollY])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/', icon: Home, key: '1' },
    { name: 'About', path: '/about', icon: User, key: '2' },
    { name: 'Projects', path: '/projects', icon: Briefcase, key: '3' },
    { name: 'Contact', path: '/contact', icon: Mail, key: '4' }
  ]

  // Logo animation variants
  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05, 
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 }
    }
  }

  // Menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  }

  const menuItemVariants = {
    closed: { y: -10, opacity: 0 },
    open: { y: 0, opacity: 1 }
  }

  // Navigation item component
  const NavItem = ({ item, mobile = false }) => {
    const isActive = location.pathname === item.path
    const Icon = item.icon

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={mobile ? menuItemVariants : undefined}
      >
        <Link
          to={item.path}
          className={`
            relative flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
            ${mobile ? 'text-lg justify-center' : 'text-sm'}
            ${isActive 
              ? 'text-matrix-primary bg-matrix-primary/10 shadow-matrix' 
              : 'text-gray-300 hover:text-matrix-primary hover:bg-matrix-primary/5'
            }
            group
          `}
          onClick={() => mobile && setIsMenuOpen(false)}
        >
          <Icon size={mobile ? 20 : 16} />
          <span className="relative">
            {item.name}
            {isActive && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-matrix-primary rounded-full"
                layoutId="activeTab"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </span>
          
          {/* Hover effect */}
          <div className="absolute inset-0 rounded-lg border border-matrix-primary/0 group-hover:border-matrix-primary/30 transition-colors duration-300" />
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled || isMenuOpen
          ? 'bg-dark-bg/90 backdrop-blur-lg border-b border-dark-border shadow-lg' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
            className="flex items-center gap-3"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Zap 
                  size={28} 
                  className="text-matrix-primary group-hover:text-matrix-secondary transition-colors duration-300" 
                />
                <div className="absolute inset-0 animate-pulse-glow opacity-50">
                  <Zap size={28} className="text-matrix-primary" />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold font-garamond text-white group-hover:text-matrix-primary transition-colors duration-300">
                  the 7th sense
                </div>
                <div className="text-xs text-gray-400 font-code tracking-wider">
                  quantitative research
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 rounded-lg text-gray-300 hover:text-matrix-primary hover:bg-matrix-primary/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-lg border border-matrix-primary/0 hover:border-matrix-primary/30 transition-colors duration-300" />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden absolute top-full left-0 right-0 bg-dark-bg/95 backdrop-blur-lg border-b border-dark-border shadow-xl"
            >
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item) => (
                  <NavItem key={item.path} item={item} mobile />
                ))}
                
                {/* Additional mobile menu info */}
                <motion.div
                  variants={menuItemVariants}
                  className="pt-4 mt-4 border-t border-dark-border text-center"
                >
                  <div className="text-sm text-gray-400 font-code">
                    Press <kbd className="px-2 py-1 text-xs bg-dark-card rounded border border-dark-border">ESC</kbd> to close
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Keyboard shortcut indicator */}
      <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2">
        <div className="text-xs text-gray-500 font-code">
          Press <kbd className="px-1 py-0.5 text-xs bg-dark-card rounded border border-dark-border">1-4</kbd> for quick nav
        </div>
      </div>
    </motion.nav>
  )
}

export default NavBar