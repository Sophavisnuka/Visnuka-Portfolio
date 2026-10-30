'use client';
import { Sun, Moon, Mail, Phone, MapPin, X } from "lucide-react";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Project', href: '/#project' },
    { label: 'Experience', href: '/#experience' },
];

const menuLinks = [
    ...mainLinks,
    { label: 'Posters', href: '/#posters' },
    { label: 'Achievements', href: '/#achievement' },
    { label: 'Contact', href: '/contact' },
];

const contactInfo = [
    { icon: Mail, value: "sophavisnukakhun@gmail.com", href: "mailto:sophavisnukakhun@gmail.com" },
    { icon: Phone, value: "+855 16 260 218", href: "tel:+85516260218" },
    { icon: MapPin, value: "Phnom Penh, Cambodia", href: "#" },
];

export default function Navbar() {
    const [isMounted, setIsMounted] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Transparent over the hero; gets a backdrop once the page is scrolled
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Floating liquid-glass pill once scrolled (always on non-home pages)
    const isGlass = pathname !== '/' || isScrolled;
    // Each navbar part becomes its own glass pill
    const pill = `transition-all duration-500 ${
        isGlass
            ? 'rounded-full bg-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_-1px_0_rgba(255,255,255,0.15)]'
            : ''
    }`;

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isGlass ? 'text-black' : 'text-white'
            }`}>
                <div className={`relative flex items-center justify-between text-xs font-semibold transition-all duration-500 px-10 sm:px-24 lg:px-40 py-8`}>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className={`${pill} flex flex-col justify-center gap-1 ${isGlass ? 'w-11 h-11 items-center' : 'w-6 py-1'}`}
                        aria-label="Open menu"
                    >
                        <span className={`w-5 h-0.5 ${isGlass ? 'bg-black' : 'bg-white'}`} />
                        <span className={`w-5 h-0.5 ${isGlass ? 'bg-black' : 'bg-white'}`} />
                        <span className={`w-5 h-0.5 ${isGlass ? 'bg-black' : 'bg-white'}`} />
                    </button>

                    <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
                        <ul className={`${pill} flex gap-12 ${isGlass ? 'px-10 py-3.5' : ''}`}>
                            {mainLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={`transition-colors duration-300 ${isGlass ? 'hover:text-gray-600' : 'hover:text-gray-300'}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Link
                        href="/#home"
                        className={`${pill} ${isGlass ? 'px-6 py-3.5 hover:text-gray-600' : 'hover:text-gray-300'}`}
                    >
                        Sophavisnuka
                    </Link>
                </div>
            </header>

            {/* Slide-in menu: full link list, contact info, theme toggle */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[60]">
                    <div className="absolute inset-0 bg-black/60" onClick={() => setIsMenuOpen(false)} />
                    <aside className="absolute top-0 left-0 h-full w-72 max-w-[85%] bg-black text-white p-8 flex flex-col">
                        <div className="flex items-center justify-between mb-10">
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </button>
                            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <ul className="space-y-5 text-lg">
                            {menuLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="hover:text-gray-300 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto space-y-3 text-sm text-gray-400">
                            {contactInfo.map(({ icon: Icon, value, href }) => (
                                <div key={value} className="flex items-center gap-3">
                                    <Icon className="w-4 h-4 shrink-0" />
                                    {href !== "#" ? (
                                        <a href={href} className="hover:text-white transition-colors">{value}</a>
                                    ) : (
                                        <span>{value}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>
            )}
        </>
    );
}
