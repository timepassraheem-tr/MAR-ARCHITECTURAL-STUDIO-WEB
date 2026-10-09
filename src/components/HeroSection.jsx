import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ onNavigate = () => {} }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#hero-main-content', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to('#hero-badges-grid', {
        yPercent: 40,
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
      className="relative min-h-screen w-full flex flex-col justify-center p-6 md:p-14 z-10 pt-28 md:pt-32 pb-12 pointer-events-none"
    >
      {/* Main Center Monumental Heading with subtle text-blur backing */}
      <div id="hero-main-content" className="my-auto max-w-4xl pointer-events-auto" style={{ willChange: 'transform' }}>
        
        {/* Brand Logo & Master Timeline Pill */}
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <img 
            src="/logo.png" 
            alt="MAR Architectural Studio Emblem" 
            className="w-12 h-12 md:w-16 md:h-16 max-w-[64px] max-h-[64px] object-contain drop-shadow-[0_0_20px_rgba(245,194,66,0.45)] hover:scale-105 transition-transform duration-300"
          />
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-[#F5C242]/60 shadow-[0_0_15px_rgba(245,194,66,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-ping" />
            <span className="text-gold-radiant text-[11px] md:text-xs font-sans uppercase tracking-widest font-bold">
              MASTER ARCHITECTURAL TIMELINE
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="text-[11px] md:text-xs font-sans text-white/90 hidden sm:inline">
              60-SECOND COMPLETE SCROLL JOURNEY
            </span>
          </div>
        </div>

        {/* Monumental Title with Normal White and Shining Gold */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight mb-4 leading-[0.98]">
          <span className="text-white inline-block drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">ARCHITECTURE</span> <br />
          <span className="text-gold-shining inline-block drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">IN MOTION.</span>
        </h1>

        {/* Subtitle with soft blur capsule in Normal White and Shining Gold accent */}
        <div className="inline-flex items-center gap-3 mb-6 px-3.5 py-1.5 rounded-sm backdrop-blur-md bg-black/35 border border-white/10">
          <div className="w-8 h-0.5 bg-[#F5C242] shadow-[0_0_10px_#F5C242]" />
          <p className="text-xs sm:text-sm font-sans tracking-wider text-white uppercase font-bold">
            STRUCTURAL CIVIL ENGINEERING • COMPUTATIONAL FORM • TURNKEY ERECTION
          </p>
        </div>

        {/* Transparent navigation pills */}
        <div id="hero-badges-grid" className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl text-[11px] font-sans pointer-events-auto" style={{ willChange: 'transform' }}>
          <button onClick={() => onNavigate('services')} className="p-3 rounded-sm backdrop-blur-md bg-black/25 border border-white/15 hover:border-[#F5C242] hover:shadow-[0_0_15px_rgba(245,194,66,0.3)] hover:bg-black/50 transition-all group text-left cursor-pointer">
            <span className="text-[#94a3b8] block text-[9px]">01 // PRACTICES</span>
            <span className="text-white group-hover:text-[#F5C242] font-semibold transition-colors">SERVICES →</span>
          </button>
          <button onClick={() => onNavigate('projects')} className="p-3 rounded-sm backdrop-blur-md bg-black/25 border border-white/15 hover:border-[#F5C242] hover:shadow-[0_0_15px_rgba(245,194,66,0.3)] hover:bg-black/50 transition-all group text-left cursor-pointer">
            <span className="text-[#94a3b8] block text-[9px]">02 // WORKS</span>
            <span className="text-white group-hover:text-[#F5C242] font-semibold transition-colors">PROJECTS →</span>
          </button>
          <button onClick={() => onNavigate('about')} className="p-3 rounded-sm backdrop-blur-md bg-black/25 border border-white/15 hover:border-[#F5C242] hover:shadow-[0_0_15px_rgba(245,194,66,0.3)] hover:bg-black/50 transition-all group text-left cursor-pointer">
            <span className="text-[#94a3b8] block text-[9px]">03 // STUDIO</span>
            <span className="text-white group-hover:text-[#F5C242] font-semibold transition-colors">ABOUT US →</span>
          </button>
          <button onClick={() => onNavigate('contact')} className="p-3 rounded-sm backdrop-blur-md bg-black/25 border border-white/15 hover:border-[#F5C242] hover:shadow-[0_0_15px_rgba(245,194,66,0.3)] hover:bg-black/50 transition-all group text-left cursor-pointer">
            <span className="text-[#94a3b8] block text-[9px]">04 // INQUIRY</span>
            <span className="text-white group-hover:text-[#F5C242] font-semibold transition-colors">CONTACT →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
