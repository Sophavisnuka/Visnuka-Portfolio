'use client';
import { Calendar, MapPin, GraduationCap, User, Code, School } from 'lucide-react';


export default function AboutPage() {
    const education = [
        {
            school: "CADT (Cambodia Academy of Digital Technology)",
            degree: "Software Engineering",
            duration: "Year 3 (In Progress)",
            description: "Studying Software Engineering with a focus on full-stack development, data structures, algorithms, and software design principles."
        }
    ];

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
            value: "20 years old",
            color: "text-green-500"
        },
        {
            icon: GraduationCap,
            label: "Education",
            value: "Year 3 From CADT (Software Engineering)",
            color: "text-gray-700 dark:text-gray-300"
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

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 sm:pt-24 sm:pb-14 lg:pt-12">
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
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* About me box - left */}
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                        <h2 className='font-bold text-2xl text-gray-900 dark:text-white mb-4'>About me</h2>
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
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

                    {/* Education Section - right */}
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                        <h2 className="font-bold text-2xl text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <School className="w-6 h-6 text-primary" />
                            Education
                        </h2>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                                    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg mt-1">
                                        <GraduationCap className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h3 className="font-semibold text-gray-900 dark:text-white">{edu.school}</h3>
                                            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{edu.duration}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{edu.degree}</p>
                                        <p className="text-sm text-gray-700 dark:text-gray-300">{edu.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
