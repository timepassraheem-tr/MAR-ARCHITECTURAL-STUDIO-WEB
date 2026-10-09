import React, { useRef, useEffect, useState, useCallback } from 'react';
import { 
  Compass, 
  Maximize2, 
  Layers, 
  Activity, 
  ShieldCheck, 
  ChevronDown, 
  ArrowUpRight,
  Clock,
  Gauge,
  Sliders
} from 'lucide-react';

const CHAPTERS = [
  {
    id: 1,
    range: [0.00, 0.16],
    badge: "PHASE 01 // GENESIS",
    title: "THE MONOLITHIC HORIZON",
    subtitle: "Parametric Site Synthesis & Geotechnical Analysis",
    description: "Conceived at the threshold of natural topography and mathematical rigor. Every axis responds to solar azimuths, wind shear dynamics, and deep subterranean bedrock anchors.",
    specs: [
      { label: "COORDINATES", val: "40°42'46\"N 74°00'22\"W" },
      { label: "SITE AREA", val: "148,000 SQ.FT." },
      { label: "STRUCTURAL AXIS", val: "N-34° ORIENTATION" }
    ],
    highlight: "0.00s – 09.50s"
  },
  {
    id: 2,
    range: [0.16, 0.33],
    badge: "PHASE 02 // SKELETAL RIGOR",
    title: "POST-TENSIONED CANTILEVERS",
    subtitle: "High-Tensile Titanium Alloy & Carbon-Cured Concrete",
    description: "Daring 42-meter horizontal cantilevers suspended without vertical column intrusion. Post-tensioned tendon networks redistribute dynamic gravity loads back to the central reinforced shear core.",
    specs: [
      { label: "CANTILEVER REACH", val: "42.5 METERS" },
      { label: "CONCRETE CLASS", val: "C120 ULTRA-HIGH" },
      { label: "TOLERANCE", val: "± 1.2 MILLIMETERS" }
    ],
    highlight: "09.50s – 19.80s"
  },
  {
    id: 3,
    range: [0.33, 0.52],
    badge: "PHASE 03 // CLIMATE ENVELOPE",
    title: "BIOPHILIC FAÇADE DYNAMICS",
    subtitle: "Triple-Glazed Low-Iron Acoustic Curtain Wall",
    description: "Self-regulating kinetic louvers optimize interior thermal comfort while framing uninterrupted panoramic vistas. Ceramic frit patterns eliminate glare while celebrating raw natural daylight.",
    specs: [
      { label: "SHGC COEFFICIENT", val: "0.22 OPTICAL" },
      { label: "ACOUSTIC RATING", val: "STC 54 DECIBELS" },
      { label: "U-VALUE", val: "0.82 W/m²K" }
    ],
    highlight: "19.80s – 31.20s"
  },
  {
    id: 4,
    range: [0.52, 0.70],
    badge: "PHASE 04 // SPATIAL VOLUMETRICS",
    title: "INTERIOR SCULPTURAL VOIDS",
    subtitle: "Monolithic Honed Limestone & Bespoke Timber Volumes",
    description: "A continuous progression of compressed vestibules expanding into triple-height atrium galleries. Materials speak with honesty: brushed bronze accents, textured basalt, and silent acoustic micro-perforations.",
    specs: [
      { label: "ATRIUM CEILING", val: "18.4M VOLUMETRIC" },
      { label: "FINISH SYSTEM", val: "HONED TRAVERTINE" },
      { label: "AIR EXCHANGE", val: "100% HEPA FILTERED" }
    ],
    highlight: "31.20s – 42.00s"
  },
  {
    id: 5,
    range: [0.70, 0.86],
    badge: "PHASE 05 // PRECISION ERECTION",
    title: "ZERO-TOLERANCE CONSTRUCTION",
    subtitle: "Laser LiDAR Scanning & Robotic Pre-Assembly",
    description: "Assembled with surgical precision. Over 8,400 prefabricated volumetric modules erected via computerized tower crane telemetry with real-time strain-gauge feedback.",
    specs: [
      { label: "CRANE TELEMETRY", val: "GNSS GUIDED ±0.5MM" },
      { label: "SAFETY AUDIT", val: "2.4M SAFE HOURS" },
      { label: "EMBODIED CARBON", val: "-42% VS CONVENTIONAL" }
    ],
    highlight: "42.00s – 51.60s"
  },
  {
    id: 6,
    range: [0.86, 1.00],
    badge: "PHASE 06 // MONUMENTAL REALIZATION",
    title: "THE COMPLETED ARCHITECTURE",
    subtitle: "A Timeless Landmark Engineered for Generations",
    description: "The architectural journey reaches fruition. Form, structural engineering, and materiality coalesce into a permanent civic monument of timeless dignity and human aspiration.",
    specs: [
      { label: "STATUS", val: "COMMISSIONED / READY" },
      { label: "LIFESPAN SPEC", val: "150+ YEAR LIFECYCLE" },
      { label: "LEED STATUS", val: "PLATINUM CERTIFIED" }
    ],
    highlight: "51.60s – 60.00s"
  }
];

