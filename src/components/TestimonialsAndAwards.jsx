import React from 'react';
import { Award, Trophy, Star, Quote } from 'lucide-react';

const AWARDS = [
  {
    year: "2025",
    title: "GLOBAL ARCHITECTURAL EXCELLENCE AWARD",
    org: "International Union of Architects (UIA)",
    project: "The Monolith Tower (Hudson Yards)"
  },
  {
    year: "2024",
    title: "CIVIL ENGINEERING STRUCTURAL INNOVATION PRIZE",
    org: "American Society of Civil Engineers (ASCE)",
    project: "Villa Solitude Cantilever"
  },
  {
    year: "2024",
    title: "WORLD TIMBER & SEISMIC ARCHITECTURE MEDAL",
    org: "Kyoto Architectural Council",
    project: "Aeon Contemporary Pavilion"
  },
  {
    year: "2023",
    title: "SUSTAINABLE MONUMENT OF THE YEAR (LEED PLATINUM)",
    org: "European Architectural Forum",
    project: "Nexus Fintech Headquarters"
  }
];

const REVIEWS = [
  {
    quote: "MAR Architectural Studio has accomplished what many structural engineers believed impossible: achieving 42-meter post-tensioned cantilevers while preserving the poetic weightlessness of pure geometry.",
    author: "Elena Rostova, Ph.D.",
    role: "Chair of Structural Mechanics, Zurich Federal Institute"
  },
  {
    quote: "Their unified model as master architect and general civil contractor eliminated the compromises that plague large-scale developments. Delivered on millimeter tolerance.",
    author: "Marcus Sterling",
    role: "Managing Director, Sterling Capital Real Estate"
  }
];

export default function TestimonialsAndAwards() {
  return (
    <section className="relative w-full py-28 md:py-36 bg-transparent text-[#f8fafc] border-t border-white/10 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15 gap-6">
          <div>
            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />
              SECTION 08 // PEER ACCLAIM & AWARDS
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              GLOBAL HONORS
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-[#cbd5e1] max-w-xs drop-shadow-md">
            INTERNATIONAL RECOGNITION FOR STRUCTURAL AUDACITY AND ARCHITECTURAL POETRY
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {AWARDS.map((aw, i) => (
            <div 
              key={i}
              className="p-6 rounded-sm backdrop-blur-md bg-black/20 border border-white/15 hover:border-[#F5C242]/70 hover:shadow-[0_0_15px_rgba(245,194,66,0.25)] hover:bg-black/35 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Trophy className="w-5 h-5 text-[#F5C242] drop-shadow-[0_0_8px_rgba(245,194,66,0.6)]" />
                  <span className="text-xs font-mono text-[#94a3b8]">{aw.year}</span>
                </div>
                <h4 className="text-sm font-serif font-bold text-white mb-2 leading-snug drop-shadow-md">
                  {aw.title}
                </h4>
                <div className="text-xs font-mono text-white mb-2 font-bold tracking-wide">
                  {aw.org}
                </div>
              </div>
              <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#cbd5e1]">
                FOR: {aw.project}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((rev, i) => (
            <div key={i} className="p-8 rounded-sm backdrop-blur-md bg-black/25 border border-white/15 relative shadow-xl">
              <Quote className="w-8 h-8 text-[#F5C242]/70 drop-shadow-[0_0_8px_rgba(245,194,66,0.4)] mb-4" />
              <p className="text-sm md:text-base text-[#f1f5f9] italic leading-relaxed mb-6 font-light drop-shadow-sm">
                “{rev.quote}”
              </p>
              <div>
                <div className="text-sm font-serif font-bold text-white">
                  {rev.author}
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
