import { useState, useEffect, createContext, useContext } from 'react'

const LoadingContext = createContext()

export const useLoading = () => {
  const context = useContext(LoadingContext)
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing...')

  // Simulate loading progress
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + Math.random() * 10
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isLoading])

  // Update loading text based on progress
  useEffect(() => {
    if (loadingProgress < 20) {
      setLoadingText('Loading neural networks...')
    } else if (loadingProgress < 40) {
      setLoadingText('Initializing AI systems...')
    } else if (loadingProgress < 60) {
      setLoadingText('Calibrating quantum matrices...')
    } else if (loadingProgress < 80) {
      setLoadingText('Syncing data streams...')
    } else if (loadingProgress < 100) {
      setLoadingText('Finalizing connections...')
    } else {
      setLoadingText('Welcome to the 7th sense')
    }
  }, [loadingProgress])

  const value = {
    isLoading,
    setIsLoading,
    loadingProgress,
    setLoadingProgress,
    loadingText,
    setLoadingText
  }

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  )
}