import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import GlobalVideoBackground from './components/GlobalVideoBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import EngineeringShowcase from './components/EngineeringShowcase';
import ProcessSection from './components/ProcessSection';
import TestimonialsAndAwards from './components/TestimonialsAndAwards';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

// Unique video scrubbing ranges per page starting from different points
const PAGE_TIME_RANGES = {
  home: [0, 60],        // Full 0.0s to 60.0s complete architectural journey
  services: [8, 26],    // Starts at 8.0s (algorithmic planning & dynamic structural forms)
  projects: [22, 38],   // Starts at 22.0s (structural forms & built monuments)
  about: [34, 48],      // Starts at 34.0s (engineering precision & atelier details)
  contact: [48, 60],    // Starts at 48.0s (finished exterior monument landmark)
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const lenisRef = useRef(null);
  const autoScrollRafRef = useRef(null);

  // Initialize Lenis with native autoRaf for ultra super smooth 60/120fps scrolling
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.0,
        autoRaf: true,
        infinite: false,
      });

      lenisRef.current = lenis;

      // Synchronize Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  // Sync hash routing on initial load and back/forward navigation
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'projects', 'about', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };

    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  // Cinematic Auto-Scroll Engine across all pages (seamlessly driven via Lenis)
  useEffect(() => {
    if (!isAutoScrolling) {
      if (autoScrollRafRef.current) cancelAnimationFrame(autoScrollRafRef.current);
      return;
    }

    let lastTimestamp = performance.now();
    const scrollSpeed = 1.6; // Ultra creamy cinematic velocity (pixels per 60fps frame)

    const step = (now) => {
      const delta = Math.min(32, now - lastTimestamp);
      lastTimestamp = now;

      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const maxScroll = docH - winH;
      const currentScroll = lenisRef.current ? lenisRef.current.scroll : window.scrollY;

      if (currentScroll >= maxScroll - 4) {
        // Gently stop when bottom of page is reached
        setIsAutoScrolling(false);
        return;
      }

      const increment = scrollSpeed * (delta / 16.66);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(currentScroll + increment, { immediate: true });
      } else {
        window.scrollBy(0, increment);
      }

      autoScrollRafRef.current = requestAnimationFrame(step);
    };

    autoScrollRafRef.current = requestAnimationFrame(step);

    // Gently pause auto-scroll if user manually scrolls, touches or presses keys
    const pauseOnInteraction = (e) => {
      if (e.isTrusted) {
        setIsAutoScrolling(false);
      }
    };

    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space'].includes(e.code)) {
        setIsAutoScrolling(false);
      }
    };

    window.addEventListener('wheel', pauseOnInteraction, { passive: true });
    window.addEventListener('touchstart', pauseOnInteraction, { passive: true });
    window.addEventListener('keydown', handleKeyDown, { passive: true });

    return () => {
      if (autoScrollRafRef.current) cancelAnimationFrame(autoScrollRafRef.current);
      window.removeEventListener('wheel', pauseOnInteraction);
      window.removeEventListener('touchstart', pauseOnInteraction);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAutoScrolling]);

  const toggleAutoScroll = () => {
    setIsAutoScrolling(prev => !prev);
  };

  // Ultra smooth page navigation with entrance micro-animation & video recalibration
  const handleNavigate = (pageId) => {
    if (pageId === activePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsAutoScrolling(false);
    setIsTransitioning(true);

    setTimeout(() => {
      setActivePage(pageId);
      window.location.hash = pageId;
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();

      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  return (
    <div className="relative min-h-screen bg-transparent text-[#f8fafc] overflow-x-hidden selection:bg-[#F5C242]/40 selection:text-white">
      
      {/* FIXED 60-SECOND CINEMATIC BACKGROUND VIDEO ENGINE */}
      <GlobalVideoBackground timeRange={PAGE_TIME_RANGES[activePage] || [0, 60]} />

      {/* Global Fixed Navigation with 5 Pages & Header Auto-Scroll Button */}
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate}
        isAutoScrolling={isAutoScrolling}
        toggleAutoScroll={toggleAutoScroll}
      />

      {/* Main Page Content with Featherlight Micro-Transitions */}
      <main 
        className={`relative z-10 transition-all duration-300 ease-out ${
          isTransitioning 
            ? 'opacity-0 translate-y-3 pointer-events-none' 
            : 'opacity-100 translate-y-0'
        }`}
      >
        {/* =========================================================
            PAGE 1: HOME PAGE (Master Long Architectural Experience)
            ========================================================= */}
        {activePage === 'home' && (
          <div className="animate-fadeIn">
            <HeroSection onNavigate={handleNavigate} />
            <AboutSection />
            <ServicesSection onNavigate={handleNavigate} />
            <ProjectsSection />
            <EngineeringShowcase />
            <ProcessSection />
            <TestimonialsAndAwards />
            <ContactSection isStandalone={false} />
          </div>
        )}

        {/* =========================================================
            PAGE 2: SERVICES PAGE (Directly After Home Page!)
            Starting video timeline from 8.0s (architectural planning)
            ========================================================= */}
        {activePage === 'services' && (
          <div className="animate-fadeIn pt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-[#F5C242]/60 text-[11px] font-sans text-gold-radiant font-bold mb-4 shadow-[0_0_12px_rgba(245,194,66,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>PAGE 02 // DISCIPLINARY PRACTICES & EPC</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70">TIMELINE: 08.0s – 26.0s</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight mb-3">
                <span className="text-white inline-block">INTEGRATED</span> <span className="text-gold-shining inline-block">PRACTICES.</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl font-light">
                Direct turnkey architectural engineering: computational parametric form synthesis, nonlinear FEA civil engineering, and robotic EPC general contracting.
              </p>
            </div>
            <ServicesSection onNavigate={handleNavigate} />
          </div>
        )}

        {/* =========================================================
            PAGE 3: PROJECTS PAGE (Concise Built Portfolio Display)
            Starting video timeline from 22.0s (structural forms)
            ========================================================= */}
        {activePage === 'projects' && (
          <div className="animate-fadeIn pt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-[#F5C242]/60 text-[11px] font-sans text-gold-radiant font-bold mb-4 shadow-[0_0_12px_rgba(245,194,66,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>PAGE 03 // BUILT MONUMENTS & COMMISSIONS</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70">TIMELINE: 22.0s – 38.0s</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight mb-3">
                <span className="text-white inline-block">BUILT</span> <span className="text-gold-shining inline-block">MONUMENTS.</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl font-light">
                Scroll to inspect our completed and ongoing civic towers, post-tensioned cantilevered monolithic villas, and turnkey urban masterplans.
              </p>
            </div>
            <ProjectsSection />
          </div>
        )}

        {/* =========================================================
            PAGE 4: ABOUT PAGE (Studio Manifesto & Pipeline)
            Starting video timeline from 34.0s (engineering details)
            ========================================================= */}
        {activePage === 'about' && (
          <div className="animate-fadeIn pt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/40 border border-[#F5C242]/60 text-[11px] font-sans text-gold-radiant font-bold mb-4 shadow-[0_0_12px_rgba(245,194,66,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-ping" />
                <span>PAGE 04 // THE ATELIER & MANIFESTO</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70">TIMELINE: 34.0s – 48.0s</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tight mb-3">
                <span className="text-white inline-block">THE</span> <span className="text-gold-shining inline-block">STUDIO.</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl font-light">
                Sculptural architecture backed by computational civil engineering. We act as master architect and primary constructor to eliminate third-party dilution.
              </p>
            </div>
            <AboutSection />
            <ProcessSection />
          </div>
        )}

        {/* =========================================================
            PAGE 5: CONTACT US PAGE (Fast, Direct Consultation & Ateliers)
            Starting video timeline from 48.0s (culmination landmark)
            ========================================================= */}
        {activePage === 'contact' && (
          <div className="animate-fadeIn pt-20">
            <ContactSection isStandalone={true} />
          </div>
        )}
      </main>

      {/* Global Architectural Footer with Page Navigation */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
