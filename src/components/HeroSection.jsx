import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroVideoBackground from './HeroVideoBackground';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ onNavigate = () => {} }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.to('#hero-main-content', {
        yPercent: isMobile ? 8 : 25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to('#hero-badges-grid', {
        yPercent: isMobile ? 12 : 40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-center px-4 sm:px-8 md:px-14 z-10 pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Dedicated Hero Looping Video Background (Scene: 0s to 18s) */}
      <HeroVideoBackground startTime={0} endTime={18} />

      {/* Main Center Monumental Heading with subtle text-blur backing */}
      <div id="hero-main-content" className="my-auto max-w-4xl relative z-10 pointer-events-auto" style={{ willChange: 'transform' }}>
        
        {/* Brand Logo & Master Timeline Pill */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <img 
            src="/logo.png" 
            alt="MAR Architectural Studio Emblem" 
            className="w-10 h-10 sm:w-14 sm:h-14 max-w-[56px] max-h-[56px] object-contain drop-shadow-[0_0_20px_rgba(245,194,66,0.45)] hover:scale-105 transition-transform duration-300"
          />
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/50 border border-[#F5C242]/70 shadow-[0_0_15px_rgba(245,194,66,0.3)] flex-wrap">
            <span className="w-2 h-2 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-ping shrink-0" />
            <span className="text-gold-radiant text-[10px] sm:text-xs font-sans uppercase tracking-widest font-bold">
              PERMANENT CIVIC & LUXURY LANDMARKS
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="text-[10px] sm:text-xs font-sans text-white/90 hidden sm:inline">
              ARCHITECTURAL ENGINEERING & GENERAL CONTRACTING
            </span>
          </div>
        </div>

        {/* Monumental Title with Normal White and Shining Gold */}
        <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight mb-4 leading-[1.02] break-words">
          <span className="text-white inline-block drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">ARCHITECTURE</span> <br />
          <span className="text-gold-shining inline-block drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">IN MOTION.</span>
        </h1>

        {/* Subtitle with soft blur capsule in Normal White and Shining Gold accent */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 px-3 sm:px-3.5 py-1.5 rounded-sm backdrop-blur-md bg-black/40 border border-white/10 max-w-full">
          <div className="w-6 sm:w-8 h-0.5 bg-[#F5C242] shadow-[0_0_10px_#F5C242] shrink-0" />
          <p className="text-[10px] sm:text-xs md:text-sm font-sans tracking-wider text-white uppercase font-bold leading-relaxed">
            COMPUTATIONAL FORM • STRUCTURAL CIVIL RIGOR • TURNKEY ERECTION
          </p>
        </div>

        {/* Primary and Secondary Action CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 mb-8">
          <button
            onClick={() => onNavigate('projects')}
            className="gold-shining-btn px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 rounded-sm shadow-xl shadow-[#F5C242]/30 cursor-pointer"
          >
            <span>EXPLORE OUR PROJECTS</span>
            <span className="text-base font-normal">→</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-[#F5C242] border border-white/25 hover:border-[#F5C242] bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-sm transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>DISCUSS YOUR PROJECT</span>
          </button>
        </div>

        {/* Quick Discipline Navigation Pills */}
        <div id="hero-badges-grid" className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-2xl text-[10px] sm:text-[11px] font-sans pointer-events-auto" style={{ willChange: 'transform' }}>
          <button onClick={() => onNavigate('services')} className="p-2.5 sm:p-3 rounded-sm backdrop-blur-md bg-black/30 border border-white/15 hover:border-[#F5C242] hover:shadow-[0_0_15px_rgba(245,194,66,0.3)] hover:bg-black/50 transition-all group text-left cursor-pointer">
            <span className="text-slate-400 block text-[8px] sm:text-[9px]">01 // PRACTICES</span>
            <span className="text-white group-hover:text-[#F5C242] font-semibold transition-colors">SERVICES →</span>
          </button>
          <button onClick={() => onNavigate('projects')} className="p-2.5 sm:p-3 rounded-sm backdrop-blur-md bg-black/30 border border-white/15 hover:border-[#F5C242] hover:shadow-[0_0_15px_rgba(245,194,66,0.3)] hover:bg-black/50 transition-all group text-left cursor-pointer">
            <span className="text-slate-400 block text-[8px] sm:text-[9px]">02 // WORKS</span>
            <span className="text-white group-hover:text-[#F5C242] font-semibold transition-colors">PORTFOLIO →</span>
          </button>
          <button onClick={() => onNavigate('about')} className="p-2.5 sm:p-3 rounded-sm backdrop-blur-md bg-black/30 border border-white/15 hover:border-[#F5C242] hover:shadow-[0_0_15px_rgba(245,194,66,0.3)] hover:bg-black/50 transition-all group text-left cursor-pointer">
            <span className="text-slate-400 block text-[8px] sm:text-[9px]">03 // STUDIO</span>
            <span className="text-white group-hover:text-[#F5C242] font-semibold transition-colors">ABOUT US →</span>
          </button>
          <button onClick={() => onNavigate('contact')} className="p-2.5 sm:p-3 rounded-sm backdrop-blur-md bg-black/30 border border-white/15 hover:border-[#F5C242] hover:shadow-[0_0_15px_rgba(245,194,66,0.3)] hover:bg-black/50 transition-all group text-left cursor-pointer">
            <span className="text-slate-400 block text-[8px] sm:text-[9px]">04 // INQUIRY</span>
            <span className="text-white group-hover:text-[#F5C242] font-semibold transition-colors">CONTACT →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
