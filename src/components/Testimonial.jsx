import Swal from "sweetalert2";

const dummyTestimonials = [
    // Row 1 - Scroll Left
    { 
        id: 1, 
        name: "Alexander Wright", 
        position: "CTO @ TechFlow", 
        content: "Tingkat profesionalisme dan kedalaman teknis yang dihadirkan dalam proyek kami sangat luar biasa. Hasil kerjanya melampaui seluruh target kami." 
    },
    { 
        id: 2, 
        name: "Sarah Jenkins", 
        position: "Director @ Aurora AI", 
        content: "Penemuan langka. Seseorang yang sangat memahami logika bisnis backend yang rumit sekaligus detail implementasi frontend yang pixel-perfect." 
    },
    { 
        id: 3, 
        name: "David Chen", 
        position: "Founder @ Nexus", 
        content: "Berhasil mentransformasi sistem legacy kami menjadi sistem modern yang sangat andal dan cepat. Hasil kinerjanya benar-benar membuktikannya sendiri." 
    },
    { 
        id: 4, 
        name: "Budi Santoso", 
        position: "VP of Engineering @ TokoLaris", 
        content: "Arsitektur jaringan dan backend yang dibangun sangat kokoh, aman, dan mudah diskalakan saat lonjakan trafik tinggi. Sangat puas dengan hasilnya." 
    },
    // Row 2 - Scroll Right
    { 
        id: 5, 
        name: "Amanda Lim", 
        position: "Product Lead @ FinGo", 
        content: "Kemampuan komunikasi yang luar biasa ditambah kecepatan pengerjaan yang stabil. Proyek selesai tepat waktu dengan kualitas kode yang sangat bersih." 
    },
    { 
        id: 6, 
        name: "Michael Chang", 
        position: "Infrastructure Manager @ CloudVibe", 
        content: "Integrasi cloud dan troubleshooting routing yang diimplementasikan sangat profesional. Menghemat biaya infrastruktur kami hingga 30%." 
    },
    { 
        id: 7, 
        name: "Dewi Lestari", 
        position: "Co-Founder @ EduSmart", 
        content: "Sangat responsif dan solutif menghadapi kendala teknis yang kompleks. Kolaborasi kerja terbaik yang pernah kami miliki sepanjang tahun ini." 
    },
    { 
        id: 8, 
        name: "Rian Hidayat", 
        position: "Technical Director @ CyberShield", 
        content: "Standar keamanan kode dan pengujian yang diterapkan sangat tinggi. Keamanan platform kami meningkat secara signifikan setelah audit integrasi." 
    }
];

