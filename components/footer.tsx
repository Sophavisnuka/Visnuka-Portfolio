'use client';

import { 
    SiGithub,
    SiLinkedin,
    SiGmail,
    SiTelegram
} from "react-icons/si";

export default function Footer() {
    const socialLinks = [
        {
            name: "GitHub",
            icon: SiGithub,
            href: "https://github.com/Sophavisnuka",
            color: "hover:text-gray-900 dark:hover:text-white"
        },
        {
            name: "LinkedIn",
            icon: SiLinkedin,
            href: "https://www.linkedin.com/in/sophavisnukakhun190306/",
            color: "hover:text-blue-600"
        },
        {
            name: "Telegram",
            icon: SiTelegram,
            href: "https://t.me/sophavisnuka1936",
            color: "hover:text-blue-500"
        }
    ];
    return (
        <footer className="bg-white dark:bg-gray-800 shadow-sm m-4 rounded-lg">
            <div className="w-full mx-auto max-w-screen-xl p-4 sm:p-6">
                {/* Mobile Layout - Stack vertically */}
                <div className="flex flex-col gap-4 md:hidden">
                    <span className="text-sm text-gray-500 text-center dark:text-gray-400">
                        © 2025 Sophavisnuka. All Rights Reserved.
                    </span>
                    <div className="flex flex-col items-center gap-3">
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact info:</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-gray-500 dark:text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Side by side */}
                <div className="hidden md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        © 2025 Sophavisnuka. All Rights Reserved.
                    </span>
                    <div className="flex items-center gap-4">
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact info:</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-gray-500 dark:text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}