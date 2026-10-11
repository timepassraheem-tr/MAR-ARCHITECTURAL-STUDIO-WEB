import React from 'react';
import { Award, Trophy, Star, Quote } from 'lucide-react';

const PEER_PRINCIPLES = [
  {
    topic: "PARAMETRIC CANTILEVER DYNAMICS",
    standard: "Nonlinear Finite Element Modeling",
    summary: "Integrated computational modeling allows long-span cantilevers and complex geometries while upholding rigorous gravity and lateral load safety criteria."
  },
  {
    topic: "SEISMIC RESILIENCE STANDARDS",
    standard: "Base Isolation & Ductile Detailing",
    summary: "Subterranean base bearings decouple superstructures during critical ground accelerations, mitigating structural distress."
  },
  {
    topic: "INTEGRATED EPC DELIVERY",
    standard: "Unified Architect-Led Execution",
    summary: "Single-source architectural and engineering oversight eliminates sub-contractor communication gaps and protects design intent from inception to site completion."
  },
  {
    topic: "PERMANENT MATERIALITY",
    standard: "Acoustic Crystal & Architectural Concrete",
    summary: "Prioritizing honest raw materials engineered for durability, weather patina, and low long-term maintenance overhead."
  }
];

const COLLABORATION_NOTES = [
  {
    quote: "MAR Architectural Studio integrates computational form design with practical civil engineering coordination, removing the typical friction between architectural concepts and real structural execution.",
    attribution: "Engineering Collaboration Assessment",
    role: "Structural & Civil Practice Framework"
  },
  {
    quote: "Direct access to the studio's principal architect and lead engineers provides clarity on feasibility, zoning allowances, and realistic budgeting from day one.",
    attribution: "Private Commission Client Feedback",
    role: "Luxury Residential & Commercial Inquiries"
  }
];

export default function TestimonialsAndAwards() {
  return (
    <section className="relative w-full py-16 sm:py-24 md:py-36 bg-transparent text-[#f8fafc] border-t border-white/10 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-white/15 gap-4 sm:gap-6">
          <div>
            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />
              SECTION 08 // PRACTICE PRINCIPLES & COLLABORATION
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] break-words">
              ENGINEERING RIGOR
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#cbd5e1] max-w-xs drop-shadow-md">
            CORE DISCIPLINE PRINCIPLES AND COLLABORATIVE DELIVERY FRAMEWORKS
          </div>
        </div>

        {/* Practice Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PEER_PRINCIPLES.map((principle, i) => (
            <div 
              key={i}
              className="p-6 rounded-sm backdrop-blur-md bg-black/40 border border-white/15 hover:border-[#F5C242]/70 hover:shadow-[0_0_15px_rgba(245,194,66,0.25)] hover:bg-black/55 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-5 h-5 text-[#F5C242] drop-shadow-[0_0_8px_rgba(245,194,66,0.6)]" />
                  <span className="text-[11px] font-mono text-[#F5C242]/90">0{i + 1}</span>
                </div>
                <h4 className="text-sm font-serif font-bold text-white mb-2 leading-snug drop-shadow-md">
                  {principle.topic}
                </h4>
                <div className="text-xs font-mono text-[#F5C242] mb-3 font-semibold tracking-wide">
                  {principle.standard}
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed font-sans">
                  {principle.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Notes / Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLABORATION_NOTES.map((rev, i) => (
            <div key={i} className="p-8 rounded-sm backdrop-blur-md bg-black/40 border border-white/15 relative shadow-xl">
              <Quote className="w-8 h-8 text-[#F5C242]/70 drop-shadow-[0_0_8px_rgba(245,194,66,0.4)] mb-4" />
              <p className="text-sm md:text-base text-[#f1f5f9] italic leading-relaxed mb-6 font-light drop-shadow-sm">
                “{rev.quote}”
              </p>
              <div>
                <div className="text-sm font-serif font-bold text-white">
                  {rev.attribution}
                </div>
                <div className="text-xs font-mono text-[#cbd5e1]">
                  {rev.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
