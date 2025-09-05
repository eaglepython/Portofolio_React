import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Brain, Zap, ChevronDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

// Components
import TypewriterText from '@components/ui/TypewriterText'
import GlitchText from '@components/ui/GlitchText'
import FloatingElements from '@components/effects/FloatingElements'
import StatsCounter from '@components/ui/StatsCounter'
import TechStack from '@components/sections/TechStack'
import FeaturedProjects from '@components/sections/FeaturedProjects'
import SkillsPreview from '@components/sections/SkillsPreview'

// Data
import { heroData, statsData } from '@data/home'

const HomePage = () => {
  const [mounted, setMounted] = useState(false)
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 })
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  if (!mounted) return null

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Floating Elements */}
        <FloatingElements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-48 h-48 md:w-64 md:h-64"
            >
              <div className="relative group">
                {/* Scanning border effect */}
                <div className="absolute inset-0 rounded-full border-2 border-matrix-primary/30 animate-pulse-glow"></div>
                <div className="absolute inset-2 rounded-full border border-matrix-secondary/20"></div>
                
                {/* Profile image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-matrix-primary/50 shadow-matrix">
                  <img
                    src="/images/profile.jpg"
                    alt="Joseph Bidias"
                    className="w-full h-full object-cover filter brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Scanning line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-matrix-primary to-transparent opacity-70 animate-slide-down"></div>
                  
                  {/* AI overlay grid */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Holographic ring */}
                <div className="absolute -inset-4 rounded-full border border-matrix-primary/10 animate-spin-slow"></div>
              </div>
            </motion.div>

            {/* Name with Glitch Effect */}
            <motion.div variants={itemVariants} className="space-y-4">
              <GlitchText
                text="Joseph Bidias"
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-garamond text-white"
              />
              
              {/* Title with Typewriter */}
              <div className="text-xl md:text-2xl lg:text-3xl text-gray-300">
                <TypewriterText
                  texts={[
                    "Quantitative Researcher",
                    "Software Engineer",
                    "AI Innovation Specialist",
                    "Financial Technology Expert"
                  ]}
                  speed={100}
                  deleteSpeed={50}
                  delayBetween={2000}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="max-w-3xl mx-auto space-y-6"
            >
              <div className="text-lg md:text-xl text-gray-400 leading-relaxed">
                <span className="text-matrix-primary font-code">{"{ "}</span>
                Bridging the gap between cutting-edge software engineering and quantitative finance. 
                Passionate about developing innovative web solutions and intelligent systems that revolutionize 
                financial services and beyond.
                <span className="text-matrix-primary font-code">{" }"}</span>
              </div>

              {/* Status Indicators */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {[
                  { label: 'Neural Networks', status: 'Online' },
                  { label: 'AI Systems', status: 'Operational' },
                  { label: 'Data Processing', status: 'Active' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-1 bg-dark-card/50 rounded-full border border-matrix-primary/20">
                    <div className="w-2 h-2 bg-matrix-primary rounded-full animate-pulse"></div>
                    <span className="text-gray-300">{item.label}:</span>
                    <span className="text-matrix-primary font-medium">{item.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/projects"
                className="group relative px-8 py-4 bg-matrix-primary text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-matrix"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Brain size={20} />
                  Explore Research
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-matrix-primary to-matrix-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/contact"
                className="group relative px-8 py-4 border-2 border-matrix-primary text-matrix-primary font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:text-black hover:bg-matrix-primary"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap size={20} />
                  Let's Connect
                </span>
                <div className="absolute inset-0 bg-matrix-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2 text-matrix-primary animate-bounce">
                <span className="text-sm font-code">Scroll to explore</span>
                <ChevronDown size={24} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-matrix-primary/5 via-transparent to-transparent pointer-events-none"></div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {statsData.map((stat, index) => (
              <StatsCounter
                key={index}
                {...stat}
                inView={statsInView}
                delay={index * 0.2}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <TechStack />

      {/* Skills Preview */}
      <SkillsPreview />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-garamond text-white">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-400">
              Let's collaborate on innovative solutions that push the boundaries of technology and finance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-matrix-primary to-matrix-secondary text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <Code size={20} />
              Start a Project
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage