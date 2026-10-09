import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Cpu, 
  Activity, 
  ShieldAlert, 
  Zap, 
  Sliders, 
  Layers, 
  Compass, 
  Maximize2, 
  CheckCircle2
} from 'lucide-react';

const INNOVATIONS = [
  {
    id: "FEA",
    title: "FINITE ELEMENT NON-LINEAR ANALYSIS",
    subtitle: "Mathematical Stress Simulation",
    formula: "σ = E · ε | F(t) = M·ü + C·u̇ + K·u",
    desc: "Predicting micro-deflections under combined thermal, hydrostatic, and seismic cycles across 10,000,000 tetrahedral mesh elements.",
    metrics: [
      { label: "MESH RESOLUTION", value: "2.5 mm High-Fidelity" },
      { label: "SOLVER TIME", value: "Cloud High-Performance Computing" },
      { label: "SAFETY FACTOR", value: "γ = 2.45 Over-Engineered" }
    ]
  },
  {
    id: "SEISMIC",
    title: "ZONE 4 BASE ISOLATION BEARINGS",
    subtitle: "Dynamic Subterranean Tectonic Decoupling",
    formula: "T = 2π √(M / K_eff) | β_eff = 28%",
    desc: "Triple-friction pendulum bearings installed between foundation pilings and superstructure. Allows up to 600mm of lateral ground displacement without structural yield.",
    metrics: [
      { label: "MAX GROUND ACCEL", value: "1.45g Design Peak" },
      { label: "ISOLATION EFFICACY", value: "85% Energy Dissipation" },
      { label: "RESET MECHANISM", value: "Gravity Self-Centering" }
    ]
  },
  {
    id: "AERO",
    title: "AERODYNAMIC VORTEX SHEDDING MITIGATION",
    subtitle: "Boundary Layer Wind Tunnel Calibration",
    formula: "St = f_s · D / U | Re = 1.2 × 10^7",
    desc: "Curved aerodynamic corners and helical building spiraling disorganize vortex shedding frequencies, eliminating dangerous resonant lock-in oscillations.",
    metrics: [
      { label: "WIND TUNNEL SPEED", value: "Category 5 (280 km/h)" },
      { label: "CROSS-WIND DRIFT", value: "Reduced by 38%" },
      { label: "OCCUPANT ACCEL", value: "< 12 milli-g (Supreme Comfort)" }
    ]
  },
  {
    id: "MATERIALS",
    title: "SELF-HEALING C120 BIO-CONCRETE",
    subtitle: "Carbon-Mineralized Structural Matrices",
    formula: "Ca(OH)₂ + CO₂ → CaCO₃ + H₂O",
    desc: "Ultra-high performance concrete incorporating bio-mineralizing microcapsules that automatically seal micro-fissures upon moisture ingress, guaranteeing a 150-year structural lifespan.",
    metrics: [
      { label: "COMPRESSIVE STRENGTH", value: "120 MPa @ 28 Days" },
      { label: "SELF-HEAL WIDTH", value: "Up to 0.4mm Fissures" },
      { label: "CARBON FOOTPRINT", value: "-45% CO₂ Sequestered" }
    ]
  }
];

