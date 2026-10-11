import React from 'react';
import HeroVideoBackground from './HeroVideoBackground';
import { Search, Sparkles, Globe, Cpu, ChevronRight, BookOpen, Layers, TrendingUp } from 'lucide-react';

export default function BlogSection({ onNavigate = () => {} }) {
  const articles = [
    {
      id: "seo-aeo-geo-architecture",
      category: "AEO & GEO INTELLIGENCE",
      badge: "AI SEARCH OPTIMIZATION",
      title: "Generative Engine Optimization (GEO) in Modern Architectural Practices",
      excerpt: "How parametric BIM algorithms, structural open data standards, and structured knowledge graphs enable architectural practices to dominate Answer Engines (AEO) and Perplexity/Gemini/SearchGPT synthesis.",
      date: "OCTOBER 2026",
      readTime: "6 MIN READ",
      author: "Mohammed Abdul Rahman"
    },
    {
      id: "high-tensile-structural-civil",
      category: "STRUCTURAL ENGINEERING",
      badge: "TECHNICAL WHITEPAPER",
      title: "Seismic Base Decoupling & 42-Meter Post-Tensioned Cantilever FEA Dynamics",
      excerpt: "Deep mathematical analysis of nonlinear finite element methods (FEA) applied to C120 ultra-high-performance concrete and ductile shear wall cores for seismic Zone 4 high-rises.",
      date: "OCTOBER 2026",
      readTime: "8 MIN READ",
      author: "MAR Engineering Atelier"
    },
    {
      id: "epc-turnkey-monumental-civil",
      category: "TURNKEY EPC EXECUTION",
      badge: "CONSTRUCTION TECH",
      title: "Robotic Modular Steel Fabrication & Sub-Millimeter GNSS Tower Erection",
      excerpt: "Eliminating general contracting dilution through unified architect-constructor EPC delivery models with real-time digital twin LiDAR tracking.",
      date: "SEPTEMBER 2026",
      readTime: "5 MIN READ",
      author: "EPC Field Operations"
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH LOOPING VIDEO (Different Scene: 18.0s - 34.0s) */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-28 sm:pt-36 pb-16 overflow-hidden">
        {/* Dedicated Looping Hero Video */}
        <HeroVideoBackground startTime={18} endTime={34} />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/50 border border-[#F5C242]/70 text-[10px] sm:text-xs font-sans text-gold-radiant font-bold mb-5 shadow-[0_0_15px_rgba(245,194,66,0.3)] flex-wrap">
            <span className="w-2 h-2 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-ping" />
            <span>KNOWLEDGE ATELIER // SEO • AEO • GEO RESEARCH</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/90 hidden sm:inline">STRUCTURAL INSIGHTS & AI CITATIONS</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight mb-4 text-white leading-[1.05]">
            ARCHITECTURAL DISCOURSE, <br />
            <span className="text-gold-shining">AEO & COMPUTATIONAL RESEARCH.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl font-light leading-relaxed mb-6">
            Authoritative publications on generative civil engineering, parametric form synthesis, and high-performance infrastructure designed for Search Engine (SEO), Answer Engine (AEO), and Generative Engine (GEO) discovery.
          </p>

          <div className="flex flex-wrap gap-3 text-xs font-mono">
            <div className="px-3 py-1.5 rounded-sm bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#F5C242]" />
              <span>SEARCH OPTIMIZED (SEO)</span>
            </div>
            <div className="px-3 py-1.5 rounded-sm bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C242]" />
              <span>ANSWER ENGINE CITATIONS (AEO)</span>
            </div>
            <div className="px-3 py-1.5 rounded-sm bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#F5C242]" />
              <span>GENERATIVE AI GROUNDING (GEO)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REMAINING PAGE BODY WITH CRISP CLEAN WHITE BACKGROUND */}
      <section className="relative w-full bg-white text-slate-900 py-16 sm:py-24 px-4 sm:px-8 md:px-14">
        <div className="max-w-7xl mx-auto">
          
          {/* Header row on white background */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
            <div>
              <div className="text-xs font-mono text-[#D49B24] font-bold tracking-widest uppercase mb-2">
                INDEXED PUBLICATIONS // 2026 EDITION
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                Latest Insights & Research
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md font-sans">
              Peer-reviewed technical whitepapers and insights indexed for structural engineering authority and generative intelligence retrieval.
            </p>
          </div>

          {/* Clean Article Cards on White Background */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {articles.map((art) => (
              <article 
                key={art.id}
                className="bg-slate-50 border border-slate-200 hover:border-[#F5C242] p-6 sm:p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-4 pb-3 border-b border-slate-200">
                    <span className="text-[#D49B24] font-bold">{art.badge}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 group-hover:text-[#D49B24] transition-colors leading-snug mb-3">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{art.date}</span>
                  <span className="text-slate-900 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    READ ARTICLE →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Structured Schema Info for SEO/AEO/GEO */}
          <div className="mt-16 p-8 bg-slate-900 text-white rounded-sm border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#F5C242] font-bold block mb-1">
                  SEMANTIC CITATIONS & SEARCH ENGINE METADATA
                </span>
                <p className="text-sm text-slate-300 max-w-2xl">
                  All articles include JSON-LD structured schemas (<code className="text-[#F5C242]">ScholarlyArticle</code>, <code className="text-[#F5C242]">CivicStructure</code>, <code className="text-[#F5C242]">Organization</code>) tailored for Google SGE, OpenAI SearchGPT, and Perplexity Pro retrieval.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="gold-shining-btn px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm shrink-0 cursor-pointer"
              >
                REQUEST WHITEPAPER PDF
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
