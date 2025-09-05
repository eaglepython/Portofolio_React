import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { personalInfo, socialLinks } from '@data/portfolio'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.3 })
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.2 })

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Form validation
  const validateForm = () => {
    const errors = []
    
    if (!formData.name.trim()) errors.push('Name is required')
    if (!formData.email.trim()) errors.push('Email is required')
    if (!formData.email.includes('@')) errors.push('Valid email is required')
    if (!formData.subject.trim()) errors.push('Subject is required')
    if (!formData.message.trim()) errors.push('Message is required')
    if (formData.message.length < 10) errors.push('Message must be at least 10 characters')

    return errors
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (errors.length > 0) {
      setFormStatus({
        type: 'error',
        message: errors.join(', ')
      })
      return
    }

    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For demo purposes, we'll just show success message
      // In real implementation, you would send data to your backend
      console.log('Form data:', formData)
      
      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Social links data
  const socialLinksData = [
    { name: 'Email', icon: Mail, href: socialLinks.email, color: 'text-red-400', label: 'Send Email' },
    { name: 'LinkedIn', icon: Linkedin, href: socialLinks.linkedin, color: 'text-blue-400', label: 'LinkedIn Profile' },
    { name: 'GitHub', icon: Github, href: socialLinks.github, color: 'text-gray-400', label: 'GitHub Profile' },
    { name: 'Twitter', icon: Twitter, href: socialLinks.twitter, color: 'text-sky-400', label: 'Twitter Profile' },
    { name: 'Phone', icon: Phone, href: socialLinks.phone, color: 'text-green-400', label: 'Call Me' }
  ]

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
            Let's Build the Future Together
            <span className="text-matrix-primary">]</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to explore collaborations on innovative solutions? Whether you're seeking a research collaborator, 
            technical consultant, or want to transform ambitious ideas into reality, let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-matrix-primary mb-6 flex items-center gap-2">
                <MessageSquare size={24} />
                Connect & Collaborate
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Passionate about pioneering advancements in software engineering, quantitative research, 
                  and financial services. Dedicated to creating high-performance solutions that drive efficiency, 
                  uncover insights, and deliver measurable impact.
                </p>
                <p>
                  Whether you're looking to build algorithmic trading systems, develop data-driven research platforms, 
                  or create innovative fintech solutions, I'm here to help transform your vision into reality.
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-matrix-primary" size={20} />
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-matrix-primary" size={20} />
                  <a 
                    href={socialLinks.email}
                    className="text-gray-300 hover:text-matrix-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Core Expertise */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Core Expertise:</h3>
                <ul className="space-y-2 text-gray-300">
                  {[
                    'Full-Stack Web Development (React, Node.js)',
                    'Machine Learning & AI Systems',
                    'Quantitative Finance & Trading Algorithms',
                    'Data Analytics & Visualization',
                    'Cloud Architecture & Performance Optimization'
                  ].map((skill, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-matrix-primary rounded-full mt-2 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Find Me Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinksData.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 bg-dark-bg/50 border border-dark-border rounded-lg hover:border-matrix-primary/50 transition-all duration-300 group"
                  >
                    <link.icon className={`${link.color} group-hover:text-matrix-primary transition-colors`} size={20} />
                    <div>
                      <div className="text-white font-medium group-hover:text-matrix-primary transition-colors">
                        {link.name}
                      </div>
                      <div className="text-xs text-gray-400">{link.label}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-matrix-primary mb-6 flex items-center gap-2">
                <Send size={24} />
                Initialize Connection
              </h2>

              {/* Status Message */}
              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg border flex items-center gap-2 ${
                    formStatus.type === 'success'
                      ? 'bg-green-500/10 border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  {formStatus.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-matrix-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-matrix-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Institution
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your organization (optional)"
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-matrix-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Project/Research Interest *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-matrix-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell me about your project, research interests, or collaboration ideas..."
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-matrix-primary focus:outline-none transition-colors resize-none"
                  />
                  <div className="text-right text-xs text-gray-400 mt-1">
                    {formData.message.length}/500
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-matrix-primary text-black hover:bg-matrix-secondary hover:shadow-matrix'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-dark-border text-center text-sm text-gray-400">
                <p>
                  Prefer direct contact? Email me at{' '}
                  <a 
                    href={socialLinks.email}
                    className="text-matrix-primary hover:text-matrix-secondary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </p>
                <p className="mt-2">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-16 border-t border-dark-border"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Something Amazing?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            From concept to deployment, let's collaborate on projects that push the boundaries 
            of technology and create meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-matrix-primary text-matrix-primary font-semibold rounded-lg hover:bg-matrix-primary hover:text-black transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="#form"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('form').scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-matrix-primary to-matrix-secondary text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <MessageSquare size={20} />
              Send Message
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage