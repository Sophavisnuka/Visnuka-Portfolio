'use client';

import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { assetUrl, useCollection } from '@/lib/api';

interface Project {
    title: string;
    year: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo?: string;
}

// Fallback shown only when the Go API is unreachable
const staticTimeline: { year: string; projects: Project[] }[] = [
    {
        title: "Real Estate Agency",
        year: "Year 2",
        description: "Platform for viewing all property in Cambodia",
        image: "/other/realestatewebsite.png",
        technologies: ["React.js", "PostgreSQL", "Tailwind"],
        github: "https://github.com/Sophavisnuka/real-estate-agency.git",
        demo: "https://arch-daily-agency.vercel.app/",
    },
    {
        title: "Automata Calculation",
        year: "Year 2",
        description: "A Simple website that let CADT Student in year2 can calculate and generate the image for automata course",
        image: "/other/automata.png",
        technologies: ["React", "Tailwind"],
        github: "https://github.com/Sophavisnuka/QuizDo.git",
        demo: "https://automata-fawn.vercel.app/",
    },
    {
        title: "CADT Social Link",
        year: "Year 2",
        description: "A Website that list all social media of CSA(CADT Student Association).",
        image: "/other/cadt-social-link.png",
        technologies: ["React", "Tailwind"],
        github: "https://github.com/Sophavisnuka/CADT-Social-Link.git",
        demo: "https://cadt-social-media.netlify.app/",
    },
    {
        title: "ACET Conference Management",
        year: "Year 2",
        description: "A website for researcher to submit research paper and managing Conferences",
        image: "/other/Acet.png",
        technologies: ["React", "Laravel", "Tailwind"],
        github: "https://github.com/Somawatey/ACET-Conference-Management-System.git",
    },
    {
        title: "Smean Mobile App",
        year: "Year 3",
        description: "A Mobile App that convert audio to text in Khmer or English",
        image: "/other/smean.png",
        technologies: ["Flutter"],
        github: "https://github.com/Sophavisnuka/Smean-Mobile-App.git",
        demo: "https://sophavisnukakhun.vercel.app/project",
    },
];

const FALLBACK =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="24" fill="%239ca3af"%3EProject Image%3C/text%3E%3C/svg%3E';

export default function ProjectPage() {
    const flat = useCollection<Project & { year: string }>(
        'projects',
        staticTimeline.flatMap((g) => g.projects.map((p) => ({ ...p, year: g.year }))),
    );
    // group by year, keeping the order from the database
    const timeline: { year: string; projects: Project[] }[] = [];
    for (const p of flat) {
        let g = timeline.find((t) => t.year === p.year);
        if (!g) timeline.push((g = { year: p.year, projects: [] }));
        g.projects.push(p);
    }

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

    // Map scroll position inside the tall section to the active project
    useEffect(() => {
        const onScroll = () => {
            const el = trackRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const scrollable = rect.height - window.innerHeight;
            if (scrollable <= 0) return;
            const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.9999);
            setActive(Math.floor(progress * count));
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [count]);

    // Jump the page to a given project (used by the progress dots)
    const goTo = (i: number) => {
        const el = trackRef.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const scrollable = el.offsetHeight - window.innerHeight;
        window.scrollTo({ top: top + ((i + 0.5) / count) * scrollable, behavior: 'smooth' });
    };

    const current = projects[active];

                                {/* text - stays in view while the image scrolls */}
                                <div className="md:col-span-2 md:sticky md:top-28">
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h4>
                                    <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                        {project.description}
                                    </p>
                                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                        {(project.technologies ?? []).join(' · ')}
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

                        {/* progress dots */}
                        <div className="mt-6 flex gap-2">
                            {projects.map((p, i) => (
                                <button
                                    key={p.title}
                                    onClick={() => goTo(i)}
                                    aria-label={`Show ${p.title}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        i === active
                                            ? 'w-7 bg-gray-900 dark:bg-white'
                                            : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-500'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: images slide vertically as you scroll */}
                    <div className="aspect-[1919/909] overflow-hidden rounded-lg bg-primary/5 md:col-span-3">
                        <div
                            className="h-full transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateY(-${active * 100}%)` }}
                        >
                            {projects.map((p) => (
                                <div key={p.title} className="h-full w-full">
                                    <img
                                        src={assetUrl(project.image)}
                                        alt={project.title}
                                        className="w-full h-full object-cover block"
                                        onError={(e) => {
                                            e.currentTarget.src = FALLBACK;
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
