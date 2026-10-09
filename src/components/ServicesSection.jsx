import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, 
  Cpu, 
  Hammer, 
  Layers, 
  DraftingCompass, 
  Leaf, 
  ChevronRight,
  CheckCircle,
  FileText
} from 'lucide-react';

const SERVICES = [
  {
    id: "01",
    title: "PARAMETRIC ARCHITECTURE",
    category: "COMPUTATIONAL DESIGN",
    icon: DraftingCompass,
    summary: "Algorithmic form generation translating micro-climates, urban context, and sightlines into monumental sculptural volumes.",
    deliverables: [
      "Computational Massing & Solar Studies",
      "Parametric Façade Optimization",
      "Zoning & Masterplan Approvals",
      "Algorithmic Acoustic Optimization"
    ],
    code: "ARC-PRM.701"
  },
  {
    id: "02",
    title: "STRUCTURAL & SEISMIC ENGINEERING",
    category: "CIVIL ENGINEERING",
    icon: Cpu,
    summary: "High-performance civil engineering defying gravity with post-tensioned cantilevers, tuned-mass damping, and base isolation.",
    deliverables: [
      "Nonlinear Seismic Response Analysis",
      "Post-Tensioned Concrete Detailing",
      "Wind-Tunnel Vortex Shedding Modeling",
      "Subterranean Foundation & Shoring"
    ],
    code: "STR-ENG.802"
  },
  {
    id: "03",
    title: "EPC TURNKEY CONSTRUCTION",
    category: "GENERAL CONTRACTING",
    icon: Hammer,
    summary: "Direct architectural-led construction management eliminating subcontractor dilution, guaranteeing millimeter-precise delivery.",
    deliverables: [
      "Zero-Tolerance Onsite Erection",
      "Robotic Laser LiDAR Quality Control",
      "High-Tensile Steel Fabrication",
      "Automated Schedule & Budget Telemetry"
    ],
    code: "EPC-CNST.903"
  },
  {
    id: "04",
    title: "4D DIGITAL TWIN & BIM LEVEL 3",
    category: "DIGITAL PROTOCOLS",
    icon: Layers,
    summary: "Complete virtual replica of the asset synchronizing structural loads, MEP conduits, and lifecycle maintenance before breaking ground.",
    deliverables: [
      "LOD 500 Parametric As-Built Models",
      "Clash Detection & Prefab Coordination",
      "IoT Sensor Maintenance Integration",
      "Lifecycle Carbon Tracking"
    ],
    code: "BIM-DTW.604"
  },
  {
    id: "05",
    title: "NET-ZERO BIOCLIMATIC SYSTEMS",
    category: "ENVIRONMENTAL",
    icon: Leaf,
    summary: "Passive solar envelope design, geothermal heat-exchange foundations, and closed-loop rainwater harvesting systems.",
    deliverables: [
      "LEED Platinum / WELL Building Standards",
      "Geothermal Heat Pump Boreholes",
      "Dynamic Smart Photovoltaic Glass",
      "Embodied Carbon Minimization"
    ],
    code: "ENV-NTR.405"
  },
  {
    id: "06",
    title: "BESPOKE INTERIOR ARCHITECTURE",
    category: "SPATIAL PURITY",
    icon: Building2,
    summary: "Monolithic interior volumes carved from honed stone, custom architectural bronze ironmongery, and acoustic architectural woodwork.",
    deliverables: [
      "Quarry-Selected Bookmatched Stone",
      "Acoustic Spatial Attenuation",
      "Custom Integrated Lighting Scenography",
      "Precision Joinery & Hardware"
    ],
    code: "INT-ARC.506"
  }
];

