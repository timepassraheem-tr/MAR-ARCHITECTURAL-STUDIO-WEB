import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import HeroVideoBackground from './components/HeroVideoBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import EngineeringShowcase from './components/EngineeringShowcase';
import ProcessSection from './components/ProcessSection';
import TestimonialsAndAwards from './components/TestimonialsAndAwards';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const lenisRef = useRef(null);
  const autoScrollRafRef = useRef(null);

  // Initialize Lenis only on desktop / non-touch devices for buttery smooth desktop scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 768);

    if (!prefersReducedMotion && !isTouch) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 0,
        syncTouch: false,
        autoRaf: true,
        infinite: false,
      });

      lenisRef.current = lenis;
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
      if (['home', 'services', 'projects', 'blog', 'about', 'contact'].includes(hash)) {
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
    const scrollSpeed = 1.6;

    const step = (now) => {
      const delta = Math.min(32, now - lastTimestamp);
      lastTimestamp = now;

      const docH = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const maxScroll = docH - winH;
      const currentScroll = lenisRef.current ? lenisRef.current.scroll : window.scrollY;

      if (currentScroll >= maxScroll - 4) {
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
    <div className="relative min-h-screen bg-[#0f1115] text-[#f8fafc] overflow-x-hidden selection:bg-[#F5C242]/40 selection:text-white">
      
      {/* Global Fixed Navigation */}
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate}
        isAutoScrolling={isAutoScrolling}
        toggleAutoScroll={toggleAutoScroll}
      />

      {/* Main Page Content */}
      <main 
        className={`relative z-10 transition-all duration-300 ease-out ${
          isTransitioning 
            ? 'opacity-0 translate-y-3 pointer-events-none' 
            : 'opacity-100 translate-y-0'
        }`}
      >
        {/* =========================================================
            PAGE 1: HOME PAGE
            Hero video looping (0s - 18s).
            All remaining sections on luxury matte black background!
            ========================================================= */}
        {activePage === 'home' && (
          <div className="animate-fadeIn">
            {/* HERO WITH VIDEO ONLY */}
            <HeroSection onNavigate={handleNavigate} />

            {/* REMAINING HOME PAGE: LUXURY MATTE BLACK BACKGROUND */}
            <div className="bg-[#0f1115] text-[#f8fafc]">
              <AboutSection />
              <ServicesSection onNavigate={handleNavigate} />
              <ProjectsSection />
              <EngineeringShowcase />
              <ProcessSection />
              <TestimonialsAndAwards />
              <FAQSection />
              <ContactSection isStandalone={false} />
            </div>
          </div>
        )}

        {/* =========================================================
            PAGE 2: SERVICES PAGE
            Hero section with looping video from 8.0s - 24.0s (broader to down).
            Remaining page with matte black background.
            ========================================================= */}
        {activePage === 'services' && (
          <div className="animate-fadeIn">
            {/* SERVICES HERO WITH DEDICATED LOOPING VIDEO (8s - 24s) */}
            <section className="relative min-h-[82vh] sm:min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-32 sm:pt-40 pb-20 overflow-hidden">
              <HeroVideoBackground startTime={8} endTime={24} />
              
              <div className="relative z-10 max-w-5xl mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-[#F5C242]/70 text-[10px] sm:text-xs font-sans text-gold-radiant font-bold mb-5 shadow-[0_0_15px_rgba(245,194,66,0.3)] flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>DISCIPLINARY PRACTICES // EPC EXECUTION</span>
                  <span className="text-white/40 hidden sm:inline">•</span>
                  <span className="text-white/90 hidden sm:inline">ALGORITHMIC PLANNING & STRUCTURAL FORMS</span>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight mb-5 text-white leading-[1.05]">
                  INTEGRATED <span className="text-gold-shining">PRACTICES.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
                  Turnkey architectural engineering: computational form synthesis, nonlinear FEA civil engineering, and robotic EPC general contracting.
                </p>
              </div>
            </section>

            {/* REMAINING SERVICES BODY: MATTE BLACK BACKGROUND */}
            <div className="bg-[#0f1115] text-[#f8fafc]">
              <ServicesSection onNavigate={handleNavigate} />
            </div>
          </div>
        )}

        {/* =========================================================
            PAGE 3: PROJECTS PAGE
            Hero section with looping video from 22.0s - 38.0s (broader to down).
            Remaining page with matte black background.
            ========================================================= */}
        {activePage === 'projects' && (
          <div className="animate-fadeIn">
            {/* PROJECTS HERO WITH DEDICATED LOOPING VIDEO (22s - 38s) */}
            <section className="relative min-h-[82vh] sm:min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-32 sm:pt-40 pb-20 overflow-hidden">
              <HeroVideoBackground startTime={22} endTime={38} />
              
              <div className="relative z-10 max-w-5xl mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-[#F5C242]/70 text-[10px] sm:text-xs font-sans text-gold-radiant font-bold mb-5 shadow-[0_0_15px_rgba(245,194,66,0.3)] flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>BUILT MONUMENTS // PORTFOLIO COMMISSIONS</span>
                  <span className="text-white/40 hidden sm:inline">•</span>
                  <span className="text-white/90 hidden sm:inline">CIVIC TOWERS & HIGH-RISE LANDMARKS</span>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight mb-5 text-white leading-[1.05]">
                  BUILT <span className="text-gold-shining">MONUMENTS.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
                  Completed and ongoing civic towers, post-tensioned cantilevered monolithic villas, and turnkey urban masterplans engineered to stand for centuries.
                </p>
              </div>
            </section>

            {/* REMAINING PROJECTS BODY: MATTE BLACK BACKGROUND */}
            <div className="bg-[#0f1115] text-[#f8fafc]">
              <ProjectsSection />
            </div>
          </div>
        )}

        {/* =========================================================
            PAGE 4: BLOG PAGE
            Directly after Projects page!
            ========================================================= */}
        {activePage === 'blog' && (
          <div className="animate-fadeIn">
            <BlogSection />
          </div>
        )}

        {/* =========================================================
            PAGE 5: ABOUT PAGE
            Hero section with looping video from 34.0s - 48.0s (broader to down).
            Remaining page with matte black background.
            ========================================================= */}
        {activePage === 'about' && (
          <div className="animate-fadeIn">
            {/* ABOUT HERO WITH DEDICATED LOOPING VIDEO (34s - 48s) */}
            <section className="relative min-h-[82vh] sm:min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-32 sm:pt-40 pb-20 overflow-hidden">
              <HeroVideoBackground startTime={34} endTime={48} />
              
              <div className="relative z-10 max-w-5xl mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-[#F5C242]/70 text-[10px] sm:text-xs font-sans text-gold-radiant font-bold mb-5 shadow-[0_0_15px_rgba(245,194,66,0.3)] flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-ping" />
                  <span>THE ATELIER // DESIGN PHILOSOPHY & PIPELINE</span>
                  <span className="text-white/40 hidden sm:inline">•</span>
                  <span className="text-white/90 hidden sm:inline">STRUCTURAL RIGOR & MATERIAL INTEGRITY</span>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight mb-5 text-white leading-[1.05]">
                  THE <span className="text-gold-shining">STUDIO.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
                  Sculptural architecture backed by computational civil engineering. We act as master architect and primary constructor to eliminate third-party dilution.
                </p>
              </div>
            </section>

            {/* REMAINING ABOUT BODY: MATTE BLACK BACKGROUND */}
            <div className="bg-[#0f1115] text-[#f8fafc]">
              <AboutSection />
              <ProcessSection />
            </div>
          </div>
        )}

        {/* =========================================================
            PAGE 6: CONTACT US PAGE
            Hero section with looping video from 48.0s - 60.0s (broader to down).
            Remaining page with matte black background.
            ========================================================= */}
        {activePage === 'contact' && (
          <div className="animate-fadeIn">
            {/* CONTACT HERO WITH DEDICATED LOOPING VIDEO (48s - 60s) */}
            <section className="relative min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-32 sm:pt-40 pb-16 overflow-hidden">
              <HeroVideoBackground startTime={48} endTime={60} />
              
              <div className="relative z-10 max-w-5xl mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-[#F5C242]/70 text-[10px] sm:text-xs font-sans text-gold-radiant font-bold mb-5 shadow-[0_0_15px_rgba(245,194,66,0.3)] flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-ping" />
                  <span>CONSULTATION & INQUIRY // DIRECT ENGAGEMENT</span>
                  <span className="text-white/40 hidden sm:inline">•</span>
                  <span className="text-white/90 hidden sm:inline">PRINCIPAL INTAKE & FEASIBILITY REVIEW</span>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight mb-5 text-white leading-[1.05]">
                  COMMISSION A <span className="text-gold-shining">PROJECT.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
                  Connect directly with Mohammed Abdul Rahman and our structural engineering team for project feasibility, turnkey architectural design, and civil consultations.
                </p>
              </div>
            </section>

            {/* REMAINING CONTACT BODY: MATTE BLACK BACKGROUND */}
            <div className="bg-[#0f1115] text-[#f8fafc]">
              <ContactSection isStandalone={true} />
            </div>
          </div>
        )}
      </main>

      {/* Global Architectural Footer with Page Navigation */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
