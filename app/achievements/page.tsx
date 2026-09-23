'use client';


export default function AchievementPage() {
    const achievements = [
        {
            title: "Next-Gen Engagement Program-Batch II",
            description: "Certificate for volunteer as a trainer that teach freshmen student in CADT",
            date: "September 2025",
            category: "Academic",
        },
        {
            title: "CADT Freshman Coding Championship",
            description: "I have volunteered as a Graphic designer and program coordinate for CFCC in CADT to promote the event and other activities",
            date: "August 2025",
            category: "Academic",
        },
        {
            title: "Java Basic",
            description: "Completed the short course of Java basic",
            date: "January 2025",
            category: "Open Source",
        },
        {
            title: "Sangkran CADT",
            description: "Certificate of appreciation for volunteering in Sangkran CADT",
            date: "April 2025",
            category: "Open Source",
        },
    ];

    return (
        <div className="relative bg-white dark:bg-gray-900 pt-20 pb-12 px-6 sm:px-10 lg:px-14 sm:pt-24 lg:pt-16">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Achievements
                </h2>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-xl">
                    A showcase of my academic achievements, certifications, and contributions to the tech community.
                </p>
            </div>

            <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
                {achievements.map((achievement, index) => (
                    <div key={index} className="py-6 first:pt-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{achievement.date}</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{achievement.category}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
