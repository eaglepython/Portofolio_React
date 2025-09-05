#!/usr/bin/env node

/**
 * Deployment script for the React Portfolio
 * Handles build optimization, asset compression, and deployment tasks
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

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
  cyan: '\x1b[36m'
}

// Logging functions
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
    logError(error.message)
    process.exit(1)
  }
}

// Check if file/directory exists
const exists = (filePath) => {
  return fs.existsSync(path.resolve(rootDir, filePath))
}

// Get file size in MB
const getFileSize = (filePath) => {
  const stats = fs.statSync(path.resolve(rootDir, filePath))
  return (stats.size / (1024 * 1024)).toFixed(2)
}

// Get directory size
const getDirSize = (dirPath) => {
  let totalSize = 0
  const files = fs.readdirSync(path.resolve(rootDir, dirPath), { withFileTypes: true })
  
  for (const file of files) {
    const filePath = path.join(dirPath, file.name)
    if (file.isDirectory()) {
      totalSize += getDirSize(filePath)
    } else {
      totalSize += fs.statSync(path.resolve(rootDir, filePath)).size
    }
  }
  
  return totalSize
}

// Main deployment function
async function deploy() {
  log('🚀 Starting deployment process...', 'magenta')
  log('=====================================', 'magenta')

  // Step 1: Environment check
  logStep('1', 'Checking environment and dependencies')
  
  if (!exists('package.json')) {
    logError('package.json not found. Make sure you\'re in the project root.')
    process.exit(1)
  }

  // Check Node version
  const nodeVersion = process.version
  log(`Node.js version: ${nodeVersion}`)
  
  if (parseInt(nodeVersion.slice(1)) < 16) {
    logWarning('Node.js 16+ is recommended for optimal performance')
  }

  logSuccess('Environment check passed')

  // Step 2: Clean previous builds
  logStep('2', 'Cleaning previous build artifacts')
  
  if (exists('dist')) {
    execCommand('rm -rf dist')
    logSuccess('Removed previous dist directory')
  }

  if (exists('node_modules/.cache')) {
    execCommand('rm -rf node_modules/.cache')
    logSuccess('Cleared build cache')
  }

  // Step 3: Install dependencies
  logStep('3', 'Installing/updating dependencies')
  execCommand('npm ci --production=false')
  logSuccess('Dependencies installed')

  // Step 4: Run linting
  logStep('4', 'Running code quality checks')
  try {
    execCommand('npm run lint', { stdio: 'pipe' })
    logSuccess('Linting passed')
  } catch (error) {
    logWarning('Linting issues found. Build will continue...')
  }

  // Step 5: Build application
  logStep('5', 'Building application for production')
  
  const buildStart = Date.now()
  execCommand('npm run build')
  const buildTime = ((Date.now() - buildStart) / 1000).toFixed(2)
  
  logSuccess(`Build completed in ${buildTime} seconds`)

  // Step 6: Analyze build output
  logStep('6', 'Analyzing build output')
  
  if (!exists('dist')) {
    logError('Build failed - dist directory not found')
    process.exit(1)
  }

  const distSize = (getDirSize('dist') / (1024 * 1024)).toFixed(2)
  log(`Total build size: ${distSize} MB`)

  // Check for large files
  const distFiles = fs.readdirSync(path.resolve(rootDir, 'dist'), { recursive: true })
  const largeFiles = []
  
  for (const file of distFiles) {
    const filePath = path.join('dist', file)
    if (fs.statSync(path.resolve(rootDir, filePath)).isFile()) {
      const size = parseFloat(getFileSize(filePath))
      if (size > 1) { // Files larger than 1MB
        largeFiles.push({ file, size })
      }
    }
  }

  if (largeFiles.length > 0) {
    logWarning('Large files detected:')
    largeFiles.forEach(({ file, size }) => {
      log(`  - ${file}: ${size} MB`, 'yellow')
    })
  }

  // Step 7: Generate deployment report
  logStep('7', 'Generating deployment report')
  
  const report = {
    timestamp: new Date().toISOString(),
    nodeVersion: nodeVersion,
    buildTime: `${buildTime}s`,
    buildSize: `${distSize} MB`,
    largeFiles: largeFiles,
    environment: process.env.NODE_ENV || 'production'
  }

  fs.writeFileSync(
    path.resolve(rootDir, 'dist/deployment-report.json'),
    JSON.stringify(report, null, 2)
  )

  logSuccess('Deployment report generated')

  // Step 8: Optional - Preview build
  const shouldPreview = process.argv.includes('--preview')
  if (shouldPreview) {
    logStep('8', 'Starting preview server')
    log('Preview server will start on http://localhost:4173')
    execCommand('npm run preview')
  }

  // Deployment complete
  log('\n=====================================', 'green')
  log('🎉 Deployment preparation complete!', 'green')
  log('=====================================', 'green')
  
  log('\nBuild Summary:', 'cyan')
  log(`📦 Build size: ${distSize} MB`)
  log(`⏱️  Build time: ${buildTime} seconds`)
  log(`📁 Output directory: dist/`)
  
  log('\nNext Steps:', 'yellow')
  log('1. Review the build output in the dist/ directory')
  log('2. Deploy the contents of dist/ to your hosting provider')
  log('3. Update DNS records if using a custom domain')
  log('4. Test the deployed application')
  
  if (!shouldPreview) {
    log('\n💡 Tip: Run with --preview flag to test the build locally')
  }
}

// Handle process errors
process.on('unhandledRejection', (reason, promise) => {
  logError('Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
})

process.on('uncaughtException', (error) => {
  logError('Uncaught Exception:', error.message)
  process.exit(1)
})

// Run deployment
if (import.meta.url === `file://${process.argv[1]}`) {
  deploy().catch((error) => {
    logError(`Deployment failed: ${error.message}`)
    process.exit(1)
  })
}