import { useState } from "react";
import contactData from "../data/contactData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Sisi Kiri: Branding Kontak */}
          <div className="lg:col-span-5" data-aos="fade-right">
            <h2 className="text-3xl lg:text-5xl font-black dark:text-white mb-4 lg:mb-6 leading-tight">
              LET'S BUILD SOMETHING <span className="text-blue-600 italic">GREAT.</span>
            </h2>
            <p className="text-sm lg:text-lg text-slate-500 dark:text-slate-400 font-medium mb-8 lg:mb-10 leading-relaxed">
              Punya ide menarik atau butuh partner development? Mari ngobrol lewat platform favoritmu.
            </p>
            
            <div className="space-y-3 lg:space-y-4">
              {contactData.socials.map((item, i) => (
                <a key={i} href={item.href} className="flex items-center justify-between p-4 lg:p-6 bg-white dark:bg-slate-800 rounded-2xl lg:rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 group">
                  <div className="flex items-center gap-3 lg:gap-5">
                    <div className="w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl lg:rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <i className={`${item.icon} text-lg lg:text-2xl`} />
                    </div>
                    <div>
                      <h4 className="text-sm lg:text-base font-bold dark:text-white">{item.label}</h4>
                      <p className="text-[10px] lg:text-xs text-slate-400 font-medium truncate max-w-[150px] lg:max-w-none">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <i className="bx bx-link-external text-slate-300 group-hover:text-blue-600 text-sm lg:text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: Modern Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="p-6 lg:p-10 bg-white dark:bg-slate-800 rounded-3xl lg:rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-700">
              <form className="space-y-4 lg:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-1.5 lg:space-y-2">
                    <label className="text-[9px] lg:text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 dark:bg-slate-900 rounded-xl lg:rounded-2xl border-none focus:ring-2 focus:ring-blue-600 dark:text-white text-sm font-medium transition-all" />
                  </div>
                  <div className="space-y-1.5 lg:space-y-2">
                    <label className="text-[9px] lg:text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 dark:bg-slate-900 rounded-xl lg:rounded-2xl border-none focus:ring-2 focus:ring-blue-600 dark:text-white text-sm font-medium transition-all" />
                  </div>
                </div>
                <div className="space-y-1.5 lg:space-y-2">
                  <label className="text-[9px] lg:text-xs font-black uppercase tracking-widest text-slate-400 ml-1">How can I help?</label>
                  <textarea rows="3" lg:rows="4" placeholder="Describe your project..." className="w-full px-5 py-3 lg:px-6 lg:py-4 bg-slate-50 dark:bg-slate-900 rounded-xl lg:rounded-2xl border-none focus:ring-2 focus:ring-blue-600 dark:text-white text-sm font-medium transition-all"></textarea>
                </div>
                <button 
                   type="button"
                   onClick={() => Swal.fire({ title: 'Success!', text: 'Message Sent', icon: 'success' })}
                   className="group relative w-full inline-flex items-center justify-center px-8 py-4 lg:py-5 font-black text-white bg-blue-600 rounded-xl lg:rounded-2xl overflow-hidden transition-all"
                >
                  <span className="relative flex items-center gap-2 text-xs lg:text-base">
                    SEND MESSAGE <i className="bx bx-paper-plane text-lg lg:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Contact;