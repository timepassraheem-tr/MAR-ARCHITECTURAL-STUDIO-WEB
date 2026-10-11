import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Compass, 
  Award, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const PHILOSOPHIES = [
  {
    title: "PARAMETRIC MONOLITHISM",
    subtitle: "Mathematical Form Generation",
    desc: "We refuse decorative nostalgia. Every line, cantilever, and perforation emerges from computational algorithms harmonizing solar path, tectonic wind loads, and functional volumetric efficiency.",
    stat: "100%",
    statLabel: "Algorithmic Geometry"
  },
  {
    title: "STRUCTURAL PERMANENCE",
    subtitle: "Civil Engineering Defying Gravity",
    desc: "Engineered with 150-year design life criteria. We utilize high-performance titanium-reinforced composites, ductile seismic base dampers, and post-tensioned cores capable of enduring peak tectonic events.",
    stat: "9.2+",
    statLabel: "Richter Seismic Resilience"
  },
  {
    title: "MATERIAL PURITY",
    subtitle: "Honest Raw Materiality",
    desc: "Raw exposed architectural concrete, honed travertine, oxidized weathering steel, and triple-laminated acoustic crystal. Materials that gain patina and dignity over centuries.",
    stat: "42%",
    statLabel: "Embodied Carbon Reduction"
  }
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.to('#about-header-text', {
        yPercent: isMobile ? -5 : -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
      gsap.to('#about-dossier', {
        yPercent: isMobile ? -5 : -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 md:py-36 bg-transparent text-[#f8fafc] border-t border-white/10 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="about-header-text" className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/15 gap-4 sm:gap-6" style={{ willChange: 'transform' }}>
          <div>
            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />
              SECTION 02 // STUDIO MANIFESTO
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] break-words">
              ARCHITECTURE BEYOND TEMPORALITY
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#cbd5e1] max-w-xs drop-shadow-md">
            MAR ARCHITECTURAL STUDIO EST. 2008<br />
            STRUCTURAL ENGINEERING • CIVIC LANDMARKS • LUXURY ESTATES
          </div>
        </div>

        {/* Studio Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Text Narrative with soft text-blur backing */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-sm backdrop-blur-md bg-black/20 border border-white/10 shadow-lg space-y-4">
              <h3 className="text-xl md:text-2xl font-serif text-white leading-relaxed drop-shadow-md">
                We operate at the volatile intersection where <span className="text-gold-radiant font-bold">visionary sculptural architecture</span> meets <span className="text-white font-bold">uncompromising civil engineering</span>.
              </h3>
              
              <p className="text-sm md:text-base text-[#e2e8f0] leading-relaxed font-light">
                Founded on the conviction that monumental buildings must possess both intellectual rigor and tectonic courage, MAR Architectural Studio oversees every phase of creation: from initial algorithmic site simulations and deep geotechnical excavation, through high-precision structural erection and bespoke interior realization.
              </p>

              <p className="text-sm md:text-base text-[#cbd5e1] leading-relaxed font-light">
                Unlike traditional design studios that hand off plans to third-party general contractors, MAR Architectural Studio serves as the master architect and primary engineering constructor. This integration guarantees zero dilution of intent, absolute structural integrity, and flawless execution.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-sans">
              <div className="p-4 rounded-sm backdrop-blur-md bg-black/40 border border-white/15">
                <div className="text-xl md:text-2xl font-bold text-gold-radiant">FEA & BIM</div>
                <div className="text-[11px] text-slate-300 mt-1">Nonlinear Modeling</div>
              </div>
              <div className="p-4 rounded-sm backdrop-blur-md bg-black/40 border border-white/15">
                <div className="text-xl md:text-2xl font-bold text-white">Zone 4</div>
                <div className="text-[11px] text-slate-300 mt-1">Seismic Resilience</div>
              </div>
              <div className="p-4 rounded-sm backdrop-blur-md bg-black/40 border border-white/15">
                <div className="text-xl md:text-2xl font-bold text-white">Turnkey</div>
                <div className="text-[11px] text-slate-300 mt-1">Project Delivery</div>
              </div>
              <div className="p-4 rounded-sm backdrop-blur-md bg-black/40 border border-white/15">
                <div className="text-xl md:text-2xl font-bold text-gold-radiant">High-Spec</div>
                <div className="text-[11px] text-slate-300 mt-1">Material Integrity</div>
              </div>
            </div>
          </div>

          {/* Right Blueprint Technical Dossier */}
          <div id="about-dossier" className="lg:col-span-5 rounded-sm backdrop-blur-md bg-black/35 border border-white/20 p-5 sm:p-8 relative group shadow-xl" style={{ willChange: 'transform' }}>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 min-w-[32px] max-w-[32px] min-h-[32px] max-h-[32px] rounded-full border border-[#F5C242]/40 bg-black/60 p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src="/logo.png" alt="MAR Architectural Studio Emblem" className="w-full h-full max-w-full max-h-full object-contain" />
                </div>
                <div className="text-xs font-sans text-white font-bold tracking-wider uppercase">
                  TECHNICAL FRAMEWORK
                </div>
              </div>
              <div className="text-[10px] font-mono text-[#F5C242] border border-[#F5C242]/50 px-2 py-0.5 rounded-sm font-bold shadow-[0_0_8px_rgba(245,194,66,0.3)]">
                SPEC // PRACTICE STANDARDS
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6">
              <div className="border-b border-white/10 pb-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs font-sans gap-1">
                <span className="text-[#cbd5e1]">COMPUTATIONAL MODELING:</span>
                <span className="text-white font-semibold">Parametric BIM & 3D Coordination</span>
              </div>
              <div className="border-b border-white/10 pb-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs font-sans gap-1">
                <span className="text-[#cbd5e1]">ENGINEERING STANDARDS:</span>
                <span className="text-[#F5C242] font-semibold">Seismic & Gravity Load Integration</span>
              </div>
              <div className="border-b border-white/10 pb-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs font-sans gap-1">
                <span className="text-[#cbd5e1]">CIVIL CONTRACTING:</span>
                <span className="text-white font-semibold">Turnkey & Site Supervision</span>
              </div>
              <div className="border-b border-white/10 pb-2.5 flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs font-sans gap-1">
                <span className="text-[#cbd5e1]">CLIENT COLLABORATION:</span>
                <span className="text-white font-bold">Direct Principal Engagement</span>
              </div>
            </div>

            {/* Studio Owner & Founder Credential */}
            <div className="p-4 rounded-sm backdrop-blur-sm bg-black/40 border border-[#F5C242]/50 shadow-[0_0_15px_rgba(245,194,66,0.2)] text-xs text-[#cbd5e1] leading-relaxed mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-white uppercase font-bold tracking-wider">FOUNDER & OWNER</span>
                <span className="text-[10px] font-mono text-[#F5C242] font-bold">PRINCIPAL ATELIER</span>
              </div>
              <div className="text-base font-serif font-black text-white">Mohammed Abdul Rahman</div>
              <div className="text-[11px] font-sans text-slate-300 mt-1">
                Direct Phone / WhatsApp:{' '}
                <a href="https://wa.me/919985185209" target="_blank" rel="noopener noreferrer" className="text-gold-radiant font-bold hover:underline inline-block">
                  +91 9985185209
                </a>
              </div>
            </div>

            <div className="p-4 rounded-sm backdrop-blur-sm bg-black/30 border border-white/10 text-xs text-[#cbd5e1] leading-relaxed">
              <strong className="text-white block font-mono mb-1">“ARCHITECTURE IS PETRIFIED COURAGE.”</strong>
              Every project represents a permanent civil contribution. Our structural calculations are verified through quadruple-redundant computational modeling.
            </div>
          </div>

        </div>

        {/* Interactive Philosophical Pillars - Translucent Glass */}
        <div className="mt-16">
          <div className="text-xs font-mono text-gold-radiant tracking-widest uppercase mb-6 flex items-center gap-2 font-bold">
            <Compass className="w-4 h-4 text-[#F5C242] drop-shadow-[0_0_6px_rgba(245,194,66,0.5)]" />
            CORE ARCHITECTURAL PILLARS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHILOSOPHIES.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-6 rounded-sm border transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  activeTab === idx 
                    ? 'bg-black/35 border-[#F5C242] shadow-xl shadow-[#F5C242]/30 -translate-y-1' 
                    : 'bg-black/15 border-white/15 hover:border-white/35 hover:bg-black/25'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#F5C242] font-bold">0{idx + 1} // PILLAR</span>
                  <span className="text-2xl font-mono font-bold text-white/50">{item.stat}</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-white mb-1 drop-shadow-md">
                  {item.title}
                </h4>
                <div className="text-xs font-mono text-white uppercase tracking-wider mb-3 font-bold">
                  {item.subtitle}
                </div>
                <p className="text-xs text-[#e2e8f0] leading-relaxed font-light">
                  {item.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-[#F5C242] flex items-center justify-between font-semibold">
                  <span>METRIC: {item.statLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
