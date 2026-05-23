import PropTypes from "prop-types";

const AnimatedNavbarIcon = ({ id, isActive }) => {
  // Line weight tipografi tipis (1.8) agar terlihat tajam dan modern
  const svgClass = "w-6 h-6 transition-all duration-300";

  switch (id) {
    case "home":
      return (
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            className={svgClass}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Outline Rumah Minimalis */}
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
            
            {/* Indikator Cahaya Core Kecil di Tengah Rumah (Breathing Glow) */}
            <circle 
              cx="12" 
              cy="14" 
              r="2" 
              className={isActive ? "fill-white dark:fill-blue-400 stroke-none animate-core-breath" : "fill-none"} 
            />
          </svg>
          <style>{`
            @keyframes coreBreath {
              0%, 100% { opacity: 0.4; transform: scale(0.85); }
              50% { opacity: 1; transform: scale(1.1); }
            }
            .animate-core-breath {
              transform-origin: 12px 14px;
              animation: coreBreath 2.5s ease-in-out infinite;
            }
          `}</style>
        </div>
      );

    case "about":
      return (
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            className={svgClass}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Bingkai ID Card Sudut Lengkung */}
            <rect x="3" y="3" width="18" height="18" rx="3" />
            
            {/* Avatar Minimalis */}
            <circle cx="12" cy="9.5" r="3" />
            <path d="M6 18c0-1.8 2.5-3 6-3s6 1.2 6 3" />
            
            {/* Mikro Detil: Garis Tanda Tangan/Teks Kecil di Pojok Bawah */}
            <line 
              x1="8" 
              y1="6" 
              x2="10" 
              y2="6" 
              className={`transition-all duration-500 ${isActive ? "stroke-blue-400 opacity-100" : "opacity-40"}`} 
            />
          </svg>
        </div>
      );

    case "portofolio":
      return (
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            className={svgClass}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Kurung Siku Kiri < (Bergeser mikro 1px saat aktif) */}
            <path 
              d="M8 7l-5 5 5 5" 
              className={`transition-transform duration-500 ease-out ${
                isActive ? "-translate-x-[1.5px] stroke-blue-400" : ""
              }`}
            />
            {/* Kurung Siku Kanan > (Bergeser mikro 1px saat aktif) */}
            <path 
              d="M16 7l5 5-5 5" 
              className={`transition-transform duration-500 ease-out ${
                isActive ? "translate-x-[1.5px] stroke-blue-400" : ""
              }`}
            />
            {/* Garis Miring Tengah / */}
            <line x1="13" y1="5" x2="11" y2="19" />
          </svg>
        </div>
      );

    case "testimonials":
      return (
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            className={svgClass}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Balon Chat Geometris Bersih */}
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            
            {/* Garis Isi Chat Minimalis */}
            <line 
              x1="8" 
              y1="9" 
              x2="16" 
              y2="9" 
              className={`transition-all duration-500 ${isActive ? "stroke-blue-400" : "opacity-60"}`}
            />
            <line 
              x1="8" 
              y1="13" 
              x2="13" 
              y2="13" 
              className={`transition-all duration-500 ${isActive ? "stroke-blue-400" : "opacity-60"}`}
            />
          </svg>
        </div>
      );

    case "contact":
      return (
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            className={svgClass}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Amplop Minimalis */}
            <rect x="3" y="5" width="18" height="14" rx="2" />
            
            {/* Garis Lipatan Flap (Turun mikro 1px saat aktif melambangkan interaksi fisik) */}
            <path 
              d="M3 7l9 6 9-6" 
              className={`transition-transform duration-500 ease-out ${
                isActive ? "translate-y-[0.8px] stroke-blue-400" : ""
              }`}
            />
          </svg>
        </div>
      );

    default:
      return null;
  }
};

AnimatedNavbarIcon.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default AnimatedNavbarIcon;
