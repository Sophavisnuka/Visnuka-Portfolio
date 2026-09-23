'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { posters } from './data';

export default function PostersPage() {
    const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-white dark:bg-gray-900 pt-20 pb-12 px-4 sm:pt-24 sm:pb-14 lg:pt-12">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-start mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Poster Design
                    </h1>
                    <p className="text-lg text-start text-gray-600 dark:text-gray-400 max-w-2xl">
                        A selection of poster designs I've created using Photoshop and other design tools.
                    </p>
                </div>

                {/* Poster Grid - 4 columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {posters.map((poster, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[3/4] bg-white/90 dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer"
                            onClick={() => setSelectedPoster(poster)}
                        >
                            <img
                                src={poster}
                                alt={`Poster design ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity duration-300">
                                    View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Poster Modal - portalled to <body> so it renders above the sidebar
                instead of being trapped inside this section's local stacking context */}
            {isMounted && selectedPoster && createPortal(
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
                    onClick={() => setSelectedPoster(null)}
                >
                    <div className="relative max-w-2xl mx-auto">
                        <img
                            src={selectedPoster}
                            alt="Poster design full view"
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute -top-4 -right-4 text-white bg-black/80 hover:bg-black/90 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 text-2xl font-bold shadow-lg"
                            onClick={(e) => { e.stopPropagation(); setSelectedPoster(null); }}
                        >
                            ×
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
