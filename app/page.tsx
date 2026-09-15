'use client';
import { useState } from "react";
import AboutPage from "./about/page";
import ExperiencePage from "./experience/page";
import ProjectPage from "./project/page";
import PostersPreview from "@/components/postersPreview";
import AchievementPage from "./achievements/page";

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
    SiFlutter      
} from "react-icons/si";

export default function HomePage() {
    const [filter, setFilter] = useState('All');

    const galleryPhotos = [
        { src: "/me/DSC03306.JPG", alt: "Khun Sophavisnuka portrait" },
        { src: "/me/dgf.jpg", alt: "Receiving a certificate at a national digital technology ceremony" },
        { src: "/me/IMG_0008.JPG", alt: "With friends" },
        { src: "/me/Next-Gen.png", alt: "With the team at Next-Gen's Day" },
    ];

    // Add category for each tech
    const technologies = [
        // frontend technologies
        { name: "Flutter", icon: SiFlutter, color: "text-blue-500", category: "Frontend" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500", category: "Frontend" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", category: "Frontend" },
        { name: "React", icon: SiReact, color: "text-cyan-500", category: "Frontend" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white", category: "Frontend" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", category: "Frontend" },

        // backend technologies
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600", category: "Backend" },
        { name: "Laravel", icon: SiLaravel, color: "text-red-500", category: "Backend" },
        { name: "Express", icon: SiExpress, color: "text-gray-700 dark:text-gray-300", category: "Backend" },
        { name: "Java", icon: SiOpenjdk, color: "text-red-600", category: "Backend" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-green-500", category: "Backend" },

        // Design tools
        { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "text-blue-600", category: "Design" },
        { name: "Adobe After Effects", icon: SiAdobeaftereffects, color: "text-purple-600", category: "Design" },
        { name: "Canva", icon: SiCanva, color: "text-cyan-500", category: "Design" },
        { name: "Figma", icon: SiFigma, color: "text-red-500", category: "Design" },

        //  Others
        { name: "C", icon: SiC, color: "text-blue-600", category: "Others" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-700", category: "Others" },
        { name: "Git", icon: SiGit, color: "text-orange-600", category: "Others" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-200", category: "Others" },
    ];  
    // filter buttons
    const filterButtons = [
        { name: "All Technologies", id: "All" },
        { name: "Frontend", id: "Frontend" },
        { name: "Backend", id: "Backend" },
        { name: "Design Tools", id: "Design" },
        { name: "Others", id: "Others" }
    ];

    // Filtering logic
    let filteredTechnologies;

    if (filter === "All") {
        filteredTechnologies = technologies;
    } else {
        filteredTechnologies = technologies.filter((tech) => tech.category === filter);
    }


    return (
        <section className="HeroSection relative flex flex-col min-h-screen pt-20 pb-12 sm:pt-24 sm:pb-14 lg:pt-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 overflow-hidden">
            {/* Name & intro */}
            <div id="home" className="flex flex-col items-start justify-start relative z-10 text-left px-4 sm:px-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Khun Sophavisnuka</h1>
                <p className="text-sm sm:text-base md:text-lg font-semibold mt-2 text-gray-700 dark:text-gray-300">4th Year Software Engineering from CADT interested in both web and app development </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mt-4 px-2">
                    I'm a fullstack developer passionate about building modern, user-friendly applications. This portfolio showcases my skills, projects, and the technologies I love working with.
                </p>
            </div>

            {/* Photo gallery - full width */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6 relative z-10">
                {galleryPhotos.map((photo, index) => (
                    <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>

            {/* Tech Stack Section - full width */}
            <div id="techStack" className="techStack mt-16 sm:mt-20 px-4 sm:px-6 relative z-10 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Technologies & Skills</h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">Here are some of the technologies and tools I work with:</p>
                {/* filter button */}
                <div className="mb-10 flex justify-center flex-wrap gap-5">
                    {filterButtons.map((btn) => {
                        return (
                            <button 
                                onClick={() => setFilter(btn.id)}
                                key={btn.id} 
                                className={`bg-primary dark:bg-gray-700 dark:text-primary px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-secondary ${
                                    filter === btn.id
                                        ? 'bg-primary text-white shadow-lg' // Active state
                                        : 'bg-transparent text-primary border border-primary hover:text-white'
                                }`}
                            >
                                {btn.name}
                            </button>
                        )
                    })}
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {filteredTechnologies.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <div key={index}
                                className="flex flex-col items-center sm:p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 w-24 sm:w-28 md:w-32"    
                            >
                                <IconComponent className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${tech.color}`} />
                                <span className="mt-2 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 text-center">{tech.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/* About me page */}
            <div id="about" className="getInTouch mt-10 mb-20 text-center relative z-10">
                <AboutPage />
            </div>
            {/* work experience page */}
            <div id="experience" className="getInTouch mt-10 mb-20 text-center relative z-10">
                <ExperiencePage />
            </div>
            {/* project page */}
            <div id="project" className="getInTouch mt-10 mb-20 text-center relative z-10">
                <ProjectPage />
            </div>
            {/* posters page */}
            <div id="posters" className="getInTouch mt-10 mb-20 text-center relative z-10">
                <PostersPreview />
            </div>
            {/* achievement page */}
            <div id="achievement" className="getInTouch mt-10 mb-20 text-center relative z-10">
                <AchievementPage />
            </div>
        </section>
    );
}