import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, ExternalLink, Github, Play, Star, Calendar, Users, TrendingUp } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { projects } from '@data/portfolio'

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.3 })

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  // Filter projects based on category and search term
  useEffect(() => {
    let filtered = projects

    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => project.category === activeFilter)
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    setFilteredProjects(filtered)
  }, [activeFilter, searchTerm])

  // Project card component
  const ProjectCard = ({ project, index }) => {
    const { ref, inView } = useInView({ threshold: 0.1 })

    const handleProjectClick = () => {
      setSelectedProject(project)
      setIsModalOpen(true)
    }

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl overflow-hidden hover:border-matrix-primary/50 transition-all duration-300"
      >
        {/* Project image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Status badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Active' 
              ? 'bg-matrix-primary/20 text-matrix-primary border border-matrix-primary/30'
              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
          }`}>
            {project.status}
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 flex items-center gap-1 px-2 py-1 bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 rounded-full text-xs font-semibold">
              <Star size={12} />
              Featured
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={handleProjectClick}
              className="px-6 py-3 bg-matrix-primary text-black font-semibold rounded-lg hover:bg-matrix-secondary transition-colors duration-200"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Project content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-matrix-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 font-medium">{project.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-dark-bg/50 border border-dark-border rounded-md text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-matrix-primary/20 border border-matrix-primary/30 rounded-md text-xs text-matrix-primary">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-matrix-primary hover:text-matrix-secondary transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Github size={14} />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 border border-matrix-primary/0 group-hover:border-matrix-primary/20 rounded-xl transition-colors duration-300 pointer-events-none" />
      </motion.div>
    )
  }

  // Project modal component
  const ProjectModal = () => {
    if (!selectedProject) return null

    return (
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-dark-card border border-dark-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  ×
                </button>
              </div>

              {/* Modal content */}
              <div className="p-8 space-y-6">
                {/* Title and subtitle */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-gray-400">{selectedProject.subtitle}</p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-matrix-primary mb-3">Description</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-semibold text-matrix-primary mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-dark-bg border border-matrix-primary/30 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div>
                    <h3 className="text-xl font-semibold text-matrix-primary mb-3">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <div className="w-1 h-1 bg-matrix-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Metrics */}
                {selectedProject.metrics && (
                  <div>
                    <h3 className="text-xl font-semibold text-matrix-primary mb-3">Project Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(selectedProject.metrics).map(([key, value]) => (
                        <div key={key} className="bg-dark-bg/50 border border-dark-border rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-matrix-primary">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-dark-border">
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-matrix-primary text-black font-semibold rounded-lg hover:bg-matrix-secondary transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-matrix-primary text-matrix-primary font-semibold rounded-lg hover:bg-matrix-primary hover:text-black transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-garamond text-white mb-6">
            <span className="text-matrix-primary">[</span>
            My Projects
            <span className="text-matrix-primary">]</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning full-stack development, artificial intelligence, 
            quantitative finance, and cutting-edge research projects.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-dark-card/50 border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-matrix-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 project-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-matrix-primary text-black shadow-matrix'
                    : 'bg-dark-card/50 text-gray-300 border border-dark-border hover:border-matrix-primary/50 hover:text-matrix-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="text-center text-gray-400 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-16 border-t border-dark-border"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can bring your ideas to life
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-matrix-primary to-matrix-secondary text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <Users size={20} />
            Start a Project
          </a>
        </motion.div>
      </div>

      {/* Project modal */}
      <ProjectModal />
    </div>
  )
}

export default ProjectsPage