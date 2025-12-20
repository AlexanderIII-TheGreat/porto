import { useState, useEffect } from "react";
import homeData from "../data/homeData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';
import 'tippy.js/dist/tippy.css';

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = homeData.typingTexts;
    const currentTitle = titles[currentIndex];
    const typeSpeed = isDeleting ? 70 : 120;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-50 dark:bg-[#0f172a] pt-16 md:pt-20 overflow-hidden flex items-center transition-colors duration-500"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-900/20" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-900/20" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Gap dikurangi pada mobile (gap-8) dan diperlebar pada desktop (lg:gap-16) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 lg:py-12">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 lg:space-y-10 order-2 lg:order-1 text-left">
            <div className="space-y-3 lg:space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-[9px] lg:text-[10px] font-black tracking-[0.2em] uppercase border border-blue-600/20" data-aos="fade-right">
                My Portofolio
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight" data-aos="fade-up">
                {homeData.title}
              </h1>
              <div className="h-8 lg:h-12 flex items-center" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tight">
                  {currentText}
                  <span className={`inline-block w-[2px] lg:w-[3px] h-6 lg:h-8 ml-1 bg-blue-600 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`}></span>
                </h2>
              </div>
            </div>

            <p className="text-sm lg:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl font-medium" data-aos="fade-up" data-aos-delay="300">
              {homeData.description}
            </p>

            <div className="space-y-6 lg:space-y-8" data-aos="fade-up" data-aos-delay="400">
              <div className="flex flex-wrap gap-3 lg:gap-4">
                {homeData.buttons.map((btn, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!btn.href || btn.href === "#") {
                        Swal.fire({
                          title: "Coming Soon!",
                          text: "Preparing the best file for you.",
                          icon: "info",
                          confirmButtonColor: "#2563eb",
                          background: '#0f172a',
                          color: '#fff'
                        });
                      } else {
                        window.open(btn.href, "_blank");
                      }
                    }}
                    className={`group relative flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 font-black text-[10px] lg:text-xs uppercase tracking-widest rounded-xl lg:rounded-2xl transition-all duration-300 ${
                      btn.type === "primary"
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                        : "border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <i className={`bx ${btn.type === "primary" ? "bx-download" : "bx-envelope"} text-lg lg:text-xl`} />
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Stats Grid - Fixed Layout for Mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 pt-2">
                {homeData.stats.map((item, index) => (
                  <div 
                    key={index} 
                    className="group p-3 lg:p-5 rounded-2xl lg:rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 transition-all duration-500 shadow-sm"
                  >
                    <div className="flex flex-col gap-1 lg:gap-2">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-lg lg:rounded-xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <i className={`${item.icon} text-lg lg:text-xl`}></i>
                      </div>
                      <div>
                        <p className="text-base lg:text-xl font-black text-slate-900 dark:text-white tracking-tighter">
                          {item.value}
                        </p>
                        <p className="text-[8px] lg:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - PROFILE IMAGE (Smaller on mobile) */}
          <div className="relative flex justify-center items-center order-1 lg:order-2" data-aos="zoom-in">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 blur-2xl lg:blur-3xl animate-pulse" />
              
              <div className="relative p-2 lg:p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-2xl">
                <img
                  src={homeData.img}
                  alt="Profile"
                  className="w-48 h-48 sm:w-64 sm:h-64 lg:w-[420px] lg:h-[420px] object-cover rounded-full transition-all duration-700"
                />
              </div>

              {/* Floating Tech Stack Icons - Adjusted for Mobile scaling */}
              {homeData.floatingIcons.map((tech, index) => {
                const positions = [
                  "top-0 -left-2 lg:top-4 lg:-left-4",
                  "top-0 -right-2 lg:top-0 lg:-right-4",
                  "bottom-8 -left-4 lg:bottom-12 lg:-left-8",
                  "bottom-0 right-2 lg:bottom-0 lg:right-4",
                  "top-1/2 -right-6 lg:-right-12",
                ];

                return (
                  <Tippy key={index} content={tech.label}>
                    <div
                      className={`absolute ${positions[index % positions.length]} w-10 h-10 lg:w-16 lg:h-16 bg-white dark:bg-slate-800 rounded-xl lg:rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-700 animate-float cursor-pointer z-20 overflow-hidden`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {tech.isCustomIcon ? (
                         <img src={tech.icon} alt={tech.label} className="w-5 h-5 lg:w-8 lg:h-8 object-contain" />
                      ) : (
                        <i className={`${tech.icon} text-xl lg:text-3xl`} style={{ color: tech.color }} />
                      )}
                    </div>
                  </Tippy>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @media (min-width: 1024px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;