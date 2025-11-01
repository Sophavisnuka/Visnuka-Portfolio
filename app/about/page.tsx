'use client';
import { useState } from 'react';
import GradientBackground from "@/components/gradientBackground";
import { Calendar, MapPin, GraduationCap, User, Code, Heart } from 'lucide-react';

export default function AboutPage() {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const personalInfo = [
        {
            icon: User,
            label: "Full Name",
            value: "Khun Sophavisnuka",
            color: "text-blue-500"
        },
        {
            icon: Calendar,
            label: "Age",
            value: "19 years old",
            color: "text-green-500"
        },
        {
            icon: GraduationCap,
            label: "Education",
            value: "Year 3 From CADT (Software Engineering)",
            color: "text-purple-500"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Phnom Penh, Cambodia",
            color: "text-red-500"
        },
        {
            icon: Code,
            label: "Specialization",
            value: "Full Stack Development",
            color: "text-cyan-500"
        }
    ];

    const achievements = [
        "🎓 Dean's List Student",
        "💻 5+ Personal Projects",
        "🏆 Hackathon Participant",
        "📱 Mobile & Web Development"
    ];

    const interests = [
        "Web Development", "Mobile Apps", "UI/UX Design", 
        "Machine Learning", "Open Source", "Tech Innovation"
    ];

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
                        About Me
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Get to know more about who I am, my background, and what drives my passion for technology.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Image */}
                    <div className='grid grid-cols-2 grid-rows-1 gap-2 '>
                        <div className="row-span-2">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div 
                                    className="relative cursor-pointer transition-all duration-500"
                                    onClick={() => setIsImageModalOpen(true)}
                                >
                                    <img 
                                        src="/Khun-Sophavisnuka.png" 
                                        alt="Khun Sophavisnuka" 
                                        className="w-full max-w-sm rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg backdrop-blur-sm transition-opacity duration-300">
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Click to expand</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div 
                                    className="relative cursor-pointer transition-all duration-500"
                                    onClick={() => setIsImageModalOpen(true)}
                                >
                                    <img 
                                        src="/AlsoMe.JPG" 
                                        alt="Khun Sophavisnuka" 
                                        className="w-full h-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg backdrop-blur-sm transition-opacity duration-300">
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Click to expand</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div 
                                    className="relative cursor-pointer transition-all duration-500"
                                    onClick={() => setIsImageModalOpen(true)}
                                >
                                    <img 
                                        src="/GeminiGenerate.png" 
                                        alt="Khun Sophavisnuka" 
                                        className="w-full max-w-sm rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/50 rounded-2xl transition-all duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-lg backdrop-blur-sm transition-opacity duration-300">
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">Click to expand</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Information */}
                    <div className="space-y-8">
                        {/* Personal Information */}
                        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:py-4 sm:px-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                            <h1 className='font-bold text-[30px]'>About me</h1>
                            <div className="prose prose-gray dark:prose-invert max-w-none">
                                <p className="text-gray-700 dark:text-gray-300">
                                    Hello! I'm Sophavisnuka, a passionate software engineering student in my final year. 
                                    My journey in technology started with curiosity about how websites and applications work, 
                                    which led me to dive deep into the world of programming.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    I specialize in full-stack development with expertise in modern frameworks like React, 
                                    Next.js, and Node.js. I love creating user-friendly applications that solve real-world 
                                    problems and constantly learning new technologies to stay current in this fast-evolving field.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {personalInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                                            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                                                <Icon className={`w-5 h-5 ${info.color}`} />
                                            </div>
                                            <div className="flex-1">
                                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{info.label}</dt>
                                                <dd className="text-sm font-semibold text-gray-900 dark:text-white">{info.value}</dd>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {isImageModalOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] p-4"
                    onClick={() => setIsImageModalOpen(false)}
                >
                    <div className="relative max-w-4xl mx-auto">
                        <img 
                            src="/Me.JPG" 
                            alt="Khun Sophavisnuka - Full size" 
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                        />
                        <button 
                            className="absolute -top-4 -right-4 text-white bg-black/80 hover:bg-black/90 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 text-2xl font-bold shadow-lg" 
                            onClick={(e) => { e.stopPropagation(); setIsImageModalOpen(false); }}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}