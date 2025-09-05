import React from 'react'
import { useLoading } from '@/hooks/useLoading'

const LoadingScreen = () => {
  const { loadingProgress, loadingText } = useLoading()

  return (
    <div className="fixed inset-0 bg-dark-bg z-50 flex items-center justify-center overflow-hidden">
      {/* Main loading content */}
      <div className="text-center space-y-8 max-w-md w-full px-4">
        {/* Brand text */}
        <div>
          <h1 className="text-3xl font-bold font-garamond text-white mb-2">
            the 7th sense
          </h1>
          <p className="text-sm text-gray-400 font-code tracking-wide">
            quantitative research & ai innovation
          </p>
        </div>

        {/* Progress section */}
        <div className="space-y-4">
          {/* Progress bar */}
          <div className="relative w-full h-2 bg-dark-card rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-matrix-primary to-matrix-secondary rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>

          {/* Progress text */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-300 font-code">
              {loadingText}
            </span>
            <span className="text-matrix-primary font-code font-semibold">
              {Math.round(loadingProgress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen