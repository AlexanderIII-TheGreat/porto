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

  // Typing Effect Logic
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
      className="relative min-h-screen bg-slate-50 dark:bg-[#0f172a] pt-20 overflow-hidden flex items-center transition-colors duration-500"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-900/20" />
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-900/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-12">
          
          {/* LEFT CONTENT */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-[0.3em] mb-2 uppercase border border-blue-600/20" data-aos="fade-right">
                My Portofolio
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight" data-aos="fade-up">
                {homeData.title}
              </h1>
              <div className="h-12 flex items-center" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tight">
                  {currentText}
                  <span className={`inline-block w-[3px] h-8 ml-1 bg-blue-600 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`}></span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl font-medium" data-aos="fade-up" data-aos-delay="300">
              {homeData.description}
            </p>

            {/* Buttons & Socials */}
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="400">
              <div className="flex flex-wrap gap-4">
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
                    className={`group relative flex items-center gap-3 px-8 py-4 font-black text-xs uppercase tracking-widest rounded-2xl transition-all duration-300 ${
                      btn.type === "primary"
                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-500/20"
                        : "border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <i className={`bx ${btn.type === "primary" ? "bx-download" : "bx-envelope"} text-xl`} />
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Stats Grid - Professional Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {homeData.stats.map((item, index) => (
                  <div 
                    key={index} 
                    className="group p-5 rounded-3xl bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 shadow-sm"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <i className={`${item.icon} text-xl`}></i>
                      </div>
                      <div>
                        <p className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">
                          {item.value}
                        </p>
                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - PROFILE IMAGE */}
          <div className="relative flex justify-center items-center order-1 lg:order-2" data-aos="zoom-in">
            <div className="relative group">
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />
              
              <div className="relative p-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-2xl">
                <img
                  src={homeData.img}
                  alt="Profile"
                  className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] object-cover rounded-full transition-all duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Floating Tech Stack Icons */}
              {homeData.floatingIcons.map((tech, index) => {
                const positions = [
                  "top-4 -left-4",
                  "top-0 -right-4",
                  "bottom-12 -left-8",
                  "bottom-0 right-4",
                  "top-1/2 -right-12",
                ];

                return (
                  <Tippy key={index} content={tech.label}>
                    <div
                      className={`absolute ${positions[index % positions.length]} w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 dark:border-slate-700 hover:scale-125 transition-all duration-300 animate-float cursor-pointer z-20 overflow-hidden`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {/* Cek jika itu Redis/MySQL (isCustomIcon) agar konsisten dengan Portfolio */}
                      {tech.isCustomIcon ? (
                         <img src={tech.icon} alt={tech.label} className="w-8 h-8 object-contain" />
                      ) : (
                        <i className={`${tech.icon} text-3xl`} style={{ color: tech.color }} />
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
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;