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
    location: "Hudson Yards, New York",
    year: "2025",
    area: "840,000 SQ.FT.",
    height: "385 METERS",
    structure: "Steel Exoskeleton + Tuned Mass Damper",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    description: "A 78-story parametric tower featuring a diagrid titanium exoskeleton, eliminating interior column loads and offering 360-degree column-free panoramic floor plates."
  },
  {
    id: "PRJ-02",
    title: "VILLA SOLITUDE CANTILEVER",
    category: "LUXURY RESIDENTIAL",
    location: "Lake Lucerne, Switzerland",
    year: "2024",
    area: "18,500 SQ.FT.",
    height: "3 STORIES",
    structure: "Post-Tensioned C100 Architectural Concrete",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A monumental residence projecting 28 meters over alpine bedrock. Triple-glazed acoustic glass dissolves the boundary between raw cliff and refined interior travertine."
  },
  {
    id: "PRJ-03",
    title: "AEON CONTEMPORARY PAVILION",
    category: "CIVIC & CULTURAL",
    location: "Kyoto, Japan",
    year: "2025",
    area: "125,000 SQ.FT.",
    height: "24 METERS",
    structure: "Carbon-Fiber Glulam + Base Isolation Bearings",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description: "Engineered to withstand magnitude 9.0 seismic events while creating a continuous light-diffusing origami roof canopy floating above pristine reflecting pools."
  },
  {
    id: "PRJ-04",
    title: "NEXUS FINTECH HEADQUARTERS",
    category: "COMMERCIAL",
    location: "Canary Wharf, London",
    year: "2024",
    area: "620,000 SQ.FT.",
    height: "190 METERS",
    structure: "Hybrid Composite Mega-Columns + Smart Façade",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "A net-zero operational headquarters with a kinetic photovoltaic double-skin façade that tracks solar zenith to generate 35% of building energy."
  },
  {
    id: "PRJ-05",
    title: "DESERT MIRAGE RESIDENCES",
    category: "LUXURY RESIDENTIAL",
    location: "Palm Springs, California",
    year: "2026",
    area: "24,000 SQ.FT.",
    height: "2 STORIES",
    structure: "Rammed Earth Monoliths + Weathering Steel",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description: "Monolithic thermal-mass rammed earth walls naturally moderating extreme diurnal temperature shifts, shaded by deep horizontal cantilever canopies."
  },
  {
    id: "PRJ-06",
    title: "CENTRAL CIVIC OPERA FORUM",
    category: "CIVIC & CULTURAL",
    location: "Oslo Waterfront, Norway",
    year: "2023",
    area: "340,000 SQ.FT.",
    height: "48 METERS",
    structure: "Cast Steel Nodes + White Granite Plinth",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    description: "An undulating civic topography rising seamlessly from the fjord waters, creating a public walkable rooftop plaza and acoustically sealed world-class auditoriums."
  }
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL PROJECTS");
  const [selectedProject, setSelectedProject] = useState(null);
  const projRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#portfolio-title-bar', {
        yPercent: -20,
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
      className="relative w-full py-28 md:py-36 bg-transparent text-[#f8fafc] border-t border-white/10 overflow-hidden z-10"
    >
      {/* Background grid */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="portfolio-title-bar" className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6" style={{ willChange: 'transform' }}>
          <div>
            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />
              SECTION 04 // BUILT MONUMENTS
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
              PORTFOLIO ARCHIVE
            </h2>
          </div>
          <div className="text-right font-mono text-xs text-[#94a3b8] max-w-xs">
            CIVIC • RESIDENTIAL • COMMERCIAL<br />
            GLOBAL REGISTER OF COMPLETED COMMISSION
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12">
          <Filter className="w-4 h-4 text-[#F5C242] mr-2 hidden sm:inline-block drop-shadow-[0_0_6px_rgba(245,194,66,0.6)]" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono tracking-wider transition-all duration-300 border cursor-pointer rounded-sm backdrop-blur-md ${
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#111317] border border-[#F5C242]/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl shadow-[#F5C242]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white font-mono text-sm px-3 py-1 border border-white/20"
            >
              [CLOSE ✕]
            </button>

            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-2 font-bold">
              {selectedProject.id} // TECHNICAL BLUEPRINT DOSSIER
            </div>

            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-2">
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
