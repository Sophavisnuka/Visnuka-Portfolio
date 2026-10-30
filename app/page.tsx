import AboutPage from "./about/page";
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

const socialLinks = [
    { name: "GitHub", icon: SiGithub, href: "https://github.com/Sophavisnuka" },
    { name: "Facebook", icon: SiFacebook, href: "#" },
    { name: "LinkedIn", icon: SiLinkedin, href: "https://www.linkedin.com/in/sophavisnukakhun190306/" },
    { name: "Instagram", icon: SiInstagram, href: "#" },
];

export default function HomePage() {
    return (
        <section className="HeroSection relative flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 overflow-hidden font-[family-name:var(--font-work)]">
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

            {/* Cover - intro */}
            <div className="relative w-full aspect-[1436/673] min-h-[320px] overflow-hidden bg-black">
                <img src="/me/cover.png" alt="Khun Sophavisnuka" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <p className="absolute right-6 sm:right-[6%] top-[55%] sm:top-1/2 max-w-[17rem] sm:max-w-md lg:max-w-lg text-center text-white text-xs sm:text-base lg:text-lg font-medium leading-snug drop-shadow-lg">
                    A software engineering student dedicated to building thoughtful, user-friendly applications and telling stories through design. I am open and looking for job opportunities in both web and mobile development
                </p>
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

            {/* Tech Stack Section - icon-only infinite scroll */}
            <div className="px-10 sm:px-24 lg:px-40">
                <div id="techStack" className="bg-gray-100 dark:bg-gray-800 rounded-lg mt-12 py-8 relative z-10 overflow-hidden">
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {[...technologies, ...technologies].map((tech, index) => {
                            const IconComponent = tech.icon;
                            return (
                                <div
                                    key={index}
                                    title={tech.name}
                                    className="flex items-center justify-center mx-4 sm:mx-6 shrink-0"
                                >
                                    <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 ${tech.color}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* project page */}
            <div id="project" className="bg-red-100">
                <ProjectPage />
            </div>
            {/* posters page (freelance) */}
            <div id="posters" className="relative z-10">
                <PostersPage />
            </div>
            {/* About me page */}
            <div id="about" className="relative z-10">
                <AboutPage />
            </div>
            {/* work experience page */}
            <div id="experience" className="relative z-10">
                <ExperiencePage />
            </div>
            {/* achievement page */}
            <div id="achievement" className="relative z-10 mb-16">
                <AchievementPage />
            </div>
        </section>
    );
}
