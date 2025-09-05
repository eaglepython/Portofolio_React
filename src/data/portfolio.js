// Portfolio data for Joseph Bidias
export const personalInfo = {
  name: "Joseph Bidias",
  title: "Quantitative Researcher & Software Engineer",
  tagline: "Bridging cutting-edge software engineering and quantitative finance",
  description: "Passionate about developing innovative web solutions and intelligent systems that revolutionize financial services and beyond.",
  email: "joseph.bidias@gmail.com",
  location: "Chicago, Illinois, US",
  avatar: "/images/profile.jpg",
  resume: "/files/Joseph_Bidias_Resume.pdf"
}

export const socialLinks = {
  github: "https://github.com/eaglepython",
  linkedin: "https://www.linkedin.com/in/joseph-bidias-eaglepython",
  twitter: "https://x.com/joseph_eaglepython",
  discord: "https://discord.gg/eaglepython",
  email: "mailto:joseph.bidias@gmail.com",
  phone: "tel:+1-555-123-4567"
}

export const navigation = [
  { name: 'Home', path: '/', key: '1' },
  { name: 'About', path: '/about', key: '2' },
  { name: 'Projects', path: '/projects', key: '3' },
  { name: 'Contact', path: '/contact', key: '4' }
]

export const skills = {
  "Full-Stack Development": {
    icon: "💻",
    color: "#00ff88",
    items: [
      { name: "React/Next.js", level: 96, description: "Advanced component architecture and SSR" },
      { name: "Node.js/Express", level: 94, description: "Backend APIs and microservices" },
      { name: "JavaScript/TypeScript", level: 95, description: "Modern ES6+ and type safety" },
      { name: "MongoDB/PostgreSQL", level: 90, description: "Database design and optimization" },
      { name: "GraphQL/REST APIs", level: 88, description: "API design and implementation" }
    ]
  },
  "AI & Machine Learning": {
    icon: "🤖",
    color: "#00d4ff",
    items: [
      { name: "Deep Learning", level: 95, description: "Neural networks and model architecture" },
      { name: "TensorFlow/PyTorch", level: 92, description: "ML framework expertise" },
      { name: "Computer Vision", level: 88, description: "Image processing and recognition" },
      { name: "Natural Language Processing", level: 85, description: "Text analysis and generation" },
      { name: "MLOps", level: 83, description: "Model deployment and monitoring" }
    ]
  },
  "Financial Engineering": {
    icon: "📊",
    color: "#b000ff",
    items: [
      { name: "Quantitative Analysis", level: 94, description: "Financial modeling and risk assessment" },
      { name: "Algorithmic Trading", level: 91, description: "Trading strategies and backtesting" },
      { name: "Risk Management", level: 87, description: "Portfolio optimization and VaR" },
      { name: "Financial Data Analysis", level: 89, description: "Market data processing" },
      { name: "Derivatives Pricing", level: 85, description: "Options and exotic instruments" }
    ]
  },
  "Cloud & DevOps": {
    icon: "☁️",
    color: "#ff4000",
    items: [
      { name: "AWS/GCP/Azure", level: 89, description: "Multi-cloud infrastructure" },
      { name: "Docker/Kubernetes", level: 86, description: "Containerization and orchestration" },
      { name: "CI/CD Pipelines", level: 88, description: "Automated deployment workflows" },
      { name: "Infrastructure as Code", level: 83, description: "Terraform and CloudFormation" },
      { name: "Monitoring & Logging", level: 85, description: "Application observability" }
    ]
  }
}

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Full-Stack MERN Application",
    description: "A comprehensive online store with advanced features including user authentication, payment processing, inventory management, and an admin dashboard with real-time analytics.",
    longDescription: "Built with modern web technologies, this e-commerce platform demonstrates full-stack development capabilities with React frontend, Node.js backend, MongoDB database, and integrated payment processing through Stripe API.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT", "Redux"],
    category: "Full-Stack",
    status: "Active",
    featured: true,
    links: {
      live: "https://eaglepython.github.io/ecommerce-app",
      github: "https://github.com/eaglepython/ecommerce-app",
      demo: "https://www.youtube.com/watch?v=demo"
    },
    features: [
      "User authentication and authorization",
      "Shopping cart and wishlist functionality",
      "Payment processing with Stripe",
      "Admin dashboard with analytics",
      "Responsive design",
      "Real-time inventory updates"
    ],
    challenges: [
      "Implementing secure payment processing",
      "Managing complex state with Redux",
      "Optimizing database queries",
      "Creating responsive admin dashboard"
    ],
    metrics: {
      users: "500+",
      performance: "98/100",
      uptime: "99.9%"
    }
  },
  {
    id: 2,
    title: "AI-Powered Trading Bot",
    subtitle: "Quantitative Finance & Machine Learning",
    description: "An intelligent trading system that uses machine learning algorithms to analyze market data and execute trades automatically based on predictive models and risk management strategies.",
    longDescription: "This sophisticated trading bot combines quantitative analysis with artificial intelligence to create a robust automated trading system capable of adapting to market conditions in real-time.",
    image: "/images/projects/trading-bot.jpg",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Alpha Vantage API", "PostgreSQL", "Docker"],
    category: "AI/ML",
    status: "Research",
    featured: true,
    links: {
      github: "https://github.com/eaglepython/ai-trading-bot",
      paper: "https://eaglepython.github.io/trading-bot-research",
      demo: "https://www.youtube.com/watch?v=trading-demo"
    },
    features: [
      "Machine learning price prediction",
      "Risk management algorithms",
      "Real-time market data analysis",
      "Backtesting framework",
      "Portfolio optimization",
      "Automated trade execution"
    ],
    challenges: [
      "Handling real-time data streams",
      "Implementing robust risk management",
      "Model interpretability and validation",
      "Managing latency requirements"
    ],
    metrics: {
      accuracy: "87%",
      sharpeRatio: "2.3",
      maxDrawdown: "8.5%"
    }
  },
  {
    id: 3,
    title: "Bookstore Application",
    subtitle: "Interactive Web Application",
    description: "A dynamic bookstore application featuring advanced search capabilities, book recommendations, user reviews, and a clean, intuitive interface built with vanilla JavaScript and REST APIs.",
    longDescription: "This project showcases advanced JavaScript programming techniques with a focus on DOM manipulation, API integration, and user experience design.",
    image: "/images/projects/bookstore.jpg",
    technologies: ["JavaScript", "REST API", "CSS3", "HTML5", "Local Storage", "AJAX"],
    category: "Frontend",
    status: "Active",
    featured: false,
    links: {
      live: "https://eaglepython.github.io/bookstore-app",
      github: "https://github.com/eaglepython/bookstore-app"
    },
    features: [
      "Advanced search and filtering",
      "Book recommendations",
      "User reviews and ratings",
      "Shopping cart functionality",
      "Responsive design",
      "Local storage for user preferences"
    ],
    challenges: [
      "Implementing complex search algorithms",
      "Managing application state without frameworks",
      "Optimizing performance with large datasets",
      "Creating smooth user interactions"
    ],
    metrics: {
      searchSpeed: "<100ms",
      userRating: "4.8/5",
      mobileUsage: "65%"
    }
  },
  {
    id: 4,
    title: "Weather Analytics Platform",
    subtitle: "Real-time Data Visualization",
    description: "A comprehensive weather application that provides real-time weather data, historical analytics, predictive modeling, and interactive visualizations for weather patterns and climate analysis.",
    longDescription: "Built with React and modern visualization libraries, this platform demonstrates advanced data processing and real-time chart implementations.",
    image: "/images/projects/weather.jpg",
    technologies: ["React", "D3.js", "Chart.js", "Weather API", "Geolocation", "WebSocket"],
    category: "Data Visualization",
    status: "Active",
    featured: false,
    links: {
      live: "https://eaglepython.github.io/weather-app",
      github: "https://github.com/eaglepython/weather-app"
    },
    features: [
      "Real-time weather updates",
      "Interactive maps and charts",
      "Weather predictions",
      "Historical data analysis",
      "Location-based services",
      "Weather alerts and notifications"
    ],
    challenges: [
      "Processing large weather datasets",
      "Creating responsive data visualizations",
      "Implementing real-time updates",
      "Handling geolocation accuracy"
    ],
    metrics: {
      accuracy: "95%",
      updateFrequency: "5 minutes",
      dataPoints: "10M+"
    }
  },
  {
    id: 5,
    title: "Biomedical AI Diagnosis System",
    subtitle: "Healthcare & Artificial Intelligence",
    description: "An AI-powered diagnostic tool for integrative medicine that analyzes medical imaging and patient data to provide clinical decision support and early disease detection.",
    longDescription: "This cutting-edge system combines computer vision and machine learning to assist healthcare professionals in making accurate diagnoses through medical image analysis.",
    image: "/images/projects/biomedical-ai.jpg",
    technologies: ["TensorFlow", "OpenCV", "Python", "DICOM", "Flask", "PostgreSQL", "Docker"],
    category: "AI/ML",
    status: "Research",
    featured: true,
    links: {
      github: "https://github.com/eaglepython/biomedical-ai-diagnosis",
      paper: "https://eaglepython.github.io/biomedical-ai-research",
      demo: "https://www.youtube.com/watch?v=biomedical-demo"
    },
    features: [
      "Medical image analysis",
      "Disease prediction models",
      "Clinical decision support",
      "DICOM file processing",
      "Patient data integration",
      "Regulatory compliance (HIPAA)"
    ],
    challenges: [
      "Handling sensitive medical data",
      "Ensuring model interpretability",
      "Meeting regulatory requirements",
      "Optimizing inference speed"
    ],
    metrics: {
      accuracy: "94%",
      sensitivity: "92%",
      specificity: "96%"
    }
  },
  {
    id: 6,
    title: "Healthcare Data Pipeline",
    subtitle: "Big Data & ETL Processing",
    description: "A scalable ETL pipeline for processing healthcare data with real-time analytics, automated quality control, and FHIR-compliant data integration for clinical research.",
    longDescription: "This enterprise-grade data pipeline handles massive volumes of healthcare data while maintaining strict security and compliance requirements.",
    image: "/images/projects/healthcare-pipeline.jpg",
    technologies: ["Apache Spark", "Kafka", "Docker", "FHIR", "AWS", "Elasticsearch", "Kibana"],
    category: "Data Engineering",
    status: "Active",
    featured: false,
    links: {
      github: "https://github.com/eaglepython/healthcare-data-pipeline",
      architecture: "https://eaglepython.github.io/pipeline-architecture"
    },
    features: [
      "Real-time data processing",
      "FHIR standard compliance",
      "Automated data quality checks",
      "Scalable architecture",
      "Security and encryption",
      "Analytics dashboard"
    ],
    challenges: [
      "Processing terabytes of data",
      "Ensuring data quality and consistency",
      "Meeting healthcare compliance standards",
      "Optimizing pipeline performance"
    ],
    metrics: {
      throughput: "1TB/day",
      latency: "<5 seconds",
      uptime: "99.99%"
    }
  }
]