const Testimonials = () => {
    const row1 = dummyTestimonials.slice(0, 4);
    const row2 = dummyTestimonials.slice(4, 8);

    const handleShareStory = () => {
        Swal.fire({
            title: 'Share Your Story',
            html: `
                <div class="text-left font-sans">
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">Your Name</label>
                    <input id="swal-input-name" class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 dark:text-white text-xs mb-4 font-semibold outline-none focus:border-blue-500" placeholder="e.g. John Doe">
                    
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">Your Company / Position</label>
                    <input id="swal-input-pos" class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 dark:text-white text-xs mb-4 font-semibold outline-none focus:border-blue-500" placeholder="e.g. CEO @ Acme Inc">
                    
                    <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">Your Testimonial</label>
                    <textarea id="swal-input-content" rows="4" class="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 dark:text-white text-xs font-semibold outline-none focus:border-blue-500" placeholder="Write your collaborative experience..."></textarea>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Submit Testimonial',
            confirmButtonColor: '#2563eb',
            cancelButtonText: 'Cancel',
            customClass: {
                popup: 'rounded-3xl p-6 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 shadow-2xl',
                title: 'text-lg font-extrabold text-slate-900 dark:text-white uppercase tracking-tight',
                confirmButton: 'px-5 py-2.5 font-black rounded-xl text-[10px] uppercase tracking-widest',
                cancelButton: 'px-5 py-2.5 font-black rounded-xl text-[10px] uppercase tracking-widest'
            },
            preConfirm: () => {
                const name = document.getElementById('swal-input-name').value.trim();
                const pos = document.getElementById('swal-input-pos').value.trim();
                const content = document.getElementById('swal-input-content').value.trim();
                if (!name || !pos || !content) {
                    Swal.showValidationMessage('Please fill out all fields');
                    return false;
                }
                return { name, pos, content };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Thank You!',
                    text: 'Your testimonial has been submitted successfully for verification.',
                    icon: 'success',
                    confirmButtonColor: '#2563eb',
                    customClass: {
                        popup: 'rounded-3xl p-6 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 shadow-2xl',
                        title: 'text-lg font-extrabold text-slate-900 dark:text-white uppercase tracking-tight'
                    }
                });
            }
        });
    };

    return (
        <section id="testimonials" className="relative py-16 lg:py-24 bg-slate-50 dark:bg-[#0f172a] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-blue-600/5 blur-[100px] lg:blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-purple-600/5 blur-[100px] lg:blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-12 lg:mb-16 px-5" data-aos="fade-up">
                    <span className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                        Client Testimonials
                    </span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold dark:text-white tracking-tighter uppercase mb-4 leading-tight">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-400">Industry Leaders</span>
                    </h2>
                    <div className="h-1 w-16 lg:h-1.5 lg:w-20 bg-blue-600 rounded-full mb-4"></div>
                    <p className="text-[12px] lg:text-sm text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed uppercase tracking-wider">
                        Don't just take my word for it. Here is what my collaborators and clients have to say.
                    </p>
                </div>

                {/* Infinite Marquee Rows */}
                <div className="flex flex-col gap-6 lg:gap-8 overflow-hidden py-4 select-none relative w-full">
                    {/* Fade Gradient Overlays for smooth entry/exit edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-[#0f172a] pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-[#0f172a] pointer-events-none z-10" />

                    {/* Row 1 - Scroll Left */}
                    <div className="relative flex w-full overflow-hidden">
                        <div className="flex gap-6 animate-scroll-left w-max py-2">
                            {[...row1, ...row1, ...row1].map((t, idx) => (
                                <div 
                                    key={`r1-${t.id}-${idx}`}
                                    className="w-[280px] sm:w-[350px] lg:w-[400px] shrink-0 p-6 lg:p-8 bg-white dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800 rounded-3xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl dark:hover:shadow-blue-900/10 hover:-translate-y-1 relative group"
                                >
                                    <div className="flex gap-1 mb-3 text-blue-600">
                                        {[...Array(5)].map((_, sIdx) => (
                                            <i key={sIdx} className="bx bxs-star text-[10px] sm:text-xs" />
                                        ))}
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-semibold leading-relaxed mb-6 italic">
                                        "{t.content}"
                                    </p>
                                    <div className="border-t border-slate-100 dark:border-slate-700/50 pt-4 mt-auto">
                                        <h4 className="font-black text-slate-900 dark:text-white uppercase text-[10px] sm:text-xs tracking-wider">
                                            {t.name}
                                        </h4>
                                        <p className="text-[8px] sm:text-[9px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest mt-0.5">
                                            {t.position}
                                        </p>
                                    </div>
                                    <i className="bx bxs-quote-right absolute top-6 right-6 text-3xl sm:text-4xl text-slate-100 dark:text-slate-800/20 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Scroll Right */}
                    <div className="relative flex w-full overflow-hidden">
                        <div className="flex gap-6 animate-scroll-right w-max py-2">
                            {[...row2, ...row2, ...row2].map((t, idx) => (
                                <div 
                                    key={`r2-${t.id}-${idx}`}
                                    className="w-[280px] sm:w-[350px] lg:w-[400px] shrink-0 p-6 lg:p-8 bg-white dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800 rounded-3xl transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl dark:hover:shadow-blue-900/10 hover:-translate-y-1 relative group"
                                >
                                    <div className="flex gap-1 mb-3 text-blue-600">
                                        {[...Array(5)].map((_, sIdx) => (
                                            <i key={sIdx} className="bx bxs-star text-[10px] sm:text-xs" />
                                        ))}
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-semibold leading-relaxed mb-6 italic">
                                        "{t.content}"
                                    </p>
                                    <div className="border-t border-slate-100 dark:border-slate-700/50 pt-4 mt-auto">
                                        <h4 className="font-black text-slate-900 dark:text-white uppercase text-[10px] sm:text-xs tracking-wider">
                                            {t.name}
                                        </h4>
                                        <p className="text-[8px] sm:text-[9px] text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest mt-0.5">
                                            {t.position}
                                        </p>
                                    </div>
                                    <i className="bx bxs-quote-right absolute top-6 right-6 text-3xl sm:text-4xl text-slate-100 dark:text-slate-800/20 pointer-events-none group-hover:scale-110 transition-transform duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12 px-5">
                    <button 
                        onClick={handleShareStory}
                        className="group relative inline-flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-xl lg:rounded-2xl overflow-hidden transition-all shadow-xl"
                    >
                        <span className="relative z-10 uppercase tracking-widest text-[10px] lg:text-xs">Share Your Story</span>
                        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(-33.33%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scroll-left 45s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 45s linear infinite;
                }
                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;