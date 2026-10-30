'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo?: string;
}

// Timeline: Year 2 -> Year 3, in display order
const timeline: { year: string; projects: Project[] }[] = [
    {
        year: "Year 2",
        projects: [
            {
                title: "Real Estate Agency",
                description: "Platform for viewing all property in Cambodia",
                image: "/other/realestatewebsite.png",
                technologies: ["React.js", "PostgreSQL", "Tailwind"],
                github: "https://github.com/Sophavisnuka/real-estate-agency.git",
                demo: "https://arch-daily-agency.vercel.app/",
            },
            {
                title: "Automata Calculation",
                description: "A Simple website that let CADT Student in year2 can calculate and generate the image for automata course",
                image: "/other/automata.png",
                technologies: ["React", "Tailwind"],
                github: "https://github.com/Sophavisnuka/QuizDo.git",
                demo: "https://automata-fawn.vercel.app/",
            },
            {
                title: "CADT Social Link",
                description: "A Website that list all social media of CSA(CADT Student Association).",
                image: "/other/cadt-social-link.png",
                technologies: ["React", "Tailwind"],
                github: "https://github.com/Sophavisnuka/CADT-Social-Link.git",
                demo: "https://cadt-social-media.netlify.app/",
            },
            {
                title: "ACET Conference Management",
                description: "A website for researcher to submit research paper and managing Conferences",
                image: "/other/Acet.png",
                technologies: ["React", "Laravel", "Tailwind"],
                github: "https://github.com/Somawatey/ACET-Conference-Management-System.git",
            },
        ],
    },
    {
        year: "Year 3",
        projects: [
            {
                title: "Smean Mobile App",
                description: "A Mobile App that convert audio to text in Khmer or English",
                image: "/other/smean.png",
                technologies: ["Flutter"],
                github: "https://github.com/Sophavisnuka/Smean-Mobile-App.git",
                demo: "https://sophavisnukakhun.vercel.app/project",
            },
        ],
    },
];

export default function ProjectPage() {
    return (
        <div className="relative bg-white dark:bg-gray-900 pt-20 pb-12 px-10 sm:px-24 lg:px-40 sm:pt-24 lg:pt-16">
            {/* Header */}
            <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Projects
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl">
                    A collection of my work, from web applications to mobile apps.
                </p>
            </div>

            {/* Timeline */}
            <div>
                {timeline.map((group) => (
                    <div key={group.year} className="relative pl-8 sm:pl-12">
                        {/* vertical line */}
                        <div className="absolute left-[7.5px] top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

                        {/* year marker */}
                        <div className="relative mb-8">
                            <span className="absolute -left-8 sm:-left-12 top-1.5 w-4 h-4 rounded-full bg-gray-900 dark:bg-white ring-4 ring-white dark:ring-gray-900" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.year}</h3>
                        </div>

                        {group.projects.map((project) => (
                            <article key={project.title} className="relative grid md:grid-cols-5 items-start gap-6 md:gap-10 pb-16">
                                <span className="absolute -left-8 sm:-left-12 top-2 ml-[2px] w-3 h-3 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-white" />

                                {/* text - stays in view while the image scrolls */}
                                <div className="md:col-span-2 md:sticky md:top-28">
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h4>
                                    <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                        {project.description}
                                    </p>
                                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                        {project.technologies.join(' · ')}
                                    </p>
                                    <div className="mt-4 flex items-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} source code`}
                                            className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300"
                                        >
                                            <FaGithub className="w-5 h-5" />
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} live demo`}
                                                className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300"
                                            >
                                                <FaExternalLinkAlt className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* full project image */}
                                <div className="md:col-span-3 aspect-[1919/909] rounded-lg overflow-hidden bg-primary/5">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover block"
                                        onError={(e) => {
                                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="24" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                            </article>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