export default function ServicesSection({ onNavigate = () => {} }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const srvRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#services-header-text', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: srvRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, srvRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={srvRef}
      className="relative w-full py-28 md:py-36 bg-transparent text-[#f8fafc] border-t border-white/10 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div id="services-header-text" className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15 gap-6" style={{ willChange: 'transform' }}>
          <div>
            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />
              DISCIPLINARY ARCHITECTURAL CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              COMPREHENSIVE SERVICES
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-[#cbd5e1] max-w-xs drop-shadow-md">
            INTEGRATED DESIGN-BUILD MODEL<br />
            ZERO DISCONNECT BETWEEN ARCHITECT AND ENGINEER
          </div>
        </div>

        {/* Services Interactive Grid - Ultra-transparent glass cards with text blur */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services List (Left) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((srv) => {
              const Icon = srv.icon;
              const isSelected = selectedService.id === srv.id;

              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className={`p-6 border transition-all duration-300 cursor-pointer relative group flex flex-col justify-between rounded-sm backdrop-blur-md ${
                    isSelected 
                      ? 'bg-black/35 border-[#F5C242] shadow-xl shadow-[#F5C242]/30 scale-[1.01]' 
                      : 'bg-black/15 border-white/15 hover:border-[#F5C242]/50 hover:bg-black/25'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 border border-white/15 bg-black/25 backdrop-blur-sm flex items-center justify-center group-hover:border-[#F5C242]/60 transition-colors">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-[#F5C242] filter drop-shadow-[0_0_8px_rgba(245,194,66,0.6)]' : 'text-white/80'}`} />
                      </div>
                      <span className="text-[10px] font-mono text-[#94a3b8]">
                        [{srv.code}]
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-white uppercase tracking-wider mb-1 font-bold">
                      {srv.category}
                    </div>

                    <h3 className="text-base font-serif font-bold text-white mb-2 leading-snug drop-shadow-md">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-[#e2e8f0] leading-relaxed line-clamp-3 font-light drop-shadow-sm">
                      {srv.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className={isSelected ? 'text-[#F5C242] font-bold drop-shadow-[0_0_6px_rgba(245,194,66,0.6)]' : 'text-white/60'}>
                      {isSelected ? 'INSPECTING SPECS' : 'VIEW DISCIPLINE'}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#F5C242] translate-x-1' : 'text-white/40'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Inspector Panel (Right) - Transparent Glass */}
          <div className="lg:col-span-5 rounded-sm backdrop-blur-md bg-black/25 border border-white/20 p-6 md:p-8 sticky top-28 shadow-xl">
            <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
              <div>
                <div className="text-[10px] font-mono text-gold-radiant tracking-ultra uppercase font-bold">
                  DISCIPLINE DOSSIER
                </div>
                <h3 className="text-xl font-serif font-bold text-white mt-1 drop-shadow-md">
                  {selectedService.title}
                </h3>
              </div>
              <div className="text-xs font-mono px-2 py-1 bg-black/30 backdrop-blur-sm border border-white/20 text-white font-bold">
                {selectedService.code}
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#e2e8f0] leading-relaxed mb-6 font-light drop-shadow-sm">
              {selectedService.summary}
            </p>

            <div className="mb-6">
              <div className="text-[11px] font-mono text-white/90 uppercase tracking-widest mb-3 flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#F5C242]" />
                STANDARD DELIVERABLES
              </div>
              <div className="space-y-2.5">
                {selectedService.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white bg-black/20 backdrop-blur-sm p-2.5 border border-white/10 rounded-sm">
                    <CheckCircle className="w-4 h-4 text-[#F5C242] shrink-0 mt-0.5 filter drop-shadow-[0_0_6px_rgba(245,194,66,0.5)]" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-black/20 backdrop-blur-sm border border-white/10 text-xs font-mono text-[#cbd5e1] flex items-center justify-between rounded-sm">
              <span>ENGAGEMENT TYPOLOGY:</span>
              <span className="text-white font-semibold">TURNKEY / EPC DIRECT</span>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="gold-shining-btn mt-6 w-full py-3.5 text-xs tracking-widest uppercase transition-all duration-300 block text-center shadow-lg shadow-[#F5C242]/30 cursor-pointer rounded-sm"
            >
              COMMISSION THIS SERVICE
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
