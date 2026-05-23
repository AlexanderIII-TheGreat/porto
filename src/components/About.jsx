import { useState } from "react";
import aboutData from "../data/aboutData.jsx";

const About = () => {
    const [activeProfile, setActiveProfile] = useState("software");

    // Dapatkan data spesifik untuk role yang aktif
    const profile = aboutData[activeProfile];

    // Gabungkan biodata statis dengan data Role dinamis
    const fullBiodata = [
        ...aboutData.biodata,
        { 
            label: "Role", 
            value: profile.role, 
            icon: "bx bx-award", 
            isRole: true 
        }
    ];

    return (
        <section id="about" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col items-center mb-12 lg:mb-20" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-3 italic">
                        {aboutData.title.toUpperCase()}<span className="text-blue-600">.</span>
                    </h2>
                    <div className="h-1 w-16 lg:h-1.5 lg:w-20 bg-blue-600 rounded-full mb-4"></div>
                    <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl font-medium uppercase tracking-widest text-[10px] lg:text-sm">
                        {aboutData.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    {/* Profil Image - Adjusted for mobile visibility */}
                    <div className="lg:col-span-5 relative group max-w-sm mx-auto lg:max-w-none" data-aos="fade-right">
                        {/* Dynamic border glow color depending on active role */}
                        <div className={`absolute -inset-2 lg:-inset-4 bg-gradient-to-tr ${profile.glowClass} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-all duration-1000`}></div>
                        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-2 lg:p-3 shadow-2xl">
                            <img 
                                src={aboutData.image} 
                                alt="Profile" 
                                className="rounded-xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
                            />
                        </div>
                    </div>

                    {/* Narrative & Personal Info */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        
                        {/* Segmented Switch Control for Roles */}
                        <div className="flex bg-slate-200/60 dark:bg-slate-800/40 p-1 rounded-2xl mb-8 self-start relative overflow-hidden border border-slate-200/20 dark:border-slate-800/50 shadow-inner" data-aos="fade-up">
                            {/* Sliding active capsule with dynamic theme coloring */}
                            <div 
                                className={`absolute top-1 bottom-1 rounded-[14px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                                    activeProfile === "software" 
                                        ? "left-1 w-[150px] bg-blue-600 shadow-md shadow-blue-500/20" 
                                        : "left-[154px] w-[150px] bg-purple-600 shadow-md shadow-purple-500/20"
                                }`}
                            />
                            
                            {/* Software Dev Option */}
                            <button
                                onClick={() => setActiveProfile("software")}
                                className={`relative z-10 flex items-center justify-center gap-2 px-4 py-2.5 w-[150px] text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${
                                    activeProfile === "software" ? "text-white" : "text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                }`}
                            >
                                <i className="bx bx-code-alt text-base"></i>
                                Software Dev
                            </button>

                            {/* Network Eng Option */}
                            <button
                                onClick={() => setActiveProfile("network")}
                                className={`relative z-10 flex items-center justify-center gap-2 px-4 py-2.5 w-[150px] text-[10px] font-black uppercase tracking-wider transition-colors duration-300 ${
                                    activeProfile === "network" ? "text-white" : "text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                                }`}
                            >
                                <i className="bx bx-server text-base"></i>
                                Network Eng
                            </button>
                        </div>

                        {/* Narrative Content - Animated upon tab changes */}
                        <div key={activeProfile} className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-10 lg:mb-12 animate-slide-fade">
                            {Object.entries(profile.narrative).map(([key, content]) => (
                                <div key={key} className="space-y-3 lg:space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 lg:p-2.5 rounded-lg text-white shadow-lg transition-colors duration-500 ${
                                            activeProfile === "software" 
                                                ? "bg-blue-600 shadow-blue-500/20" 
                                                : "bg-purple-600 shadow-purple-500/20"
                                        }`}>
                                            <i className={`bx ${content.icon} text-lg lg:text-xl`}></i>
                                        </div>
                                        <h3 className="text-lg lg:text-xl font-bold dark:text-white">
                                            {key === 'whoAmI' ? 'Who Am I' : 'My Approach'}
                                        </h3>
                                    </div>
                                    <p className="text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {content.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bento Style Personal Info - Always 2 Columns for symmetry */}
                        <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-8 lg:mb-10" data-aos="fade-up">
                            {fullBiodata.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 lg:gap-4 p-3 lg:p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 shadow-sm transition-all duration-500">
                                    <i className={`${item.icon} text-xl lg:text-2xl shrink-0 transition-colors duration-500 ${
                                        item.isRole 
                                            ? activeProfile === "software" 
                                                ? "text-blue-600" 
                                                : "text-purple-600"
                                            : "text-blue-600"
                                    }`}></i>
                                    <div className="min-w-0"> {/* min-w-0 prevents text overflow */}
                                        <p className="text-[8px] lg:text-[10px] uppercase tracking-tighter text-slate-400 font-bold truncate">{item.label}</p>
                                        <p className="text-[10px] lg:text-sm font-semibold dark:text-white truncate">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dynamic Highlight CV Buttons based on active role */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full" data-aos="fade-up">
                            <a 
                                href="/cv/ABIYYU ABDIFFATIR AL MAJID FULLSTACK DEVELOPER CV_20260427_224951_0000.pdf"
                                download
                                className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 font-bold rounded-xl lg:rounded-2xl transition-all duration-300 text-xs lg:text-sm uppercase tracking-wider ${
                                    activeProfile === "software"
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700"
                                        : "border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 shadow-lg"
                                }`}
                            >
                                <i className="bx bx-cloud-download text-lg"></i>
                                Fullstack Developer CV
                            </a>
                            <a 
                                href="/cv/cv networking Abiyyu abdiffatir al majid.pdf"
                                download
                                className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 font-bold rounded-xl lg:rounded-2xl transition-all duration-300 text-xs lg:text-sm uppercase tracking-wider ${
                                    activeProfile === "network"
                                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20 hover:bg-purple-700"
                                        : "border-2 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 shadow-lg"
                                }`}
                            >
                                <i className="bx bx-cloud-download text-lg"></i>
                                Network Engineer CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom local stylesheet for transitions */}
            <style>{`
                @keyframes slideFadeIn {
                    from {
                        opacity: 0;
                        transform: translateX(12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-slide-fade {
                    animation: slideFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </section>
    );
};

export default About;