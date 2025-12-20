import { useState, useEffect } from "react";
import navbarData from "../data/navbarData.jsx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Effect untuk mendeteksi scroll agar navbar berubah tampilan (blur/shadow)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Intersection Observer untuk Active State
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        navbarData.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Lock Body Scroll saat mobile menu terbuka
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    }, [isMenuOpen]);

    // Theme Logic
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newMode ? "dark" : "light");
    };

    return (
        <>
            {/* Main Navbar */}
            <nav 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                    scrolled 
                    ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg py-3 shadow-sm border-b border-slate-200/50 dark:border-slate-700/50" 
                    : "bg-transparent py-5"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo Area */}
                        <a href="#" className="group flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                                <i className="bx bx-code-alt text-xl"></i>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white uppercase">
                                Abiyyu<span className="text-blue-600">.</span>
                            </span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2 bg-slate-100/50 dark:bg-slate-800/50 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                            {navbarData.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl flex items-center gap-2 ${
                                        activeId === item.id
                                        ? "text-white dark:text-slate-900"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                                >
                                    {activeId === item.id && (
                                        <div className="absolute inset-0 bg-slate-900 dark:bg-white rounded-xl shadow-md z-0" />
                                    )}
                                    <i className={`bx ${item.icon} relative z-10 text-base`}></i>
                                    <span className="relative z-10">{item.label}</span>
                                </a>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            {/* Desktop Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className="hidden md:flex w-10 h-10 items-center justify-center rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all duration-300 shadow-sm"
                            >
                                <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} text-xl`}></i>
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'} text-2xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Backdrop Mobile */}
            <div 
                className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[55] transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Off-Canvas Mobile Menu (Right Side) */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-slate-900 z-[60] shadow-2xl transform transition-transform duration-500 ease-out md:hidden ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-10">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Navigation</span>
                        <button 
                            onClick={() => setIsMenuOpen(false)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500"
                        >
                            <i className="bx bx-x text-xl"></i>
                        </button>
                    </div>

                    <div className="flex-1 space-y-2">
                        {navbarData.map((item, index) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                                    activeId === item.id
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                                }`}
                                style={{ 
                                    transitionDelay: `${isMenuOpen ? index * 50 : 0}ms`,
                                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                                    opacity: isMenuOpen ? 1 : 0
                                }}
                            >
                                <i className={`bx ${item.icon} text-xl`}></i>
                                <span className="font-semibold">{item.label}</span>
                                {activeId === item.id && <i className="bx bx-chevron-right ml-auto"></i>}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Footer */}
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                        <button
                            onClick={toggleDarkMode}
                            className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                        >
                            <span className="font-medium">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                            <i className={`bx ${isDarkMode ? 'bx-sun text-yellow-500' : 'bx-moon text-blue-500'} text-xl`}></i>
                        </button>
                        <p className="text-center text-[10px] text-slate-400 font-medium tracking-tighter">
                            © {new Date().getFullYear()}  Abiyyu Abdiffatir A.Md
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;