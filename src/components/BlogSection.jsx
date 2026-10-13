import React, { useState } from 'react';
import HeroVideoBackground from './HeroVideoBackground';
import { 
  Compass, 
  Layers, 
  Cpu, 
  Leaf, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ExternalLink,
  BookOpen,
  MapPin,
  Check,
  Copy,
  Share2,
  Calendar,
  Clock,
  Sparkles
} from 'lucide-react';

export default function BlogSection({ onNavigate = () => {} }) {
  const [activeTab, setActiveTab] = useState('hyderabad'); // 'hyderabad' or 'performance'
  const [copiedHyderabad, setCopiedHyderabad] = useState(false);
  const [copiedPerformance, setCopiedPerformance] = useState(false);

  const hyderabadText = `# The Complete Guide to Turnkey Residential Construction and Modern Architecture in Hyderabad

From 2D floor plans and 3D architectural visualization to end-to-end execution, discover how integrated design-build workflows transform property development in Hyderabad.

Building a home or commercial property is one of the most significant investments you will ever make. For property owners and developers in Hyderabad, navigating the complexities of architectural design, structural engineering, statutory approvals, material selection, and on-site construction can feel overwhelming.

Traditional building methods often separate the architect from the contractor, leading to miscommunication, budget overruns, and project delays. Today, property owners are turning toward performance-driven, turnkey architecture firms that manage every single phase under one roof.

In this guide, we explore what goes into modern residential construction in Hyderabad, why integrating architectural planning with digital visualization matters, and what you should look for when hiring an expert architecture and construction firm.

## Why Integrated Architecture and Turnkey Construction Matter in Hyderabad
Hyderabad's real estate landscape is evolving rapidly. From independent luxury villas in upscale neighborhoods to modern multi-story residential buildings, the expectations for design, structural safety, and space optimization are higher than ever.

An integrated design-build approach ensures that:
- Design Meets Budget: Architects design with actual construction costs and material realities in mind from day one.
- Seamless Coordination: Structural engineering and MEP (Mechanical, Electrical, and Plumbing) services are coordinated before breaking ground, preventing costly on-site errors.
- Accountability: A single dedicated team handles your project from the initial concept sketch to the final key handover.

## Core Services Every Modern Project Needs
1. Custom Architectural Planning & Design
2. 2D Floor Plans & 3D Architectural Visualization
3. Structural Engineering & Seismic Safety
4. Turnkey Residential Construction
5. Home Renovation, Remodeling & Reconstruction

## Plan Your Next Project with MAR Architectural Studio
Based in Hyderabad, MAR Architectural Studio combines creative design ambition with rigorous technical execution. Contact via WhatsApp: https://wa.me/919985185209`;

  const performanceText = `# Beyond the Blueprint: How Performance-Driven Architecture Combines Parametric Design, Structural Engineering and Digital Twins

A practical guide to designing buildings that are visually distinctive, structurally considered, digitally coordinated and environmentally responsive.

Explore how parametric architecture, structural engineering, BIM, and digital twins work together at MAR Architectural Studio.`;

  const copyToClipboard = (text, setCopied) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {}
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="w-full bg-[#0f1115] text-[#f8fafc]">
      {/* 1. HERO SECTION WITH EXPANDED LOOPING VIDEO */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-center px-4 sm:px-8 md:px-14 pt-32 sm:pt-40 pb-20 overflow-hidden">
        {/* Dedicated Looping Hero Video (Timeline: 18s - 34s) */}
        <HeroVideoBackground startTime={18} endTime={34} />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-black/60 border border-[#F5C242]/70 text-[10px] sm:text-xs font-sans text-gold-radiant font-bold mb-6 shadow-[0_0_15px_rgba(245,194,66,0.3)]">
            <span className="w-2 h-2 rounded-full bg-[#F5C242] shadow-[0_0_8px_#F5C242] animate-ping" />
            <span>MAR ARCHITECTURAL STUDIO // PERSPECTIVES & REGIONAL RESEARCH</span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight mb-5 text-white leading-[1.05]">
            THE <span className="text-gold-shining">BLOG.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl font-light leading-relaxed mb-8">
            Expert guides on modern architecture, turnkey residential construction in Hyderabad, parametric design, and computational engineering.
          </p>

          {/* Tab Selector Pills in Hero */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('hyderabad')}
              className={`px-4 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'hyderabad'
                  ? 'gold-shining-btn border-[#F5C242] shadow-[0_0_16px_rgba(245,194,66,0.4)]'
                  : 'bg-black/60 border border-white/20 text-slate-300 hover:text-white hover:border-[#F5C242]/50'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>GUIDE 01 // HYDERABAD TURNKEY GUIDE</span>
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-4 py-2.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === 'performance'
                  ? 'gold-shining-btn border-[#F5C242] shadow-[0_0_16px_rgba(245,194,66,0.4)]'
                  : 'bg-black/60 border border-white/20 text-slate-300 hover:text-white hover:border-[#F5C242]/50'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>GUIDE 02 // PERFORMANCE & PARAMETRIC BIM</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE SELECTOR TAB BAR (Sticky Navigation) */}
      <div className="sticky top-16 sm:top-20 z-30 bg-[#0f1115]/95 backdrop-blur-md border-y border-white/10 px-4 sm:px-6 md:px-12 py-3">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('hyderabad')}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-xs font-mono tracking-wider transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'hyderabad'
                  ? 'bg-[#F5C242]/20 text-[#F5C242] border border-[#F5C242] font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C242]" />
              <span>HYDERABAD TURNKEY GUIDE</span>
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-xs font-mono tracking-wider transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'performance'
                  ? 'bg-[#F5C242]/20 text-[#F5C242] border border-[#F5C242] font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C242]" />
              <span>PARAMETRIC ARCHITECTURE & BIM</span>
            </button>
          </div>

          {/* Quick Copy Button */}
          <div>
            {activeTab === 'hyderabad' ? (
              <button
                onClick={() => copyToClipboard(hyderabadText, setCopiedHyderabad)}
                className="w-full sm:w-auto px-3 py-1.5 bg-black/60 hover:bg-black/90 border border-[#F5C242]/60 hover:border-[#F5C242] text-[11px] font-mono text-[#F5C242] rounded-sm flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                title="Click to copy full article markdown for CMS / Social"
              >
                {copiedHyderabad ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 font-bold">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>CLICK TO COPY ARTICLE</span>
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={() => copyToClipboard(performanceText, setCopiedPerformance)}
                className="w-full sm:w-auto px-3 py-1.5 bg-black/60 hover:bg-black/90 border border-[#F5C242]/60 hover:border-[#F5C242] text-[11px] font-mono text-[#F5C242] rounded-sm flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                title="Click to copy full article markdown for CMS / Social"
              >
                {copiedPerformance ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 font-bold">COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>CLICK TO COPY ARTICLE</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================
          ARTICLE 1: HYDERABAD TURNKEY RESIDENTIAL CONSTRUCTION
          ========================================================= */}
      {activeTab === 'hyderabad' && (
        <article className="relative w-full bg-[#0f1115] py-12 sm:py-20 px-4 sm:px-6 md:px-12 animate-fadeIn">
          <div className="max-w-4xl mx-auto">
            
            {/* Header Meta */}
            <div className="pb-8 mb-10 border-b border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#F5C242] font-semibold">
                  <span className="px-2.5 py-1 bg-black/70 border border-[#F5C242]/40 rounded-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    HYDERABAD REGIONAL GUIDE
                  </span>
                  <span>•</span>
                  <span className="text-slate-400">TURNKEY CONSTRUCTION & 3D VISUALIZATION</span>
                  <span>•</span>
                  <span className="text-slate-400">EST. READ: 6 MIN</span>
                </div>

                {/* Prominent Click to Copy Pill */}
                <button
                  onClick={() => copyToClipboard(hyderabadText, setCopiedHyderabad)}
                  className="px-3.5 py-1.5 bg-black/80 hover:bg-black border border-[#F5C242] text-xs font-mono font-bold text-[#F5C242] rounded-sm flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(245,194,66,0.25)] cursor-pointer"
                >
                  {copiedHyderabad ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>CLICK TO COPY (CMS READY)</span>
                    </>
                  )}
                </button>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-5">
                The Complete Guide to Turnkey Residential Construction and Modern Architecture in Hyderabad
              </h1>

              <p className="text-base sm:text-lg text-[#cbd5e1] font-sans font-medium leading-relaxed italic border-l-2 border-[#F5C242] pl-4">
                From 2D floor plans and 3D architectural visualization to end-to-end execution, discover how integrated design-build workflows transform property development in Hyderabad.
              </p>
            </div>

            {/* Article Content */}
            <div className="space-y-10 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              
              {/* Introduction paragraphs */}
              <div className="space-y-4">
                <p>
                  Building a home or commercial property is one of the most significant investments you will ever make. For property owners and developers in Hyderabad, navigating the complexities of architectural design, structural engineering, statutory approvals, material selection, and on-site construction can feel overwhelming.
                </p>
                <p>
                  Traditional building methods often separate the architect from the contractor, leading to miscommunication, budget overruns, and project delays. Today, property owners are turning toward performance-driven, turnkey architecture firms that manage every single phase under one roof.
                </p>
                <p>
                  In this guide, we explore what goes into modern residential construction in Hyderabad, why integrating architectural planning with digital visualization matters, and what you should look for when hiring an expert architecture and construction firm.
                </p>
              </div>

              {/* Section: Why Integrated Architecture and Turnkey Construction Matter */}
              <div className="p-6 sm:p-8 rounded-sm bg-black/40 border border-white/15 backdrop-blur-md">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F5C242] inline-block shadow-[0_0_8px_#F5C242]" />
                  Why Integrated Architecture and Turnkey Construction Matter in Hyderabad
                </h2>
                <p className="mb-4">
                  Hyderabad&apos;s real estate landscape is evolving rapidly. From independent luxury villas in upscale neighborhoods (such as Jubilee Hills, Banjara Hills, Gachibowli, and Financial District) to modern multi-story residential buildings, the expectations for design, structural safety, and space optimization are higher than ever.
                </p>

                <div className="space-y-3 pt-3 border-t border-white/10">
                  <div className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">An integrated design-build approach ensures that:</div>
                  <div className="p-3.5 bg-black/50 border border-white/10 rounded-sm">
                    <strong className="text-white block mb-1">1. Design Meets Budget:</strong>
                    <span>Architects design with actual construction costs, local procurement availability, and material realities in mind from day one.</span>
                  </div>
                  <div className="p-3.5 bg-black/50 border border-white/10 rounded-sm">
                    <strong className="text-white block mb-1">2. Seamless Coordination:</strong>
                    <span>Structural engineering and MEP (Mechanical, Electrical, and Plumbing) services are coordinated before breaking ground, preventing costly on-site errors and rework.</span>
                  </div>
                  <div className="p-3.5 bg-black/50 border border-white/10 rounded-sm">
                    <strong className="text-white block mb-1">3. Single-Point Accountability:</strong>
                    <span>A single dedicated team handles your project from the initial concept sketch to the final key handover—eliminating finger-pointing between architects and contractors.</span>
                  </div>
                </div>
              </div>

              {/* Core Services Section */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight mb-3">
                    Core Services Every Modern Project Needs
                  </h2>
                  <p className="text-slate-300">
                    When planning a construction or major renovation project, partnering with a firm that offers a comprehensive suite of services ensures superior execution. Here is a breakdown of essential capabilities:
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {/* Service 1 */}
                  <div className="p-5 sm:p-6 rounded-sm bg-black/35 border border-white/15 hover:border-[#F5C242]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#F5C242]/20 text-[#F5C242] flex items-center justify-center font-mono text-xs font-bold border border-[#F5C242]/50">01</span>
                      <h3 className="text-lg font-serif font-bold text-white">Custom Architectural Planning & Design</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 pl-9">
                      Every successful building starts with a well-thought-out brief. Custom architectural design balances your lifestyle requirements, aesthetic preferences, site orientation, local GHMC/HMDA zoning laws, and environmental climate responses (such as natural cross-ventilation and passive thermal comfort suited to Deccan heat).
                    </p>
                  </div>

                  {/* Service 2 */}
                  <div className="p-5 sm:p-6 rounded-sm bg-black/35 border border-white/15 hover:border-[#F5C242]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#F5C242]/20 text-[#F5C242] flex items-center justify-center font-mono text-xs font-bold border border-[#F5C242]/50">02</span>
                      <h3 className="text-lg font-serif font-bold text-white">2D Floor Plans & 3D Architectural Visualization</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 pl-9">
                      Words and 2D blueprints can only show so much. Advanced 2D floor planning combined with lifelike 3D architectural visualization allows you to walk through your future home digitally. You can review room layouts, lighting scenography, facade treatments, and interior finishes before a single brick is laid, completely eliminating guesswork.
                    </p>
                  </div>

                  {/* Service 3 */}
                  <div className="p-5 sm:p-6 rounded-sm bg-black/35 border border-white/15 hover:border-[#F5C242]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#F5C242]/20 text-[#F5C242] flex items-center justify-center font-mono text-xs font-bold border border-[#F5C242]/50">03</span>
                      <h3 className="text-lg font-serif font-bold text-white">Structural Engineering & Seismic Safety</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 pl-9">
                      A visually stunning building must also be rock-solid. Rigorous structural engineering evaluates gravity loads, wind pressures, and seismic requirements. Early structural coordination ensures long-term building stability, durability, and occupant safety across decades.
                    </p>
                  </div>

                  {/* Service 4 */}
                  <div className="p-5 sm:p-6 rounded-sm bg-black/35 border border-white/15 hover:border-[#F5C242]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#F5C242]/20 text-[#F5C242] flex items-center justify-center font-mono text-xs font-bold border border-[#F5C242]/50">04</span>
                      <h3 className="text-lg font-serif font-bold text-white">Turnkey Residential Construction</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 pl-9">
                      Turnkey construction means the architecture firm takes complete responsibility for execution. This includes verified material procurement, skilled labor management, structural quality control, timeline tracking, and strict site supervision—delivering a truly hassle-free building experience for the client.
                    </p>
                  </div>

                  {/* Service 5 */}
                  <div className="p-5 sm:p-6 rounded-sm bg-black/35 border border-white/15 hover:border-[#F5C242]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#F5C242]/20 text-[#F5C242] flex items-center justify-center font-mono text-xs font-bold border border-[#F5C242]/50">05</span>
                      <h3 className="text-lg font-serif font-bold text-white">Home Renovation, Remodeling & Reconstruction</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 pl-9">
                      Not every project starts from scratch. Transforming an existing property through strategic remodeling, structural extensions, or interior redesign can breathe new life into older spaces while maximizing functional utility and real estate property value.
                    </p>
                  </div>
                </div>
              </div>

              {/* What to ask before hiring an architect */}
              <div className="p-6 sm:p-8 rounded-sm bg-black/40 border border-white/15">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                  What to Ask Before Hiring an Architect or Builder in Hyderabad
                </h2>
                <p className="text-sm text-slate-300 mb-6">
                  Choosing the right architectural partner is crucial to your project&apos;s success. Before signing an agreement, consider asking these key questions:
                </p>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 bg-black/50 border border-white/10 rounded-sm">
                    <strong className="text-white">1. How do you handle the transition from design to construction?</strong>
                    <p className="text-slate-400 mt-1">Look for firms that offer turnkey oversight or work in close collaboration with trusted engineers to prevent design dilution.</p>
                  </div>
                  <div className="p-3.5 bg-black/50 border border-white/10 rounded-sm">
                    <strong className="text-white">2. Will I receive 3D visualizations before construction begins?</strong>
                    <p className="text-slate-400 mt-1">Ensure you can review detailed spatial renders and material elevations to avoid post-construction surprises.</p>
                  </div>
                  <div className="p-3.5 bg-black/50 border border-white/10 rounded-sm">
                    <strong className="text-white">3. How are project timelines and budgets managed?</strong>
                    <p className="text-slate-400 mt-1">Ask about milestone reporting processes, bill of quantities (BOQ), and how design variations or changes are handled transparently.</p>
                  </div>
                  <div className="p-3.5 bg-black/50 border border-white/10 rounded-sm">
                    <strong className="text-white">4. Can I review completed projects similar to mine in Hyderabad?</strong>
                    <p className="text-slate-400 mt-1">Check their portfolio for local project experience and verified engineering credentials.</p>
                  </div>
                </div>
              </div>

              {/* Plan Your Next Project with MAR Architectural Studio */}
              <div className="p-6 sm:p-8 rounded-sm bg-black/60 border border-[#F5C242]/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5C242]/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F5C242] uppercase font-bold mb-3">
                  <Sparkles className="w-4 h-4 text-[#F5C242]" />
                  COMMISSION DIRECT CONSULTATION
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  Plan Your Next Project with MAR Architectural Studio
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  At MAR Architectural Studio, we combine creative design ambition with rigorous technical execution. Based in Hyderabad under Principal Architect & Civil Engineer Mohammed Abdul Rahman, we specialize in custom architectural planning, 2D/3D visualization, structural engineering, and end-to-end turnkey residential construction.
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  Whether you are planning a modern luxury villa, a structural home renovation, or a commercial development, our integrated team is here to guide you from concept to handover.
                </p>

                {/* Direct CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/919985185209?text=Hello%20MAR%20Architectural%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20turnkey%20residential%20project%20in%20Hyderabad."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-shining-btn px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-2 shadow-xl shadow-[#F5C242]/30 cursor-pointer"
                  >
                    <span>Schedule WhatsApp Consultation</span>
                    <span>→</span>
                  </a>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-white border border-white/25 hover:border-[#F5C242] hover:text-[#F5C242] bg-black/50 rounded-sm cursor-pointer transition-colors"
                  >
                    Submit Project Inquiry Form
                  </button>

                  <button
                    onClick={() => onNavigate('projects')}
                    className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white border border-white/10 hover:border-white/30 bg-black/30 rounded-sm cursor-pointer transition-colors"
                  >
                    Explore Portfolio
                  </button>
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div className="pt-8 border-t border-white/15">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6">
                  Frequently Asked Questions (FAQ)
                </h2>

                <div className="space-y-4">
                  <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">
                      Q: What is turnkey construction?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      A: Turnkey construction is a delivery method where a single firm manages your entire project from initial architectural design, 3D floor planning, and permits through to construction, finishing, and final handover.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">
                      Q: Why are 3D architectural visualizations important?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      A: 3D visualizations give you a realistic, photorealistic preview of your building&apos;s exterior and interior spaces, helping you make informed design decisions before construction starts.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                    <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">
                      Q: How long does residential construction typically take in Hyderabad?
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      A: Timelines vary depending on the plot size, structural complexity, and scope of work (e.g., standard villa vs. multi-story residential building). A turnkey contractor can provide a detailed schedule after reviewing your initial brief.
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-xs text-slate-400 italic">
                  Disclaimer: This article provides general information for educational and planning purposes. Project-specific requirements, timelines, and technical outcomes depend on individual site conditions and professional engineering assessments.
                </p>
              </div>

            </div>

          </div>
        </article>
      )}

      {/* =========================================================
          ARTICLE 2: PERFORMANCE-DRIVEN ARCHITECTURE & PARAMETRIC BIM
          ========================================================= */}
      {activeTab === 'performance' && (
        <article className="relative w-full bg-[#0f1115] py-12 sm:py-20 px-4 sm:px-6 md:px-12 animate-fadeIn">
          <div className="max-w-4xl mx-auto">
            
            {/* Header Meta */}
            <div className="pb-8 mb-10 border-b border-white/15">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#F5C242] font-semibold">
                  <span className="px-2.5 py-1 bg-black/70 border border-[#F5C242]/40 rounded-sm flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    TECHNICAL PERSPECTIVE
                  </span>
                  <span>•</span>
                  <span className="text-slate-400">PARAMETRIC DESIGN, BIM & DIGITAL TWINS</span>
                  <span>•</span>
                  <span className="text-slate-400">EST. READ: 10 MIN</span>
                </div>

                {/* Prominent Click to Copy Pill */}
                <button
                  onClick={() => copyToClipboard(performanceText, setCopiedPerformance)}
                  className="px-3.5 py-1.5 bg-black/80 hover:bg-black border border-[#F5C242] text-xs font-mono font-bold text-[#F5C242] rounded-sm flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(245,194,66,0.25)] cursor-pointer"
                >
                  {copiedPerformance ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>CLICK TO COPY (CMS READY)</span>
                    </>
                  )}
                </button>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-5">
                Beyond the Blueprint: How Performance-Driven Architecture Combines Parametric Design, Structural Engineering and Digital Twins
              </h1>

              <p className="text-base sm:text-lg text-[#cbd5e1] font-sans font-medium leading-relaxed italic border-l-2 border-[#F5C242] pl-4">
                A practical guide to designing buildings that are visually distinctive, structurally considered, digitally coordinated and environmentally responsive.
              </p>
            </div>

            {/* Article Content */}
            <div className="space-y-10 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              <div className="space-y-4">
                <p>
                  Modern architecture is no longer defined by appearance alone. A successful building must respond to its site, climate, occupants, structural requirements, construction constraints and long-term operating needs.
                </p>
                <p>
                  Performance-driven architecture brings these considerations together from the earliest design stages. By combining parametric design, structural engineering, Building Information Modeling (BIM), digital twins and climate-responsive strategies, project teams can make better-informed decisions before construction begins.
                </p>
                <p>
                  At MAR Architectural Studio, the studio&apos;s stated service areas include parametric architecture, structural and seismic engineering, BIM and digital-twin workflows, and net-zero-oriented design. These disciplines provide a useful framework for exploring how design ambition can be balanced with technical coordination and long-term building performance.
                </p>
                <p>
                  In this guide, we explain what performance-driven architecture means, how its key technologies work together, and what clients should consider before commissioning an architectural project.
                </p>
              </div>

              {/* Section: What is performance-driven architecture */}
              <div className="p-6 sm:p-8 rounded-sm bg-black/40 border border-white/15 backdrop-blur-md">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#F5C242] inline-block shadow-[0_0_8px_#F5C242]" />
                  What is performance-driven architecture?
                </h2>
                <p className="mb-4">
                  Performance-driven architecture is an approach to building design in which aesthetic decisions are evaluated alongside measurable requirements such as energy use, daylight, thermal comfort, structural behavior, material efficiency, accessibility and operational needs.
                </p>
                <p className="mb-4">
                  Instead of treating engineering and sustainability as separate tasks added after the design is complete, the project team considers them throughout the design process.
                </p>
                <p className="mb-6 font-semibold text-white">
                  <strong className="text-[#F5C242]">In simple terms:</strong> performance-driven architecture aims to create buildings that look purposeful, function effectively, meet their technical requirements and respond to their environmental context.
                </p>

                <div className="text-xs sm:text-sm text-slate-300 space-y-2.5 pt-4 border-t border-white/10">
                  <div className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">Its main components include:</div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#F5C242] font-bold">•</span>
                    <span><strong className="text-white">Architectural design:</strong> shaping the building around its purpose, context and user experience.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#F5C242] font-bold">•</span>
                    <span><strong className="text-white">Structural engineering:</strong> evaluating loads, stability, materials and applicable safety requirements.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#F5C242] font-bold">•</span>
                    <span><strong className="text-white">Environmental design:</strong> considering sunlight, shading, ventilation, energy and water use.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#F5C242] font-bold">•</span>
                    <span><strong className="text-white">Digital coordination:</strong> using BIM and related tools to coordinate building information across disciplines.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#F5C242] font-bold">•</span>
                    <span><strong className="text-white">Lifecycle thinking:</strong> considering maintenance, adaptability, material impacts and future operating needs.</span>
                  </div>
                </div>
              </div>

              {/* Section 1: Parametric Architecture */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  1. Parametric architecture: turning design ideas into testable options
                </h2>
                <p>
                  Parametric architecture uses relationships, rules and adjustable parameters to generate or modify design options. Instead of manually redrawing every variation, designers can change selected inputs and evaluate how the building form responds.
                </p>
                <p>
                  For example, a design team exploring a commercial building facade might adjust shading depth, panel spacing, orientation or geometric patterns. The resulting alternatives can then be assessed for appearance, daylight, solar exposure, constructability and cost implications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="p-5 rounded-sm bg-black/30 border border-white/10">
                    <h4 className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">Complex building forms</h4>
                    <p className="text-xs sm:text-sm text-slate-300">Parametric workflows can help organize intricate geometries and repeated design elements.</p>
                  </div>
                  <div className="p-5 rounded-sm bg-black/30 border border-white/10">
                    <h4 className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">Facade optimization</h4>
                    <p className="text-xs sm:text-sm text-slate-300">Designers can explore shading configurations and facade patterns in response to orientation and environmental conditions.</p>
                  </div>
                  <div className="p-5 rounded-sm bg-black/30 border border-white/10">
                    <h4 className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">Design iteration</h4>
                    <p className="text-xs sm:text-sm text-slate-300">Teams can compare multiple alternatives while maintaining consistent design rules.</p>
                  </div>
                  <div className="p-5 rounded-sm bg-black/30 border border-white/10">
                    <h4 className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">Material coordination</h4>
                    <p className="text-xs sm:text-sm text-slate-300">Repeated components and geometric relationships can be planned more systematically.</p>
                  </div>
                </div>
              </div>

              {/* Section 2: Structural Engineering */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  2. Structural engineering: making design ambition buildable
                </h2>
                <p>
                  Architectural concepts must be translated into systems that can safely carry loads and satisfy applicable codes. Structural engineering considers factors such as gravity loads, wind, seismic effects where relevant, material behavior, connections and the relationship between the structure and the building&apos;s intended use.
                </p>
                <p>
                  Early collaboration between architects and structural engineers can help identify constraints before they become expensive design changes. For example, a large open-plan office may require careful coordination between column placement, floor spans, service routes, circulation and the desired flexibility of the interior.
                </p>

                <div className="p-5 rounded-sm bg-black/30 border border-white/10 space-y-2.5">
                  <h4 className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-3">Why early engineering coordination matters:</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                    <li>It can identify design conflicts before detailed documentation.</li>
                    <li>It can help compare structural systems and material options.</li>
                    <li>It can support coordination between architecture, structure and building services.</li>
                    <li>It can reduce avoidable redesign when assumptions are checked early.</li>
                    <li>It helps align design decisions with local building regulations and specialist advice.</li>
                  </ul>
                </div>
              </div>

              {/* Section 3: BIM */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  3. BIM: coordinating the building before construction
                </h2>
                <p>
                  Building Information Modeling, commonly known as BIM, is a process for creating and managing structured information about a building. Depending on the project, a BIM model can include geometry, materials, components, spatial information and data used by different project disciplines.
                </p>
                <p>
                  BIM is more than a three-dimensional model. Its practical value comes from using coordinated information to support design development, documentation, construction planning and, where appropriately configured, building operations.
                </p>
              </div>

              {/* Section 4: Digital Twins */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  4. Digital twins: connecting building information with real-world performance
                </h2>
                <p>
                  A digital twin is a digital representation of a physical asset that is connected to relevant real-world information and updated through a defined process. In buildings, this may involve operational data from sensors, building-management systems, maintenance records or other sources.
                </p>
                <p>
                  It is important to distinguish a digital twin from a static 3D model. A model can represent the proposed or existing building, while a digital twin may also support monitoring and analysis of how the physical building performs.
                </p>
              </div>

              {/* Section 5: Sustainable Architecture */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  5. Sustainable architecture: designing for energy, materials and climate
                </h2>
                <p>
                  Sustainable architecture considers how buildings affect the environment and the people who use them. It involves more than adding solar panels or selecting a few environmentally marketed materials.
                </p>
                <p>
                  The American Institute of Architects identifies building reuse, material selection, building longevity and life-cycle assessment as important considerations in reducing embodied carbon.
                </p>
              </div>

              {/* MAR Approach CTA */}
              <div className="p-6 sm:p-8 rounded-sm bg-black/60 border border-[#F5C242]/40 shadow-xl">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-2">
                  Plan Your Commission with MAR Architectural Studio
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Ready to translate complex parametric designs into structurally buildable, climate-responsive reality? Consult with our integrated architectural and civil engineering team.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="gold-shining-btn px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm cursor-pointer shadow-lg shadow-[#F5C242]/20"
                  >
                    Discuss Your Project →
                  </button>
                  <button
                    onClick={() => onNavigate('services')}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white border border-white/20 hover:border-[#F5C242] hover:text-[#F5C242] bg-black/40 rounded-sm cursor-pointer transition-colors"
                  >
                    Explore Architectural Services
                  </button>
                </div>
              </div>

              {/* Further Reading */}
              <div className="pt-8 border-t border-white/15">
                <h2 className="text-base sm:text-lg font-mono uppercase text-[#F5C242] font-bold mb-4">
                  Further reading and references
                </h2>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                  <li>
                    <a href="https://www.aia.org/aia-architect/article/6-design-trends-driving-sustainable-regenerative-future" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C242] underline inline-flex items-center gap-1.5">
                      <span>American Institute of Architects — 6 Design Trends Driving a Sustainable, Regenerative Future</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.riba.org/work/insights-and-resources/ai-report/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C242] underline inline-flex items-center gap-1.5">
                      <span>Royal Institute of British Architects — AI Report 2026</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </article>
      )}

    </div>
  );
}
