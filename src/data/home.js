// Home page specific data
export const heroData = {
  name: "Joseph Bidias",
  titles: [
    "Quantitative Researcher",
    "Software Engineer", 
    "AI Innovation Specialist",
    "Financial Technology Expert",
    "Full-Stack Developer",
    "Machine Learning Engineer"
  ],
  description: "Bridging the gap between cutting-edge software engineering and quantitative finance. Passionate about developing innovative web solutions and intelligent systems that revolutionize financial services and beyond.",
  profileImage: "/images/profile.jpg",
  statusIndicators: [
    { label: 'Neural Networks', status: 'Online', active: true },
    { label: 'AI Systems', status: 'Operational', active: true },
    { label: 'Data Processing', status: 'Active', active: true },
    { label: 'Quantum Computing', status: 'Research', active: false },
    { label: 'Blockchain Integration', status: 'Development', active: true }
  ],
  ctaButtons: [
    {
      text: "Explore Research",
      link: "/projects",
      type: "primary",
      icon: "Brain"
    },
    {
      text: "Let's Connect", 
      link: "/contact",
      type: "secondary",
      icon: "Zap"
    }
  ]
}

export const statsData = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Full-stack applications and research projects",
    icon: "Code",
    color: "#00ff88",
    animationDelay: 0
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Professional software development",
    icon: "Calendar",
    color: "#00d4ff", 
    animationDelay: 0.2
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies",
    description: "Programming languages and frameworks",
    icon: "Cpu",
    color: "#b000ff",
    animationDelay: 0.4
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Based on project feedback",
    icon: "Star",
    color: "#ff4000",
    animationDelay: 0.6
  }
]

export const techStackData = {
  title: "Technology Arsenal",
  description: "Cutting-edge tools and frameworks powering innovation",
  categories: [
    {
      name: "Frontend",
      icon: "Monitor",
      color: "#00ff88",
      technologies: [
        { name: "React", level: 96, icon: "react", description: "Component-based UI library" },
        { name: "Next.js", level: 94, icon: "nextjs", description: "Full-stack React framework" },
        { name: "TypeScript", level: 92, icon: "typescript", description: "Typed JavaScript" },
        { name: "Tailwind CSS", level: 95, icon: "tailwind", description: "Utility-first CSS framework" },
        { name: "Framer Motion", level: 90, icon: "framer", description: "Animation library" },
        { name: "Three.js", level: 85, icon: "threejs", description: "3D graphics library" }
      ]
    },
    {
      name: "Backend",
      icon: "Server",
      color: "#00d4ff",
      technologies: [
        { name: "Node.js", level: 94, icon: "nodejs", description: "JavaScript runtime" },
        { name: "Express", level: 92, icon: "express", description: "Web application framework" },
        { name: "Python", level: 96, icon: "python", description: "General-purpose programming" },
        { name: "FastAPI", level: 90, icon: "fastapi", description: "Modern Python web framework" },
        { name: "GraphQL", level: 88, icon: "graphql", description: "Query language for APIs" },
        { name: "REST APIs", level: 93, icon: "api", description: "RESTful web services" }
      ]
    },
    {
      name: "AI/ML",
      icon: "Brain",
      color: "#b000ff",
      technologies: [
        { name: "TensorFlow", level: 92, icon: "tensorflow", description: "Machine learning platform" },
        { name: "PyTorch", level: 90, icon: "pytorch", description: "Deep learning framework" },
        { name: "Scikit-learn", level: 88, icon: "sklearn", description: "Machine learning library" },
        { name: "OpenAI API", level: 85, icon: "openai", description: "GPT and AI integration" },
        { name: "Hugging Face", level: 87, icon: "huggingface", description: "NLP and ML models" },
        { name: "Computer Vision", level: 84, icon: "opencv", description: "Image processing and analysis" }
      ]
    },
    {
      name: "Database",
      icon: "Database",
      color: "#ff4000",
      technologies: [
        { name: "MongoDB", level: 90, icon: "mongodb", description: "NoSQL document database" },
        { name: "PostgreSQL", level: 88, icon: "postgresql", description: "Relational database" },
        { name: "Redis", level: 85, icon: "redis", description: "In-memory data store" },
        { name: "Firebase", level: 87, icon: "firebase", description: "Backend-as-a-Service" },
        { name: "Prisma", level: 83, icon: "prisma", description: "Database ORM" },
        { name: "Vector DBs", level: 80, icon: "vector", description: "AI/ML data storage" }
      ]
    },
    {
      name: "Cloud & DevOps",
      icon: "Cloud",
      color: "#00ff88",
      technologies: [
        { name: "AWS", level: 89, icon: "aws", description: "Amazon Web Services" },
        { name: "Docker", level: 86, icon: "docker", description: "Containerization platform" },
        { name: "Kubernetes", level: 82, icon: "kubernetes", description: "Container orchestration" },
        { name: "Vercel", level: 91, icon: "vercel", description: "Frontend cloud platform" },
        { name: "GitHub Actions", level: 88, icon: "github", description: "CI/CD automation" },
        { name: "Terraform", level: 80, icon: "terraform", description: "Infrastructure as code" }
      ]
    },
    {
      name: "Financial Tech",
      icon: "TrendingUp",
      color: "#00d4ff",
      technologies: [
        { name: "Algorithmic Trading", level: 94, icon: "trading", description: "Automated trading systems" },
        { name: "Risk Management", level: 91, icon: "shield", description: "Financial risk assessment" },
        { name: "Quantitative Analysis", level: 95, icon: "calculator", description: "Mathematical modeling" },
        { name: "Blockchain", level: 78, icon: "blockchain", description: "Distributed ledger technology" },
        { name: "DeFi Protocols", level: 75, icon: "defi", description: "Decentralized finance" },
        { name: "Financial APIs", level: 89, icon: "api", description: "Market data integration" }
      ]
    }
  ]
}

