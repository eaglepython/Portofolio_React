import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { Code, Layers, Target, Wrench, ArrowRight } from 'lucide-react'
import { skillsPreviewData } from '@data/home'

const SkillsPreview = () => {
  const { ref, inView } = useInView({ threshold: 0.2 })

  // Icon mapping
  const iconMap = {
    Code,
    Layers,
    Target,
    Wrench
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  const skillItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20
      }
    }
  }

  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-garamond text-white mb-6">
            <span className="text-matrix-primary">«</span>
            {skillsPreviewData.title}
            <span className="text-matrix-primary">»</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {skillsPreviewData.description}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsPreviewData.skills.map((skillCategory, index) => {
            const IconComponent = iconMap[skillCategory.icon] || Code
            
            return (
              <motion.div
                key={skillCategory.category}
                variants={itemVariants}
                className="group relative"
              >
                <div className="h-full bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6 hover:border-matrix-primary/50 transition-all duration-300 hover:scale-105">
                  {/* Icon and Header */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center relative"
                        style={{ backgroundColor: `${skillCategory.color}20` }}
                      >
                        {/* Pulsing ring */}
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          className="absolute inset-0 rounded-full border-2"
                          style={{ borderColor: skillCategory.color }}
                        />
                        
                        <IconComponent 
                          size={28} 
                          style={{ color: skillCategory.color }}
                          className="relative z-10"
                        />
                      </div>
                    </motion.div>
                    
                    <h3 className="text-lg font-bold text-white group-hover:text-matrix-primary transition-colors duration-300">
                      {skillCategory.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <motion.div 
                    className="space-y-3"
                    variants={containerVariants}
                  >
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        variants={skillItemVariants}
                        className="flex items-center gap-3 group/item"
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: skillCategory.color }}
                          whileHover={{ scale: 1.5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        />
                        <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors duration-200">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Skill count badge */}
                  <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 bg-dark-bg/80 border border-dark-border rounded-full text-xs font-bold text-matrix-primary">
                    {skillCategory.items.length}
                  </div>

                  {/* Hover glow effect */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{ 
                      background: `radial-gradient(circle at center, ${skillCategory.color}, transparent)`
                    }}
                  />

                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-matrix-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-matrix-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Array.from({ length: 4 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        backgroundColor: skillCategory.color,
                        left: '50%',
                        top: '50%'
                      }}
                      animate={{
                        x: [0, Math.cos(i * Math.PI / 2) * 15, Math.cos(i * Math.PI / 2) * 30],
                        y: [0, Math.sin(i * Math.PI / 2) * 15, Math.sin(i * Math.PI / 2) * 30],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeOut'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-dark-card/30 backdrop-blur-sm border border-dark-border rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Innovation
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Technology evolves rapidly, and so do I. My skill set represents years of hands-on experience 
              combined with continuous learning and adaptation to emerging technologies. From foundational 
              programming concepts to cutting-edge AI frameworks, I'm committed to staying at the forefront 
              of technological innovation.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { value: '25+', label: 'Technologies', color: '#00ff88' },
                { value: '5+', label: 'Years Exp', color: '#00d4ff' },
                { value: '50+', label: 'Projects', color: '#b000ff' },
                { value: '15+', label: 'Frameworks', color: '#ff4000' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div 
                    className="text-2xl font-bold font-code mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-matrix-primary to-matrix-secondary text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
            >
              View Full Skill Breakdown
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsPreview