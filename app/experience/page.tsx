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
        <div className="relative bg-white dark:bg-gray-900 pt-20 pb-12 px-6 sm:px-10 lg:px-14 sm:pt-24 lg:pt-16">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Work Experience
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl">
                    Internships and freelance work that shaped my skills as a developer and designer.
                </p>
            </div>

            <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
                {experience.map((exp, index) => (
                    <div key={index} className="py-6 first:pt-0 flex items-start gap-4">
                        <Briefcase className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-1 shrink-0" />
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
    );
}
