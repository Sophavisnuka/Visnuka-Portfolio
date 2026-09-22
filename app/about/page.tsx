'use client';
import { Calendar, MapPin, GraduationCap, User, Code } from 'lucide-react';

export default function AboutPage() {
    const education = [
        {
            school: "CADT (Cambodia Academy of Digital Technology)",
            degree: "Software Engineering",
            duration: "Year 4"
        }
    ];

    const personalInfo = [
        { icon: User, label: "Full Name", value: "Khun Sophavisnuka" },
        { icon: Calendar, label: "Age", value: "20 years old" },
        { icon: MapPin, label: "Location", value: "Phnom Penh, Cambodia" },
        { icon: Code, label: "Specialization", value: "Full Stack Development" },
    ];

    return (
        <div className="relative bg-white dark:bg-gray-900 pt-20 pb-12 px-6 sm:px-10 lg:px-14 sm:pt-24 lg:pt-16">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    About
                </h2>
            </div>

            {/* Bio */}
            <div className="max-w-2xl text-base text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
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

            {/* Personal info */}
            <div className="mt-8 flex flex-col gap-3">
                {personalInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                        <div key={index} className="flex items-center gap-3 text-sm">
                            <Icon className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" />
                            <span className="text-gray-500 dark:text-gray-400 w-28 shrink-0">{info.label}</span>
                            <span className="text-gray-900 dark:text-white font-medium">{info.value}</span>
                        </div>
                    );
                })}
            </div>

            {/* Education */}
            <div className="mt-10">
                <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Education
                </h3>
                <div className="flex flex-col gap-2">
                    {education.map((edu, index) => (
                        <div key={index} className="text-sm">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="font-semibold text-gray-900 dark:text-white">{edu.school}</span>
                                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{edu.duration}</span>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">{edu.degree}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
