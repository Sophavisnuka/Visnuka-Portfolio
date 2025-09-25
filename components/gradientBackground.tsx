export default function GradientBackground() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30 dark:opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"></div>
                <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50 blur-xl"></div>
            </div>
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-purple-200/10 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 dark:bg-purple-300 rounded-full animate-pulse opacity-40 delay-1000"></div>
                <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300 dark:bg-blue-400 rounded-full animate-pulse opacity-50 delay-500"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-300 dark:bg-purple-400 rounded-full animate-pulse opacity-30 delay-2000"></div>
            </div>
        </div>
    )
}