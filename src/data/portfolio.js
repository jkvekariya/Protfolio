export const portfolioData = {
  personal: {
    name: "John Doe",
    role: "Full Stack Developer",
    titles: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Backend Developer",
      "Frontend Engineer",
      "API Developer",
    ],
    introduction: "I build premium, high-performance, and scalable web applications. With a passion for clean code and stunning aesthetics, I turn complex problems into elegant solutions.",
    photo: "https://via.placeholder.com/400x400", // Replace with actual photo
    resumeUrl: "/resume.pdf", // Place resume in public folder
    contact: {
      email: "hello@johndoe.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      availability: "Available for freelance work",
    },
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  stats: [
    { label: "Experience", value: "5+ Years" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies", value: "20+" },
    { label: "Happy Clients", value: "30+" },
  ],
  services: [
    {
      id: "frontend",
      title: "Frontend Development",
      description: "Building responsive, highly interactive, and premium user interfaces using React, JavaScript, and modern CSS.",
      icon: "FaReact" // We'll map this in the component
    },
    {
      id: "backend",
      title: "Backend Development",
      description: "Designing robust, scalable, and secure server-side architectures using Node.js, Express, and Python.",
      icon: "FaServer"
    },
    {
      id: "fullstack",
      title: "Full Stack Development",
      description: "End-to-end application development seamlessly integrating frontend interfaces with backend logic.",
      icon: "FaCode"
    },
    {
      id: "api",
      title: "REST API Development",
      description: "Creating well-documented, high-performance APIs for web and mobile applications.",
      icon: "FaNetworkWired"
    },
    {
      id: "database",
      title: "Database Design",
      description: "Structuring scalable relational and NoSQL databases for optimal performance and data integrity.",
      icon: "FaDatabase"
    },
    {
      id: "uiux",
      title: "UI/UX Implementation",
      description: "Translating complex design systems into pixel-perfect, accessible, and smooth web experiences.",
      icon: "FaPaintBrush"
    },
    {
      id: "optimization",
      title: "Performance Optimization",
      description: "Enhancing application speed, SEO, and Lighthouse scores to deliver a blazing-fast user experience.",
      icon: "FaBolt"
    },
    {
      id: "devops",
      title: "Deployment & DevOps",
      description: "Automating CI/CD pipelines and deploying applications to AWS, Vercel, and modern cloud platforms.",
      icon: "FaRocket"
    }
  ],
  experience: [
    {
      id: 1,
      company: "TechNova Solutions",
      position: "Senior Full Stack Engineer",
      duration: "2022 - Present",
      description: "Lead the development of scalable SaaS applications. Improved application performance by 40% and implemented complex 3D visualizations.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Three.js"]
    },
    {
      id: 2,
      company: "CyberWeb Agency",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Developed award-winning landing pages and e-commerce platforms. Specialized in micro-animations and responsive design.",
      technologies: ["HTML/CSS", "JavaScript", "React", "GSAP", "Tailwind"]
    },
    {
      id: 3,
      company: "StartUp Inc.",
      position: "Junior Developer",
      duration: "2018 - 2020",
      description: "Assisted in building REST APIs and creating dashboard interfaces for internal tools.",
      technologies: ["PHP", "MySQL", "jQuery", "Bootstrap"]
    }
  ],
  skills: {
    frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "React", level: 95 },
      { name: "Angular", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "PHP", level: 80 },
      { name: "Python", level: 75 },
    ],
    database: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 80 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 95 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
    ]
  },
  projects: [
    {
      id: "project-1",
      title: "SaaS Analytics Dashboard",
      description: "A comprehensive analytics dashboard for modern SaaS businesses featuring real-time data visualization and a dark theme.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      category: "Full Stack",
      techStack: ["React", "JavaScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      features: [
        "Real-time analytics",
        "Role-based access control",
        "Dark mode optimized UI",
        "Interactive charts"
      ],
      links: {
        github: "https://github.com",
        live: "https://example.com",
        caseStudy: "#"
      },
      status: "Completed",
      date: "Jan 2024"
    },
    {
      id: "project-2",
      title: "E-Commerce Platform",
      description: "High-performance e-commerce platform with 3D product preview capabilities and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
      category: "Frontend",
      techStack: ["React", "Three.js", "Framer Motion", "Stripe", "Firebase"],
      features: [
        "3D product viewer",
        "Secure payments",
        "Smooth page transitions",
        "Admin panel"
      ],
      links: {
        github: "https://github.com",
        live: "https://example.com",
        caseStudy: "#"
      },
      status: "In Progress",
      date: "Nov 2023"
    },
    {
      id: "project-3",
      title: "AI Prompt Marketplace",
      description: "A platform for sharing and discovering advanced AI prompts. Features a robust backend and complex search capabilities.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      category: "Full Stack",
      techStack: ["Node.js", "Express", "MongoDB", "React", "Redux"],
      features: [
        "Advanced search & filter",
        "User authentication",
        "Payment integration",
        "Rating system"
      ],
      links: {
        github: "https://github.com",
        live: "https://example.com",
        caseStudy: "#"
      },
      status: "Completed",
      date: "Aug 2023"
    }
  ]
};
