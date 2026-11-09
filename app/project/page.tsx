'use client';

import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
    title: string;
    year: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    demo?: string;
}

// Display order: Year 2 -> Year 3
const projects: Project[] = [
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
    const trackRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const count = projects.length;

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

    return (
        <div ref={trackRef} className="relative bg-white dark:bg-gray-900" style={{ height: `${count * 100}vh` }}>
            <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-10 pb-8 pt-24 sm:px-24 lg:px-40">
                <div className="mb-6 sm:mb-8">
                    <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">Projects</h2>
                    <p className="max-w-xl text-base text-gray-600 dark:text-gray-400">
                        A collection of my work, from web applications to mobile apps.
                    </p>
                </div>

                <div className="grid min-h-0 items-center gap-6 md:grid-cols-5 md:gap-10">
                    {/* Left: text changes with the active project */}
                    <div className="relative md:col-span-2">
                        <div key={active} className="project-text-in">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                                {current.year} · {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                            </p>
                            <h4 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                                {current.title}
                            </h4>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                                {current.description}
                            </p>
                            <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                {current.technologies.join(' · ')}
                            </p>
                            <div className="mt-4 flex items-center gap-4">
                                <a
                                    href={current.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${current.title} source code`}
                                    className="text-gray-500 transition-colors duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                                >
                                    <FaGithub className="h-5 w-5" />
                                </a>
                                {current.demo && (
                                    <a
                                        href={current.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${current.title} live demo`}
                                        className="text-gray-500 transition-colors duration-300 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                                    >
                                        <FaExternalLinkAlt className="h-4 w-4" />
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
                                        src={p.image}
                                        alt={p.title}
                                        className="block h-full w-full object-cover"
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
