import footerData from "../data/footerData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0f172a] pt-12 lg:pt-16 pb-8 lg:pb-12 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5 text-center md:text-left">
            <h3 className="text-xl lg:text-2xl font-black tracking-tighter dark:text-white uppercase mb-4 lg:mb-6">
              {footerData.brand.name}<span className="text-blue-600">.</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0 text-xs lg:text-sm font-medium">
              {footerData.brand.description}
            </p>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4 lg:mb-6">Menu</h4>
            <ul className="space-y-2 lg:space-y-3">
              {footerData.navigation.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-all duration-300 font-bold text-[10px] lg:text-xs uppercase tracking-tight">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h4 className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4 lg:mb-6">Social Connect</h4>
            <div className="flex gap-2 lg:gap-3">
              {footerData.socials.map((social, index) => (
                <Tippy key={index} content={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-lg lg:rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-blue-600 dark:hover:text-white transition-all duration-300"
                  >
                    <i className={`${social.icon} text-base lg:text-lg`} />
                  </a>
                </Tippy>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6">
          <p className="text-slate-400 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-center">
            {footerData.copyright}
          </p>
          <div className="flex gap-4 lg:gap-8 justify-center">
            {footerData.legalLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-[8px] lg:text-[10px] font-black text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;