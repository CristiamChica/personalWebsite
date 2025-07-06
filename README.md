# Personal Website

A simple, modern personal website built with React and Vite. This is the first iteration focusing on a clean, minimal design with a home page introduction.

## 🚀 Project Overview

This personal website is designed to be deployed through a modern pipeline: **GitHub → Free Hosting Service → Custom Domain**. The current version includes basic functionality with plans for future iterations to add security protocols and tracking tools.

## 📁 Project Structure

```
personal-website/
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation header component
│   │   ├── Header.css     # Header styles
│   │   ├── Home.jsx       # Home page component
│   │   └── Home.css       # Home page styles
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global app styles
│   ├── main.jsx          # React application entry point
│   └── index.css         # Global CSS reset and base styles
├── index.html            # HTML template
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 📄 File Documentation

### Core Files

- **`index.html`**: The main HTML template that serves as the entry point for the React application. Contains meta tags for SEO and viewport configuration.

- **`src/main.jsx`**: The React application's entry point. Renders the root App component into the DOM using React 18's createRoot API.

- **`src/App.jsx`**: The main application component that structures the overall layout. Imports and renders the Header and Home components within a semantic HTML structure.

### Components

- **`src/components/Header.jsx`**: 
  - Navigation header component with site logo and navigation links
  - Features: Responsive design, sticky positioning, glassmorphism effect
  - Props: None (static for now)
  - Future: Will include active state management and mobile menu

- **`src/components/Home.jsx`**: 
  - Hero section component for the landing page
  - Features: Personal introduction, call-to-action buttons, animated avatar placeholder
  - Content: Greeting, title, description, and action buttons
  - Future: Will connect buttons to actual functionality

### Styling

- **`src/index.css`**: 
  - Global CSS reset and base styles
  - Root variables for consistent theming
  - Dark/light mode support using CSS media queries
  - Typography and layout foundations

- **`src/App.css`**: 
  - Application-level layout styles
  - Main container and responsive grid setup
  - Flexbox utilities for page structure

- **`src/components/Header.css`**: 
  - Header-specific styles with glassmorphism effect
  - Responsive navigation layout
  - Hover states and transitions
  - Mobile-first responsive design

- **`src/components/Home.css`**: 
  - Hero section styling with gradient backgrounds
  - CSS animations (floating avatar)
  - Grid layout for content sections
  - Comprehensive responsive design
  - Button styles and hover effects

### Configuration

- **`package.json`**: 
  - Project metadata and dependencies
  - Scripts for development, building, and deployment
  - React 18 and Vite toolchain configuration

- **`vite.config.js`**: 
  - Vite bundler configuration
  - React plugin setup
  - Development and build optimizations

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool and development server
- **CSS3**: Modern CSS with Grid, Flexbox, and custom properties
- **ES6+**: Modern JavaScript features

## 📱 Features

### Current Features (v1.0)
- ✅ Responsive design (mobile-first approach)
- ✅ Dark/light mode support (automatic based on system preference)
- ✅ Modern glassmorphism UI design
- ✅ Smooth animations and transitions
- ✅ Semantic HTML structure
- ✅ Clean, minimal component architecture

### Planned Features (Future Iterations)
- 🔄 Security protocols implementation
- 🔄 Analytics and tracking tools
- 🔄 Contact form functionality
- 🔄 Portfolio/projects section
- 🔄 Blog integration
- 🔄 SEO optimizations
- 🔄 Performance monitoring

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🌐 Deployment Pipeline (Planned)

1. **GitHub Repository**: Code versioning and collaboration
2. **Free Hosting Service**: Options include:
   - Vercel (recommended for React)
   - Netlify
   - GitHub Pages
   - Firebase Hosting
3. **Custom Domain**: Connect your owned domain to the hosting service

## 📝 Customization Guide

### Updating Personal Information

1. **Edit `src/components/Header.jsx`**: 
   - Change "Your Name" in the logo section
   - Update navigation links as needed

2. **Edit `src/components/Home.jsx`**: 
   - Replace "[Your Name]" with your actual name
   - Update the title and description text
   - Customize the emoji avatar or replace with an actual image

### Styling Modifications

- **Colors**: Update the gradient colors in CSS files (search for `#667eea` and `#764ba2`)
- **Typography**: Modify font families in `src/index.css`
- **Layout**: Adjust spacing and sizing in component CSS files

## 🔧 Development Notes

- **Component Structure**: Each component follows the pattern of a `.jsx` file with its corresponding `.css` file
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **CSS Organization**: Component-scoped styles with global base styles
- **Performance**: Vite provides fast HMR (Hot Module Replacement) during development

## 🎯 Next Steps

1. **Content**: Replace placeholder content with your actual information
2. **Images**: Add a professional profile photo
3. **Domain Setup**: Prepare your domain for connection
4. **GitHub Repository**: Initialize git and push to GitHub
5. **Hosting**: Choose and configure a free hosting service

## 🤝 Contributing

This is a personal project, but feel free to fork it and use it as a template for your own website!

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

**Version**: 1.0.0 - Initial Release  
**Last Updated**: July 5, 2025  
**Status**: Development Phase 1 Complete
