import { useState, useEffect, useRef } from "react";
import navbarData from "../data/navbarData.jsx";

const Navbar = () => {
  const [activeId, setActiveId] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const isClickScrolling = useRef(false);

  // Hitung total item (Menu + 1 untuk Theme Toggle)
  const totalItems = navbarData.length + 1;

  const handleNavClick = (e, id, index) => {
    e.preventDefault();
    isClickScrolling.current = true;
    setActiveId(id);
    setActiveIndex(index);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Fokus di tengah layar agar tidak tumpang tindih
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = navbarData.findIndex(item => item.id === id);
          if (index !== -1) {
            setActiveId(id);
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    navbarData.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 hidden md:block ${
        scrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <div className="text-xl font-bold dark:text-white tracking-tight">
            ABIYYU<span className="text-blue-600">.</span>
          </div>
          
          <div className="flex bg-slate-100 dark:bg-slate-800/50 p-1 rounded-xl relative overflow-hidden">
            {navbarData.map((item, index) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id, index)}
                className={`relative z-10 px-6 py-2 text-sm font-bold transition-colors duration-300 ${
                  activeId === item.id ? "text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                {activeId === item.id && (
                  <div className="absolute inset-0 bg-blue-600 rounded-lg -z-10 transition-all duration-300" />
                )}
                {item.label}
              </a>
            ))}
          </div>
          
          <button onClick={toggleDarkMode} className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 dark:text-white transition-transform active:scale-90">
            <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} text-lg`}></i>
          </button>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM BAR (FULL WIDTH + TOP ROUNDED) --- */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[100]">
        <div className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 rounded-t-[30px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] relative overflow-hidden">
          
          <div className="flex justify-between items-center relative px-2 py-3">
            
            {/* Indikator Biru (Sempurna di dalam kontainer) */}
            <div 
              className="absolute top-3 bottom-3 bg-blue-600 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                width: `calc((100% - 1rem) / ${totalItems})`,
                left: "0.5rem",
                transform: `translateX(calc(${activeIndex} * 100%))`
              }}
            />

            {navbarData.map((item, index) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleNavClick(e, item.id, index)}
                className="relative z-10 flex flex-col items-center justify-center h-14"
                style={{ width: `calc(100% / ${totalItems})` }}
              >
                <div className={`flex flex-col items-center transition-all duration-500 ${
                  activeId === item.id ? "text-white" : "text-slate-400"
                }`}>
                  <i className={`bx ${item.icon} text-2xl`}></i>
                  <span className={`text-[9px] font-black uppercase tracking-widest mt-1 transition-all duration-500 ${
                    activeId === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 absolute"
                  }`}>
                    {item.label}
                  </span>
                </div>
              </a>
            ))}

            {/* Theme Toggle Button */}
            <div className="flex items-center justify-center h-14" style={{ width: `calc(100% / ${totalItems})` }}>
              <button 
                onClick={toggleDarkMode} 
                className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  isDarkMode ? 'text-yellow-400' : 'text-slate-400'
                }`}
              >
                <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} text-xl`}></i>
              </button>
            </div>
          </div>
          
          {/* Safe Area Padding for modern phones (Home Indicator) */}
          <div className="h-4 w-full" />
        </div>
      </div>
    </>
  );
};

export default Navbar;