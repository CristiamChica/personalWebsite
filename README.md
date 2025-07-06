# Personal Website

A simple, modern personal website built with React and Vite. This is the first iteration focusing on a clean, minimal design with a home page introduction.

## 🚀 Project Overview

This personal website is designed to be deployed through a modern pipeline: **GitHub → Vercel → Custom Domain**. The current version includes basic functionality with plans for future iterations to add security protocols and tracking tools.

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

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and concurrent features
- **Vite**: Fast build tool and development server
- **CSS3**: Modern CSS with Grid, Flexbox, and custom properties
- **ES6+**: Modern JavaScript features

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
2. **Free Hosting Service**: Vercel (recommended for React)
3. **Custom Domain**: Connect your owned domain to the hosting service

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

**Version**: 1.0.0 - Initial Release  
**Last Updated**: July 5, 2025  
**Status**: Development Phase 1 Complete
