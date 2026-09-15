'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { posters } from '@/app/posters/data';

export default function PostersPreview() {
    const previewPosters = posters.slice(0, 4);

    return (
        <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 sm:pt-24 sm:pb-14 lg:pt-12">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Poster Design
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of poster designs I've created using Photoshop and other design tools.
                    </p>
                </div>

                {/* Preview Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
                    {previewPosters.map((poster, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[3/4] bg-white/90 dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <img
                                src={poster}
                                alt={`Poster design ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/posters"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white dark:bg-white dark:text-black rounded-lg hover:bg-secondary dark:hover:bg-gray-300 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        See All Posters
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
