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
        label: "Coming Soon",
        disabled: true,
      },
      githubRepo: {
        href: "https://github.com/khloe-ose/TaskMo-.git",
        label: "GitHub Repo",
        external: true,
      },
    },
  },
  {
    title: "EventHub – Event Registration & QR Attendance System",
    description:
      "A web application for organizing and managing events, allowing participants to register online, receive QR codes for attendance, and generate certificates automatically. Includes attendance tracking, reports, and event analytics dashboards.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT Authentication",
      "QR Code API",
      "PDF Generation",
      "Git/GitHub",
    ],
    links: {
      documentation: "#",
      liveDemo: "#",
      githubRepo: "#",
    },
  },
  {
    title: "AssetTrack – Inventory & Asset Management System",
    description:
      "An enterprise-style asset management platform for tracking inventory, managing asset borrowing and returns, monitoring asset conditions, and generating audit logs. Includes QR code support, approval workflows, and reporting features.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT Authentication",
      "QR Code API",
      "Chart.js",
      "Git/GitHub",
    ],
    links: {
      documentation: "#",
      liveDemo: "#",
      githubRepo: "#",
    },
  },
  {
    title: "ResumeMatch – Resume Screening & Job Match Platform",
    description:
      "An HR technology platform that allows applicants to upload resumes and compares them against job descriptions using skill extraction and matching algorithms. Provides compatibility scores, identifies missing skills, and offers improvement recommendations through an AI-inspired scoring system.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT Authentication",
      "Multer",
      "PDF-Parse",
      "Chart.js",
      "Git/GitHub",
    ],
    links: {
      documentation: "#",
      liveDemo: "#",
      githubRepo: "#",
    },
  },
  {
    title: "BudgetWise – Personal Finance Tracker with Analytics",
    description:
      "A personal finance management application that helps users track income and expenses, set budgets and savings goals, monitor spending habits, and generate financial reports through interactive dashboards and visual analytics.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT Authentication",
      "Chart.js",
      "PDF Generation",
      "Git/GitHub",
    ],
    links: {
      documentation: "#",
      liveDemo: "#",
      githubRepo: "#",
    },
  },
];
