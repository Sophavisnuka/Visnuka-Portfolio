'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { posters } from './data';

export default function PostersPage() {
    const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 sm:pt-24 sm:pb-14 lg:pt-12">
            <div className="relative z-10 max-w-7xl mx-auto">
                <Link href="/#posters" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors duration-300 mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to home
                </Link>
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Poster Design
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of poster designs I've created using Photoshop and other design tools.
                    </p>
                </div>

                {/* Poster Grid - Pinterest style masonry */}
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                    {posters.map((poster, index) => (
                        <div
                            key={index}
                            className="group relative break-inside-avoid mb-4 sm:mb-6 bg-white/90 dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer"
                            onClick={() => setSelectedPoster(poster)}
                        >
                            <img
                                src={poster}
                                alt={`Poster design ${index + 1}`}
                                className="w-full h-auto block group-hover:scale-110 transition-transform duration-500"
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

            {/* Poster Modal */}
            {selectedPoster && (
                <div
                    className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] p-4"
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
                </div>
            )}
        </div>
    );
}
