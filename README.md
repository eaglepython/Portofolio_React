# Joseph Bidias - React Portfolio

A modern, interactive portfolio built with React and Vite, showcasing expertise in quantitative research, software engineering, and AI innovation.

## Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Interactive Animations**: Framer Motion powered smooth transitions and effects
- **Dark/Light Themes**: System preference aware theme switching with persistence
- **Performance Optimized**: Vite build system with code splitting and lazy loading
- **SEO Friendly**: Meta tags, semantic HTML, and proper document structure

### Advanced Features
- **Matrix Rain Effect**: Dynamic background animations with binary code
- **Glitch Text Effects**: Cyberpunk-style text distortions
- **Cursor Trail**: Custom cursor with particle effects
- **Typewriter Animation**: Dynamic text typing with multiple phrases
- **Keyboard Shortcuts**: Full navigation via keyboard (1-4 for sections, T for theme)
- **Project Filtering**: Dynamic project categorization and search
- **Contact Form**: Validated form with real-time feedback
- **Loading Screen**: Animated loading with progress indicators

### Technical Highlights
- **Component Architecture**: Modular, reusable React components
- **Custom Hooks**: Centralized state management for theme, scroll, audio, and particles
- **Animation System**: Coordinated animations with Intersection Observer
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and screen reader support
- **Performance**: Optimized bundle size and runtime performance

## Tech Stack

### Frontend
- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool with HMR and optimized production builds
- **Framer Motion**: Declarative animations and gestures
- **React Router**: Client-side routing with smooth transitions
- **Tailwind CSS**: Utility-first CSS framework with custom design system

### Development Tools
- **ESLint**: Code linting with React-specific rules
- **PostCSS**: CSS processing with Autoprefixer
- **Lucide React**: Modern icon library
- **React Intersection Observer**: Performant scroll-based animations

### Deployment
- **Netlify**: Continuous deployment with form handling
- **GitHub Actions**: Automated testing and deployment pipeline
- **Custom Domain**: Professional domain with SSL

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git for version control
- Modern browser with ES6+ support

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/eaglepython/react-portfolio-vite.git
cd react-portfolio-vite
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Add your configuration values
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**
Navigate to `http://localhost:3000`

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix
```

## Project Structure

```
src/
├── components/           # React components
│   ├── effects/         # Animation and visual effects
│   ├── layout/          # Layout components (Header, Footer)
│   ├── pages/           # Page components
│   ├── sections/        # Page sections
│   └── ui/              # Reusable UI components
├── data/                # Static data and content
├── hooks/               # Custom React hooks
├── styles/              # Global styles and CSS
└── utils/               # Utility functions
```

### Component Organization

**Effects Components**
- `BackgroundEffects`: Matrix rain and neural network animations
- `CursorTrail`: Custom cursor with particle trails
- `FloatingElements`: Ambient background particles and shapes

**Layout Components**
- `NavBar`: Responsive navigation with mobile menu
- `Footer`: Contact links and site information

**UI Components**
- `TypewriterText`: Animated typing effect
- `GlitchText`: Cyberpunk text distortion
- `LoadingScreen`: Animated loading with progress
- `ThemeToggle`: Dark/light mode switcher
- `ScrollProgress`: Page scroll indicator

**Page Components**
- `HomePage`: Hero section with featured content
- `AboutPage`: Detailed background and skills
- `ProjectsPage`: Portfolio with filtering and modals
- `ContactPage`: Contact form and information
- `NotFoundPage`: 404 error with navigation

## Customization

### Theme Configuration
Edit `tailwind.config.js` to customize:
- Color palette and gradients
- Animation timings and keyframes
- Responsive breakpoints
- Typography scales

### Content Management
Update files in `src/data/`:
- `portfolio.js`: Personal information and experience
- `home.js`: Homepage content and featured items

### Animation Settings
Modify animation preferences in:
- `src/hooks/useTheme.js`: Theme switching animations
- `src/hooks/useScroll.js`: Scroll-based triggers
- Component-specific animation variants

## Performance Optimization

### Build Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image compression and lazy loading
- **Bundle Analysis**: Size monitoring and optimization

### Runtime Performance
- **Virtual DOM**: React's efficient rendering
- **Intersection Observer**: Performant scroll animations
- **Debounced Events**: Optimized user interaction handling
- **Memoization**: Component and calculation caching

### Accessibility Features
- **Semantic HTML**: Proper document structure
- **ARIA Labels**: Screen reader compatibility
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Logical tab order
- **Reduced Motion**: Respects user preferences

## Deployment

### Netlify Deployment

1. **Connect repository**
   - Link GitHub repository to Netlify
   - Configure build settings

2. **Build configuration**
   ```toml
   [build]
   command = "npm run build"
   publish = "dist"
   ```

3. **Environment variables**
   Set in Netlify dashboard:
   - `NODE_VERSION=18`
   - Custom environment variables

4. **Deploy**
   - Automatic deployment on git push
   - Branch previews for pull requests
   - Form handling for contact form

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to hosting provider
# Upload dist/ folder contents
```

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Core functionality without JavaScript

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a pull request

### Development Guidelines
- Follow React best practices
- Maintain component modularity
- Write descriptive commit messages
- Test across browsers and devices
- Ensure accessibility compliance

## Performance Metrics

- **Lighthouse Score**: 95+ performance rating
- **First Contentful Paint**: < 1.5 seconds
- **Time to Interactive**: < 2.5 seconds
- **Bundle Size**: < 500KB gzipped
- **Core Web Vitals**: All metrics in green

## Contact

**Joseph Bidias**  
Quantitative Researcher & Software Engineer

- **Portfolio**: [https://josephbidias.dev](https://josephbidias.dev)
- **GitHub**: [@eaglepython](https://github.com/eaglepython)
- **LinkedIn**: [Connect](https://linkedin.com/in/joseph-bidias-eaglepython)
- **Email**: joseph.bidias@gmail.com

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with React, Vite, and modern web technologies. Optimized for performance, accessibility, and user experience.
