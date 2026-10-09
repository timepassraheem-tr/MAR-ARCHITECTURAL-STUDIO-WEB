import React from 'react';
import { 
  DraftingCompass, 
  Cpu, 
  Layers, 
  Hammer, 
  Key, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const STAGES = [
  {
    step: "01",
    phase: "GENESIS & GEOTECHNICAL",
    title: "Algorithmic Site Synthesis",
    desc: "Subsurface core drillings, laser drone topography scanning, and solar/wind aerodynamic computational simulations determine optimal orientation and foundation anchorage.",
    output: "Geotechnical Validation & Parametric Massing Model"
  },
  {
    step: "02",
    phase: "COMPUTATIONAL RIGOR",
    title: "Structural Engineering & Stress Optimization",
    desc: "Nonlinear FEA simulations, seismic dynamic modeling, and post-tensioned tendon mapping refine every structural member down to exact steel rebar coordinates.",
    output: "LOD 400 Engineering Calculations & PE Stamped Sets"
  },
  {
    step: "03",
    phase: "DIGITAL TWIN FABRICATION",
    title: "Robotic Modular Pre-Assembly",
    desc: "Steel nodes and complex façade units are robotically milled offsite in climate-controlled environments with sub-millimeter tolerances before shipping to site.",
    output: "Clash-Free 4D BIM Digital Twin Model"
  },
  {
    step: "04",
    phase: "PRECISION EXECUTION",
    title: "Zero-Tolerance Onsite Erection",
    desc: "Tower cranes guided by real-time GNSS satellite positioning and digital strain gauges assemble structural frames with continuous laser LiDAR quality assurance.",
    output: "Defect-Free Structural Top-Out"
  },
  {
    step: "05",
    phase: "MONUMENTAL REVEAL",
    title: "Commissioning & Handover",
    desc: "Bespoke acoustic tuning, air balance balancing, IoT building telemetry calibration, and permanent handover of the operational 150-year digital asset.",
    output: "LEED Platinum Commissioning & Lifetime Archive"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative w-full py-28 md:py-36 bg-transparent text-[#f8fafc] border-t border-white/10 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15 gap-6">
          <div>
            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />
              SECTION 07 // EXECUTION PROTOCOL
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              PRECISION METHODOLOGY
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-[#cbd5e1] max-w-xs drop-shadow-md">
            FIVE-PHASE TURNKEY PIPELINE<br />
            ZERO DISCONNECT FROM SKETCH TO PERMANENCE
          </div>
        </div>

        {/* Process Flow */}
        <div className="space-y-6">
          {STAGES.map((stage, idx) => (
            <div 
              key={stage.step}
              className="rounded-sm backdrop-blur-md bg-black/20 border border-white/15 hover:border-[#F5C242]/70 hover:shadow-[0_0_15px_rgba(245,194,66,0.2)] hover:bg-black/35 p-6 md:p-8 transition-all duration-300 relative group shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Step number */}
                <div className="lg:col-span-2 flex items-center gap-4">
                  <span className="text-4xl md:text-5xl font-mono font-bold text-white/30 group-hover:text-[#F5C242] transition-colors">
                    {stage.step}
                  </span>
                  <div className="lg:hidden text-xs font-mono text-white uppercase font-bold">
                    {stage.phase}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <div className="hidden lg:block text-[10px] font-mono text-white uppercase tracking-wider mb-1 font-bold">
                    {stage.phase}
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2 group-hover:text-[#F5C242] transition-colors drop-shadow-md">
                    {stage.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#e2e8f0] leading-relaxed font-light">
                    {stage.desc}
                  </p>
                </div>

                {/* Deliverable result */}
                <div className="lg:col-span-4 rounded-sm backdrop-blur-sm bg-black/25 p-4 border border-white/10 font-mono text-xs">
                  <div className="text-[10px] text-[#94a3b8] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F5C242] drop-shadow-[0_0_6px_rgba(245,194,66,0.5)]" />
                    KEY MILESTONE DELIVERABLE
                  </div>
                  <div className="text-white font-medium">
                    {stage.output}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
