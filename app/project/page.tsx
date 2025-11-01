'use client';

import { useState } from 'react';
import GradientBackground from "@/components/gradientBackground";
import { FaGithub, FaExternalLinkAlt, FaCode, FaFilter } from 'react-icons/fa';
import { 
    SiReact, 
    SiNextdotjs, 
    SiNodedotjs, 
    SiTailwindcss,
    SiTypescript,
    SiJavascript,
    SiPostgresql,
    SiMongodb,
    SiExpress,
    SiLaravel
} from 'react-icons/si';

export default function ProjectPage() {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "SMEAN - Khmer NLP Platform",
            description: "An AI-powered platform for Khmer language processing, including text analysis, translation, and natural language understanding.",
            image: "/projects/smean.jpg", // Add your project images
            technologies: ["Next.js", "TypeScript", "Python", "TensorFlow"],
            category: "AI/ML",
            github: "https://github.com/yourusername/smean",
            demo: "https://smean.example.com",
            featured: true
        },
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
            image: "/projects/ecommerce.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            category: "Web Development",
            github: "https://github.com/yourusername/ecommerce",
            demo: "https://demo.example.com",
            featured: true
        },
        {
            title: "Task Management App",
            description: "Collaborative task management tool with real-time updates, team collaboration, and project tracking.",
            image: "/projects/taskapp.jpg",
            technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
            category: "Web Development",
            github: "https://github.com/yourusername/taskapp",
            demo: "https://taskapp.example.com",
            featured: false
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application with forecasts, interactive maps, and location-based alerts.",
            image: "/projects/weather.jpg",
            technologies: ["React", "API", "Chart.js", "Tailwind"],
            category: "Web Development",
            github: "https://github.com/yourusername/weather",
            demo: "https://weather.example.com",
            featured: false
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website showcasing projects, skills, and experience with modern design.",
            image: "/projects/portfolio.jpg",
            technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
            category: "Web Development",
            github: "https://github.com/yourusername/portfolio",
            demo: "https://portfolio.example.com",
            featured: false
        },
        {
            title: "Chat Application",
            description: "Real-time chat application with group messaging, file sharing, and emoji support.",
            image: "/projects/chat.jpg",
            technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
            category: "Web Development",
            github: "https://github.com/yourusername/chat",
            demo: "https://chat.example.com",
            featured: false
        }
    ];

    const categories = ['All', 'Web Development', 'Mobile'];
    
    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(project => project.category === filter);

    const getTechIcon = (tech: string) => {
        const iconMap: { [key: string]: any } = {
            'React': SiReact,
            'Next.js': SiNextdotjs,
            'Node.js': SiNodedotjs,
            'Tailwind': SiTailwindcss,
            'TypeScript': SiTypescript,
            'JavaScript': SiJavascript,
            'PostgreSQL': SiPostgresql,
            'MongoDB': SiMongodb,
            'Express': SiExpress,
            'Laravel': SiLaravel
        };
        return iconMap[tech] || FaCode;
    };

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 sm:pt-24 sm:pb-14">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <GradientBackground />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        My Projects
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A collection of my work, from web applications to AI projects. Each project represents a unique challenge and learning experience.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                                filter === category
                                    ? 'bg-primary text-white shadow-lg transform scale-105'
                                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 border border-gray-200 dark:border-gray-700'
                            }`}
                        >
                            <FaFilter className="w-3 h-3" />
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                                {project.featured && (
                                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                                        Featured
                                    </div>
                                )}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="24" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => {
                                        const Icon = getTechIcon(tech);
                                        return (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium flex items-center gap-1"
                                            >
                                                <Icon className="w-3 h-3" />
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                                    >
                                        <FaGithub className="w-4 h-4" />
                                        Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
                                    >
                                        <FaExternalLinkAlt className="w-4 h-4" />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <FaCode className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}