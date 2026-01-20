'use client';

import GradientBackground from "@/components/gradientBackground";
import {FaStar, FaRocket } from 'react-icons/fa';

export default function AchievementPage() {
    const achievements = [
        {
            image: "/ngbt.jpg",
            title: "Next-Gen Engagement Program-Batch II",
            description: "Certificate for volunteer as a trainer that teach freshmen student in CADT",
            date: "2021 - Present",
            category: "Academic",
            color: "from-yellow-400 to-yellow-600"
        },
        {
            image: "/cfcc.jpg",
            title: "CADT Freshman Coding Championship",
            description: "I have volunteered as a Graphic designer and program coordinate for CFCC in CADT to promote the event and other activities",
            date: "2021 - Present",
            category: "Academic",
            color: "from-indigo-400 to-indigo-600"
        },
        {
            image: "/Java-certify.png",
            title: "Java Basic",
            description: "Completed the short course of Java basic",
            date: "2021 - Present",
            category: "Open Source",
            color: "from-indigo-400 to-indigo-600"
        },
        {
            image: "/csaSangkran.jpg",
            title: "Sangkran CADT",
            description: "Certificate of appreciation for volunteering in Sangkran CADT",
            date: "2021 - Present",
            category: "Open Source",
            color: "from-indigo-400 to-indigo-600"
        },
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
                        Achievements & Recognition
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A showcase of my academic achievements, certifications, and contributions to the tech community.
                    </p>
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => {
                        return (
                            <div
                                key={index}
                                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                            >
                                <div className="">
                                    <img className="w-full h-full object-cover"
                                        src={achievement.image} alt=""
                                    />
                                </div>
                                <div className="mt-5 items-start gap-4">
                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {achievement.title}
                                            </h3>
                                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium whitespace-nowrap ml-2">
                                                {achievement.category}
                                            </span>
                                        </div>
                                        <p className="text-start text-gray-600 dark:text-gray-400 text-sm mb-3">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        I am open and looking for internship opportunity for both web and mobile development
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Let's create something amazing together!
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Get In Touch
                        <FaRocket className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}