import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            setProgress(scrolled);
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed z-[110] transition-all duration-500 
            bottom-24 right-6 md:bottom-10 md:right-10
            ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
            
            {/* Progress Circle Decoration */}
            <svg className="absolute -inset-2 w-16 h-16 md:w-20 md:h-20 -rotate-90">
                <circle
                    cx="50%" cy="50%" r="30"
                    className="stroke-slate-200 dark:stroke-slate-800 fill-none"
                    strokeWidth="3"
                />
                <circle
                    cx="50%" cy="50%" r="30"
                    className="stroke-blue-600 fill-none transition-all duration-200"
                    strokeWidth="3"
                    strokeDasharray="188.4"
                    strokeDashoffset={188.4 - (188.4 * progress) / 100}
                />
            </svg>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-2xl text-slate-800 dark:text-white hover:bg-blue-600 hover:text-white transition-colors"
            >
                <i className="bx bx-up-arrow-alt text-2xl md:text-3xl animate-pulse" />
            </button>
        </div>
    );
};

export default ScrollToTop;