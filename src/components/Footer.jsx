import footerData from "../data/footerData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0f172a] pt-16 pb-12 border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5">
            <h3 className="text-2xl font-black tracking-tighter dark:text-white uppercase mb-6">
              {footerData.brand.name}<span className="text-blue-600">.</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm text-sm font-medium">
              {footerData.brand.description}
            </p>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Menu</h4>
            <ul className="space-y-3">
              {footerData.navigation.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-all duration-300 font-bold text-xs uppercase tracking-tight">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Social Connect</h4>
            <div className="flex gap-3">
              {footerData.socials.map((social, index) => (
                <Tippy key={index} content={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 hover:text-blue-600 dark:hover:text-white transition-all duration-300"
                  >
                    <i className={`${social.icon} text-lg`} />
                  </a>
                </Tippy>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            {footerData.copyright}
          </p>
          <div className="flex gap-8">
            {footerData.legalLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-[10px] font-black text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
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