'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
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
    SiLaravel,
    SiFlutter,
} from 'react-icons/si';

export default function ProjectPage() {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "Smean Mobile App",
            description: "A Mobile App that convert audio to text in Khmer or English",
            image: "/other/smean.png",
            technologies: ["Flutter"],
            category: "Mobile",
            github: "https://github.com/Sophavisnuka/Smean-Mobile-App.git",
            demo: "https://sophavisnukakhun.vercel.app/project",
            featured: false
        },
        {
            title: "Real Estate Agency",
            description: "Platform for viewing all property in Cambodia",
            image: "/other/realestatewebsite.png",
            technologies: ["React.js", "PostgreSQL", "Tailwind"],
            category: "Web Development",
            github: "https://github.com/Sophavisnuka/real-estate-agency.git",
            demo: "https://arch-daily-agency.vercel.app/",
            featured: true
        },
        {
            title: "ACET Conference Management",
            description: "A website for researcher to submit research paper and managing Conferences",
            image: "/other/Acet.png",
            technologies: ["React", "Laravel","Tailwind"],
            category: "Web Development",
            github: "https://github.com/Somawatey/ACET-Conference-Management-System.git",
            featured: false
        },
        {
            title: "CADT Social Link",
            description: "A Website that list all social media of CSA(CADT Student Association).",
            image: "/other/cadt-social-link.png",
            technologies: ["React","Tailwind"],
            category: "Web Development",
            github: "https://github.com/Sophavisnuka/CADT-Social-Link.git",
            demo: "https://cadt-social-media.netlify.app/",
            featured: true
        },
        {
            title: "Automata Calculation",
            description: "A Simple website that let CADT Student in year2 can calculate and generate the image for automata course",
            image: "/other/automata.png",
            technologies: ["React","Tailwind"],
            category: "Web Development",
            github: "https://github.com/Sophavisnuka/QuizDo.git",
            demo: "https://automata-fawn.vercel.app/",
            featured: true
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website showcasing projects, skills, and experience with modern design.",
            image: "/other/portfolio.png",
            technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
            category: "Web Development",
            github: "https://github.com/Sophavisnuka/Visnuka-Portfolio.git",
            demo: "https://sophavisnukakhun.vercel.app/project",
            featured: true
        },
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
            'Laravel': SiLaravel,
            'Flutter': SiFlutter
        };
        return iconMap[tech] || FaCode;
    };

    return (
        <div className="relative bg-white dark:bg-gray-900 pt-20 pb-12 px-6 sm:px-10 lg:px-14 sm:pt-24 lg:pt-16">
            {/* Header */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Projects
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl">
                        A collection of my work, from web applications to mobile apps.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`transition-colors duration-300 ${
                                filter === category
                                    ? 'text-gray-900 dark:text-white font-semibold underline underline-offset-4'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-x-6 gap-y-10">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="group">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-primary/5">
                            {project.featured && (
                                <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2.5 py-1 rounded-full text-[10px] font-bold z-10">
                                    Demo
                                </div>
                            )}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="24" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
                                }}
                            />
                        </div>

                        <div className="mt-3 flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    {project.technologies.join(' · ')}
                                </p>
                            </div>
                            <div className="flex items-center gap-3 shrink-0 pt-0.5">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} source code`}
                                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300"
                                >
                                    <FaGithub className="w-4 h-4" />
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} live demo`}
                                        className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300"
                                    >
                                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="py-16">
                    <FaCode className="w-12 h-12 text-gray-400 mb-4" />
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        No projects found in this category.
                    </p>
                </div>
            )}
        </div>
    );
}
