'use client';

import {FaStar, FaRocket } from 'react-icons/fa';

export default function AchievementPage() {
    const achievements = [
        {
            image: "/other/ngbt.jpg",
            title: "Next-Gen Engagement Program-Batch II",
            description: "Certificate for volunteer as a trainer that teach freshmen student in CADT",
            date: "2021 - Present",
            category: "Academic",
        },
        {
            image: "/other/cfcc.jpg",
            title: "CADT Freshman Coding Championship",
            description: "I have volunteered as a Graphic designer and program coordinate for CFCC in CADT to promote the event and other activities",
            date: "2021 - Present",
            category: "Academic",
        },
        {
            image: "/other/Java-certify.png",
            title: "Java Basic",
            description: "Completed the short course of Java basic",
            date: "2021 - Present",
            category: "Open Source",
        },
        {
            image: "/other/csaSangkran.jpg",
            title: "Sangkran CADT",
            description: "Certificate of appreciation for volunteering in Sangkran CADT",
            date: "2021 - Present",
            category: "Open Source",
        },
    ];

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 sm:pt-24 sm:pb-14 lg:pt-12">
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                    {achievements.map((achievement, index) => {
                        return (
                            <div
                                key={index}
                                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                            >
                                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                                    <img className="w-full h-full object-cover"
                                        src={achievement.image} alt=""
                                    />
                                </div>
                                <div className="mt-3">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2">
                                            {achievement.title}
                                        </h3>
                                    </div>
                                    <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] font-medium">
                                        {achievement.category}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 border border-primary/20">
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