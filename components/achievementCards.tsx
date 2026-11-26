'use client';

import { useCollection } from '@/lib/api';

interface Certificate {
    title: string;
    category?: string;
}

// Shown until the "certificates" collection has records, or if the API is unreachable
const staticCertificates: Certificate[] = [
    { title: "Next-Gen Engagement Program-Batch II", category: "Academic" },
    { title: "CADT Freshman Coding Championship", category: "Academic" },
    { title: "Java Basic", category: "Open Source" },
    { title: "Sangkran CADT", category: "Open Source" },
];

export default function AchievementCards() {
    const certificates = useCollection<Certificate>('certificates', staticCertificates, { fallbackWhenEmpty: true });

    return (
        <div className="relative bg-white dark:bg-gray-900 pt-20 pb-12 px-10 sm:px-24 lg:px-40 sm:pt-24 lg:pt-16">
            <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Achievements
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl">
                    Certificates and recognition I have received.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                {certificates.map((certificate, index) => (
                    <div key={index} className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
                            {certificate.title}
                        </h3>
                        {certificate.category && (
                            <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                                {certificate.category}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
