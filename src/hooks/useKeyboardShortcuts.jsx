import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from './useTheme'

export const useKeyboardShortcuts = () => {
  const navigate = useNavigate()
  const { toggleTheme } = useTheme()

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Don't trigger shortcuts when typing in inputs
      if (
        event.target.tagName === 'INPUT' ||
        event.target.tagName === 'TEXTAREA' ||
        event.target.contentEditable === 'true'
      ) {
        return
      }

      // Handle key combinations
      const key = event.key.toLowerCase()
      const isCtrl = event.ctrlKey || event.metaKey
      const isShift = event.shiftKey
      const isAlt = event.altKey

      // Prevent default for our shortcuts
      const shortcuts = ['1', '2', '3', '4', 't', 'm', 'f', 'escape', 'h', '?']
      if (shortcuts.includes(key)) {
        event.preventDefault()
      }

      switch (key) {
        // Navigation shortcuts
        case '1':
          navigate('/')
          break
        case '2':
          navigate('/about')
          break
        case '3':
          navigate('/projects')
          break
        case '4':
          navigate('/contact')
          break

        // Theme toggle
        case 't':
          if (!isCtrl && !isShift && !isAlt) {
            toggleTheme()
          }
          break

        // Mobile menu toggle
        case 'm':
          if (!isCtrl && !isShift && !isAlt) {
            const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]')
            if (mobileMenuButton) {
              mobileMenuButton.click()
            }
          }
          break

        // Focus project filters
        case 'f':
          if (!isCtrl && !isShift && !isAlt) {
            const filterButtons = document.querySelector('.project-filters')
            if (filterButtons) {
              const firstFilter = filterButtons.querySelector('button')
              if (firstFilter) {
                firstFilter.focus()
              }
            }
          }
          break

        // Close modals/menus
        case 'escape':
          // Close mobile menu
          const mobileMenu = document.querySelector('.mobile-menu')
          if (mobileMenu) {
            const closeButton = document.querySelector('[aria-label="Toggle menu"]')
            if (closeButton) {
              closeButton.click()
            }
          }
          
          // Close any open modals
          const modals = document.querySelectorAll('.modal')
          modals.forEach(modal => {
            const closeButton = modal.querySelector('[aria-label="Close"]')
            if (closeButton) {
              closeButton.click()
            }
          })
          break

        // Help/shortcuts modal
        case 'h':
        case '?':
          if (!isCtrl && !isShift && !isAlt) {
            showShortcutsHelp()
          }
          break

        // Scroll shortcuts
        case 'g':
          if (isShift) {
            // Shift + G = Go to bottom
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
          } else {
            // G = Go to top
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          break

        // Developer shortcuts
        case 'd':
          if (isCtrl && isShift) {
            // Ctrl/Cmd + Shift + D = Toggle developer info
            toggleDeveloperInfo()
          }
          break

        default:
          break
      }
    }

    // Add event listener
    document.addEventListener('keydown', handleKeyPress)

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [navigate, toggleTheme])

  // Show shortcuts help modal
  const showShortcutsHelp = () => {
    const helpModal = document.createElement('div')
    helpModal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
    helpModal.innerHTML = `
      <div class="bg-dark-card border border-dark-border rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-white">Keyboard Shortcuts</h3>
          <button class="text-gray-400 hover:text-white" aria-label="Close">×</button>
        </div>
        <div class="space-y-3 text-sm">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h4 class="text-matrix-primary font-semibold mb-2">Navigation</h4>
              <div class="space-y-1">
                <div class="flex justify-between">
                  <span class="text-gray-300">Home</span>
                  <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">1</kbd>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-300">About</span>
                  <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">2</kbd>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-300">Projects</span>
                  <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">3</kbd>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-300">Contact</span>
                  <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">4</kbd>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-matrix-primary font-semibold mb-2">Actions</h4>
              <div class="space-y-1">
                <div class="flex justify-between">
                  <span class="text-gray-300">Toggle Theme</span>
                  <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">T</kbd>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-300">Mobile Menu</span>
                  <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">M</kbd>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-300">Focus Filters</span>
                  <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">F</kbd>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-300">Close Menu</span>
                  <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">ESC</kbd>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-3 border-t border-dark-border">
            <h4 class="text-matrix-primary font-semibold mb-2">Scroll</h4>
            <div class="flex justify-between">
              <span class="text-gray-300">Top / Bottom</span>
              <div class="flex gap-1">
                <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">G</kbd>
                <span class="text-gray-400">/</span>
                <kbd class="px-2 py-1 bg-dark-bg rounded border border-dark-border text-xs">⇧G</kbd>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 text-center">
          <button class="px-4 py-2 bg-matrix-primary text-black rounded-lg hover:bg-matrix-secondary transition-colors">
            Got it!
          </button>
        </div>
      </div>
    `

    // Add close functionality
    const closeButton = helpModal.querySelector('button[aria-label="Close"]')
    const gotItButton = helpModal.querySelector('button:last-child')
    
    const closeModal = () => {
      document.body.removeChild(helpModal)
    }

    closeButton.addEventListener('click', closeModal)
    gotItButton.addEventListener('click', closeModal)
    helpModal.addEventListener('click', (e) => {
      if (e.target === helpModal) closeModal()
    })

    // Close on escape key
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal()
        document.removeEventListener('keydown', escapeHandler)
      }
    }
    document.addEventListener('keydown', escapeHandler)

    document.body.appendChild(helpModal)
  }

  // Toggle developer information
  const toggleDeveloperInfo = () => {
    const existingInfo = document.querySelector('.developer-info')
    
    if (existingInfo) {
      existingInfo.remove()
      return
    }

    const devInfo = document.createElement('div')
    devInfo.className = 'developer-info fixed bottom-4 right-4 bg-dark-card border border-matrix-primary/30 rounded-lg p-4 text-xs font-code z-50 max-w-xs'
    devInfo.innerHTML = `
      <div class="text-matrix-primary font-semibold mb-2">Developer Info</div>
      <div class="space-y-1 text-gray-300">
        <div>React: ${React.version}</div>
        <div>Viewport: ${window.innerWidth}x${window.innerHeight}</div>
        <div>User Agent: ${navigator.userAgent.split(' ')[0]}</div>
        <div>Theme: ${document.documentElement.classList.contains('dark') ? 'Dark' : 'Light'}</div>
        <div>Scroll: ${Math.round(window.scrollY)}px</div>
      </div>
      <button class="mt-2 text-matrix-primary hover:text-white">Close</button>
    `

    const closeBtn = devInfo.querySelector('button')
    closeBtn.addEventListener('click', () => devInfo.remove())

    document.body.appendChild(devInfo)

    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (document.body.contains(devInfo)) {
        devInfo.remove()
      }
    }, 10000)
  }
}