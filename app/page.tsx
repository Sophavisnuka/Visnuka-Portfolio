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
    const [filter, setFilter] = useState('All');

    // Add category for each tech
    const technologies = [
        // frontend technologies
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
        <section className="HeroSection relative flex flex-col justify-center items-center text-center min-h-screen pt-20 pb-12 px-4 sm:pt-24 sm:pb-14 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 overflow-hidden">
            {/* Background - moved to z-0 */}
            <div className="absolute inset-0 z-0">
                <GradientBackground />
            </div>
            {/* All content now has z-10 or higher */}
            <div className="group relative z-10 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-75 animate-pulse"></div>
                <div 
                    className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-gray-200 shadow-2xl bg-cover bg-center bg-no-repeat hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer backdrop-blur-sm" 
                    style={{ backgroundImage: 'url(/Khun-Sophavisnuka.png)' }}
                    onClick={() => setIsModalOpen(true)}>
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-700 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-20">
                    View full profile
                    {/* Tooltip Arrow */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-700 rotate-45"></div>
                </div>
            </div>
            {/* Hero Content */}
            <div className="HeroContent max-w-4xl relative z-10">
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">Khun Sophavisnuka</h1>
                    <p className="text-sm sm:text-base md:text-lg font-semibold mt-2 text-gray-700 dark:text-gray-300">Software Engineering</p>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl mt-4 px-2">
                    I'm a fullstack developer passionate about building modern, user-friendly
                    applications. This portfolio showcases my skills, projects, and the
                    technologies I love working with.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <a href="/contact" className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-primary text-primary dark:text-primary hover:border-primary hover:bg-secondary hover:text-white text-sm sm:text-base font-medium transition-all duration-300">
                        <div className="flex items-center gap-2 justify-center">
                            My Resume
                            <Download className="w-5 h-5" />
                        </div>
                    </a>
                </div>
            </div>
            {/* Tech Stack Section */}
            <div className="techStack mt-20 max-w-6xl px-4 relative z-10">
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
            {/* Get in touch */}
            <div className="getInTouch mt-30 mb-20 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Connect with me</h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto px-4">Let's get in touch and build an innovative project together!</p>
                <button className="bg-primary dark:bg-gray-700 cursor-pointer dark:text-primary px-12 py-3 rounded-lg border border-primary text-white hover:bg-secondary hover:border-secondary hover:text-white text-sm sm:text-base font-medium transition-all duration-300">
                    <a href="/contact">Hire me</a>
                </button>
            </div>
            
            {/* Modal - Fixed z-index and moved outside main content */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/70 dark:bg-black/80 flex justify-center items-center z-[9999]"
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
        </section>  
    );
}