export const experience = [
  {
    company: "Quantum Finance Systems",
    position: "Senior Quantitative Researcher",
    period: "2022 - Present",
    location: "Chicago, IL",
    description: "Leading quantitative research initiatives and developing algorithmic trading strategies using advanced machine learning techniques.",
    achievements: [
      "Developed ML models with 87% prediction accuracy",
      "Reduced portfolio risk by 23% through optimization",
      "Led team of 5 quantitative analysts",
      "Published 3 research papers on algorithmic trading"
    ],
    technologies: ["Python", "TensorFlow", "R", "SQL", "AWS"]
  },
  {
    company: "TechFlow Solutions",
    position: "Full-Stack Developer",
    period: "2020 - 2022",
    location: "Remote",
    description: "Built scalable web applications and led the migration to microservices architecture.",
    achievements: [
      "Improved application performance by 40%",
      "Migrated monolith to microservices",
      "Mentored 3 junior developers",
      "Implemented CI/CD pipelines"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes"]
  },
  {
    company: "HealthTech Innovations",
    position: "AI Research Engineer",
    period: "2019 - 2020",
    location: "Boston, MA",
    description: "Researched and developed AI solutions for healthcare applications with focus on medical imaging analysis.",
    achievements: [
      "Created diagnostic AI with 94% accuracy",
      "Reduced image processing time by 60%",
      "Collaborated with medical professionals",
      "Filed 2 patents for AI algorithms"
    ],
    technologies: ["TensorFlow", "OpenCV", "Python", "DICOM", "GCP"]
  }
]

export const education = [
  {
    degree: "Master of Science in Financial Engineering",
    institution: "University of Chicago",
    period: "2018 - 2020",
    gpa: "3.9/4.0",
    relevant_courses: [
      "Quantitative Risk Management",
      "Algorithmic Trading",
      "Financial Machine Learning",
      "Derivatives Pricing"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Northwestern University",
    period: "2014 - 2018",
    gpa: "3.8/4.0",
    relevant_courses: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems"
    ]
  }
]

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credential: "AWS-SAA-123456"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    credential: "CKA-789012"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2021",
    credential: "TF-345678"
  }
]

