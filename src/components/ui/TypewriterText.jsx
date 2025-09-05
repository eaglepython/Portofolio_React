import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypewriterText = ({ 
  texts = [], 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000,
  className = '',
  showCursor = true,
  cursorChar = '▌',
  loop = true
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (texts.length === 0) return

    const currentFullText = texts[currentTextIndex]
    let timeout

    if (isDeleting) {
      // Deleting text
      timeout = setTimeout(() => {
        setCurrentText(currentFullText.substring(0, currentText.length - 1))
        
        if (currentText.length === 0) {
          setIsDeleting(false)
          if (loop || currentTextIndex < texts.length - 1) {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          } else {
            setIsComplete(true)
          }
        }
      }, deleteSpeed)
    } else {
      // Typing text
      if (currentText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        }, speed)
      } else {
        // Text is complete, wait before deleting (unless it's the last text and not looping)
        if (loop || currentTextIndex < texts.length - 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true)
          }, delayBetween)
        } else {
          setIsComplete(true)
        }
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, delayBetween, loop])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="font-code">
        {currentText}
      </span>
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="text-matrix-primary font-code ml-1"
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  )
}

export default TypewriterText