import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, TrendingUp, Users } from 'lucide-react'
import { featuredProjectsData } from '@data/home'

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.2 })

  const nextProject = () => {
    setCurrentProject((prev) => 
      prev === featuredProjectsData.projects.length - 1 ? 0 : prev + 1
    )
  }

  const prevProject = () => {
    setCurrentProject((prev) => 
      prev === 0 ? featuredProjectsData.projects.length - 1 : prev - 1
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
            <span className="text-matrix-primary">❮</span>
            {featuredProjectsData.title}
            <span className="text-matrix-primary">❯</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            {featuredProjectsData.description}
          </motion.p>
        </motion.div>

        {/* Featured Project Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <div className="relative group order-2 lg:order-1">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative rounded-xl overflow-hidden"
                >
                  <img
                    src={featuredProjectsData.projects[currentProject].image}
                    alt={featuredProjectsData.projects[currentProject].title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Project category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-matrix-primary/20 backdrop-blur-sm border border-matrix-primary/30 rounded-full text-sm font-semibold text-matrix-primary">
                    {featuredProjectsData.projects[currentProject].category}
                  </div>

                  {/* Featured badge */}
                  {featuredProjectsData.projects[currentProject].featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full text-xs font-semibold text-yellow-400">
                      <Star size={12} />
                      Featured
                    </div>
                  )}

                  {/* Hover overlay with quick actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {featuredProjectsData.projects[currentProject].links.live && (
                        <a
                          href={featuredProjectsData.projects[currentProject].links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-matrix-primary text-black font-semibold rounded-lg hover:bg-matrix-secondary transition-colors"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {featuredProjectsData.projects[currentProject].links.github && (
                        <a
                          href={featuredProjectsData.projects[currentProject].links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-matrix-primary text-matrix-primary font-semibold rounded-lg hover:bg-matrix-primary hover:text-black transition-colors"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6 order-1 lg:order-2"
              >
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {featuredProjectsData.projects[currentProject].title}
                  </h3>
                  <p className="text-lg text-matrix-primary font-semibold">
                    {featuredProjectsData.projects[currentProject].category}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {featuredProjectsData.projects[currentProject].description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProjectsData.projects[currentProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-card border border-matrix-primary/30 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                {featuredProjectsData.projects[currentProject].metrics && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(featuredProjectsData.projects[currentProject].metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-dark-card/50 border border-dark-border rounded-lg">
                          <div className="text-xl font-bold text-matrix-primary">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-4 pt-4">
                  {featuredProjectsData.projects[currentProject].links.live && (
                    <a
                      href={featuredProjectsData.projects[currentProject].links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-matrix-primary text-black font-semibold rounded-lg hover:bg-matrix-secondary transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {featuredProjectsData.projects[currentProject].links.github && (
                    <a
                      href={featuredProjectsData.projects[currentProject].links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-matrix-primary text-matrix-primary font-semibold rounded-lg hover:bg-matrix-primary hover:text-black transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevProject}
              className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-gray-300 hover:border-matrix-primary hover:text-matrix-primary transition-colors"
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            {/* Project indicators */}
            <div className="flex gap-2">
              {featuredProjectsData.projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? 'bg-matrix-primary' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-gray-300 hover:border-matrix-primary hover:text-matrix-primary transition-colors"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to see more projects?
          </h3>
          <p className="text-gray-400 mb-8">
            Explore my complete portfolio showcasing work across multiple domains
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-matrix-primary to-matrix-secondary text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <TrendingUp size={20} />
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
