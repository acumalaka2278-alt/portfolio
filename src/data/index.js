import { Github, Linkedin, Mail, Layout, Code, Database } from "lucide-react";

export const personalInfo = {
    name: "M. RIZKY ALFIANDI",
    role: "Frontend Developer",
    tagline: "Building pixel-perfect, accessible, and performant web experiences.",
    about: `I am a junior frontend developer with a passion for building beautiful and functional web applications. 
  My journey began with a curiosity for how websites work, which led me to dive deep into HTML, CSS, and JavaScript. 
  I specialize in the React ecosystem and enjoy crafting responsive interfaces that provide excellent user experiences. 
  I am eager to contribute to a dynamic team and continue learning modern web technologies.`,
    email: "rizkyalfiandi99@gmail.com",
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/acumalaka2278-alt",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/m-rizky-alfiandi-b161b63a2/",
            icon: Linkedin,
        },
        {
            name: "Email",
            url: "mailto:rizkyalfiandi99@gmail.com",
            icon: Mail,
        },
    ],
};

export const skills = [
    {
        category: "Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
        icon: Layout,
    },
    {
        category: "Backend Basics",
        items: ["Node.js", "Express", "REST APIs", "PostgreSQL"],
        icon: Database,
    },
    {
        category: "Tools & Methods",
        items: ["Git/GitHub", "VS Code", "Responsive Design", "Agile/Scrum", "Jest"],
        icon: Code,
    },
];

export const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A responsive admin dashboard for managing products and orders. Features include data visualization with charts, dark mode support, and real-time data updates.",
        techStack: ["React", "Tailwind CSS", "Chart.js", "Context API"],
        repoUrl: "https://github.com",
        liveUrl: "https://example.com",
        features: [
            "Dynamic data visualization",
            "Dark/Light mode toggle",
            "Responsive sidebar layout",
            "Search and filter functionality"
        ]
    },
    {
        title: "Task Management App",
        description: "A Kanban-style task management application allowing users to organize tasks into columns. Implements drag-and-drop functionality for seamless task updates.",
        techStack: ["React", "Redux Toolkit", "dnd-kit", "Styled Components"],
        repoUrl: "https://github.com",
        liveUrl: "https://example.com",
        features: [
            "Drag and drop interface",
            "Local storage persistence",
            "Category management",
            "Task priority labeling"
        ]
    },
    {
        title: "Weather Forecast App",
        description: "A minimal weather application providing real-time weather data and 5-day forecasts. Uses geolocation to detect user location and displays dynamic background images based on weather conditions.",
        techStack: ["React", "OpenWeatherMap API", "CSS Modules", "Axios"],
        repoUrl: "https://github.com",
        liveUrl: "https://example.com",
        features: [
            "Geolocation support",
            "5-day forecast",
            "Dynamic backgrounds",
            "City search with autocomplete"
        ]
    },
];
