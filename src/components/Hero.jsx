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
  const [showNamecardModal, setShowNamecardModal] = useState(false);
  const [isNamecardFlipped, setIsNamecardFlipped] = useState(false);

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
                <h2 className="text-xl sm:text-3xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
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
                      if (btn.label === "Explore My Project") {
                        const element = document.getElementById("portofolio");
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                          window.scrollTo({
                            top: elementPosition - offset,
                            behavior: "smooth"
                          });
                        }
                      } else if (btn.label === "Lihat Kartu Nama Saya") {
                        setIsNamecardFlipped(false);
                        setShowNamecardModal(true);
                      } else {
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
                      }
                    }}
                    className={`group relative flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 font-black text-[10px] lg:text-xs uppercase tracking-widest rounded-xl lg:rounded-2xl transition-all duration-300 ${
                      btn.type === "primary"
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                        : "border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    <i className={`bx ${btn.icon || (btn.type === "primary" ? "bx-download" : "bx-envelope")} text-lg lg:text-xl`} />
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Stats Grid - Ultra Premium Responsive Bento Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4 pt-2">
                {homeData.stats.map((item, index) => (
                  <div 
                    key={index} 
                    className="relative overflow-hidden group p-4 lg:p-5 rounded-2xl lg:rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/80 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl dark:hover:shadow-blue-900/20 hover:-translate-y-1.5 flex flex-col justify-between min-h-[120px] sm:min-h-[130px] lg:min-h-[150px]"
                  >
                    {/* Interactive glowing background */}
                    <div className="absolute -inset-px rounded-2xl lg:rounded-3xl bg-gradient-to-tr from-blue-600/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Decorative micro dot matrix background for modern feel */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px] opacity-25 pointer-events-none" />

                    <div className="flex flex-col h-full justify-between relative z-10">
                      {/* Upper row: Icon & Suffix Tag */}
                      <div className="flex justify-between items-start gap-2">
                        <div 
                          className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/10 to-indigo-600/5 dark:from-slate-800 dark:to-slate-900 border border-blue-500/10 dark:border-slate-700 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-all duration-500 shrink-0"
                          style={{ color: item.color ? item.color : undefined }}
                        >
                          <i className={`${item.icon} text-base lg:text-lg`} style={{ color: item.color ? item.color : undefined }}></i>
                        </div>

                        {item.suffix && (
                          <span 
                            className="text-[7px] lg:text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-600/10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                            style={{ color: item.color ? item.color : undefined }}
                          >
                            {item.suffix}
                          </span>
                        )}
                      </div>

                      {/* Lower row: Label & Main Value */}
                      <div className="mt-4 flex flex-col min-w-0">
                        <h4 className="text-[8px] lg:text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                          {item.label}
                        </h4>
                        
                        <p className="text-[11px] sm:text-xs lg:text-[13px] font-black text-slate-950 dark:text-white tracking-tight leading-snug mt-1 uppercase break-words line-clamp-2">
                          {item.value}
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

      {/* 3D Interactive Namecard Modal */}
      {showNamecardModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-300 animate-fade-in"
          onClick={() => setShowNamecardModal(false)}
        >
          {/* Elegant Close Button at Viewport Level */}
          <button 
            onClick={() => setShowNamecardModal(false)}
            className="absolute top-6 right-6 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 dark:bg-slate-900/40 text-white hover:bg-white/20 dark:hover:bg-slate-800/60 transition-colors shadow-lg border border-white/10 backdrop-blur-md active:scale-90"
            aria-label="Close"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>

          {/* 3D Perspective Card Container */}
          <div 
            className="relative w-full max-w-[500px] aspect-[1.58/1] cursor-pointer"
            style={{ perspective: "1500px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Spawn wrapper (handles scaling/initial spinning) */}
            <div 
              className="w-full h-full animate-namecard-spawn"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Flip wrapper (handles Y-axis flip transform) */}
              <div 
                onClick={() => setIsNamecardFlipped(!isNamecardFlipped)}
                className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] select-none"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: isNamecardFlipped ? "rotateY(180deg)" : "rotateY(0deg)" 
                }}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/10"
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden" 
                  }}
                >
                  <img 
                    src="/namecard/1.jpg" 
                    alt="Namecard Front" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/10"
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)" 
                  }}
                >
                  <img 
                    src="/namecard/2.jpg" 
                    alt="Namecard Back" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}



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
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
        @keyframes namecardSpawn {
          0% { 
            opacity: 0; 
            transform: scale(0.1) rotateY(-540deg) rotateZ(-30deg); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotateY(0deg) rotateZ(0deg); 
          }
        }
        .animate-namecard-spawn {
          animation: namecardSpawn 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Home;