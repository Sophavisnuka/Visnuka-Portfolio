'use client';
import { Sun, Moon, Download } from "lucide-react";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";

const navLinks = [
    { id: 'home', label: 'Home', href: '/#home' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'experience', label: 'Work Experience', href: '/#experience' },
    { id: 'project', label: 'Projects', href: '/#project' },
    { id: 'posters', label: 'Posters', href: '/#posters' },
    { id: 'achievement', label: 'Achievements', href: '/#achievement' },
];

const socialLinks = [
    { name: "GitHub", icon: SiGithub, href: "https://github.com/Sophavisnuka" },
    { name: "LinkedIn", icon: SiLinkedin, href: "https://www.linkedin.com/in/sophavisnukakhun190306/" },
    { name: "Telegram", icon: SiTelegram, href: "https://t.me/sophavisnuka1936" },
];

export default function Sidebar() {
    const [isMounted, setIsMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (pathname !== '/') return;

        const sections = navLinks
            .map((link) => document.getElementById(link.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [pathname]);

    if (!isMounted) {
        return null;
    }

    const isContactActive = pathname === '/contact';

    const linkClass = (active: boolean) =>
        `block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            active
                ? 'bg-primary text-white dark:bg-white dark:text-black'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900'
        }`;

    return (
        <>
            {/* Mobile top bar */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <Link href="/#home" className="font-bold text-lg text-primary dark:text-white">Sophavisnuka</Link>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-gray-700" />}
                    </button>
                    <button
                        className="flex flex-col justify-center items-center w-8 h-8 space-y-1 text-gray-900 dark:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-[57px] left-0 right-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-xl">
                    <ul className="flex flex-col py-2">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-6 py-3 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="/contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-6 py-3 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* Desktop sticky sidebar */}
            <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-64 xl:w-72 px-6 py-10 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black z-40 overflow-y-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                        <img src="/me/DSC03306.JPG" alt="Khun Sophavisnuka" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">Khun Sophavisnuka</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@sophavisnuka</p>
                </div>

                <nav className="mt-10 flex-1">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link href={link.href} className={linkClass(pathname === '/' && activeSection === link.id)}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/contact" className={linkClass(isContactActive)}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex flex-col items-center gap-4">
                    <a
                        href="/other/Khun-Sophavisnuka-CV.pdf"
                        download
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary dark:text-white dark:border-white text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                    >
                        Resume <Download className="w-4 h-4" />
                    </a>
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-600">© 2025 Sophavisnuka</span>
                </div>
            </aside>
        </>
    );
}
