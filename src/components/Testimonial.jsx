import { useState } from "react";
import Swal from "sweetalert2";

const dummyTestimonials = [
    { id: 1, name: "Alexander Wright", position: "CTO @ TechFlow", content: "The level of professionalism and technical depth brought to our project was exceptional. Highly recommended.", avatar: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Sarah Jenkins", position: "Director of Aurora AI", content: "A rare find. Someone who understands both the business logic and the pixel-perfect implementation.", avatar: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "David Chen", position: "Founder of Nexus", content: "Transformed our legacy system into a modern masterpiece. The results speak for themselves.", avatar: "https://i.pravatar.cc/150?u=3" }
];

const Testimonials = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="testimonials" className="relative py-24 bg-slate-50 dark:bg-[#0f172a] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-20" data-aos="fade-up">
                    <span className="px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                        Client Testimonials
                    </span>
                    <h2 className="text-4xl md:text-6xl font-extrabold dark:text-white tracking-tighter uppercase mb-6">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">Industry Leaders</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed">
                        Don't just take my word for it. Here is what my collaborators and clients have to say about our journey.
                    </p>
                </div>

                {/* Grid Testimonials dengan Efek Premium */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {dummyTestimonials.map((t, i) => (
                        <div 
                            key={t.id} 
                            className="relative group p-8 bg-white dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-[2rem] hover:-translate-y-2 transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="flex gap-1 mb-6 text-blue-600">
                                {[...Array(5)].map((_, idx) => <i key={idx} className="bx bxs-star text-sm" />)}
                            </div>
                            
                            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-10 italic">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <img src={t.avatar} className="w-12 h-12 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all shadow-lg" alt="" />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                                        <i className="bx bxs-check-shield text-[10px] text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 dark:text-white uppercase text-sm tracking-tight">{t.name}</h4>
                                    <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">{t.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl overflow-hidden transition-all hover:scale-105"
                    >
                        <span className="relative z-10 uppercase tracking-widest text-xs">Share Your Story</span>
                        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;