export default function CinematicScrollExperience({ onVideoReady, onLoadProgress }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const rafIdRef = useRef(null);

  // States
  const [duration, setDuration] = useState(60);
  const [currentTime, setCurrentTime] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('HOLD'); // ADVANCING, REVERSING, HOLD
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fps] = useState(60);

  // Smooth interpolation state stored in ref for max performance
  const targetTimeRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const isScrubbingRef = useRef(false);

  // Format seconds to mm:ss.ms
  const formatTimecode = (sec) => {
    if (isNaN(sec) || sec < 0) sec = 0;
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    const ms = Math.floor((sec % 1) * 100);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(ms).padStart(2, '0')}`;
  };

  // 1. Initialize Video Metadata
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set properties
    video.pause();
    video.currentTime = 0;
    video.muted = true;
    video.playsInline = true;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
      setVideoLoaded(true);
      if (onLoadProgress) onLoadProgress(90);
      if (onVideoReady) onVideoReady();
    };

    const handleCanPlay = () => {
      setVideoLoaded(true);
      if (onLoadProgress) onLoadProgress(100);
      if (onVideoReady) onVideoReady();
    };

    const handleProgress = () => {
      if (video.buffered.length > 0 && video.duration) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const percent = (bufferedEnd / video.duration) * 100;
        if (onLoadProgress) onLoadProgress(Math.min(99, Math.max(30, percent)));
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('progress', handleProgress);

    // Initial check if already ready
    if (video.readyState >= 2) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('progress', handleProgress);
    };
  }, [onLoadProgress, onVideoReady]);

  // 2. High-performance Scroll Calculation & RAF Loop
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    // Smooth RAF loop for buttery interpolation
    const updateLoop = () => {
      if (video && video.readyState >= 1) {
        const target = targetTimeRef.current;
        const current = video.currentTime;
        const diff = target - current;

        // Smooth dampening factor (0.15 gives responsiveness with anti-jitter smoothing)
        if (Math.abs(diff) > 0.005) {
          const step = diff * 0.15;
          const nextTime = current + step;
          
          // Clamp time within [0, video.duration]
          const clamped = Math.max(0, Math.min(video.duration || 60, nextTime));
          try {
            video.currentTime = clamped;
            setCurrentTime(clamped);
          } catch (e) {
            // Browser might throw if seeking is momentarily throttled
          }
        } else if (Math.abs(diff) > 0.001) {
          video.currentTime = target;
          setCurrentTime(target);
        }
      }
      rafIdRef.current = requestAnimationFrame(updateLoop);
    };

    rafIdRef.current = requestAnimationFrame(updateLoop);

    // Scroll listener calculates exact scroll progress through this section
    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalScrollable = container.offsetHeight - windowH;

      if (totalScrollable <= 0) return;

      // Distance scrolled within container
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      setScrollProgress(progress);

      // Determine scroll direction
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current + 2) {
        setScrollDirection('ADVANCING');
      } else if (currentScrollY < lastScrollYRef.current - 2) {
        setScrollDirection('REVERSING');
      } else {
        setScrollDirection('HOLD');
      }
      lastScrollYRef.current = currentScrollY;

      // Map progress directly to video duration dynamically!
      const totalDuration = video.duration || duration || 60;
      const calculatedTarget = progress * totalDuration;
      targetTimeRef.current = calculatedTarget;

      // Determine active chapter
      const chapIdx = CHAPTERS.findIndex(c => progress >= c.range[0] && progress <= c.range[1]);
      if (chapIdx !== -1) {
        setActiveChapterIndex(chapIdx);
      } else if (progress > 0.95) {
        setActiveChapterIndex(CHAPTERS.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [duration]);

  // Click teleport to chapter
  const jumpToChapter = (chapterIdx) => {
    const container = containerRef.current;
    if (!container) return;
    const chap = CHAPTERS[chapterIdx];
    const targetProgress = chap.range[0] + 0.02;
    const totalScrollable = container.offsetHeight - window.innerHeight;
    const containerTop = container.offsetTop;
    const targetScrollY = containerTop + (targetProgress * totalScrollable);
    
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  const currentChapter = CHAPTERS[activeChapterIndex] || CHAPTERS[0];

  return (
    <section 
      id="cinematic" 
      ref={containerRef} 
      className="relative w-full bg-[#08090b]"
      style={{ height: '800vh' }} // Generous 800vh provides fine tactile frame control over 60 seconds
    >
      {/* ==============================================================
          STICKY 100VH VIEWPORT
          Holds the full-screen cinematic video and parallax HUD layers
          ============================================================== */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-10 flex items-center justify-center">

        {/* LAYER 1: Master High-Quality Cinematic Video */}
        <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover select-none pointer-events-none"
            preload="auto"
            muted
            playsInline
            controls={false}
          >
            <source src="/MAR_CONS_VIDEO.mp4" type="video/mp4" />
            <source src="/MAR CONS VIDEO.mp4" type="video/mp4" />
            Your browser does not support high-definition video playback.
          </video>
        </div>

        {/* LAYER 2: Subtle Atmospheric Blueprint & Vignette Overlays */}
        {/* Subtle radial vignette that keeps architecture crisp while ensuring text legibility */}
        <div className="absolute inset-0 cinematic-vignette pointer-events-none" />
        
        {/* Fine architectural scanline & blueprint grid overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

        {/* Top & Bottom gradient protection for HUD readability */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

        {/* LAYER 3: Architectural HUD - Viewport Margins & Technical Crosshairs */}
        <div className="absolute inset-4 md:inset-8 pointer-events-none border border-white/5 flex flex-col justify-between">
          
          {/* Top Crosshair Row */}
          <div className="flex items-center justify-between p-2 md:p-4 text-[10px] md:text-xs font-mono text-[#94a3b8]/70">
            <div className="flex items-center gap-3">
              <span className="text-gold-radiant font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-ping" />
                TIMELINE ENGINE ACTIVE
              </span>
              <span className="hidden sm:inline-block text-white/20">|</span>
              <span className="hidden sm:inline-block">RES: 3840×2160 CINEMATIC 4K</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1 border border-white/10 rounded-sm">
                <Gauge className="w-3.5 h-3.5 text-white" />
                <span className="text-white font-mono">{fps} FPS</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1 border border-white/10 rounded-sm">
                <Clock className="w-3.5 h-3.5 text-[#F5C242] drop-shadow-[0_0_6px_rgba(245,194,66,0.5)]" />
                <span className="text-gold-radiant font-mono font-bold tracking-wider">
                  {formatTimecode(currentTime)}
                </span>
                <span className="text-white/40">/</span>
                <span className="text-white/60 font-mono">
                  {formatTimecode(duration)}
                </span>
              </div>
            </div>
          </div>

          {/* Center Blueprint Crosshair Markings */}
          <div className="relative w-full flex items-center justify-between px-2 text-[10px] font-mono text-white/20">
            <span>[ + X: 00.00 ]</span>
            <span>[ HORIZON REF 0.0° ]</span>
            <span>[ + Y: 00.00 ]</span>
          </div>

          {/* Bottom HUD Bar */}
          <div className="flex items-center justify-between p-2 md:p-4 text-[10px] md:text-xs font-mono text-[#94a3b8]/70">
            <div className="flex items-center gap-3">
              <span className="text-white/80 font-bold tracking-widest">MAR ARCHITECTURAL STUDIO</span>
              <span className="hidden md:inline-block text-white/30">•</span>
              <span className="hidden md:inline-block text-white font-bold tracking-wide">
                SCROLL STATUS: {scrollDirection}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white/50">SEQUENCE SCRUB:</span>
              <span className="text-gold-radiant font-bold">
                {(scrollProgress * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>

        {/* LAYER 4: Dynamic Synchronized Story Overlay (Changes with Scroll Timeline) */}
        <div className="absolute inset-x-6 md:inset-x-16 lg:inset-x-24 z-20 flex flex-col justify-center items-start max-w-4xl pointer-events-none transition-all duration-700 ease-out">
          
          {/* Badge & Timeline pill */}
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-[#111317]/80 backdrop-blur-md border border-[#F5C242]/60 text-gold-radiant text-[10px] md:text-xs font-mono uppercase tracking-widest shadow-md shadow-[#F5C242]/20 font-bold">
              {currentChapter.badge}
            </span>
            <span className="text-[11px] font-mono text-white/50 bg-black/40 px-2 py-0.5 border border-white/10">
              FRAME TIMELINE: {currentChapter.highlight}
            </span>
          </div>

          {/* Monumental Chapter Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-white mb-2 drop-shadow-2xl">
            {currentChapter.title}
          </h2>

          {/* Subtitle with gold accent line */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 md:w-12 h-0.5 bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />
            <p className="text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase text-white">
              {currentChapter.subtitle}
            </p>
          </div>

          {/* Curated Narrative Description */}
          <p className="text-xs sm:text-sm md:text-base text-[#e2e8f0]/90 max-w-2xl leading-relaxed mb-6 font-light drop-shadow-md">
            {currentChapter.description}
          </p>

          {/* Technical Structural Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 w-full max-w-2xl pointer-events-auto">
            {currentChapter.specs.map((spec, i) => (
              <div 
                key={i}
                className="glass-panel p-2.5 md:p-3 border border-white/10 hover:border-[#F5C242]/70 hover:shadow-[0_0_12px_rgba(245,194,66,0.25)] transition-all group"
              >
                <div className="text-[9px] md:text-[10px] font-mono text-[#94a3b8] uppercase tracking-wider mb-1">
                  {spec.label}
                </div>
                <div className="text-xs md:text-sm font-mono font-semibold text-white group-hover:text-[#F5C242] transition-colors">
                  {spec.val}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LAYER 5: Interactive Chapter Navigator & Timeline Progress Rail (Right Side) */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3 pointer-events-auto">
          <div className="text-[9px] font-mono text-right text-white/40 tracking-wider mb-1">
            NAVIGATE TIMELINE
          </div>
          {CHAPTERS.map((chap, idx) => {
            const isActive = activeChapterIndex === idx;
            return (
              <button
                key={chap.id}
                onClick={() => jumpToChapter(idx)}
                className={`group flex items-center justify-end gap-3 text-right transition-all cursor-pointer ${
                  isActive ? 'scale-105' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <span className={`text-[10px] font-mono transition-colors ${
                  isActive ? 'text-gold-radiant font-bold' : 'text-white/60 group-hover:text-white'
                }`}>
                  0{chap.id} {chap.title.split(' ')[0]}
                </span>
                <span className={`w-3 h-3 rounded-full border transition-all flex items-center justify-center ${
                  isActive 
                    ? 'border-[#F5C242] bg-[#F5C242]/30 shadow-[0_0_10px_rgba(245,194,66,0.5)] scale-125' 
                    : 'border-white/20 group-hover:border-white/60'
                }`}>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* LAYER 6: Bottom Scrubbing Rail & Master Timeline Progress Bar */}
        <div className="absolute bottom-6 md:bottom-8 inset-x-6 md:inset-x-12 z-30 pointer-events-auto flex flex-col gap-2">
          
          {/* Scrub Track */}
          <div className="relative w-full h-2 bg-black/60 backdrop-blur-md border border-white/15 rounded-none overflow-hidden flex items-center">
            {/* Active scrub fill with shining metallic shimmer */}
            <div 
              className="h-full bg-gradient-to-r from-[#F5C242] via-[#FFF5B8] to-white shadow-[0_0_15px_rgba(245,194,66,0.6)] transition-all duration-75"
              style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` }}
            />

            {/* Chapter demarcation ticks */}
            {CHAPTERS.map((chap, i) => (
              <div 
                key={i}
                className="absolute top-0 bottom-0 w-0.5 bg-white/30 z-10"
                style={{ left: `${chap.range[0] * 100}%` }}
                title={chap.title}
              />
            ))}
          </div>

          {/* Footer Controls & Instructions */}
          <div className="flex items-center justify-between text-[10px] md:text-xs font-mono text-[#94a3b8]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white/90">SCROLL DOWN TO ADVANCE • SCROLL UP TO REVERSE</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-block text-white/50">
                FRAME POSITION: <strong className="text-white">{formatTimecode(currentTime)}</strong> / {formatTimecode(duration)}
              </span>
              <a 
                href="#about"
                className="flex items-center gap-1 text-gold-radiant hover:text-[#FFF5B8] transition-colors"
              >
                <span>EXPLORE STUDIO</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
