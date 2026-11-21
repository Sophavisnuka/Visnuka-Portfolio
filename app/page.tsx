import ExperiencePage from "./experience/page";
import ProjectPage from "./project/page";
import AchievementPage from "./achievements/page";
import { Download } from "lucide-react";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiLaravel,
    SiExpress,
    SiPostgresql,
    SiTailwindcss,
    SiC,
    SiCplusplus,
    SiOpenjdk,         // Java
    SiGit,
    SiGithub,
    SiAdobephotoshop,  // Photoshop
    SiAdobeaftereffects, // After Effects
    SiCanva,
    SiFigma,
    SiFlutter,
    SiFacebook,
    SiLinkedin,
    SiInstagram
} from "react-icons/si";
import { FaRocket } from 'react-icons/fa';
import PostersPage from "./posters/page";
import Moon from "@/components/moon";
import AboutSlider from "@/components/aboutSlider";
const technologies = [
    { name: "Flutter", icon: SiFlutter, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "React", icon: SiReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
    { name: "Java", icon: SiOpenjdk, color: "text-red-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-green-500" },
    { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "text-blue-600" },
    { name: "Adobe After Effects", icon: SiAdobeaftereffects, color: "text-purple-600" },
    { name: "Canva", icon: SiCanva, color: "text-cyan-500" },
    { name: "Figma", icon: SiFigma, color: "text-red-500" },
    { name: "C", icon: SiC, color: "text-blue-600" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
    { name: "Git", icon: SiGit, color: "text-orange-600" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-200" },
];

const techByName = Object.fromEntries(technologies.map((tech) => [tech.name, tech]));

const skillAreas: { eyebrow: string; title: string; description: string; skills: string[] }[] = [
    {
        eyebrow: "Build",
        title: "Full-Stack Development",
        description:
            "Building web and mobile apps end to end, from the interface people click on to the server and database behind it.",
        skills: [
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "Laravel",
            "Flutter",
            "Java",
        ],
    },
    {
        eyebrow: "Systems",
        title: "Data & Systems",
        description:
            "Structuring data so it stays fast and reliable, and writing close-to-the-metal code where performance matters.",
        skills: ["PostgreSQL", "C", "C++"],
    },
    {
        eyebrow: "Design",
        title: "Design & Tooling",
        description:
            "Shaping the look and feel before it ships, and keeping the work versioned, documented and reproducible.",
        skills: ["Figma", "Adobe Photoshop", "Adobe After Effects", "Canva", "Git", "GitHub"],
    },
];

const aboutFacts = [
    { label: "Studying", value: "Software Engineering, year 4, CADT" },
    { label: "Based in", value: "Phnom Penh, Cambodia" },
    { label: "Works across", value: "Web, mobile and design" },
    { label: "Runs", value: "Freelance design work" },
];

const socialLinks = [
    { name: "GitHub", icon: SiGithub, href: "https://github.com/Sophavisnuka" },
    { name: "Facebook", icon: SiFacebook, href: "#" },
    { name: "LinkedIn", icon: SiLinkedin, href: "https://www.linkedin.com/in/sophavisnukakhun190306/" },
    { name: "Instagram", icon: SiInstagram, href: "#" },
];

export default function HomePage() {
    return (
        <section className="HeroSection relative flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 overflow-x-clip font-[family-name:var(--font-work)]">
            {/* Hero - moon */}
            <div id="home" className="relative w-full min-h-[480px] aspect-[1436/1024] max-h-screen bg-[#05060d] text-white overflow-hidden">
                <Moon />
                <h1 className="absolute inset-x-0 top-[48%] -translate-y-1/2 text-center text-5xl sm:text-7xl lg:text-7xl font-bold tracking-tight">
                    Sophavisnuka
                </h1>
                <div className="absolute bottom-8 sm:bottom-16 inset-x-8 sm:inset-x-24 lg:inset-x-40 flex justify-between items-end gap-4 text-xs sm:text-base">
                    <div>
                        <p>Junior Software Developer</p>
                        <p>sophavisnukakhun@gmail.com</p>
                    </div>
                    <div className="text-right">
                        <p>Cambodia Academy of Digital Technology</p>
                        <p className="flex items-center justify-end gap-2">
                            Member of
                            <img src="/me/smean-badge.png" alt="SMEAN" className="h-5 sm:h-6" />
                        </p>
                    </div>
                </div>
            </div>

            {/* About - auto-sliding cover images with bio and facts */}
            <AboutSlider>
                <div className="w-full lg:max-w-xl">
                    <div className="space-y-5 text-base sm:text-lg leading-relaxed text-white/90">
                        <p>
                            Hello! I'm Sophavisnuka, a passionate software engineering student in my final year.
                            My journey in technology started with curiosity about how websites and applications work,
                            which led me to dive deep into the world of programming.
                        </p>
                        <p>
                            I specialize in full-stack development with expertise in modern frameworks like React,
                            Next.js, and Node.js. I love creating user-friendly applications that solve real-world
                            problems and constantly learning new technologies to stay current in this fast-evolving field.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                        {aboutFacts.map((fact) => (
                            <div key={fact.label} className="relative">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                                    {fact.label}
                                </p>
                                <p className="mt-2 text-lg font-semibold leading-snug">
                                    {fact.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </AboutSlider>

            {/* work experience page */}
            <div id="experience" className="relative z-10">
                <ExperiencePage />
            </div>

            {/* Resume / contact / socials */}
            <div className="px-10 sm:px-24 lg:px-40 mt-10 flex flex-wrap items-center justify-between gap-5">
                <div className="flex flex-wrap gap-3">
                    <a
                        href="/other/Khun-Sophavisnuka-CV.pdf"
                        download
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white dark:bg-white dark:text-black rounded-lg hover:bg-secondary dark:hover:bg-gray-300 transition-colors duration-300 font-semibold"
                    >
                        Resume <Download className="w-4 h-4" />
                    </a>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white dark:bg-white dark:text-black rounded-lg hover:bg-secondary dark:hover:bg-gray-300 transition-colors duration-300 font-semibold"
                    >
                        Get In Touch
                        <FaRocket className="w-4 h-4" />
                    </a>
                </div>
                <div className="flex gap-3">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="group bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300"
                            >
                                <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Skills - three areas of work */}
            <div id="skills" className="px-10 sm:px-24 lg:px-40 mt-16 mb-20 relative z-10">
                <div className="grid gap-x-10 gap-y-12 lg:grid-cols-3 lg:gap-x-12">
                    {skillAreas.map((area) => (
                        <article key={area.title} className="relative">
                            <p className="text-xs font-normal uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
                                {area.eyebrow}
                            </p>
                            <h3 className="mt-2 font-[family-name:var(--font-work)] text-xl sm:text-2xl font-normal text-gray-900 dark:text-white">
                                {area.title}
                            </h3>
                            <p className="mt-4 max-w-md font-[family-name:var(--font-work)] text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                {area.description}
                            </p>
                            <ul className="mt-6 flex flex-wrap gap-2.5">
                                {area.skills.map((name) => {
                                    const tech = techByName[name];
                                    if (!tech) return null;
                                    const Icon = tech.icon;
                                    return (
                                        <li key={name}>
                                            <span className="inline-flex items-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800/60">
                                                <Icon className={`h-4 w-4 ${tech.color}`} />
                                                {name}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
            {/* project page */}
            <div id="project">
                <ProjectPage />
            </div>
            {/* posters page (freelance) */}
            <div id="posters" className="relative z-10">
                <PostersPage />
            </div>
            {/* volunteer experience page */}
            <div id="achievement" className="relative z-10 mb-16">
                <AchievementPage />
            </div>
        </section>
    );
}