export const skillsPreviewData = {
  title: "Core Competencies",
  description: "Expertise spanning multiple disciplines",
  skills: [
    {
      category: "Programming",
      icon: "Code",
      color: "#00ff88",
      items: [
        "JavaScript/TypeScript",
        "Python",
        "R",
        "C++",
        "SQL",
        "MATLAB"
      ]
    },
    {
      category: "Frameworks",
      icon: "Layers",
      color: "#00d4ff", 
      items: [
        "React/Next.js",
        "Node.js/Express",
        "TensorFlow/PyTorch",
        "FastAPI/Django",
        "Tailwind CSS",
        "Framer Motion"
      ]
    },
    {
      category: "Specializations",
      icon: "Target",
      color: "#b000ff",
      items: [
        "Machine Learning",
        "Quantitative Finance",
        "Full-Stack Development", 
        "Data Science",
        "Cloud Architecture",
        "API Design"
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "Wrench",
      color: "#ff4000",
      items: [
        "Git/GitHub",
        "Docker/Kubernetes",
        "AWS/GCP",
        "MongoDB/PostgreSQL",
        "Jupyter/VS Code",
        "Figma/Adobe Creative"
      ]
    }
  ]
}

export const featuredProjectsData = {
  title: "Featured Projects",
  description: "Showcasing innovation across technology domains", 
  projects: [
    {
      id: 1,
      title: "AI Trading Bot",
      category: "AI/ML",
      description: "Intelligent trading system using machine learning for market prediction and automated execution",
      image: "/images/projects/ai-trading-bot.jpg",
      technologies: ["Python", "TensorFlow", "Alpha Vantage API", "Docker"],
      featured: true,
      metrics: {
        accuracy: "87%",
        roi: "23%",
        trades: "1,200+"
      },
      links: {
        demo: "https://trading-bot-demo.vercel.app",
        github: "https://github.com/eaglepython/ai-trading-bot"
      }
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Full-Stack",
      description: "Modern e-commerce solution with advanced features and seamless user experience",
      image: "/images/projects/ecommerce-platform.jpg", 
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true,
      metrics: {
        users: "500+",
        performance: "98/100",
        uptime: "99.9%"
      },
      links: {
        live: "https://eaglepython.github.io/ecommerce-app",
        github: "https://github.com/eaglepython/ecommerce-app"
      }
    },
    {
      id: 3,
      title: "Biomedical AI System",
      category: "Healthcare",
      description: "AI-powered diagnostic tool for medical imaging analysis and clinical decision support",
      image: "/images/projects/biomedical-ai.jpg",
      technologies: ["TensorFlow", "OpenCV", "Flask", "DICOM"],
      featured: true,
      metrics: {
        accuracy: "94%",
        patients: "10,000+",
        hospitals: "15"
      },
      links: {
        paper: "https://research.com/biomedical-ai-paper",
        demo: "https://biomedical-ai-demo.com"
      }
    }
  ]
}

export const testimonialData = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    company: "Quantum Finance Systems", 
    content: "Joseph's expertise in quantitative finance and machine learning has been instrumental in advancing our algorithmic trading capabilities. His innovative approach consistently delivers outstanding results.",
    avatar: "/images/testimonials/sarah-chen.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Senior Product Manager",
    company: "TechFlow Solutions",
    content: "Working with Joseph was exceptional. His full-stack development skills and ability to architect scalable solutions helped us transform our entire platform.",
    avatar: "/images/testimonials/michael-rodriguez.jpg", 
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Director of AI Research",
    company: "HealthTech Innovations",
    content: "Joseph's work on our medical AI systems was groundbreaking. His deep understanding of both technology and healthcare requirements resulted in solutions now used in clinical practice.",
    avatar: "/images/testimonials/emily-watson.jpg",
    rating: 5
  }
]

export const callToActionData = {
  title: "Ready to Build the Future?",
  subtitle: "Let's collaborate on innovative solutions that push the boundaries of technology and finance.",
  buttons: [
    {
      text: "Start a Project",
      link: "/contact",
      type: "primary",
      icon: "Code"
    },
    {
      text: "View Resume",
      link: "/files/Joseph_Bidias_Resume.pdf",
      type: "secondary", 
      icon: "Download",
      download: true
    }
  ],
  features: [
    "Custom software development",
    "AI/ML solution architecture", 
    "Quantitative research & analysis",
    "Full-stack web applications",
    "Technical consulting & strategy"
  ]
}