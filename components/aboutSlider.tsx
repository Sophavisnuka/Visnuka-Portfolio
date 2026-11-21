'use client';
import { useEffect, useState } from 'react';

const images = [
    '/me/cover.png',
    '/me/DSC03306.JPG',
    '/me/IMG_0008.JPG',
    '/me/dgf.jpg',
];

const INTERVAL = 3000;

export default function AboutSlider({ children }: { children: React.ReactNode }) {
    const [active, setActive] = useState(0);

    // Auto-advance every 3s; restarts whenever the active slide changes (incl. dot clicks)
    useEffect(() => {
        const id = setTimeout(() => setActive((i) => (i + 1) % images.length), INTERVAL);
        return () => clearTimeout(id);
    }, [active]);

    return (
        <section id="about" className="relative w-full overflow-hidden bg-black text-white">
            {images.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                        i === active ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/55 to-black/90" />

            <div className="relative z-10 flex min-h-[520px] items-center justify-end px-10 py-16 sm:px-24 sm:py-20 lg:px-40">
                {children}
            </div>

            {/* Dots - bottom left */}
            <div className="absolute bottom-6 left-10 z-20 flex gap-2 sm:bottom-8 sm:left-24 lg:left-40">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        aria-label={`Show image ${i + 1}`}
                        aria-current={i === active}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                            i === active ? 'w-7 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
