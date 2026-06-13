export const profile = {
  name: "Khloe Cassandra Oseña",
  role: "BS Information Technology Student",
  email: "khloe.ose@gmail.com",
  linkedIn: "https://www.linkedin.com/in/khloe-oseña-625a4830a",
  photo: "/images/Khloe.JPEG",
};

export const skillGroups = [
  {
    id: "technical",
    title: "Technical Skills",
    icon: "technical",
    items: [
      { name: "Web Development", icon: "web" },
      { name: "UI/UX Design", icon: "design" },
      { name: "Database Management", icon: "database" },
      { name: "Requirements Gathering", icon: "requirements" },
      { name: "Technical Documentation", icon: "documentation" },
      { name: "Project Management", icon: "project" },
      { name: "Agile Collaboration", icon: "agile" },
    ],
  },
  {
    id: "programming",
    title: "Programming Languages",
    icon: "programming",
    items: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Java", icon: "java" },
      { name: "PHP", icon: "php" },
      { name: "SQL", icon: "sql" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Kotlin", icon: "kotlin" },
    ],
  },
  {
    id: "tools",
    title: "Frameworks & Tools",
    icon: "tools",
    items: [
      { name: "React", icon: "react" },
      { name: "Vite", icon: "vite" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "express" },
      { name: "MySQL", icon: "mysql" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Figma", icon: "figma" },
      { name: "Android Studio", icon: "androidStudio" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
  {
    id: "soft",
    title: "Soft Skills",
    icon: "soft",
    items: [
      { name: "Leadership", icon: "leadership" },
      { name: "Team Collaboration", icon: "team" },
      { name: "Adaptability", icon: "adaptability" },
      { name: "Communication", icon: "communication" },
      { name: "Accountability", icon: "accountability" },
      { name: "Problem Solving", icon: "problemSolving" },
      { name: "Goal-Oriented Work", icon: "goal" },
      { name: "Time Management", icon: "time" },
    ],
  },
];

export const projects = [
  {
    title: "TaskMo!",
    description:
      "TaskMo! is a full-stack project and task management system for teams. It includes authentication, role-based access, project management, task assignment, Kanban tracking, comments, activity logs, dashboard analytics, and a responsive React UI.",
    image: {
      src: "/images/taskmo-dashboard.png",
      alt: "TaskMo dashboard showing task status charts, priority analytics, and activity logs",
    },
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT Authentication",
      "bcrypt",
      "Recharts",
      "Lucide React",
    ],
    links: {
      documentation: {
        href: "/docs/taskmo.html",
        label: "Documentation",
      },
      liveDemo: {
        href: "https://youtu.be/nLzyaWdlX0Y",
        label: "Live Demo",
        external: true,
      },
      githubRepo: {
        href: "https://github.com/khloe-ose/TaskMo-.git",
        label: "GitHub Repo",
        external: true,
      },
    },
  },
  {
    title: "CheckInn",
    description:
      "A complete full-stack event registration and QR attendance management system for student organizations, workshops, and conferences. It allows organizers to create events, manage registrations, scan QR codes for attendance, generate reports, and manage participants.",
    image: {
      src: "/images/checkinn-preview.png",
      alt: "CheckInn login screen with event registration and QR attendance branding",
    },
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT Authentication",
      "qrcode",
      "pdfkit",
      "Recharts",
      "Lucide React",
    ],
    links: {
      documentation: {
        href: "/docs/checkinn.html",
        label: "Documentation",
      },
      liveDemo: {
        href: "https://youtu.be/jFNZ3Ql830E",
        label: "Live Demo",
        external: true,
      },
      githubRepo: {
        href: "https://github.com/khloe-ose/CheckInn.git",
        label: "GitHub Repo",
        external: true,
      },
    },
  },
  {
    title: "StockIt",
    description:
      "A complete full-stack inventory and asset management system for offices, schools, and organizations. It supports asset tracking, QR-based asset identification, category and location management, borrow requests, returns, reports, audit logs, and role-based access.",
    image: {
      src: "/images/stockit-preview.png",
      alt: "StockIt login screen and red inventory management brand panel",
    },
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT Authentication",
      "qrcode",
      "Recharts",
      "Lucide React",
    ],
    links: {
      documentation: {
        href: "/docs/stockit.html",
        label: "Documentation",
      },
      liveDemo: {
        href: "https://youtu.be/ryxExgXGCTI",
        label: "Live Demo",
        external: true,
      },
      githubRepo: {
        href: "https://github.com/khloe-ose/StockIt.git",
        label: "GitHub Repo",
        external: true,
      },
    },
  },
];
