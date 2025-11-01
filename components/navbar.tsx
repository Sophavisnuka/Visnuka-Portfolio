'use client';
import { Sun, Moon, MoveUpRight } from "lucide-react";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8 lg:px-20 py-4 sm:py-4 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
                : 'bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700'
        }`}>
            <div className='flex-1'>
                <h1 className='text-xl sm:text-2xl font-bold text-primary'>Sophavisnuka</h1>    
            </div>
            
            {/* Desktop Menu */}
            <ul className='flex-1 text-primary hidden md:flex justify-center gap-8 lg:gap-[4rem] bg-white dark:bg-gray-800 shadow-sm py-2 px-5 rounded-lg'>
                <li><Link href="/" className="hover:text-secondary transition-colors duration-300">Home</Link></li>
                <li><Link href="/about" className="hover:text-secondary transition-colors duration-300">About</Link></li>
                <li><Link href="/project" className="hover:text-secondary transition-colors duration-300">Projects</Link></li>
                <li><Link href="/achievements" className="hover:text-secondary transition-colors duration-300">Achievements</Link></li>
            </ul>
            
            {/* Desktop Actions */}
            <div className="flex-1 flex justify-end items-center gap-4">
                <button 
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                    {theme === 'dark' ? (
                        <Sun className="w-5 h-5 text-yellow-500" />
                    ) : (
                        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    )}
                </button>
                <Link href="/contact" className='hidden md:flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-3 rounded-lg text-white font-semibold bg-primary hover:bg-secondary transition-all duration-300 ease-in-out text-sm lg:text-base'>
                    Contact
                    <MoveUpRight className="w-4 h-4" />
                </Link>
            </div>
            
            {/* Mobile Menu Button & Theme Toggle */}
            <div className='md:hidden flex items-center gap-2'>
                <button 
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                    {theme === 'dark' ? (
                        <Sun className="w-4 h-4 text-yellow-500" />
                    ) : (
                        <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    )}
                </button>
                <button 
                    className='flex flex-col justify-center items-center w-8 h-8 space-y-1'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl border-t border-gray-200/50 dark:border-gray-700/50 md:hidden z-40'>
                    <ul className='flex flex-col py-4'>
                        <li><Link href="/" className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/" className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li><Link href="/" className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
                        <li><Link href="/" className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(false)}>Achievements</Link></li>
                        <li className='px-4 py-3'>
                            <Link href="/" className='flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg text-white font-semibold bg-primary hover:bg-secondary transition-all duration-300 ease-in-out' onClick={() => setIsMenuOpen(false)}>
                                Contact
                                <MoveUpRight className="w-4 h-4" />
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}