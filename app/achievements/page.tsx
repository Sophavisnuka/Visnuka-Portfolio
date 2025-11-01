'use client';

import GradientBackground from "@/components/gradientBackground";
import { FaTrophy, FaMedal, FaCertificate, FaStar, FaAward, FaCode, FaUsers, FaRocket } from 'react-icons/fa';

export default function AchievementPage() {
    const achievements = [
        {
            icon: FaTrophy,
            title: "Dean's List",
            description: "Recognized for academic excellence with GPA above 3.5 throughout university career.",
            date: "2022 - 2024",
            category: "Academic",
            color: "from-yellow-400 to-yellow-600"
        },
        {
            icon: FaStar,
            title: "Open Source Contributor",
            description: "Active contributor to major open-source projects with 500+ GitHub contributions.",
            date: "2021 - Present",
            category: "Open Source",
            color: "from-indigo-400 to-indigo-600"
        },
        // {
        //     icon: FaMedal,
        //     title: "Best Student Project Award",
        //     description: "Awarded for outstanding capstone project in Software Engineering program.",
        //     date: "2024",
        //     category: "Academic",
        //     color: "from-pink-400 to-pink-600"
        // },
        // {
        //     icon: FaAward,
        //     title: "Tech Innovation Award",
        //     description: "Recognized for innovative solutions contributing to Cambodia's tech ecosystem.",
        //     date: "2024",
        //     category: "Recognition",
        //     color: "from-cyan-400 to-cyan-600"
        // }
    ];

    const stats = [
        { number: "5+", label: "Projects Completed", icon: FaCode },
        { number: "491", label: "GitHub Contributions", icon: FaStar },
        { number: "2", label: "Certifications", icon: FaCertificate },
        { number: "0", label: "Awards Won", icon: FaTrophy }
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

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300"
                            >
                                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

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
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                            {achievement.description}
                                        </p>
                                        <div className="flex items-center text-gray-500 dark:text-gray-500 text-sm">
                                            <FaStar className="w-3 h-3 mr-2" />
                                            {achievement.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Want to collaborate?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        I'm always open to new opportunities and exciting projects. Let's create something amazing together!
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