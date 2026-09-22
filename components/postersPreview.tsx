'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { posters } from '@/app/posters/data';

export default function PostersPreview() {
    const previewPosters = posters.slice(0, 6);

    return (
        <div className="relative bg-white dark:bg-gray-900 pt-20 pb-12 px-6 sm:px-10 lg:px-14 sm:pt-24 lg:pt-16">
            {/* Header */}
            <div className="flex justify-between">
                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Posters
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl">
                        Freelance poster and graphic design work made with Photoshop and other design tools.
                    </p>
                </div>
                <div className="mt-8">
                    <Link
                        href="/posters"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-gray-300 transition-colors duration-300"
                    >
                        See all posters
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Poster grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {previewPosters.map((poster, index) => (
                    <div key={index} className="group">
                        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-primary/5">
                            <img
                                src={poster}
                                alt={`Poster design ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            />
                        </div>
                        <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                            Poster {String(index + 1).padStart(2, '0')}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
