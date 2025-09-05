import React, { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing...')

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 8
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress < 25) {
      setLoadingText('Loading neural networks...')
    } else if (progress < 50) {
      setLoadingText('Initializing AI systems...')
    } else if (progress < 75) {
      setLoadingText('Calibrating quantum matrices...')
    } else if (progress < 100) {
      setLoadingText('Syncing data streams...')
    } else {
      setLoadingText('Welcome to the 7th sense')
    }
  }, [progress])

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            margin: '0 0 0.5rem 0', 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            the 7th sense
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            opacity: 0.7, 
            margin: '0 0 3rem 0',
            letterSpacing: '2px'
          }}>
            quantitative research & ai innovation
          </p>
        </div>
        
        <div style={{ width: '400px' }}>
          <div style={{
            width: '100%',
            height: '8px',
            background: '#333',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)'
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(to right, #00ff88, #00d4ff)',
              transition: 'width 0.3s ease',
              boxShadow: '0 0 10px rgba(0, 255, 136, 0.5)'
            }} />
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginTop: '1rem',
            fontSize: '0.9rem'
          }}>
            <span style={{ opacity: 0.8 }}>{loadingText}</span>
            <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        zIndex: 1000,
        borderBottom: '1px solid rgba(0, 255, 136, 0.2)'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ 
            fontSize: '1.8rem', 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            the 7th sense
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                style={{ 
                  color: i === 0 ? '#00ff88' : 'white', 
                  textDecoration: 'none', 
                  opacity: i === 0 ? 1 : 0.8,
                  transition: 'all 0.3s ease',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  border: i === 0 ? '1px solid rgba(0, 255, 136, 0.3)' : 'none'
                }}
                onMouseOver={(e) => {
                  e.target.style.color = '#00ff88'
                  e.target.style.opacity = '1'
                }}
                onMouseOut={(e) => {
                  if (i !== 0) {
                    e.target.style.color = 'white'
                    e.target.style.opacity = '0.8'
                  }
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '2px',
          height: '2px',
          background: '#00ff88',
          borderRadius: '50%',
          boxShadow: '0 0 10px #00ff88',
          animation: 'float 3s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '3px',
          height: '3px',
          background: '#00d4ff',
          borderRadius: '50%',
          boxShadow: '0 0 15px #00d4ff',
          animation: 'float 4s ease-in-out infinite reverse'
        }} />

        <div style={{ zIndex: 1 }}>
          <h1 style={{ 
            fontSize: '5rem', 
            margin: '0 0 1rem 0',
            background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            letterSpacing: '-2px'
          }}>
            Joseph Bidias
          </h1>
          <p style={{ 
            fontSize: '1.8rem', 
            opacity: 0.9, 
            margin: '0 0 1rem 0',
            fontWeight: '300'
          }}>
            Quantitative Researcher & Software Engineer
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            opacity: 0.7, 
            margin: '0 0 3rem 0',
            fontStyle: 'italic',
            maxWidth: '800px',
            lineHeight: 1.6,
            margin: '0 auto 2rem auto'
          }}>
            Bridging cutting-edge software engineering and quantitative finance through innovative AI solutions. 
            Specializing in algorithmic trading systems with proven <strong style={{ color: '#00ff88' }}>28.4% annual returns</strong>, 
            enterprise-grade applications, and machine learning integration.
          </p>
          
          {/* Achievement Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            {[
              { label: 'NPower Graduate', icon: '🎓', color: '#e74c3c' },
              { label: 'Live Trading Systems', icon: '📈', color: '#f39c12' },
              { label: 'Full-Stack Expert', icon: '💻', color: '#3498db' },
              { label: 'AI/ML Specialist', icon: '🤖', color: '#9b59b6' }
            ].map((badge, i) => (
              <div key={i} style={{
                background: `${badge.color}22`,
                border: `1px solid ${badge.color}44`,
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                color: badge.color
              }}>
                <span>{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
                color: 'black',
                border: 'none',
                padding: '1.2rem 2.5rem',
                borderRadius: '8px',
                fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 255, 136, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 6px 20px rgba(0, 255, 136, 0.4)'
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 136, 0.3)'
            }}>
              View Projects →
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid #00ff88',
              padding: '1.2rem 2.5rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(0, 255, 136, 0.1)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.transform = 'translateY(0)'
            }}>
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontSize: '3rem', 
          textAlign: 'center', 
          marginBottom: '4rem',
          background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          About Me
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {
              title: '🚀 Technical Expertise',
              color: '#00ff88',
              content: 'Full-stack development with React, Node.js, Python, and modern cloud technologies. Experience in building scalable applications and microservices architecture.'
            },
            {
              title: '📊 Quantitative Finance',
              color: '#00d4ff',
              content: 'Algorithmic trading strategies, risk management systems, and financial modeling. Specialized in market microstructure and high-frequency trading systems.'
            },
            {
              title: '🤖 AI & Machine Learning',
              color: '#ffffff',
              content: 'Deep learning, natural language processing, and predictive analytics. Building intelligent systems that drive business value and innovation.'
            }
          ].map((card, i) => (
            <div key={i} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${card.color === '#ffffff' ? 'rgba(255, 255, 255, 0.2)' : card.color + '33'}`,
              borderRadius: '16px',
              padding: '2.5rem',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-5px)'
              e.target.style.boxShadow = `0 10px 30px ${card.color}33`
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}>
              <h3 style={{ color: card.color, marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                {card.title}
              </h3>
              <p style={{ lineHeight: 1.7, opacity: 0.9, fontSize: '1rem' }}>
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '6rem 2rem',
        background: 'rgba(0, 0, 0, 0.2)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            textAlign: 'center', 
            marginBottom: '2rem',
            background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Featured Projects
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            opacity: 0.8, 
            marginBottom: '4rem',
            maxWidth: '800px',
            margin: '0 auto 4rem auto'
          }}>
            A comprehensive showcase of full-stack applications, algorithmic trading systems, and innovative AI solutions
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                title: 'Multi-Agent Quantum Trading System',
                category: 'Algorithmic Trading • FinTech',
                description: 'Real-time algorithmic trading platform with advanced risk management, probabilistic neural networks, and live execution through OANDA API. Achieved 28.4% annual return with 1.89 Sharpe ratio.',
                metrics: ['28.4% Annual Return', '94.2% Prediction Accuracy', '5μs Execution Latency', '1.89 Sharpe Ratio'],
                tech: ['Python', 'TensorFlow', 'OANDA API', 'Neural Networks', 'Real-time Processing'],
                live: 'https://bidias-capital-consulting.netlify.app',
                github: 'https://github.com/eaglepython/Finance-Architect-Portofolio',
                color: '#f39c12',
                icon: '📈'
              },
              {
                title: 'Bidias E-Commerce Platform',
                category: 'Full-Stack • Enterprise',
                description: 'Complete MERN stack e-commerce platform with AI-powered recommendations, secure payment processing, and microservices architecture. NPower capstone project with 15K+ lines of code.',
                metrics: ['90%+ Test Coverage', 'Enterprise Grade', 'Real-time Processing', 'AI Integration'],
                tech: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Docker', 'Stripe', 'AI/ML'],
                live: 'https://bidias-e-com-full-stack-app.netlify.app',
                github: 'https://github.com/eaglepython/Bidias-E-Com-FullStack-App',
                color: '#e74c3c',
                icon: '🛍️'
              },
              {
                title: 'Nexus Weather Intelligence',
                category: 'React • API Integration',
                description: 'Advanced weather platform with dynamic theming, glassmorphism UI, and comprehensive meteorological data. Features real-time updates, 5-day forecasts, and air quality monitoring.',
                metrics: ['Real-time Data', 'API Integration', 'Responsive Design', 'Modern UI'],
                tech: ['React 19', 'Vite', 'OpenWeather API', 'CSS3', 'JavaScript ES6+'],
                live: 'https://eaglepython.github.io/React_Nexus',
                github: 'https://github.com/eaglepython/React_Nexus',
                color: '#3498db',
                icon: '🌤️'
              },
              {
                title: 'Interactive JavaScript Portfolio',
                category: 'Frontend • DOM Manipulation',
                description: 'Futuristic portfolio with matrix rain animation, glitch effects, and comprehensive keyboard navigation. Demonstrates advanced vanilla JavaScript techniques.',
                metrics: ['Pure JavaScript', 'Advanced Animations', 'Mobile Optimized', 'Accessible'],
                tech: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Responsive Design', 'Animations'],
                live: 'https://javascript-dom-portfolio.netlify.app',
                github: 'https://github.com/eaglepython/JavaScript-DOM-Portfolio',
                color: '#9b59b6',
                icon: '🎭'
              },
              {
                title: 'BookVault Library System',
                category: 'DOM Project • API Integration',
                description: 'Sophisticated digital library with infinite carousel, external API integration, and advanced search. Features reading list management and responsive design.',
                metrics: ['API Integration', 'Infinite Carousel', 'External Data', 'Local Storage'],
                tech: ['JavaScript', 'Google Books API', 'Open Library API', 'CSS3', 'Local Storage'],
                live: 'https://eaglepython.github.io/DOM-Project',
                github: 'https://github.com/eaglepython/DOM-Project',
                color: '#27ae60',
                icon: '📚'
              },
              {
                title: 'Rx360 Healthcare Platform',
                category: 'HealthTech • Pitch Deck',
                description: 'Complete medication management system with smart dispensing, health tracking, and caregiver monitoring. Professional investment presentation.',
                metrics: ['$801K Year 1 Revenue', '107K Total Users', '20% Conversion', '$12.74 ARPU'],
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Presentation Design', 'Business Model'],
                live: 'https://claude.ai/public/artifacts/03f8c893-93d4-4418-806f-ca4ecf4d7e9e',
                github: null,
                color: '#e67e22',
                icon: '💊'
              }
            ].map((project, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${project.color}33`,
                borderRadius: '20px',
                padding: '2.5rem',
                backdropFilter: 'blur(15px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = `0 20px 50px ${project.color}44`
                e.currentTarget.style.borderColor = project.color
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = `${project.color}33`
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  fontSize: '2rem',
                  opacity: 0.3
                }}>
                  {project.icon}
                </div>
                
                <h3 style={{ 
                  color: project.color, 
                  marginBottom: '0.5rem', 
                  fontSize: '1.4rem',
                  fontWeight: 'bold'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  color: '#00d4ff',
                  fontSize: '0.9rem',
                  marginBottom: '1rem',
                  fontWeight: '500'
                }}>
                  {project.category}
                </p>
                
                <p style={{ 
                  lineHeight: 1.6, 
                  opacity: 0.9, 
                  marginBottom: '1.5rem',
                  fontSize: '1rem'
                }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    color: '#00ff88', 
                    fontSize: '0.9rem', 
                    marginBottom: '0.8rem',
                    fontWeight: '600'
                  }}>
                    Key Metrics:
                  </h4>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '0.5rem' 
                  }}>
                    {project.metrics.map((metric, j) => (
                      <span key={j} style={{
                        background: 'rgba(0, 255, 136, 0.1)',
                        color: '#00ff88',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        border: '1px solid rgba(0, 255, 136, 0.2)',
                        textAlign: 'center'
                      }}>
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    color: '#00d4ff', 
                    fontSize: '0.9rem', 
                    marginBottom: '0.8rem',
                    fontWeight: '600'
                  }}>
                    Technologies:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tech.map((tech, j) => (
                      <span key={j} style={{
                        background: 'rgba(52, 152, 219, 0.1)',
                        color: '#3498db',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '10px',
                        fontSize: '0.8rem',
                        border: '1px solid rgba(52, 152, 219, 0.2)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: `linear-gradient(45deg, ${project.color}, ${project.color}dd)`,
                      color: 'white',
                      textDecoration: 'none',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      flex: 1,
                      justifyContent: 'center'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.05)'
                      e.target.style.boxShadow = `0 5px 15px ${project.color}66`
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)'
                      e.target.style.boxShadow = 'none'
                    }}
                  >
                    🚀 Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'transparent',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '8px',
                      fontSize: '0.9rem',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      flex: 1,
                      justifyContent: 'center'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)'
                      e.target.style.borderColor = '#00ff88'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'transparent'
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    📁 GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Project Statistics */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              color: '#00ff88', 
              fontSize: '1.8rem', 
              marginBottom: '2rem',
              fontWeight: 'bold'
            }}>
              Portfolio Impact & Metrics
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { number: '6+', label: 'Production Projects', icon: '🚀' },
                { number: '25K+', label: 'Lines of Code', icon: '💻' },
                { number: '10+', label: 'Technologies Mastered', icon: '🛠️' },
                { number: '100%', label: 'Deployment Success', icon: '✅' }
              ].map((stat, i) => (
                <div key={i} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div style={{ 
                    fontSize: '2.2rem', 
                    fontWeight: 'bold', 
                    color: '#00d4ff',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ opacity: 0.8, fontSize: '1rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '6rem 2rem',
        background: 'rgba(0, 0, 0, 0.3)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            textAlign: 'center', 
            marginBottom: '4rem',
            color: '#00ff88'
          }}>
            Tech Stack & Expertise
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { 
                category: 'Frontend Development', 
                skills: ['React 19', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite'],
                icon: '🎨',
                color: '#61DAFB'
              },
              { 
                category: 'Backend & APIs', 
                skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'],
                icon: '⚙️',
                color: '#339933'
              },
              { 
                category: 'AI & Machine Learning', 
                skills: ['TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn', 'OpenAI API', 'Neural Networks'],
                icon: '🤖',
                color: '#FF6F00'
              },
              { 
                category: 'Quantitative Finance', 
                skills: ['Algorithmic Trading', 'OANDA API', 'Risk Management', 'Portfolio Optimization', 'QuantLib', 'Bloomberg Terminal'],
                icon: '📊',
                color: '#F39C12'
              },
              { 
                category: 'DevOps & Cloud', 
                skills: ['Docker', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions', 'Redis'],
                icon: '☁️',
                color: '#FF9900'
              },
              { 
                category: 'Tools & Technologies', 
                skills: ['Git', 'VS Code', 'Postman', 'Figma', 'Linux', 'Webpack'],
                icon: '🛠️',
                color: '#6366F1'
              }
            ].map((group, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '2.5rem',
                border: `1px solid ${group.color}33`,
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-5px)'
                e.target.style.boxShadow = `0 15px 35px ${group.color}44`
                e.target.style.borderColor = group.color
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
                e.target.style.borderColor = `${group.color}33`
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>{group.icon}</span>
                  <h3 style={{ color: group.color, margin: 0, fontSize: '1.2rem' }}>{group.category}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {group.skills.map((skill, j) => (
                    <span key={j} style={{
                      background: `${group.color}22`,
                      color: group.color,
                      padding: '0.4rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      border: `1px solid ${group.color}44`,
                      fontWeight: '500'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '6rem 2rem',
        background: 'rgba(0, 0, 0, 0.2)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '2rem',
            background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Let's Build Something Amazing
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            opacity: 0.9, 
            marginBottom: '4rem',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto 4rem auto'
          }}>
            Ready to transform your ideas into innovative solutions? Whether you're looking for algorithmic trading systems, 
            full-stack applications, or AI-powered platforms, let's discuss how we can bring your vision to life.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                title: 'Professional Email',
                content: 'bidias_consulting@outlook.com',
                icon: '📧',
                color: '#e74c3c',
                action: 'mailto:bidias_consulting@outlook.com'
              },
              {
                title: 'GitHub Portfolio',
                content: '@eaglepython',
                icon: '🐙',
                color: '#333',
                action: 'https://github.com/eaglepython'
              },
              {
                title: 'LinkedIn Network',
                content: 'Connect Professionally',
                icon: '💼',
                color: '#0077b5',
                action: 'https://linkedin.com/in/joseph-bidias'
              },
              {
                title: 'Trading Portfolio',
                content: 'Live Performance Metrics',
                icon: '📈',
                color: '#f39c12',
                action: 'https://bidias-capital-consulting.netlify.app'
              }
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.action}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${contact.color}33`,
                  borderRadius: '16px',
                  padding: '2rem',
                  textDecoration: 'none',
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'block'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-5px)'
                  e.target.style.boxShadow = `0 15px 35px ${contact.color}44`
                  e.target.style.borderColor = contact.color
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                  e.target.style.borderColor = `${contact.color}33`
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem'
                }}>
                  {contact.icon}
                </div>
                <h3 style={{ 
                  color: contact.color, 
                  marginBottom: '0.5rem',
                  fontSize: '1.2rem'
                }}>
                  {contact.title}
                </h3>
                <p style={{ 
                  opacity: 0.8,
                  fontSize: '1rem',
                  margin: 0
                }}>
                  {contact.content}
                </p>
              </a>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid rgba(0, 255, 136, 0.2)'
          }}>
            <h3 style={{ 
              color: '#00ff88', 
              fontSize: '1.5rem', 
              marginBottom: '1.5rem'
            }}>
              Available for Collaboration
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {[
                '🚀 Algorithmic Trading Systems',
                '🛍️ E-Commerce Platforms',
                '🤖 AI/ML Integration',
                '📱 Full-Stack Applications',
                '⚡ Performance Optimization',
                '🔒 Security Implementation'
              ].map((service, i) => (
                <div key={i} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1rem',
                  fontSize: '0.95rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {service}
                </div>
              ))}
            </div>
            <p style={{ 
              fontSize: '1.1rem', 
              opacity: 0.9,
              margin: 0
            }}>
              Open to <strong style={{ color: '#00d4ff' }}>full-time opportunities</strong>, 
              <strong style={{ color: '#00ff88' }}> consulting projects</strong>, and 
              <strong style={{ color: '#f39c12' }}> collaborative ventures</strong> in fintech and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '3rem 2rem 2rem 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{ 
                color: '#00ff88', 
                marginBottom: '1rem',
                fontSize: '1.3rem'
              }}>
                the 7th sense
              </h3>
              <p style={{ 
                opacity: 0.8, 
                lineHeight: 1.6,
                fontSize: '0.95rem'
              }}>
                Bridging quantitative finance and software engineering through innovative AI solutions. 
                Specializing in algorithmic trading, full-stack development, and machine learning applications.
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                color: '#00d4ff', 
                marginBottom: '1rem',
                fontSize: '1.1rem'
              }}>
                Featured Projects
              </h4>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0 
              }}>
                {[
                  { name: 'Quantum Trading System', url: 'https://bidias-capital-consulting.netlify.app' },
                  { name: 'E-Commerce Platform', url: 'https://bidias-e-com-full-stack-app.netlify.app' },
                  { name: 'Weather Intelligence', url: 'https://eaglepython.github.io/React_Nexus' },
                  { name: 'BookVault Library', url: 'https://eaglepython.github.io/DOM-Project' }
                ].map((project, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#00ff88'}
                      onMouseOut={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      → {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{ 
                color: '#00d4ff', 
                marginBottom: '1rem',
                fontSize: '1.1rem'
              }}>
                Technologies
              </h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem' 
              }}>
                {[
                  'React', 'Python', 'Node.js', 'TensorFlow', 
                  'TypeScript', 'MongoDB', 'Docker', 'AWS'
                ].map((tech, i) => (
                  <span key={i} style={{
                    background: 'rgba(0, 255, 136, 0.1)',
                    color: '#00ff88',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    border: '1px solid rgba(0, 255, 136, 0.2)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '1.5rem',
            textAlign: 'center'
          }}>
            <p style={{ 
              opacity: 0.7, 
              fontSize: '0.95rem',
              margin: '0 0 0.5rem 0'
            }}>
              © 2025 Joseph Bidias • the 7th sense • Built with React & Vite
            </p>
            <p style={{ 
              opacity: 0.5, 
              fontSize: '0.85rem',
              margin: 0
            }}>
              Quantitative Research & AI Innovation • Full-Stack Development • Algorithmic Trading
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  )
}

export default App