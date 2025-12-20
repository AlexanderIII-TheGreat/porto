import aboutData from "../data/aboutData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header dengan Accent Line */}
                <div className="flex flex-col items-center mb-20" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-4 italic">
                        {aboutData.title.toUpperCase()}<span className="text-blue-600">.</span>
                    </h2>
                    <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-4"></div>
                    <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl font-medium uppercase tracking-widest text-sm">
                        {aboutData.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Profil Image dengan Efek Layering */}
                    <div className="lg:col-span-5 relative group" data-aos="fade-right">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-3 shadow-2xl">
                            <img 
                                src={aboutData.image} 
                                alt="Profile" 
                                className="rounded-xl w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" 
                            />
                        </div>
                    </div>

                    {/* Narrative & Personal Info */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {Object.entries(aboutData.aboutNarrative).map(([key, content], i) => (
                                <div key={key} className="space-y-4" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-blue-600 rounded-lg text-white shadow-lg shadow-blue-500/30">
                                            <i className={`bx ${content.icon} text-xl`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold dark:text-white">
                                            {key === 'whoAmI' ? 'Who Am I' : 'My Approach'}
                                        </h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {content.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bento Style Personal Info */}
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-10" data-aos="fade-up">
                            {aboutData.biodata.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                                    <i className={`${item.icon} text-2xl text-blue-600`}></i>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">{item.label}</p>
                                        <p className="text-sm font-semibold dark:text-white">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button 
                            onClick={() => Swal.fire({ title: "In Progress", text: "Resume is coming soon!", icon: "info" })}
                            className="w-fit flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 shadow-xl shadow-slate-200 dark:shadow-none"
                        >
                            <i className="bx bx-cloud-download text-xl"></i>
                            DOWNLOAD CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;