import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";
import a4 from "../assets/a4.png";

const projects = [
    {
        id: 1,
        title: "Hospital Website",
        category: "website",
        image: p1,
        description:
            "My first frontend project built using HTML and CSS. It focuses on page structure, layout design, and writing clean, organized code.",
        technologies: ["HTML", "CSS"],
        github: "https://github.com/filopater23106-cloud/Project",
        live: "https://filopater23106-cloud.github.io/Project/",
        completed: true,
    },

    {
        id: 2,
        title: "Anime Store",
        category: "website",
        image: p2,
        description:
            "A fully responsive Anime Store built with HTML5 and CSS3 featuring a modern responsive layout.",
        technologies: ["HTML5", "CSS3"],
        github: "https://github.com/filopater23106-cloud/Levi-Anime-Store",
        live: "https://filopater23106-cloud.github.io/Levi-Anime-Store/",
        completed: true,
    },

    {
        id: 3,
        title: "NextTrip",
        category: "website",
        image: p3,
        description:
            "Modern tourism website with a beautiful dark theme built using Tailwind CSS.",
        technologies: ["HTML5", "Tailwind CSS"],
        github: "https://github.com/filopater23106-cloud/NextTrip-Tourism-Website",
        live: "https://filopater23106-cloud.github.io/NextTrip-Tourism-Website/",
        completed: true,
    },

    {
        id: 4,
        title: "Game Store",
        category: "website",
        image: p4,
        description:
            "Responsive game store with authentication, cart, favorites and local storage.",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
        github: "https://github.com/filopater23106-cloud/Game-Store",
        live: "https://filopater23106-cloud.github.io/Game-Store/",
        completed: true,
    },

    {
        id: 5,
        title: "Nova AI",
        category: "website",
        image: p5,
        description:
            "Modern AI SaaS Landing Page built using React, Vite and Tailwind CSS.",
        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
        ],
        github: "https://github.com/filopater23106-cloud/ProdigyInfoTech-Nova-AI",
        live: "https://prodigy-info-tech-nova-ai.vercel.app/",
        completed: true,
    },

    {
        id: 6,
        title: "Calculator",
        category: "application",
        image: a4,
        description:
            "Calculator supporting keyboard shortcuts, chained calculations and responsive design.",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
        ],
        github: "https://github.com/filopater23106-cloud/CodeAlpha_Calculator",
        live: "https://filopater23106-cloud.github.io/CodeAlpha_Calculator/",
        completed: true,
    },

    {
        id: 7,
        title: "Stopwatch",
        category: "application",
        image: a1,
        description:
            "Responsive stopwatch featuring laps, pause, resume and reset.",
        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
        ],
        github: "https://github.com/filopater23106-cloud/ProdigyInfoTech-Stopwatch",
        live: "https://prodigy-info-tech-stopwatch.vercel.app/",
        completed: true,
    },

    {
        id: 8,
        title: "Tic Tac Toe",
        category: "application",
        image: a2,
        description:
            "Modern Tic Tac Toe with Player vs Player and Player vs AI modes.",
        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
        ],
        github: "https://github.com/filopater23106-cloud/ProdigyInfoTech-Tic-Tac-Toe",
        live: "https://prodigy-info-tech-tic-tac-toe.vercel.app/",
        completed: true,
    },

    {
        id: 9,
        title: "Todo List",
        category: "application",
        image: a3,
        description:
            "Task management application with filtering and Local Storage.",
        technologies: [
            "React",
            "Tailwind CSS",
        ],
        github: "#",
        live: "#",
        completed: false,
    },

    {
        id: 10,
        title: "Nikola Tesla Portfolio",
        category: "website",
        image: p6,
        description:
            "Modern portfolio website inspired by Nikola Tesla with smooth animations.",
        technologies: [
            "React",
            "Tailwind CSS",
        ],
        github: "#",
        live: "#",
        completed: false,
    },
];

export default projects;