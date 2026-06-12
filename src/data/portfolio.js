export const profile = {
  name: "Khloe Cassandra Oseña",
  role: "BS Information Technology Student",
  email: "khloe.ose@gmail.com",
  linkedIn: "https://www.linkedin.com/in/khloe-oseña-625a4830a",
  photo: "/images/Khloe.JPEG",
};

export const skillGroups = [
  {
    title: "Technical Skills",
    items: [
      "Web Development",
      "Database Management",
      "UI/UX Design",
      "Requirements Gathering",
      "Technical Documentation",
      "Project Coordination",
      "Project Management",
      "Agile Collaboration",
      "Version Control",
    ],
  },
  {
    title: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "SQL", "PHP", "C++"],
  },
  {
    title: "Frameworks and Tools",
    items: [
      "React.js",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Figma",
      "Visual Studio Code",
      "MySQL",
      "Microsoft Office",
      "Google Workspace",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Leadership",
      "Communication",
      "Teamwork",
      "Delegation",
      "Problem-Solving",
      "Critical Thinking",
      "Adaptability",
      "Organization",
      "Time Management",
      "Stakeholder Communication",
    ],
  },
];

export const projects = [
  {
    title: "TaskMo!",
    description:
      "TaskMo! is a full-stack project and task management system for teams. It includes authentication, role-based access, project management, task assignment, Kanban tracking, comments, activity logs, dashboard analytics, and a responsive React UI.",
    note: "Completed project. Documentation and source code are available.",
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
    features: [
      "User registration and login",
      "Role-based access control: Admin, Project Manager, Team Member",
      "Admin user management",
      "Project creation, editing, deletion, and details",
      "Task creation, assignment, due dates, priority, and status tracking",
      "Kanban board with To Do, In Progress, and Completed columns",
      "Task comments",
      "Search and filters",
      "Dashboard cards and charts",
      "Recent activity log",
      "Responsive layout",
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
