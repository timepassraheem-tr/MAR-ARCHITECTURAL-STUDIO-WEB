import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

export default function Navbar({ 
  activePage = 'home', 
  onNavigate = () => {}, 
  isAutoScrolling = false, 
  toggleAutoScroll = () => {} 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "services", label: "SERVICES" },
    { id: "projects", label: "PROJECTS" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT US" },
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-black/60 backdrop-blur-md border-b border-white/10 ${
          isScrolled 
            ? 'py-1.5 md:py-2 shadow-2xl bg-black/85 backdrop-blur-lg' 
            : 'py-2 md:py-2.5 shadow-lg'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 flex items-center justify-between gap-3">
          
          {/* Brand Logo with Official MAR Emblem */}
          <button 
            onClick={() => handleLinkClick('home')} 
            className="group flex items-center gap-2.5 sm:gap-3 select-none shrink-0 text-left cursor-pointer"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 max-w-[48px] max-h-[48px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0 overflow-hidden">
              <img 
                src="/logo.png" 
                alt="MAR Architectural Studio Logo" 
                className="w-full h-full max-w-full max-h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" 
              />
            </div>
            <span className="text-sm sm:text-base md:text-lg font-sans font-extrabold tracking-tight text-white group-hover:text-[#F5C242] transition-colors whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              MAR Architectural Studio
            </span>
          </button>

          {/* Desktop Nav Links: 5 Clean Main Pages in Shining Gold */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-xs xl:text-sm font-sans font-bold tracking-wider uppercase relative py-1 transition-all duration-300 flex items-center gap-1.5 cursor-pointer group whitespace-nowrap ${
                    isActive 
                      ? 'text-[#F5C242] drop-shadow-[0_0_16px_rgba(245,194,66,0.85)] font-extrabold' 
                      : 'text-slate-300 hover:text-[#F5C242] hover:drop-shadow-[0_0_8px_rgba(245,194,66,0.5)]'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-pulse" />}
                  <span>{link.label}</span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#F5C242] shadow-[0_0_8px_#F5C242] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              );
            })}
          </nav>

          {/* Right Action Area: Auto Scroll Button + Inquire Button + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Cinematic Auto Scroll Button */}
            <button
              onClick={toggleAutoScroll}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 rounded-sm border whitespace-nowrap cursor-pointer active:scale-95 shadow-sm ${
                isAutoScrolling
                  ? 'bg-white/20 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                  : 'bg-black/50 border-white/20 text-[#cbd5e1] hover:border-[#F5C242] hover:text-[#F5C242] hover:shadow-[0_0_12px_rgba(245,194,66,0.3)]'
              }`}
              title={isAutoScrolling ? "Click to Pause Cinematic Auto-Scroll" : "Click to Start Cinematic Auto-Scroll"}
            >
              {isAutoScrolling ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <Pause className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">AUTO SCROLLING</span>
                  <span className="sm:hidden">PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#F5C242] filter drop-shadow-[0_0_6px_rgba(245,194,66,0.6)]" />
                  <span className="hidden sm:inline">AUTO SCROLL</span>
                  <span className="sm:hidden">AUTO</span>
                </>
              )}
            </button>

            {/* Inquire CTA Button in Shining Metallic Gold */}
            <button
              onClick={() => handleLinkClick('contact')}
              className="gold-shining-btn px-4 py-2 sm:px-5 sm:py-2 text-[11px] sm:text-xs tracking-wider uppercase flex items-center gap-1.5 rounded-sm whitespace-nowrap shrink-0 cursor-pointer active:scale-95 shadow-[0_0_20px_rgba(245,194,66,0.5)]"
            >
              <span>INQUIRE</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 border border-white/15 text-white hover:text-[#F5C242] transition-colors rounded-sm cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#08090b]/98 backdrop-blur-2xl flex flex-col justify-center px-8 lg:hidden animate-fadeIn">
          <div className="text-xs font-sans font-bold text-white tracking-widest uppercase mb-6 flex items-center justify-between">
            <span>MAR ARCHITECTURAL STUDIO</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 text-white/60 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-lg font-sans font-bold transition-colors flex items-center justify-between border-b border-white/10 pb-3 text-left ${
                    isActive ? 'text-[#F5C242] drop-shadow-[0_0_12px_rgba(245,194,66,0.6)]' : 'text-white hover:text-[#F5C242]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-mono text-white/40">0{idx + 1}.</span>
                    <span>{link.label}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#F5C242]' : 'text-white'}`} />
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                toggleAutoScroll();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 border border-white/30 bg-white/10 text-white font-sans font-bold text-center text-xs tracking-wider uppercase block rounded-sm"
            >
              {isAutoScrolling ? 'PAUSE AUTO SCROLL' : 'START AUTO SCROLL'}
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="gold-shining-btn w-full py-3 text-center text-xs tracking-wider uppercase block rounded-sm shadow-lg"
            >
              COMMISSION A LANDMARK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
