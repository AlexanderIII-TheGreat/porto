import { useState } from "react";
import { portfolioData } from "../data/portofolioData.jsx";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="portofolio" className="py-24 bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-600 font-black tracking-[0.2em] text-xs uppercase mb-2 block">
            My Workspace
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-8 tracking-tighter uppercase">
            Portfolio & Skills
          </h2>

          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {["projects", "tech"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-[10px] font-black transition-all uppercase tracking-widest ${
                  activeTab === tab
                    ? "bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab === "projects" ? "Projects" : "Tech Stack"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Projects */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.tabs.projects.map((project, i) => (
              <div
                key={project.id}
                className="group flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-4">
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
                      <i className="bx bx-link-external text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="px-1">
                  <div className="flex gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold dark:text-white mb-1 uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-medium">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Tech Stack - FIX REDIS & MYSQL SIMULTANEOUSLY */}
        {activeTab === "tech" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-aos="fade-up">
            {portfolioData.tabs.techStacks.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-4 p-5 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-2xl group transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {/* Logika Universal: Jika isCustomIcon ada, tampilkan img. Jika tidak, tampilkan i (Boxicon) */}
                  {tech.isCustomIcon ? (
                    <img 
                      src={tech.icon} 
                      alt={tech.label} 
                      className="w-8 h-8 object-contain" 
                    />
                  ) : (
                    <i 
                      className={`${tech.icon} text-3xl`} 
                      style={{ color: tech.color }}
                    ></i>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {tech.label}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    Technology
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;