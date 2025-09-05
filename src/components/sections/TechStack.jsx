import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Monitor, Server, Brain, Database, Cloud, TrendingUp, ChevronRight } from 'lucide-react'
import { techStackData } from '@data/home'

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.2 })

  // Icon mapping
  const iconMap = {
    Monitor,
    Server,
    Brain,
    Database,
    Cloud,
    TrendingUp
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold font-garamond text-white mb-6"
          >
            <span className="text-matrix-primary">&lt;</span>
            {techStackData.title}
            <span className="text-matrix-primary">&gt;</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {techStackData.description}
          </motion.p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            {techStackData.categories.map((category, index) => {
              const IconComponent = iconMap[category.icon] || Monitor
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-dark-card border-matrix-primary/50 shadow-matrix'
                      : 'bg-dark-card/30 border-dark-border hover:border-matrix-primary/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      activeCategory === index ? 'bg-matrix-primary/20' : 'bg-dark-bg/50'
                    }`}>
                      <IconComponent 
                        size={20} 
                        style={{ color: category.color }}
                        className={activeCategory === index ? 'text-matrix-primary' : 'text-gray-400'}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        activeCategory === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {category.technologies.length} technologies
                      </p>
                    </div>
                    <ChevronRight 
                      size={16} 
                      className={`transition-transform ${
                        activeCategory === index ? 'rotate-90 text-matrix-primary' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Technology Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${techStackData.categories[activeCategory].color}20` }}
                  >
                    {React.createElement(iconMap[techStackData.categories[activeCategory].icon] || Monitor, {
                      size: 24,
                      style: { color: techStackData.categories[activeCategory].color }
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {techStackData.categories[activeCategory].name}
                    </h3>
                    <p className="text-gray-400">
                      {techStackData.categories[activeCategory].technologies.length} technologies
                    </p>
                  </div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {techStackData.categories[activeCategory].technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      className="group p-4 bg-dark-bg/50 border border-dark-border rounded-lg hover:border-matrix-primary/30 transition-all duration-300"
                    >
                      {/* Tech Header */}
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white group-hover:text-matrix-primary transition-colors">
                          {tech.name}
                        </h4>
                        <span 
                          className="text-sm font-bold font-code"
                          style={{ color: techStackData.categories[activeCategory].color }}
                        >
                          {tech.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="h-2 bg-dark-card rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ 
                              background: `linear-gradient(90deg, ${techStackData.categories[activeCategory].color}, ${techStackData.categories[activeCategory].color}80)`
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: techIndex * 0.1 + 0.5 }}
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-400">
                        {tech.description}
                      </p>

                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-matrix-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  ))}
                </div>

                {/* Category Summary */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 p-4 bg-dark-bg/30 border border-dark-border rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {techStackData.categories[activeCategory].name} Proficiency
                      </h4>
                      <p className="text-sm text-gray-400">
                        Average skill level across all technologies
                      </p>
                    </div>
                    <div className="text-right">
                      <div 
                        className="text-2xl font-bold font-code"
                        style={{ color: techStackData.categories[activeCategory].color }}
                      >
                        {Math.round(
                          techStackData.categories[activeCategory].technologies.reduce(
                            (acc, tech) => acc + tech.level, 0
                          ) / techStackData.categories[activeCategory].technologies.length
                        )}%
                      </div>
                      <div className="text-xs text-gray-400">Expert Level</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Technologies', value: '25+', color: '#00ff88' },
            { label: 'Years Experience', value: '5+', color: '#00d4ff' },
            { label: 'Frameworks', value: '12+', color: '#b000ff' },
            { label: 'Certifications', value: '8+', color: '#ff4000' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div 
                className="text-3xl font-bold font-code mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack