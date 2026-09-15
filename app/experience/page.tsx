'use client';
import { Briefcase } from 'lucide-react';

export default function ExperiencePage() {
    const experience = [
        {
            role: "Backend Developer Intern",
            place: "Maxx Creation Technology",
            duration: "Apr 20 - Jul 20",
            description: "Worked as a backend developer intern, building and maintaining server-side features, working with databases, and collaborating with a development team on real-world projects."
        },
        {
            role: "Fullstack Developer Intern",
            place: "Smean",
            duration: "Sep - Dec",
            description: "Worked as a fullstack intern on the Smean mobile app, contributing to both frontend and backend features."
        },
        {
            role: "Graphic Design & Motion Graphic",
            place: "Freelance",
            duration: "Ongoing",
            description: "Freelance work creating poster designs, social media graphics, and motion graphic videos for clients and events."
        }
    ];

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 sm:pt-24 sm:pb-14 lg:pt-12">
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Work Experience
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Internships and freelance work that shaped my skills as a developer and designer.
                    </p>
                </div>

                {/* Experience Section */}
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg mt-1">
                                    <Briefcase className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                                        <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.duration}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{exp.place}</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