export const testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "Chief Technology Officer",
    company: "Quantum Finance Systems",
    content: "Joseph's expertise in quantitative finance and machine learning has been instrumental in advancing our algorithmic trading capabilities. His innovative approach and technical excellence consistently deliver outstanding results.",
    avatar: "/images/testimonials/sarah-chen.jpg"
  },
  {
    name: "Michael Rodriguez",
    title: "Senior Product Manager",
    company: "TechFlow Solutions",
    content: "Working with Joseph was exceptional. His full-stack development skills and ability to architect scalable solutions helped us transform our entire platform. He's a true technical leader.",
    avatar: "/images/testimonials/michael-rodriguez.jpg"
  },
  {
    name: "Dr. Emily Watson",
    title: "Director of AI Research",
    company: "HealthTech Innovations",
    content: "Joseph's work on our medical AI systems was groundbreaking. His deep understanding of both technology and healthcare requirements resulted in solutions that are now being used in clinical practice.",
    avatar: "/images/testimonials/emily-watson.jpg"
  }
]

export const achievements = [
  {
    title: "Best AI Research Paper",
    organization: "International Conference on Financial Engineering",
    year: "2023",
    description: "Awarded for research on 'Deep Learning Applications in Algorithmic Trading'"
  },
  {
    title: "Outstanding Innovation Award",
    organization: "Chicago Tech Innovation Summit",
    year: "2022",
    description: "Recognized for developing novel AI solutions in healthcare"
  },
  {
    title: "Top Developer Award",
    organization: "TechFlow Solutions",
    year: "2021",
    description: "Acknowledged for exceptional contribution to platform modernization"
  }
]