import type { ReactNode } from 'react';
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiTelegram } from 'react-icons/si';

interface FooterSection {
    title: string;
    links: Array<{ name: string; href: string }>;
}

interface FooterSocialLink {
    icon: ReactNode;
    href: string;
    label: string;
}

interface FooterProps {
    sections?: FooterSection[];
    description?: string;
    socialLinks?: FooterSocialLink[];
    copyright?: string;
}

const defaultSections: FooterSection[] = [
    {
        title: 'Explore',
        links: [
            { name: 'Projects', href: '/#project' },
            { name: 'Posters', href: '/#posters' },
            { name: 'Experience', href: '/#experience' },
            { name: 'Achievements', href: '/#achievement' },
        ],
    },
    {
        title: 'About',
        links: [
            { name: 'About Me', href: '/#about' },
            { name: 'Contact', href: '/contact' },
            { name: 'Resume', href: '/other/Khun-Sophavisnuka-CV.pdf' },
        ],
    },
];

const defaultSocialLinks: FooterSocialLink[] = [
    { icon: <SiGithub className="size-5" />, href: 'https://github.com/Sophavisnuka', label: 'GitHub' },
    { icon: <SiLinkedin className="size-5" />, href: 'https://www.linkedin.com/in/sophavisnukakhun190306/', label: 'LinkedIn' },
    { icon: <SiTelegram className="size-5" />, href: 'https://t.me/sophavisnuka1936', label: 'Telegram' },
];

export default function Footer({
    sections = defaultSections,
    description = 'Software developer building web and mobile products, from UI design to backend systems.',
    socialLinks = defaultSocialLinks,
    copyright = `© ${new Date().getFullYear()} Sophavisnuka`,
}: FooterProps) {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black px-6 sm:px-10 lg:px-14 py-12">
            <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start">
                <div className="flex w-full flex-col gap-4 lg:max-w-xs">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">Sophavisnuka</span>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                    <ul className="flex items-center gap-5 text-gray-500 dark:text-gray-400">
                        {socialLinks.map((social) => (
                            <li key={social.label}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                                >
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid w-full grid-cols-2 gap-8 sm:max-w-md">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                                {section.title}
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-600">
                {copyright}
            </div>
        </footer>
    );
}
