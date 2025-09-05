import { useState, useRef, useEffect, createContext, useContext } from 'react'

const AudioContext = createContext()

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

export const AudioProvider = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const audioRefs = useRef({})

  // Initialize audio context
  useEffect(() => {
    // Check user preference
    const savedPreference = localStorage.getItem('audioEnabled')
    if (savedPreference !== null) {
      setIsEnabled(JSON.parse(savedPreference))
    }

    const savedVolume = localStorage.getItem('audioVolume')
    if (savedVolume !== null) {
      setVolume(parseFloat(savedVolume))
    }
  }, [])

  // Save preferences
  useEffect(() => {
    localStorage.setItem('audioEnabled', JSON.stringify(isEnabled))
  }, [isEnabled])

  useEffect(() => {
    localStorage.setItem('audioVolume', volume.toString())
  }, [volume])

  // Create audio instance
  const createAudio = (src, options = {}) => {
    if (!isEnabled) return null

    try {
      const audio = new Audio(src)
      audio.volume = volume * (options.volume || 1)
      audio.preload = 'auto'
      
      if (options.loop) {
        audio.loop = true
      }

      return audio
    } catch (error) {
      console.warn('Failed to create audio:', error)
      return null
    }
  }

  // Play sound effect
  const playSound = (soundName, options = {}) => {
    if (!isEnabled) return

    // Sound library - you can replace these with actual audio files
    const soundLibrary = {
      click: '/sounds/click.mp3',
      hover: '/sounds/hover.mp3',
      success: '/sounds/success.mp3',
      error: '/sounds/error.mp3',
      notification: '/sounds/notification.mp3',
      typing: '/sounds/typing.mp3',
      whoosh: '/sounds/whoosh.mp3',
      beep: '/sounds/beep.mp3'
    }

    const soundSrc = soundLibrary[soundName]
    if (!soundSrc) {
      console.warn(`Sound '${soundName}' not found in library`)
      return
    }

    // Use existing audio instance or create new one
    if (!audioRefs.current[soundName]) {
      audioRefs.current[soundName] = createAudio(soundSrc, options)
    }

    const audio = audioRefs.current[soundName]
    if (audio) {
      audio.currentTime = 0
      audio.volume = volume * (options.volume || 1)
      
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Audio play failed:', error)
        })
      }
    }
  }

  // Generate synthetic sounds using Web Audio API
  const generateTone = (frequency, duration = 200, type = 'sine') => {
    if (!isEnabled) return

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
      oscillator.type = type

      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(volume * 0.1, audioContext.currentTime + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration / 1000)
    } catch (error) {
      console.warn('Failed to generate tone:', error)
    }
  }

  // UI interaction sounds
  const uiSounds = {
    buttonHover: () => generateTone(800, 100, 'sine'),
    buttonClick: () => generateTone(600, 150, 'square'),
    navClick: () => generateTone(1000, 120, 'triangle'),
    success: () => {
      generateTone(523, 150, 'sine') // C
      setTimeout(() => generateTone(659, 150, 'sine'), 100) // E
      setTimeout(() => generateTone(784, 200, 'sine'), 200) // G
    },
    error: () => {
      generateTone(200, 300, 'sawtooth')
    },
    notification: () => {
      generateTone(800, 100, 'sine')
      setTimeout(() => generateTone(1000, 100, 'sine'), 150)
    },
    typing: () => generateTone(400 + Math.random() * 200, 50, 'square'),
    glitch: () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          generateTone(200 + Math.random() * 800, 30, 'sawtooth')
        }, i * 20)
      }
    }
  }

  // Background ambient sounds
  const startAmbient = (type = 'cyber') => {
    if (!isEnabled) return

    const ambientSounds = {
      cyber: () => {
        // Generate subtle cyber ambience
        const playRandomBeep = () => {
          if (Math.random() < 0.3) {
            generateTone(1000 + Math.random() * 500, 50, 'square')
          }
          setTimeout(playRandomBeep, 2000 + Math.random() * 3000)
        }
        playRandomBeep()
      },
      matrix: () => {
        // Generate matrix-like data stream sounds
        const playDataStream = () => {
          if (Math.random() < 0.2) {
            generateTone(400 + Math.random() * 300, 100, 'sine')
          }
          setTimeout(playDataStream, 1000 + Math.random() * 2000)
        }
        playDataStream()
      }
    }

    if (ambientSounds[type]) {
      ambientSounds[type]()
    }
  }

  // Toggle audio
  const toggleAudio = () => {
    setIsEnabled(prev => {
      const newState = !prev
      if (newState) {
        uiSounds.success()
      }
      return newState
    })
  }

  // Adjust volume
  const adjustVolume = (newVolume) => {
    setVolume(Math.max(0, Math.min(1, newVolume)))
  }

  const value = {
    isEnabled,
    volume,
    playSound,
    generateTone,
    uiSounds,
    startAmbient,
    toggleAudio,
    adjustVolume,
    setIsEnabled,
    setVolume
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}