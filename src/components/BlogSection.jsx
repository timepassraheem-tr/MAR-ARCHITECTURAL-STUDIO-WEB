import React from 'react';
import HeroVideoBackground from './HeroVideoBackground';

export default function BlogSection() {
  return (
    <div className="w-full bg-[#0f1115] text-[#f8fafc]">
      {/* 1. HERO SECTION WITH EXPANDED LOOPING VIDEO (Broader to the down) */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-32 sm:pt-40 pb-20 overflow-hidden">
        {/* Dedicated Looping Hero Video (Timeline: 18s - 34s) */}
        <HeroVideoBackground startTime={18} endTime={34} />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-[#F5C242]/70 text-[10px] sm:text-xs font-sans text-gold-radiant font-bold mb-6 shadow-[0_0_15px_rgba(245,194,66,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-ping" />
            <span>MAR ARCHITECTURAL STUDIO // PERSPECTIVES</span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight mb-5 text-white leading-[1.05]">
            THE <span className="text-gold-shining">BLOG.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
            Architectural perspectives, civil engineering breakthroughs, and permanent landmark discourse.
          </p>
        </div>
      </section>

      {/* 2. MATTE BLACK BODY CONTAINER WITH CLEAN MINIMALIST PLACEHOLDER (NO EXTRA CONTENT) */}
      <section className="relative w-full bg-[#0f1115] py-20 px-4 sm:px-8 md:px-14 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center py-12">
          <div className="w-16 h-0.5 bg-[#F5C242] mx-auto mb-6 shadow-[0_0_10px_#F5C242]" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wider uppercase mb-3">
            Articles & Case Studies Coming Soon
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-sans max-w-md mx-auto">
            Stay tuned as we document upcoming structural engineering breakthroughs and computational design publications.
          </p>
        </div>
      </section>
    </div>
  );
}
