import React, { useEffect, useState } from 'react';
import { Compass, ShieldCheck, Film } from 'lucide-react';

export default function LoadingScreen({ isLoaded, progress, onEnter }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      // Safety timeout so user is never locked out if offline or throttled
      const fallback = setTimeout(() => {
        setShowButton(true);
      }, 2500);
      return () => clearTimeout(fallback);
    }
  }, [progress]);

  if (isLoaded) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090b] text-[#f8fafc] px-6 select-none transition-opacity duration-700">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
      
      {/* Corner crosshairs */}
      <div className="absolute top-8 left-8 text-xs font-mono text-gold-radiant tracking-widest flex items-center gap-2">
        <span>+ 01.000 // SYS.INIT</span>
      </div>
      <div className="absolute top-8 right-8 text-xs font-mono text-[#64748b] tracking-widest">
        <span>LAT: 40°42'46"N | LNG: 74°00'22"W</span>
      </div>
      <div className="absolute bottom-8 left-8 text-xs font-mono text-[#64748b] tracking-widest">
        <span>MAR ARCHITECTURAL STUDIO // ARCHITECTURAL TIMELINE</span>
      </div>
      <div className="absolute bottom-8 right-8 text-xs font-mono text-gold-radiant tracking-widest">
        <span>60s CINEMATIC RENDERING ENGINE</span>
      </div>

      {/* Main center loader */}
      <div className="relative z-10 max-w-md w-full flex flex-col items-center text-center">
        {/* Animated architectural glyph */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="w-24 h-24 border border-[#F5C242]/40 rounded-full animate-spin duration-3000 border-t-[#F5C242] shadow-[0_0_20px_rgba(245,194,66,0.3)] flex items-center justify-center">
            <div className="w-16 h-16 border border-white/10 rounded-full border-b-white animate-spin duration-1500" />
          </div>
          <Compass className="absolute w-8 h-8 text-[#F5C242] drop-shadow-[0_0_12px_rgba(245,194,66,0.7)] animate-pulse" />
        </div>

        <div className="text-xs uppercase font-mono tracking-ultra text-gold-radiant mb-2 font-bold">
          MAR ARCHITECTURAL STUDIO • ARCHITECTURE & ENGINEERING
        </div>

        <h1 className="text-2xl md:text-3xl font-serif tracking-widest text-white mb-3">
          CINEMATIC TIMELINE
        </h1>

        <p className="text-xs md:text-sm text-[#94a3b8] max-w-sm mb-8 font-light leading-relaxed">
          Calibrating 60-second high-precision architectural film. Your scroll position will directly scrub the timeline.
        </p>

        {/* Progress bar container */}
        <div className="w-full bg-[#111317] border border-white/10 p-1 rounded-none mb-4 relative">
          <div 
            className="h-1.5 bg-gradient-to-r from-[#F5C242] via-[#FFF5B8] to-white shadow-[0_0_15px_rgba(245,194,66,0.5)] transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, Math.max(5, progress))}%` }}
          />
        </div>

        {/* Status indicator */}
        <div className="flex items-center justify-between w-full text-[11px] font-mono text-[#94a3b8] mb-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            {progress < 100 ? 'BUFFERING CINEMATIC FRAMES...' : 'CINEMATIC SEQUENCE READY'}
          </span>
          <span className="text-gold-radiant font-bold">{Math.round(progress)}%</span>
        </div>

        {/* Enter CTA */}
        {showButton ? (
          <button
            onClick={onEnter}
            className="gold-shining-btn group relative px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#F5C242]/30 flex items-center gap-3 active:scale-95 cursor-pointer rounded-sm"
          >
            <Film className="w-4 h-4" />
            <span>ENTER CINEMATIC EXPERIENCE</span>
            <span className="text-xs font-mono text-black/70">→</span>
          </button>
        ) : (
          <div className="text-[11px] font-mono text-[#64748b] tracking-wider animate-pulse flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F5C242] drop-shadow-[0_0_6px_rgba(245,194,66,0.5)]" />
            <span>PREPARING HARDWARE ACCELERATION...</span>
          </div>
        )}
      </div>
    </div>
  );
}
