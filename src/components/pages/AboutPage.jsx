import React from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, Award, BookOpen, Users, TrendingUp, Code2 } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { skills, experience, education, certifications, achievements, personalInfo } from '@data/portfolio'

const AboutPage = () => {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.3 })
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.2 })
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.2 })

  // Animation variants
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

  // Skill bar component
  const SkillBar = ({ skill, inView, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm font-bold text-matrix-primary">{skill.level}%</span>
      </div>
      <div className="relative h-2 bg-dark-bg rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-matrix-primary to-matrix-secondary rounded-full relative"
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: delay + 1
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ width: '50%' }}
          />
        </motion.div>
      </div>
      <p className="text-xs text-gray-400">{skill.description}</p>
    </motion.div>
  )

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          variants={containerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-garamond text-white mb-6"
          >
            <span className="text-matrix-primary">[</span>
            About Me
            <span className="text-matrix-primary">]</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about bridging the gap between technology and finance through innovative solutions
          </motion.p>
        </motion.div>

        {/* Personal Info & Bio */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-8 space-y-6">
              {/* Profile Image */}
              <div className="relative w-48 h-48 mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full border-2 border-matrix-primary/30 animate-pulse-glow"></div>
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full rounded-full object-cover border-4 border-matrix-primary/50 shadow-matrix"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-matrix-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold text-white">{personalInfo.name}</h2>
                <p className="text-matrix-primary font-semibold">{personalInfo.title}</p>
                
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span>{personalInfo.location}</span>
                </div>

                {/* Download Resume */}
                <a
                  href={personalInfo.resume}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-matrix-primary text-black font-semibold rounded-lg hover:bg-matrix-secondary transition-colors duration-300"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-dark-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-matrix-primary">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-matrix-primary">20+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-matrix-primary">3</div>
                  <div className="text-sm text-gray-400">Research Papers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-matrix-primary">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-matrix-primary mb-6 flex items-center gap-2">
                <Code2 size={24} />
                My Journey
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  I specialize in <span className="text-matrix-primary font-semibold">Financial Services</span> and 
                  <span className="text-matrix-primary font-semibold"> full-stack software development</span>, combining 
                  scientific rigor with creative problem-solving. With a strong background in AI engineering, I build 
                  impactful solutions at the intersection of Finance and technology.
                </p>
                <p>
                  My passion lies in using software and AI to improve human well-being and drive innovation in financial 
                  systems. I believe technology should serve humanity, and I'm committed to creating solutions that make 
                  a meaningful difference in people's lives.
                </p>
                <p>
                  When I'm not coding or researching, you'll find me exploring the latest developments in quantum computing, 
                  contributing to open-source projects, or mentoring aspiring developers. I'm always excited to collaborate 
                  on projects that push the boundaries of what's possible.
                </p>
              </div>

              {/* Core Values */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: TrendingUp, title: "Innovation", desc: "Pushing boundaries with cutting-edge solutions" },
                  { icon: Users, title: "Collaboration", desc: "Building amazing things together" },
                  { icon: Award, title: "Excellence", desc: "Committed to the highest quality standards" }
                ].map((value, index) => (
                  <div key={index} className="text-center p-4 bg-dark-bg/50 rounded-lg border border-dark-border">
                    <value.icon className="mx-auto mb-2 text-matrix-primary" size={24} />
                    <h4 className="font-semibold text-white">{value.title}</h4>
                    <p className="text-sm text-gray-400">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            <span className="text-matrix-primary">&lt;</span>
            Technical Expertise
            <span className="text-matrix-primary">&gt;</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, data], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{data.icon}</span>
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>
                <div className="space-y-6">
                  {data.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      inView={skillsInView}
                      delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <motion.div
            ref={experienceRef}
            initial={{ opacity: 0, x: -50 }}
            animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-matrix-primary mb-8 flex items-center gap-2">
              <Users size={24} />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.position}</h3>
                      <p className="text-matrix-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <div className="w-1 h-1 bg-matrix-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-dark-bg/50 border border-matrix-primary/30 rounded-md text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-matrix-primary mb-8 flex items-center gap-2">
                <BookOpen size={24} />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-matrix-primary font-semibold mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-400">{edu.period}</span>
                      <span className="text-sm text-matrix-primary font-semibold">GPA: {edu.gpa}</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      <p className="font-medium mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-1">
                        {edu.relevant_courses.map((course, i) => (
                          <span key={i} className="text-xs text-gray-400">
                            {course}{i < edu.relevant_courses.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-matrix-primary mb-8 flex items-center gap-2">
                <Award size={24} />
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-white">{cert.name}</h3>
                        <p className="text-sm text-matrix-primary">{cert.issuer}</p>
                      </div>
                      <span className="text-sm text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">ID: {cert.credential}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-12">
            <span className="text-matrix-primary">❮</span>
            Recognition & Achievements
            <span className="text-matrix-primary">❯</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-card/50 backdrop-blur-sm border border-dark-border rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-matrix-primary font-semibold mb-2">{achievement.organization}</p>
                <p className="text-sm text-gray-400 mb-3">{achievement.year}</p>
                <p className="text-sm text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage