# Professional Cyberpunk Portfolio (React JS + Vite)

A premium, high-performance, and futuristic professional portfolio website built using standard **React JS (JavaScript)**, **Tailwind CSS v4**, **Framer Motion**, and **Three.js**.

## Features
- **3D Sphere Scene**: Interactive distorted 3D wireframe sphere using `@react-three/fiber` and `@react-three/drei`.
- **Particles Network Background**: Interactive grid-linked particles responding to cursor hover events.
- **Cyber-themed Styling**: Glowing neon borders, texts, custom cursor effects, and sleek glassmorphism panels.
- **Responsive Layout**: Designed for smooth viewing on mobile, tablet, and desktop viewports.
- **Contact Form Validation**: Form validation built using `react-hook-form` and `zod`.

## Project Directory Structure
- `index.html`: Entry HTML document.
- `vite.config.js`: Vite server and plugin configuration.
- `src/main.jsx`: Application mount point.
- `src/App.jsx`: Main application container bringing all sections together.
- `src/globals.css`: Global styles, themes, and utility classes.
- `src/components/`: Reusable portfolio sections:
  - `Navbar.jsx`: Fixed top header with responsive mobile slide-out menu.
  - `HeroSection.jsx`: Welcome title, titles carousel, description, CTA buttons, and 3D scene.
  - `Hero3DScene.jsx`: Three.js Canvas and animated sphere mesh.
  - `AboutSection.jsx`: Info description, experience/project stats, education timeline, and resume action.
  - `ServicesSection.jsx`: Interactive tilt-effect services grid.
  - `ExperienceSection.jsx`: Custom chronological timeline for career history.
  - `SkillsSection.jsx`: Neon colored skill rating meters.
  - `ProjectsSection.jsx`: Highlighted works gallery with overlay badges, status, tech tags, and links.
  - `ContactSection.jsx`: Contact coordinates details, maps embed, and styled message submission form.
  - `Footer.jsx`: End section containing footer links and back-to-top action.
  - `Cursor.jsx`: Custom glowing circular cursor.
  - `ParticlesBackground.jsx`: Interactive network particle background.
- `src/data/portfolio.js`: Centralized text dataset containing portfolio content (personal info, stats, services, timeline, skills, and projects). Simply modify values in this file to update the website content.

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) installed on your machine.

### Installation
Install the project dependencies using npm:
```bash
npm install
```

### Running the Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

### Building for Production
To bundle and optimize the application files for production deployment:
```bash
npm run build
```
This will output static files into the `dist` folder.
