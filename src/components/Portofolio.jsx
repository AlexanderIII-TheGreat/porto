import { useState, useEffect } from "react";
import { portfolioData } from "../data/portofolioData.jsx";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      setActiveImage(selectedCert.img);
    } else {
      setActiveImage(null);
    }
  }, [selectedCert]);

  return (
    <section id="portofolio" className="py-16 lg:py-24 bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-black tracking-[0.2em] text-[10px] lg:text-xs uppercase mb-2 block">
            My Workspace
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold dark:text-white mb-6 lg:mb-8 tracking-tighter uppercase">
            Portfolio & Skills
          </h2>

          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {["projects", "certificates", "tech"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 lg:px-6 py-2 rounded-lg text-[9px] lg:text-[10px] font-black transition-all uppercase tracking-widest ${
                  activeTab === tab
                    ? "bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab === "projects" ? "Projects" : tab === "certificates" ? "Certificates" : "Tech Stack"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Projects */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioData.tabs.projects.map((project, i) => (
              <div
                key={project.id}
                className="group flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-3 lg:mb-4">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform shadow-xl"
                    >
                      <i className="bx bx-link-external text-lg lg:text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex gap-2 mb-1 lg:mb-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[8px] lg:text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base lg:text-lg font-bold dark:text-white mb-1 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[11px] lg:text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-medium">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Certificates */}
        {activeTab === "certificates" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioData.tabs.certificates.map((cert, i) => (
              <div
                key={cert.id}
                className="group flex flex-col bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-blue-900/10 hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:-translate-y-2 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={i * 50}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 mb-3 lg:mb-4">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="p-3 bg-white/90 dark:bg-slate-900/90 text-blue-600 dark:text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-xl border border-white/20 dark:border-slate-800">
                      <i className="bx bx-expand-alt text-lg lg:text-xl"></i>
                    </span>
                  </div>
                </div>
                <div className="px-1 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[8px] lg:text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1.5 block">
                      {cert.issuer}
                    </span>
                    <h3 className="text-xs lg:text-sm font-bold dark:text-white mb-2 uppercase tracking-tight leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {cert.title}
                    </h3>
                  </div>
                  {cert.pdf && (
                    <div className="pt-2.5 mt-auto border-t border-slate-200/50 dark:border-slate-800/50">
                      <span className="inline-flex items-center gap-1.5 text-[9px] lg:text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:underline">
                        <i className="bx bxs-file-pdf text-xs lg:text-sm"></i>
                        View PDF File
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Tech Stack - Fixed 2 columns on small mobile */}
        {activeTab === "tech" && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4" data-aos="fade-up">
            {portfolioData.tabs.techStacks.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 lg:gap-4 p-3 lg:p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl lg:rounded-2xl group transition-all duration-300"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 flex items-center justify-center rounded-lg lg:rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {tech.isCustomIcon ? (
                    <img 
                      src={tech.icon} 
                      alt={tech.label} 
                      className="w-6 h-6 lg:w-8 lg:h-8 object-contain" 
                    />
                  ) : (
                    <i 
                      className={`${tech.icon} text-2xl lg:text-3xl`} 
                      style={{ color: tech.color }}
                    ></i>
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] lg:text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight truncate">
                    {tech.label}
                  </h4>
                  <p className="text-[8px] lg:text-[10px] text-slate-500 font-bold uppercase tracking-widest truncate">
                    Technology
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-850 shadow-2xl flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[90vh] overflow-y-auto lg:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100/80 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-md backdrop-blur-sm"
            >
              <i className="bx bx-x text-2xl"></i>
            </button>

            {/* Image Preview & Switcher */}
            <div className="flex-1 bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 lg:p-8 min-h-[260px] lg:min-h-0 relative shrink-0 lg:shrink">
              {/* Main Active Image */}
              {activeImage && (
                <img 
                  src={activeImage} 
                  alt={selectedCert.title} 
                  className="max-h-[45vh] lg:max-h-[65vh] w-auto object-contain rounded-xl shadow-md animate-fade-in"
                />
              )}
              
              {/* Supporting Images Switcher (Only if secondaryImg exists) */}
              {selectedCert.secondaryImg && (
                <div className="flex gap-2 mt-4 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0 shadow-inner">
                  <button 
                    onClick={() => setActiveImage(selectedCert.img)}
                    className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${
                      activeImage === selectedCert.img 
                        ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Main Image
                  </button>
                  <button 
                    onClick={() => setActiveImage(selectedCert.secondaryImg)}
                    className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${
                      activeImage === selectedCert.secondaryImg 
                        ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Transcript/Badge
                  </button>
                </div>
              )}
            </div>

            {/* Certificate Details */}
            <div className="w-full lg:w-96 p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 lg:overflow-y-auto lg:max-h-none">
              <div>
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">
                  {selectedCert.issuer}
                </span>
                <h3 className="text-base lg:text-lg font-extrabold text-slate-950 dark:text-white uppercase tracking-tight leading-snug mb-4">
                  {selectedCert.title}
                </h3>
                
                {/* Meta details */}
                <div className="space-y-2 mb-6 border-t border-b border-slate-100 dark:border-slate-850 py-4">
                  <div className="flex justify-between items-center text-[10px] lg:text-xs">
                    <span className="font-bold text-slate-400 uppercase tracking-wider">Tanggal Terbit</span>
                    <span className="font-black text-slate-900 dark:text-slate-200">{selectedCert.date}</span>
                  </div>
                  {selectedCert.credentialId && (
                    <div className="flex flex-col gap-1 text-[10px] lg:text-xs pt-1">
                      <span className="font-bold text-slate-400 uppercase tracking-wider">ID Kredensial</span>
                      <span className="font-mono text-slate-700 dark:text-slate-300 break-all select-all font-semibold bg-slate-50 dark:bg-slate-800/40 p-2 rounded-lg border border-slate-100 dark:border-slate-800/50">
                        {selectedCert.credentialId}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Keterangan</h4>
                  <p className="text-[11px] lg:text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {selectedCert.desc}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 mt-auto border-t border-slate-100 dark:border-slate-850">
                {selectedCert.pdf && (
                  <a 
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-[10px] lg:text-xs uppercase tracking-widest transition-colors shadow-lg shadow-blue-500/20"
                  >
                    <i className="bx bxs-file-pdf text-base"></i>
                    View PDF File
                  </a>
                )}
                {activeImage && (
                  <a 
                    href={activeImage}
                    download
                    className="flex items-center justify-center gap-2 w-full py-3 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-black text-[10px] lg:text-xs uppercase tracking-widest transition-colors"
                  >
                    <i className="bx bx-download text-base"></i>
                    Download Image
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;