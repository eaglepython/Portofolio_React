#!/usr/bin/env node

/**
 * Setup script for React Portfolio
 * Initializes the project with proper configuration and dependencies
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import readline from 'readline'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
}

const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

const logStep = (step, message) => {
  log(`\n[${step}] ${message}`, 'cyan')
}

const logSuccess = (message) => {
  log(`✅ ${message}`, 'green')
}

const logError = (message) => {
  log(`❌ ${message}`, 'red')
}

const logWarning = (message) => {
  log(`⚠️  ${message}`, 'yellow')
}

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (query) => {
  return new Promise(resolve => rl.question(query, resolve))
}

// Execute command with error handling
const execCommand = (command, options = {}) => {
  try {
    const result = execSync(command, {
      cwd: rootDir,
      stdio: 'inherit',
      ...options
    })
    return result
  } catch (error) {
    logError(`Command failed: ${command}`)
    throw error
  }
}

// Check if file exists
const exists = (filePath) => {
  return fs.existsSync(path.resolve(rootDir, filePath))
}

// Create directory if it doesn't exist
const ensureDir = (dirPath) => {
  const fullPath = path.resolve(rootDir, dirPath)
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true })
    logSuccess(`Created directory: ${dirPath}`)
  }
}

// Create file with content
const createFile = (filePath, content) => {
  const fullPath = path.resolve(rootDir, filePath)
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content)
    logSuccess(`Created file: ${filePath}`)
  } else {
    logWarning(`File already exists: ${filePath}`)
  }
}

// Portfolio configuration
const defaultConfig = {
  name: 'Joseph Bidias',
  title: 'Quantitative Researcher & Software Engineer',
  email: 'joseph.bidias@gmail.com',
  location: 'Chicago, Illinois, US',
  github: 'https://github.com/eaglepython',
  linkedin: 'https://www.linkedin.com/in/joseph-bidias-eaglepython',
  twitter: 'https://x.com/joseph_eaglepython'
}

// Main setup function
async function setup() {
  log('🚀 React Portfolio Setup', 'magenta')
  log('========================', 'magenta')
  log('Welcome! This script will help you set up your React portfolio.', 'white')

  // Step 1: Check prerequisites
  logStep('1', 'Checking prerequisites')

  // Check Node.js version
  const nodeVersion = process.version
  const majorVersion = parseInt(nodeVersion.slice(1))
  
  if (majorVersion < 16) {
    logError(`Node.js 16+ is required. Current version: ${nodeVersion}`)
    process.exit(1)
  }
  
  logSuccess(`Node.js version: ${nodeVersion}`)

  // Check if npm is available
  try {
    execCommand('npm --version', { stdio: 'pipe' })
    logSuccess('npm is available')
  } catch {
    logError('npm is not available. Please install Node.js with npm.')
    process.exit(1)
  }

  // Step 2: Project configuration
  logStep('2', 'Project configuration')
  
  log('Please provide your project details (press Enter for defaults):')
  
  const config = { ...defaultConfig }
  
  const name = await question(`Full Name (${defaultConfig.name}): `)
  if (name.trim()) config.name = name.trim()
  
  const title = await question(`Professional Title (${defaultConfig.title}): `)
  if (title.trim()) config.title = title.trim()
  
  const email = await question(`Email Address (${defaultConfig.email}): `)
  if (email.trim()) config.email = email.trim()
  
  const location = await question(`Location (${defaultConfig.location}): `)
  if (location.trim()) config.location = location.trim()
  
  const github = await question(`GitHub URL (${defaultConfig.github}): `)
  if (github.trim()) config.github = github.trim()
  
  const linkedin = await question(`LinkedIn URL (${defaultConfig.linkedin}): `)
  if (linkedin.trim()) config.linkedin = linkedin.trim()

  rl.close()

  // Step 3: Create project structure
  logStep('3', 'Creating project structure')
  
  const directories = [
    'public/images/projects',
    'public/images/testimonials',
    'public/files',
    'public/sounds',
    'src/assets/icons',
    'src/components/effects',
    'src/components/layout',
    'src/components/pages',
    'src/components/sections',
    'src/components/ui',
    'src/data',
    'src/hooks',
    'src/styles',
    'src/utils',
    'scripts',
    '.github/workflows'
  ]

  directories.forEach(ensureDir)

  // Step 4: Create environment file
  logStep('4', 'Creating environment configuration')
  
  if (!exists('.env.local')) {
    const envContent = `# Application Configuration
VITE_APP_TITLE="${config.name} - ${config.title}"
VITE_APP_URL="https://yourdomain.com"

# Contact Information
VITE_CONTACT_EMAIL="${config.email}"
VITE_AUTHOR_NAME="${config.name}"
VITE_AUTHOR_LOCATION="${config.location}"

# Social Media Links
VITE_GITHUB_URL="${config.github}"
VITE_LINKEDIN_URL="${config.linkedin}"
${config.twitter ? `VITE_TWITTER_URL="${config.twitter}"` : '# VITE_TWITTER_URL=""'}

# Feature Flags
VITE_ENABLE_ANIMATIONS="true"
VITE_ENABLE_PARTICLES="true"
VITE_ENABLE_AUDIO="false"
VITE_DEBUG_MODE="false"
`
    createFile('.env.local', envContent)
  }

  // Step 5: Install dependencies
  logStep('5', 'Installing dependencies')
  
  if (!exists('node_modules')) {
    log('Installing npm packages... This may take a few minutes.')
    execCommand('npm install')
    logSuccess('Dependencies installed')
  } else {
    logSuccess('Dependencies already installed')
  }

  // Step 6: Create placeholder assets
  logStep('6', 'Creating placeholder assets')
  
  // Create placeholder images
  const placeholderImages = [
    'public/images/profile.jpg',
    'public/images/hero-bg.jpg',
    'public/images/projects/project-1.jpg',
    'public/images/projects/project-2.jpg',
    'public/images/projects/project-3.jpg'
  ]

  placeholderImages.forEach(imagePath => {
    if (!exists(imagePath)) {
      // Create a simple placeholder file
      createFile(imagePath, '# Placeholder image - replace with your actual image')
    }
  })

  // Create favicon
  if (!exists('public/favicon.svg')) {
    const faviconSVG = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#00ff88"/>
  <text x="16" y="20" font-family="monospace" font-size="16" fill="#000" text-anchor="middle">${config.name.charAt(0)}</text>
</svg>`
    createFile('public/favicon.svg', faviconSVG)
  }

  // Step 7: Git initialization
  logStep('7', 'Git repository setup')
  
  if (!exists('.git')) {
    try {
      execCommand('git init')
      execCommand('git add .')
      execCommand('git commit -m "Initial commit: React Portfolio setup"')
      logSuccess('Git repository initialized')
    } catch {
      logWarning('Git initialization failed. You can initialize it manually later.')
    }
  } else {
    logSuccess('Git repository already exists')
  }

  // Step 8: Development server check
  logStep('8', 'Verifying setup')
  
  log('Running build test...')
  try {
    execCommand('npm run build', { stdio: 'pipe' })
    logSuccess('Build test passed')
  } catch {
    logWarning('Build test failed. Check your configuration.')
  }

  // Setup complete
  log('\n' + '='.repeat(50), 'green')
  log('🎉 Setup Complete!', 'green')
  log('='.repeat(50), 'green')
  
  log('\nYour React portfolio is ready! Here\'s what you can do next:', 'cyan')
  log('')
  log('📋 Next Steps:', 'yellow')
  log('1. Replace placeholder images in public/images/')
  log('2. Update your project data in src/data/portfolio.js')
  log('3. Customize colors and styling in tailwind.config.js')
  log('4. Add your actual project screenshots and descriptions')
  log('5. Configure deployment settings in netlify.toml')
  log('')
  log('🚀 Development Commands:', 'yellow')
  log('  npm run dev      - Start development server')
  log('  npm run build    - Build for production')
  log('  npm run preview  - Preview production build')
  log('  npm run lint     - Run code linting')
  log('')
  log('📂 Important Files:', 'yellow')
  log('  src/data/portfolio.js  - Your personal/project data')
  log('  src/data/home.js       - Homepage content')
  log('  .env.local             - Environment variables')
  log('  tailwind.config.js     - Design system config')
  log('')
  log('🌐 Deployment:', 'yellow')
  log('  - Connect your GitHub repo to Netlify')
  log('  - Push to main branch for automatic deployment')
  log('  - Update domain settings in netlify.toml')
  log('')
  log('Ready to start? Run: npm run dev', 'green')
  log('')
}

// Handle process errors
process.on('unhandledRejection', (reason, promise) => {
  logError('Setup failed:', reason)
  process.exit(1)
})

process.on('uncaughtException', (error) => {
  logError('Setup error:', error.message)
  process.exit(1)
})

// Run setup
setup().catch((error) => {
  logError(`Setup failed: ${error.message}`)
  process.exit(1)
})