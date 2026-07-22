export const portfolioData = {
  personal: {
    name: "Jay Vekariya",
    role: "Full Stack Developer",
    titles: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
    ],
    introduction: "I'm a Full Stack Web Developer passionate about building modern, responsive, and scalable web applications. I recently completed my Bachelor of Computer Applications (BCA) and enjoy creating clean, efficient, and user-friendly digital experiences. I'm constantly learning new technologies, building real-world projects, and improving my skills in both frontend and backend development. My goal is to develop high-quality applications that solve real problems and deliver great user experiences.",
    photo: "/jay.png", // Replace with actual photo
    resumeUrl: "/resume.pdf", // Place resume in public folder
    contact: {
      email: "vekariyajay985@gmail.com",
      phone: "+91 7600312235",
      location: "Surat, Gujarat",
      availability: "Available for freelance work",
    },
    social: {
      github: "https://github.com/jkvekariya",
      linkedin: "https://linkedin.com/in/jkvekariya",
      instagram: "https://instagram.com/jkvekariya",
    },
  },
  stats: [
    { label: "Experience", value: "2+ Years" },
    { label: "Projects Completed", value: "7+" },
    { label: "Technologies", value: "13+" },
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
      { name: "React", level: 90 },
      { name: "Tailwind", level: 85 },
      { name: "Bootstrap", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "RESTful API", level: 88 },
      { name: "JWT Auth", level: 80 },
    ],
    database: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "SQL", level: 88 },
      { name: "Firebase", level: 80 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 95 },
      { name: "Postman", level: 88 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
    ]
  },
  projects: [
    {
      id: "project-1",
      title: "Bellavita",
      description: "A full-featured beauty & lifestyle e-commerce web application with product listings, cart, user authentication, and order management — built with the MERN stack.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
      category: "Full Stack",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "CSS"],
      features: [
        "Product listing & filtering",
        "User authentication",
        "Shopping cart & orders",
        "Responsive UI"
      ],
      links: {
        github: "https://github.com/jkvekariya/Bellavita-Project",
        live: "",
        caseStudy: ""
      },
      status: "Completed",
      date: "2024"
    },
    {
      id: "project-2",
      title: "Fashion E-Commerce",
      description: "A modern fashion e-commerce platform with dynamic product browsing, secure authentication, cart management, and a clean responsive interface.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1000",
      category: "Full Stack",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
      features: [
        "Product catalog",
        "User auth & sessions",
        "Cart & checkout flow",
        "Admin dashboard"
      ],
      links: {
        github: "https://github.com/jkvekariya/Fashion_E-commerce",
        live: "",
        caseStudy: ""
      },
      status: "Completed",
      date: "2024"
    },
    {
      id: "project-3",
      title: "Free-Com Job Portal",
      description: "A scalable freelance & job portal where employers can post jobs and candidates can apply. Built with a robust backend using PostgreSQL, Prisma ORM, and Redis for caching.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000",
      category: "Full Stack",
      techStack: ["React.js", "Node.js", "PostgreSQL", "Prisma", "Redis"],
      features: [
        "Job posting & applications",
        "User roles (employer/candidate)",
        "Redis caching",
        "Prisma ORM queries"
      ],
      links: {
        github: "https://github.com/jkvekariya/FreeCom-job-portal",
        live: "",
        caseStudy: ""
      },
      status: "In Progress",
      date: "2025"
    }
  ]
};
