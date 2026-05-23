import PropTypes from "prop-types";

const ThemeToggleIcon = ({ isDarkMode }) => {
  // Ukuran viewBox 24x24 pixel, responsif penuh sesuai ukuran wadah tombol
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-full h-full transition-transform duration-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        {/* Gradient Emas untuk Matahari */}
        <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>

        {/* Gradient Perak-Biru untuk Bulan */}
        <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>

        {/* Filter Glow Glow-in-the-dark */}
        <filter id="glowAccent" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* --- 1. MATAHARI (SUN) --- */}
      <g
        className="sun-wrapper"
        style={{
          transform: isDarkMode ? "rotate(90deg) scale(0.3)" : "rotate(0deg) scale(1)",
          opacity: isDarkMode ? 0 : 1,
        }}
      >
        {/* Core Bulat Matahari */}
        <circle 
          cx="12" 
          cy="12" 
          r="5" 
          fill="url(#sunGrad)" 
          stroke="#f59e0b" 
          strokeWidth="1"
          filter={!isDarkMode ? "url(#glowAccent)" : ""}
        />
        {/* Sinar Rhythmic Rays */}
        <g stroke="#f59e0b" strokeWidth="1.8">
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
          <line x1="19.07" y1="4.93" x2="17.66" y2="6.34" />
          <line x1="6.34" y1="17.66" x2="4.93" y2="19.07" />
        </g>
      </g>

      {/* --- 2. BULAN (CRESCENT MOON) --- */}
      <g
        className="moon-wrapper"
        style={{
          transform: isDarkMode ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.3)",
          opacity: isDarkMode ? 1 : 0,
        }}
      >
        {/* Bentuk Sabit Bulan */}
        <path
          d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a7 7 0 0 1-7.54-7.54C12.92 3.04 12.46 3 12 3z"
          fill="url(#moonGrad)"
          stroke="#22d3ee"
          strokeWidth="0.8"
          filter={isDarkMode ? "url(#glowAccent)" : ""}
        />
      </g>

      {/* CSS untuk Menangani Rotasi Offset Arc Trajectory */}
      <style>{`
        /* Titik tumpu rotasi diletakkan jauh di bawah pusat (12px, 32px)
           sehingga rotasi menghasilkan lintasan melengkung (busur/arc) alami
           seperti benda langit terbit dan tenggelam */
        .sun-wrapper {
          transform-origin: 12px 30px;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-in-out;
        }
        
        .moon-wrapper {
          transform-origin: 12px 30px;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-in-out;
        }
      `}</style>
    </svg>
  );
};

ThemeToggleIcon.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default ThemeToggleIcon;
