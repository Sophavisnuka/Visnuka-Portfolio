'use client';
import { Sun, Moon, Download } from "lucide-react";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiTelegram } from "react-icons/si";

const navLinks = [
    { id: 'home', label: 'Home', href: '/#home' },
    { id: 'project', label: 'Projects', href: '/#project' },
    { id: 'posters', label: 'Posters', href: '/#posters' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'experience', label: 'Work Experience', href: '/#experience' },
    { id: 'achievement', label: 'Achievements', href: '/#achievement' },
];

const socialLinks = [
    { name: "GitHub", icon: SiGithub, href: "https://github.com/Sophavisnuka" },
    { name: "LinkedIn", icon: SiLinkedin, href: "https://www.linkedin.com/in/sophavisnukakhun190306/" },
    { name: "Telegram", icon: SiTelegram, href: "https://t.me/sophavisnuka1936" },
];

const galleryImages = [
    "/me/DSC03306.JPG",
    "/me/IMG_0008.JPG",
    "/me/dgf.jpg",
    "/me/Next-Gen.png",
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

        const offset = 150; // px from top of viewport that counts as "reached"

        const handleScroll = () => {
            let current = sections[0]?.id ?? 'home';

            for (const section of sections) {
                if (section.getBoundingClientRect().top - offset <= 0) {
                    current = section.id;
                }
            }

            setActiveSection(current);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    if (!isMounted) {
        return null;
    }

    const isContactActive = pathname === '/contact';

    const linkClass = (active: boolean) =>
        `block text-sm transition-colors duration-300 ${
            active
                ? 'text-gray-900 dark:text-white font-semibold'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
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

            {/* Desktop sticky sidebar - 35% width, text-led like the Sera reference */}
            <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-[35%] border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-black z-40 overflow-y-auto">
                <div className="flex flex-col h-full px-8 xl:px-12 py-5">
                    {/* Nav - plain text list, no pill backgrounds */}
                    <nav>
                        <ul className="flex justify-between gap-5">
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

                    {/* Photo grid */}
                    {/* <div className="mt-8 grid grid-cols-2 gap-2">
                        {galleryImages.map((src) => (
                            <div key={src} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
                                <img src={src} alt="Khun Sophavisnuka" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div> */}

                    <div className="flex-1" />

                    {/* Resume + footer */}
                    <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
                        <a
                            href="/other/Khun-Sophavisnuka-CV.pdf"
                            download
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:text-primary dark:hover:text-gray-300 transition-colors duration-300"
                        >
                            Resume <Download className="w-4 h-4" />
                        </a>
                        <span className="mt-4 block text-xs text-gray-400 dark:text-gray-600">© 2025 Sophavisnuka</span>
                    </div>
                </div>
            </aside>
        </>
    );
}