export default function EngineeringShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const engRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#eng-schematic', {
        rotation: 45,
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: engRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, engRef);

    return () => ctx.revert();
  }, []);

  const active = INNOVATIONS[activeTab];

  return (
    <section 
      id="engineering" 
      ref={engRef}
      className="relative w-full py-28 md:py-36 bg-transparent text-[#f8fafc] border-t border-white/10 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15 gap-6">
          <div>
            <div className="text-xs font-mono text-white tracking-ultra uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-white" />
              SECTION 05 // STRUCTURAL & CIVIL INNOVATION
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              PRECISION CIVIL ENGINEERING
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-[#cbd5e1] max-w-xs drop-shadow-md">
            COMPUTATIONAL RIGOR • STRUCTURAL DYNAMICS • ADVANCED MATERIALS
          </div>
        </div>

        {/* Tab Navigation - Translucent Glass */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {INNOVATIONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 text-left border transition-all duration-300 font-mono cursor-pointer rounded-sm backdrop-blur-md ${
                activeTab === idx
                  ? 'bg-black/35 border-white text-white shadow-lg shadow-white/10 scale-[1.01]'
                  : 'bg-black/15 border-white/15 text-[#cbd5e1] hover:border-white/35 hover:bg-black/25'
              }`}
            >
              <div className="text-[10px] text-white mb-1 font-bold">SYS 0{idx + 1}</div>
              <div className="text-xs font-semibold truncate">{item.title}</div>
            </button>
          ))}
        </div>

        {/* Interactive Engineering Diagnostic Console - Translucent Glass */}
        <div className="rounded-sm backdrop-blur-md bg-black/25 border border-white/20 p-6 md:p-10 relative shadow-xl">
          
          {/* Diagnostic Console HUD bar */}
          <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-8 text-[11px] font-mono text-[#cbd5e1]">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-white animate-pulse" />
              <span className="text-white font-bold">TELEMETRY DIAGNOSTIC ACTIVE: {active.id}</span>
            </div>
            <span className="text-gold-radiant hidden sm:inline-block font-semibold">STATUS: VERIFIED IN CLINICAL LOAD TESTING</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Specs & Formula */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-white uppercase tracking-wider block mb-1 font-bold">
                  {active.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white drop-shadow-md">
                  {active.title}
                </h3>
              </div>

              {/* Governing Mathematical Formulation */}
              <div className="p-4 rounded-sm backdrop-blur-sm bg-black/30 border border-white/15 font-mono text-xs md:text-sm text-gold-radiant flex items-center justify-between">
                <span>GOVERNING FORMULA:</span>
                <span className="font-bold">{active.formula}</span>
              </div>

              <p className="text-sm text-[#e2e8f0] leading-relaxed font-light drop-shadow-sm">
                {active.desc}
              </p>

              {/* Metric readouts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                {active.metrics.map((metric, i) => (
                  <div key={i} className="p-3 rounded-sm backdrop-blur-sm bg-black/20 border border-white/10 font-mono">
                    <div className="text-[10px] text-[#94a3b8] uppercase font-semibold">{metric.label}</div>
                    <div className="text-xs md:text-sm text-white font-semibold mt-1">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Schematic Visual Graphic */}
            <div className="lg:col-span-5 rounded-sm backdrop-blur-md bg-black/30 border border-white/30 p-6 relative flex flex-col justify-between h-full min-h-[300px]">
              <div className="flex justify-between items-center text-[10px] font-mono text-[#cbd5e1]">
                <span>SCHEMATIC // FINITE ELEMENT MODEL</span>
                <span className="text-white font-bold">SCALE: 1:1 COMPUTATIONAL</span>
              </div>

              {/* Blueprint Wireframe Geometry Representation */}
              <div id="eng-schematic" className="my-8 relative flex items-center justify-center" style={{ willChange: 'transform' }}>
                <div className="w-48 h-48 border border-white/40 rotate-45 flex items-center justify-center relative animate-pulse">
                  <div className="w-36 h-36 border border-[#F5C242]/60 shadow-[0_0_12px_rgba(245,194,66,0.3)] rotate-12 flex items-center justify-center">
                    <div className="w-24 h-24 border border-white/20 -rotate-6 flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 text-[10px] font-mono text-emerald-400 font-semibold">
                  ↓ GRAVITY LOAD (120 MN)
                </div>
                <div className="absolute bottom-0 text-[10px] font-mono text-white font-semibold">
                  ↑ FOUNDATION REACTION
                </div>
                <div className="absolute -left-2 text-[10px] font-mono text-[#F5C242] -rotate-90 font-semibold">
                  → LATERAL WIND SHEAR
                </div>
              </div>

              <div className="text-[10px] font-mono text-[#cbd5e1] flex justify-between items-center border-t border-white/15 pt-3">
                <span>SIMULATION INTEGRITY: 100.0%</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3 h-3" /> PASS
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
