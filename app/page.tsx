'use client';
import { Download } from "lucide-react";
import { useState } from "react";
import GradientBackground from "@/components/gradientBackground";
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
    SiFigma       
} from "react-icons/si";

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const technologies = [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "React", icon: SiReact, color: "text-cyan-500" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
        { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
        { name: "Express", icon: SiExpress, color: "text-gray-700 dark:text-gray-300" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-green-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "C", icon: SiC, color: "text-blue-600" }, // Add this
        { name: "C++", icon: SiCplusplus, color: "text-blue-700" }, // Add this
        { name: "Java", icon: SiOpenjdk, color: "text-red-600" }, // Add this
        { name: "Git", icon: SiGit, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-800 dark:text-gray-200" },
        { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "text-gray-800 dark:text-gray-200" },
        { name: "Adobe After Effects", icon: SiAdobeaftereffects, color: "text-gray-800 dark:text-gray-200" },
        { name: "Canva", icon: SiCanva, color: "text-gray-800 dark:text-gray-200" },
        { name: "Figma", icon: SiFigma, color: "text-gray-800 dark:text-gray-200" }
    ];

    return (
        <section className="HeroSection relative flex flex-col justify-center items-center text-center min-h-screen pt-20 px-20 pb-12 px-4 sm:pt-24 sm:pb-14 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 overflow-hidden">
            <GradientBackground />
            {/* Profile Image with enhanced styling */}
            <div className="relative z-10 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div 
                    className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-gray-200 shadow-2xl bg-cover bg-center bg-no-repeat hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer backdrop-blur-sm" 
                    style={{ backgroundImage: 'url(/profile.jpg)' }}
                    onClick={() => setIsModalOpen(true)}>
                </div>
            </div>
            <div className="HeroContent max-w-4xl">
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Khun Sophavisnuka</h1>
                    <p className="text-sm sm:text-base md:text-lg font-semibold mt-2 text-gray-700 dark:text-gray-300">Software Engineering</p>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mt-4 px-2">
                    I’m a fullstack developer passionate about building modern, user-friendly
                    applications. This portfolio showcases my skills, projects, and the
                    technologies I love working with.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <a href="/projects" className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-primary hover:bg-secondary text-white text-sm sm:text-base font-medium shadow dark:shadow-gray-800 transition-all duration-300">
                        Contact Me
                    </a>
                    <a href="/contact" className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-primary text-primary dark:text-primary hover:border-primary hover:bg-secondary hover:text-white text-sm sm:text-base font-medium transition-all duration-300">
                        <div className="flex items-center gap-2 justify-center">
                            My Resume
                            <Download className="w-5 h-5" />
                        </div>
                    </a>
                </div>
                
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black/70 dark:bg-black/80 flex justify-center items-center z-50"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div className="relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-4 p-4 sm:p-6 md:p-8 lg:p-45">
                            <div className="relative">
                                <img src="/profile.jpg" alt="Full profile" 
                                    className="max-w-full max-h-full rounded-lg shadow-2xl dark:shadow-gray-900"
                                />
                                <button 
                                    className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 text-white bg-black/80 hover:bg-black/90 dark:bg-gray-800/80 dark:hover:bg-gray-700/90 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 ease-in-out cursor-pointer text-xl sm:text-2xl font-bold z-10 shadow-lg" 
                                    onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="techStack mt-30">
                <h1 className="text-[50px] font-bold text-gray-900 dark:text-white">Technologies & Skills</h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Here are some of the technologies and tools I work with:</p>
                <div className="mt-8 grid grid-cols-6 gap-6">
                    {technologies.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <div key={index}
                                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"    
                            >
                                <IconComponent className={`w-20 h-20 ${tech.color}`} />
                                <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">{tech.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>  
    );
}
