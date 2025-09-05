import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Heart, Code, Coffee, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScroll } from '@/hooks/useScroll'
import { personalInfo, socialLinks } from '@data/portfolio'

const Footer = () => {
  const { scrollToTop } = useScroll()

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  const socialLinksData = [
    { name: 'GitHub', icon: Github, href: socialLinks.github, color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, href: socialLinks.linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: socialLinks.twitter, color: 'hover:text-sky-400' },
    { name: 'Email', icon: Mail, href: socialLinks.email, color: 'hover:text-red-400' }
  ]

  const skills = [
    'React', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'MongoDB', 'TypeScript', 'Docker'
  ]

  return (
    <footer className="relative mt-20 bg-dark-card/30 border-t border-dark-border">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-5 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-matrix-primary rounded-lg flex items-center justify-center group-hover:bg-matrix-secondary transition-colors duration-300">
                    <Code className="text-black" size={20} />
                  </div>
                  <div className="absolute inset-0 bg-matrix-primary rounded-lg animate-pulse-glow opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="text-xl font-bold font-garamond text-white group-hover:text-matrix-primary transition-colors duration-300">
                    the 7th sense
                  </div>
                  <div className="text-xs text-gray-400 font-code tracking-wider">
                    quantitative research
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-gray-300 leading-relaxed max-w-md">
                Bridging cutting-edge software engineering and quantitative finance through 
                innovative AI solutions and full-stack development expertise.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Built with</span>
                <Heart className="text-red-400" size={14} />
                <span>and</span>
                <Coffee className="text-yellow-600" size={14} />
                <span>in {personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h4 className="text-sm font-semibold text-matrix-primary">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-2 py-1 bg-dark-bg/50 border border-dark-border rounded text-xs text-gray-300 hover:border-matrix-primary/50 hover:text-matrix-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-matrix-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-matrix-primary transition-colors duration-300"></div>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-matrix-primary transition-colors duration-300 mt-6"
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Let's Connect</h3>
            
            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="text-gray-400">
                <div className="font-medium text-white mb-1">Email</div>
                <a 
                  href={socialLinks.email}
                  className="text-gray-400 hover:text-matrix-primary transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="text-gray-400">
                <div className="font-medium text-white mb-1">Location</div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-matrix-primary">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinksData.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    className={`p-2 bg-dark-bg/50 border border-dark-border rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:border-matrix-primary/50`}
                    title={social.name}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-dark-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
            </div>

            {/* Additional info */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span>Made with React & Vite</span>
              </span>
              <span className="hidden md:block">•</span>
              <span>Deployed on Netlify</span>
            </div>
          </div>

          {/* Version info */}
          <div className="mt-4 text-center">
            <span className="text-xs text-gray-500 font-code">
              v2.0.0 | Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating particles */}
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-matrix-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: '100%',
              opacity: 0
            }}
            animate={{
              y: '-10%',
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer