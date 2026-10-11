import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building, 
  MapPin, 
  Calendar, 
  Maximize2, 
  Layers, 
  ArrowUpRight, 
  Compass,
  Filter
} from 'lucide-react';

const CATEGORIES = ["ALL PROJECTS", "CIVIC & CULTURAL", "HIGH-RISE", "LUXURY RESIDENTIAL", "COMMERCIAL"];

const PROJECTS = [
  {
    id: "PRJ-01",
    title: "THE MONOLITH TOWER",
    category: "HIGH-RISE",
    location: "Metropolitan High-Density Zone",
    status: "CONCEPT & FEASIBILITY STUDY",
    year: "2025",
    area: "840,000 SQ.FT.",
    height: "385 METERS",
    structure: "Steel Exoskeleton + Tuned Mass Damper",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    description: "Parametric high-rise structural concept featuring a diagrid exoskeleton to eliminate interior column loads and evaluate lateral wind drift under high-aspect ratios."
  },
  {
    id: "PRJ-02",
    title: "VILLA SOLITUDE CANTILEVER",
    category: "LUXURY RESIDENTIAL",
    location: "Alpine Escarpment Setting",
    status: "ARCHITECTURAL DESIGN PROPOSAL",
    year: "2024",
    area: "18,500 SQ.FT.",
    height: "3 STORIES",
    structure: "Post-Tensioned Architectural Concrete",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Private hillside residential study featuring a 28-meter cantilevered living pavilion engineered with post-tensioned slab tiebacks into bedrock anchors."
  },
  {
    id: "PRJ-03",
    title: "AEON CONTEMPORARY PAVILION",
    category: "CIVIC & CULTURAL",
    location: "Seismic Zone 4 Context",
    status: "STRUCTURAL INNOVATION CONCEPT",
    year: "2025",
    area: "125,000 SQ.FT.",
    height: "24 METERS",
    structure: "Glulam Timber Grid + Base Isolation",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description: "Cultural exhibition pavilion concept exploring base-isolated seismic dampening beneath an origami-inspired folded timber geometric canopy."
  },
  {
    id: "PRJ-04",
    title: "NEXUS FINTECH HEADQUARTERS",
    category: "COMMERCIAL",
    location: "Urban Commercial Core",
    status: "SUSTAINABLE OFFICE DESIGN STUDY",
    year: "2024",
    area: "620,000 SQ.FT.",
    height: "190 METERS",
    structure: "Composite Mega-Columns + Smart Façade",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Commercial tower envelope study incorporating dynamic solar-tracking louvers to minimize peak cooling demand in high-density urban settings."
  },
  {
    id: "PRJ-05",
    title: "DESERT MIRAGE RESIDENCES",
    category: "LUXURY RESIDENTIAL",
    location: "Arid Climate Region",
    status: "PASSIVE RESIDENTIAL CONCEPT",
    year: "2026",
    area: "24,000 SQ.FT.",
    height: "2 STORIES",
    structure: "Rammed Earth Monoliths + Weathering Steel",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Thermal-mass rammed earth residential cluster designed to mitigate extreme diurnal temperature swings with deep structural overhangs."
  },
  {
    id: "PRJ-06",
    title: "CENTRAL CIVIC WATERFRONT FORUM",
    category: "CIVIC & CULTURAL",
    location: "Coastal Urban Edge",
    status: "URBAN TOPOGRAPHY STUDY",
    year: "2024",
    area: "340,000 SQ.FT.",
    height: "48 METERS",
    structure: "Cast Steel Nodes + Granite Plinth",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    description: "Public civic waterfront master plan study integrating pedestrian promenade ramps and acoustically isolated auditorium structures."
  }
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");
  const [selectedProject, setSelectedProject] = useState(null);
  const projRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.to('#portfolio-title-bar', {
        yPercent: isMobile ? -5 : -20,
        ease: 'none',
        scrollTrigger: {
          trigger: projRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, projRef);

    return () => ctx.revert();
  }, []);

  const filteredProjects = activeCategory === "ALL PROJECTS"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      ref={projRef}
      className="relative w-full py-16 sm:py-24 md:py-36 bg-transparent text-[#f8fafc] border-t border-white/10 overflow-hidden z-10"
    >
      {/* Background grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="portfolio-title-bar" className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-white/10 gap-4 sm:gap-6" style={{ willChange: 'transform' }}>
          <div>
            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />
              SECTION 04 // ARCHITECTURAL & STRUCTURAL PORTFOLIO
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-white tracking-tight break-words">
              DESIGN PORTFOLIO
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#cbd5e1] max-w-xs">
            CIVIC • RESIDENTIAL • COMMERCIAL<br />
            STRUCTURAL STUDIES & ARCHITECTURAL COMMISSIONS
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mb-8 sm:mb-12">
          <Filter className="w-4 h-4 text-[#F5C242] mr-1 hidden sm:inline-block drop-shadow-[0_0_6px_rgba(245,194,66,0.6)]" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-mono tracking-wider transition-all duration-300 border cursor-pointer rounded-sm backdrop-blur-md ${
                activeCategory === cat
                  ? 'gold-shining-btn border-[#F5C242] shadow-lg shadow-[#F5C242]/30 font-bold'
                  : 'bg-black/20 text-[#cbd5e1] border-white/15 hover:border-[#F5C242]/50 hover:text-[#F5C242] hover:bg-black/35'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group rounded-sm backdrop-blur-md bg-black/20 border border-white/15 hover:border-[#F5C242]/70 hover:shadow-[0_0_20px_rgba(245,194,66,0.25)] hover:bg-black/35 transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-xl"
            >
              {/* Image Preview with overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014] via-transparent to-black/40" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#F5C242] font-bold">
                  {project.id}
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                  {project.category}
                </div>

                {/* Hover trigger icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#F5C242] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#F5C242]">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-white font-mono font-bold mb-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-white" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#F5C242] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-2 mb-4 font-light">
                    {project.description}
                  </p>
                </div>

                {/* Blueprint Metadata row */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[10px] font-mono text-[#cbd5e1]">
                  <div>
                    <span className="text-[#64748b] block">SCALE:</span>
                    <span>{project.area}</span>
                  </div>
                  <div>
                    <span className="text-[#64748b] block">STRUCTURAL TYPOLOGY:</span>
                    <span className="truncate block">{project.structure}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#111317] border border-[#F5C242]/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 relative shadow-2xl shadow-[#F5C242]/20 rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white font-mono text-xs px-2.5 py-1 border border-white/20 bg-black/70 rounded-sm cursor-pointer z-10"
            >
              [✕ CLOSE]
            </button>

            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-2 font-bold pr-20">
              {selectedProject.id} // TECHNICAL BLUEPRINT DOSSIER
            </div>

            <h3 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-2 pr-16 break-words">
              {selectedProject.title}
            </h3>

            <div className="flex items-center gap-4 text-xs font-mono text-white font-bold mb-6">
              <span>{selectedProject.location}</span>
              <span>•</span>
              <span>COMPLETED {selectedProject.year}</span>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden mb-6 bg-black border border-white/10">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#cbd5e1] leading-relaxed mb-6 font-light">
              {selectedProject.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-black/50 border border-white/10 font-mono text-xs">
              <div>
                <span className="text-[#64748b] block text-[10px]">TOTAL AREA</span>
                <span className="text-white font-semibold">{selectedProject.area}</span>
              </div>
              <div>
                <span className="text-[#64748b] block text-[10px]">HEIGHT / ELEVATION</span>
                <span className="text-white font-semibold">{selectedProject.height}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[#64748b] block text-[10px]">STRUCTURAL SYSTEM</span>
                <span className="text-[#F5C242] font-semibold drop-shadow-[0_0_6px_rgba(245,194,66,0.4)]">{selectedProject.structure}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="gold-shining-btn px-6 py-2.5 text-xs tracking-widest uppercase transition-colors rounded-sm shadow-[0_0_15px_rgba(245,194,66,0.4)]"
              >
                REQUEST CASE STUDY ARCHIVE
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
