import React from 'react';
import { Compass, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onNavigate = () => {} }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative w-full bg-[#08090b] text-[#94a3b8] border-t border-slate-200/20 pt-16 pb-20 sm:pb-24 font-sans text-xs z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand info with exact matching header logo, title, and white color */}
          <div className="md:col-span-5 space-y-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 max-w-[56px] max-h-[56px] flex items-center justify-center shrink-0 overflow-hidden">
                <img src="/logo.png" alt="MAR Architectural Studio Logo" className="w-full h-full max-w-full max-h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-sans font-extrabold tracking-tight text-white whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] group-hover:text-[#F5C242] transition-colors">
                MAR Architectural Studio
              </span>
            </button>
            <p className="text-xs font-sans text-[#cbd5e1] max-w-sm leading-relaxed">
              Integrated architectural design, structural civil engineering coordination, and turnkey project execution for civic, commercial, and luxury residential commissions.
            </p>
            <div className="text-xs font-sans text-gold-radiant font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F5C242]" />
              <span>FEA NONLINEAR MODELING & PE-STAMPED ENGINEERING</span>
            </div>
          </div>

          {/* Quick Links with Golden headings and modern sans typography */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-sans font-bold text-gold-radiant uppercase tracking-wider">NAVIGATION</div>
            <ul className="space-y-2.5 text-xs font-sans font-medium text-slate-300">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#F5C242] transition-colors cursor-pointer text-left">01 // Home</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-[#F5C242] transition-colors cursor-pointer text-left">02 // Services</button></li>
              <li><button onClick={() => onNavigate('projects')} className="hover:text-[#F5C242] transition-colors cursor-pointer text-left">03 // Projects</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-[#F5C242] transition-colors cursor-pointer text-left">04 // Blog</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#F5C242] transition-colors cursor-pointer text-left">05 // About</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#F5C242] transition-colors cursor-pointer text-left">06 // Contact Us</button></li>
            </ul>
          </div>

          {/* Studio Owner & Direct Engagement */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-sans font-bold text-gold-radiant uppercase tracking-wider">STUDIO LEADERSHIP</div>
            <div className="space-y-1.5 text-xs font-sans text-[#cbd5e1]">
              <div className="font-bold text-white text-sm">Mohammed Abdul Rahman</div>
              <div className="text-white text-[11px] font-mono font-bold">OWNER & PRINCIPAL ARCHITECT</div>
              <div className="pt-1 text-slate-300">
                Phone / WhatsApp:{' '}
                <a href="https://wa.me/919985185209" target="_blank" rel="noopener noreferrer" className="text-[#F5C242] hover:underline font-bold">
                  +91 9985185209
                </a>
              </div>
              <div className="text-slate-300">
                Gmail:{' '}
                <a href="mailto:mararchitecturalstudio@gmail.com" className="text-white hover:underline font-bold">
                  mararchitecturalstudio@gmail.com
                </a>
              </div>
              <div className="text-[11px] text-slate-400">Direct Consultation & Private Commissions</div>
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 border border-white/15 hover:border-[#F5C242] text-white hover:text-[#F5C242] transition-all flex items-center gap-2 cursor-pointer group bg-black/60 rounded-sm shadow-md hover:shadow-[0_0_12px_rgba(245,194,66,0.3)]"
              title="Return to top"
            >
              <span className="text-xs font-sans font-bold tracking-wider">TOP</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-[#F5C242]" />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#94a3b8]">
          <div>
            © {new Date().getFullYear()} MAR ARCHITECTURAL STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#F5C242] transition-colors">TERMS OF PRACTICE</a>
            <a href="#" className="hover:text-[#F5C242] transition-colors">LEGAL DOSSIER</a>
            <a href="#" className="hover:text-[#F5C242] transition-colors">PRIVACY PROTOCOL</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
