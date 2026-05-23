import { useState, useEffect } from "react";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isSupercharged, setIsSupercharged] = useState(false);

  // Efek klik untuk memicu "Supercharge Mode" sementara
  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    setIsSupercharged(true);
  };

  useEffect(() => {
    if (!isSupercharged) return;

    // Reset mode supercharge setelah 1.5 detik
    const timer = setTimeout(() => {
      setIsSupercharged(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isSupercharged, clickCount]);

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Interactive Abiyyu Logo"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-500 active:scale-95 group-hover:scale-105"
      >
        <defs>
          {/* Gradient untuk Core Pusat */}
          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" /> {/* Royal Blue */}
            <stop offset="100%" stopColor="#06b6d4" /> {/* Electric Cyan */}
          </linearGradient>

          {/* Gradient untuk Ring & Glow */}
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="orbitGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
          </linearGradient>

          {/* Filter Glow Glow-in-the-dark */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- 1. RIPPLE EFFECTS (DIJALANKAN SAAT DIKLIK) --- */}
        {isSupercharged && (
          <g className="pointer-events-none">
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.5"
              className="animate-ripple-1"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.5"
              className="animate-ripple-2"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="none"
              stroke="#a855f7"
              strokeWidth="1"
              className="animate-ripple-3"
            />
          </g>
        )}

        {/* --- 2. STATIC ORBITAL PATHS (TILTED) --- */}
        {/* Orbit 1: Code Path (Tilt -30deg) */}
        <ellipse
          cx="50"
          cy="50"
          rx="38"
          ry="14"
          fill="none"
          stroke="url(#orbitGrad1)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          transform="rotate(-30 50 50)"
          className={`transition-opacity duration-300 ${
            isHovered ? "opacity-100 stroke-[2px]" : "opacity-60"
          }`}
        />

        {/* Orbit 2: Network Path (Tilt 30deg) */}
        <ellipse
          cx="50"
          cy="50"
          rx="38"
          ry="14"
          fill="none"
          stroke="url(#orbitGrad2)"
          strokeWidth="1.5"
          transform="rotate(30 50 50)"
          className={`transition-opacity duration-300 ${
            isHovered ? "opacity-100 stroke-[2px]" : "opacity-60"
          }`}
        />

        {/* --- 3. DYNAMIC ORBITING NODES (SPINNING GROUPS) --- */}
        {/* Node Group 1: Code/Development (Orbiting Counter-Clockwise) */}
        <g
          className={`origin-[50px_50px] ${
            isSupercharged
              ? "animate-spin-fast-reverse"
              : isHovered
              ? "animate-spin-medium-reverse"
              : "animate-spin-slow-reverse"
          }`}
        >
          {/* Tilted orbital placement of the node */}
          <g transform="rotate(-30 50 50)">
            {/* Glow Aura */}
            <circle
              cx="12"
              cy="50"
              r="7"
              fill="#2563eb"
              opacity="0.3"
              filter="url(#glow)"
            />
            {/* Main Circle Particle */}
            <circle cx="12" cy="50" r="4.5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
            {/* SVG Interactive Tag Code Shape in Node */}
            <path
              d="M10.5 48.5 L9 50 L10.5 51.5 M13.5 48.5 L15 50 L13.5 51.5"
              stroke="#ffffff"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>

        {/* Node Group 2: Cloud/Network (Orbiting Clockwise at offset phase) */}
        <g
          className={`origin-[50px_50px] ${
            isSupercharged
              ? "animate-spin-fast"
              : isHovered
              ? "animate-spin-medium"
              : "animate-spin-slow"
          }`}
        >
          {/* Tilted orbital placement with 180deg shift */}
          <g transform="rotate(30 50 50)">
            {/* Glow Aura */}
            <circle
              cx="88"
              cy="50"
              r="7"
              fill="#06b6d4"
              opacity="0.4"
              filter="url(#glow)"
            />
            {/* Main Particle */}
            <circle cx="88" cy="50" r="4.5" fill="#22d3ee" stroke="#ffffff" strokeWidth="1" />
            {/* SVG Network Node Dots inside Node */}
            <circle cx="88" cy="50" r="1.5" fill="#0891b2" />
          </g>
        </g>

        {/* --- 4. CENTRAL NODE (ABIYYU'S CORE) --- */}
        {/* Ambient Pulse Aura */}
        <circle
          cx="50"
          cy="50"
          r="12.5"
          fill="url(#coreGrad)"
          className={`origin-[50px_50px] transition-all duration-500 ${
            isSupercharged
              ? "animate-ping opacity-60"
              : isHovered
              ? "animate-pulse opacity-40 scale-110"
              : "opacity-20"
          }`}
        />

        {/* Outer Ring of Core */}
        <circle
          cx="50"
          cy="50"
          r="11"
          fill="none"
          stroke="url(#coreGrad)"
          strokeWidth="1.5"
          className={isSupercharged ? "animate-pulse" : ""}
        />

        {/* Solid Center Core */}
        <circle
          cx="50"
          cy="50"
          r="8.5"
          fill="url(#coreGrad)"
          filter={isHovered || isSupercharged ? "url(#glow)" : ""}
          className="transition-all duration-300"
        />

        {/* Modern Inside Accents (Tech cross or core dot) */}
        <circle cx="50" cy="50" r="2.5" fill="#ffffff" />
      </svg>

      {/* Tailwind & CSS Keyframe Styles specifically for SVG Orbit Dynamics */}
      <style>{`
        /* Rotasi Orbit Slow, Medium, dan Fast */
        @keyframes spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-spin-slow {
          animation: spin-cw 12s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-ccw 14s linear infinite;
        }

        .animate-spin-medium {
          animation: spin-cw 4.5s linear infinite;
        }
        .animate-spin-medium-reverse {
          animation: spin-ccw 5s linear infinite;
        }

        .animate-spin-fast {
          animation: spin-cw 1s linear infinite;
        }
        .animate-spin-fast-reverse {
          animation: spin-ccw 1.2s linear infinite;
        }

        /* Ripples Animasi saat di klik */
        @keyframes rippleOut {
          0% {
            transform: scale(1);
            opacity: 1;
            stroke-width: 3;
          }
          100% {
            transform: scale(4.5);
            opacity: 0;
            stroke-width: 0.5;
          }
        }

        .animate-ripple-1 {
          transform-origin: 50px 50px;
          animation: rippleOut 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
        }
        .animate-ripple-2 {
          transform-origin: 50px 50px;
          animation: rippleOut 1s cubic-bezier(0.1, 0.8, 0.3, 1) 0.15s forwards;
        }
        .animate-ripple-3 {
          transform-origin: 50px 50px;
          animation: rippleOut 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) 0.3s forwards;
        }
      `}</style>
    </div>
  );
};

export default Logo;
