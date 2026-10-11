import React from 'react';
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
  BookOpen
} from 'lucide-react';

export default function BlogSection({ onNavigate = () => {} }) {
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
            <span>MAR ARCHITECTURAL STUDIO // PERSPECTIVES & RESEARCH</span>
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-display font-black tracking-tight mb-5 text-white leading-[1.05]">
            THE <span className="text-gold-shining">BLOG.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl font-light leading-relaxed">
            Beyond the Blueprint: How Performance-Driven Architecture Combines Parametric Design, Structural Engineering and Digital Twins.
          </p>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT CONTAINER */}
      <article className="relative w-full bg-[#0f1115] py-16 sm:py-24 px-4 sm:px-6 md:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          
          {/* Article Header Meta */}
          <div className="pb-8 mb-12 border-b border-white/15">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#F5C242] font-semibold mb-4">
              <span className="px-2.5 py-1 bg-black/60 border border-[#F5C242]/40 rounded-sm">
                PRACTICAL ARCHITECTURAL GUIDE
              </span>
              <span>•</span>
              <span className="text-slate-400">PERFORMANCE-DRIVEN ARCHITECTURE</span>
              <span>•</span>
              <span className="text-slate-400">EST. READ: 10 MIN</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
              Beyond the Blueprint: How Performance-Driven Architecture Combines Parametric Design, Structural Engineering and Digital Twins
            </h1>

            <p className="text-base sm:text-lg text-[#cbd5e1] font-sans font-medium leading-relaxed italic border-l-2 border-[#F5C242] pl-4">
              A practical guide to designing buildings that are visually distinctive, structurally considered, digitally coordinated and environmentally responsive.
            </p>
          </div>

          {/* Article Body */}
          <div className="space-y-10 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            
            {/* Introduction */}
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
              <p className="mt-4 text-xs text-slate-400 font-mono">
                The exact approach depends on the project type, location, budget, regulations and client priorities.
              </p>
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

              <div className="p-5 rounded-sm bg-black/50 border border-[#F5C242]/30">
                <h3 className="text-base font-serif font-bold text-white mb-2">
                  Does parametric design automatically make a building better?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  No. A complex form is not necessarily a high-performing form. The value comes from defining appropriate design objectives, testing alternatives and interpreting the results with qualified professionals. Parametric design is most useful when it supports clear architectural goals rather than complexity for its own sake.
                </p>
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
              <p>
                Similarly, a building in a seismic region requires project-specific evaluation of the applicable seismic design criteria and structural system.
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
              <p className="text-xs text-slate-400 italic">
                Actual safety, cost and schedule outcomes depend on project conditions, engineering decisions, construction quality and effective coordination. No digital workflow can replace the judgment and responsibility of qualified design professionals.
              </p>
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

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase text-[#F5C242] font-bold">What can BIM help a project team do?</div>
                <div className="p-4 rounded-sm bg-black/30 border border-white/10 space-y-2 text-xs sm:text-sm">
                  <div><strong className="text-white">Coordinate disciplines:</strong> Architecture, structure and building-services models can be reviewed together to identify potential conflicts.</div>
                  <div><strong className="text-white">Improve documentation:</strong> Consistent model information can support drawings, schedules and quantities, depending on the workflow.</div>
                  <div><strong className="text-white">Review design decisions:</strong> Teams can examine spaces, building components and coordination issues in a shared digital environment.</div>
                  <div><strong className="text-white">Support construction planning:</strong> BIM information may be connected to project schedules and cost-management processes.</div>
                  <div><strong className="text-white">Prepare for operations:</strong> Relevant asset information can be organized for handover and future maintenance when this is included in the project requirements.</div>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                The benefits depend on the quality of the model, information standards, team responsibilities and the way the project uses the data. BIM alone does not guarantee fewer errors or lower costs.
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

              <div className="p-5 rounded-sm bg-black/30 border border-white/10">
                <div className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-3">Potential applications of building digital twins:</div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                  <li>Monitoring selected building systems and operating conditions.</li>
                  <li>Supporting maintenance planning and asset management.</li>
                  <li>Comparing measured performance with expected operating conditions.</li>
                  <li>Helping facilities teams investigate recurring operational problems.</li>
                  <li>Supporting longer-term decisions about equipment, space and building upgrades.</li>
                </ul>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                A digital twin is not automatically necessary for every project. Its value depends on the decisions it is intended to support, the availability of reliable data, system compatibility, cybersecurity and the resources available to maintain it. For many projects, a well-coordinated BIM model and a practical asset-information plan may be a more appropriate starting point.
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
                The American Institute of Architects identifies building reuse, material selection, building longevity and life-cycle assessment as important considerations in reducing embodied carbon. Its design resources also discuss regenerative approaches that seek to support ecological systems and community wellbeing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">Passive design & climate response</h4>
                  <p className="text-xs sm:text-sm text-slate-300">Before relying entirely on mechanical systems, assess orientation, shading, glazing, insulation, natural ventilation, and thermal mass to naturally optimize comfort.</p>
                </div>
                <div className="p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">Operational energy</h4>
                  <p className="text-xs sm:text-sm text-slate-300">Energy modeling estimates how changes in envelope, lighting, and HVAC affect expected energy performance. Predicted performance should be clearly distinguished from post-occupancy metrics.</p>
                </div>
                <div className="p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">Embodied carbon & materials</h4>
                  <p className="text-xs sm:text-sm text-slate-300">Evaluating greenhouse emissions across material lifecycle stages, considering reuse, structural efficiency, and retaining existing structures where feasible.</p>
                </div>
                <div className="p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-[#F5C242] font-bold mb-2">Water, landscape & biodiversity</h4>
                  <p className="text-xs sm:text-sm text-slate-300">Rainwater strategies, water-efficient fixtures, appropriate planting, and stormwater management that foster responsible site ecosystems.</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                The most useful sustainability measures are project-specific, clearly defined and assessed against evidence rather than presented as unverified promises.
              </p>
            </div>

            {/* Section 6: How these disciplines work together */}
            <div className="p-6 sm:p-8 rounded-sm bg-black/40 border border-white/15">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
                6. How these disciplines work together
              </h2>
              <p className="mb-6 text-sm sm:text-base">
                The strongest results often come from coordination rather than from any single technology. Consider a hypothetical commercial building project:
              </p>

              <div className="space-y-3 font-sans text-xs sm:text-sm">
                <div className="p-3 bg-black/50 border border-white/10 rounded-sm">
                  <strong className="text-[#F5C242]">Step 1 — Understand the brief:</strong> The team establishes the building&apos;s purpose, occupancy, site conditions, budget, schedule, planning constraints and client priorities.
                </div>
                <div className="p-3 bg-black/50 border border-white/10 rounded-sm">
                  <strong className="text-[#F5C242]">Step 2 — Develop architectural options:</strong> The architect explores building form, circulation, spatial quality and facade concepts.
                </div>
                <div className="p-3 bg-black/50 border border-white/10 rounded-sm">
                  <strong className="text-[#F5C242]">Step 3 — Evaluate performance:</strong> Where appropriate, the team uses environmental analysis, structural input and parametric studies to compare alternatives.
                </div>
                <div className="p-3 bg-black/50 border border-white/10 rounded-sm">
                  <strong className="text-[#F5C242]">Step 4 — Coordinate the design in BIM:</strong> Architecture, structure and building services are developed and reviewed against agreed information standards.
                </div>
                <div className="p-3 bg-black/50 border border-white/10 rounded-sm">
                  <strong className="text-[#F5C242]">Step 5 — Plan delivery:</strong> The project team coordinates technical documentation, approvals, procurement and construction responsibilities.
                </div>
                <div className="p-3 bg-black/50 border border-white/10 rounded-sm">
                  <strong className="text-[#F5C242]">Step 6 — Prepare for operation:</strong> If required, the team defines what building and asset information should be handed over and whether operational monitoring or a digital twin would be useful.
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-400 italic">
                This process is illustrative, not a universal sequence. Real projects often involve overlapping stages, repeated reviews and changes as new information becomes available.
              </p>
            </div>

            {/* Section 7: What should clients ask an architecture studio */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                7. What should clients ask an architecture studio before starting?
              </h2>
              <p>
                Choosing an architectural partner involves more than comparing impressive renderings. Clients should understand how the proposed design process relates to their objectives, responsibilities and constraints.
              </p>
              
              <div className="p-6 rounded-sm bg-black/30 border border-white/10 space-y-3 text-xs sm:text-sm">
                <div className="font-mono text-xs uppercase text-[#F5C242] font-bold mb-2">Before appointing a studio, consider asking:</div>
                <div><strong className="text-white">1. How will you understand our requirements?</strong> Ask how the brief, site conditions, intended users and business objectives will inform the design.</div>
                <div><strong className="text-white">2. How will engineering be coordinated?</strong> Clarify when structural and building-services specialists become involved.</div>
                <div><strong className="text-white">3. What digital tools will the project use?</strong> Ask whether BIM, environmental modeling or parametric workflows are appropriate for your specific needs.</div>
                <div><strong className="text-white">4. How will sustainability targets be measured?</strong> Request clear definitions, assumptions and proposed methods of assessment.</div>
                <div><strong className="text-white">5. What is included in the scope?</strong> Confirm deliverables, exclusions, revisions, consultants, approvals and construction-stage services.</div>
                <div><strong className="text-white">6. How will costs and changes be managed?</strong> Ask how design development, cost estimates and variations will be coordinated.</div>
                <div><strong className="text-white">7. What evidence supports previous work?</strong> Review completed projects, the studio&apos;s actual role, relevant credentials and references that can be independently checked.</div>
                <div><strong className="text-white">8. What happens after handover?</strong> Establish whether maintenance information, asset data, post-occupancy evaluation or ongoing support is included.</div>
              </div>
            </div>

            {/* Section 8: The future of architecture is integrated */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                8. The future of architecture is integrated, not simply more digital
              </h2>
              <p>
                Digital tools are expanding the ways architects can investigate form, coordinate information and evaluate alternatives. At the same time, technology introduces questions about data quality, interoperability, professional accountability, environmental impact and the limits of automated analysis.
              </p>
              <p>
                AI-assisted design, for example, may help teams explore early concepts or organize certain workflows. However, generated concepts still require architectural review, technical validation and consideration of the people who will occupy and maintain the building.
              </p>
              <p>
                Likewise, a sophisticated digital model cannot compensate for an unclear brief, weak coordination or decisions that ignore local conditions. The real opportunity is to combine design creativity with evidence, engineering expertise and responsible decision-making.
              </p>
            </div>

            {/* Approach of MAR Architectural Studio */}
            <div className="p-6 sm:p-8 rounded-sm bg-black/50 border border-[#F5C242]/40 space-y-4 shadow-xl">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                How MAR Architectural Studio approaches the conversation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                MAR Architectural Studio&apos;s published service categories provide a starting point for discussing architecture as a coordinated process: from parametric design and structural considerations to BIM workflows and climate-responsive strategies.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                For a prospective project, the appropriate combination of services should be established through a project-specific discussion. Not every building requires every technology, and the most effective solution is the one that responds to the client&apos;s goals, the site&apos;s conditions and the project&apos;s technical and financial realities.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                If you are planning a residential, commercial, workplace or institutional project, begin by defining what the building needs to achieve. A clear brief creates a stronger foundation for design exploration, technical coordination and informed decisions throughout the project.
              </p>

              {/* Call to Action Box */}
              <div className="pt-6 border-t border-white/15">
                <div className="font-bold text-white mb-2">Planning a new architectural project?</div>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  Contact MAR Architectural Studio to discuss your project brief, site, intended use, design objectives, budget parameters and required services.
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
                  <button
                    onClick={() => onNavigate('projects')}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white border border-white/10 hover:border-white/30 bg-black/20 rounded-sm cursor-pointer transition-colors"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>

            {/* FAQ Accordion within Blog */}
            <div className="pt-8 border-t border-white/15">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">What is performance-driven architecture?</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Performance-driven architecture integrates design quality with measurable considerations such as energy use, daylight, thermal comfort, structural requirements, material impacts and building operations.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">What is the difference between BIM and a digital twin?</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    BIM is a process for creating and managing structured building information. A digital twin may connect a digital representation of a physical building with operational data and ongoing analysis. A BIM model can contribute to a digital twin, but the two are not interchangeable.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">How does parametric design help architects?</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Parametric design allows architects to generate and compare design variations using defined rules and adjustable parameters. It can support complex geometry, facade studies and iterative design evaluation, but the results still require professional assessment.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">Can sustainable architecture reduce operating costs?</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    It can help identify opportunities to reduce energy and water demand, improve comfort and support long-term building performance. Actual savings depend on the design, climate, occupancy, equipment, energy prices, construction quality and operation of the building.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">Why should structural engineers be involved early?</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Early structural coordination can help align the architectural concept with load paths, spans, materials, stability requirements and applicable regulations before design decisions become difficult or costly to change.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">Does every building need a digital twin?</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    No. A digital twin is most useful when reliable operational information can support specific decisions, such as maintenance or performance monitoring. Smaller or less complex projects may benefit more from appropriately scoped BIM and asset-information practices.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-sm bg-black/40 border border-white/10">
                  <h4 className="text-sm sm:text-base font-serif font-bold text-white mb-2">What should I prepare before contacting an architecture studio?</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Prepare a short project brief describing the site or location, building type, intended users, approximate area if known, preferred design direction, budget range, desired timeline and any known planning or sustainability requirements. You can share information progressively as the project develops.
                  </p>
                </div>
              </div>
            </div>

            {/* Further Reading and References */}
            <div className="pt-8 border-t border-white/15">
              <h2 className="text-base sm:text-lg font-mono uppercase text-[#F5C242] font-bold mb-4">
                Further reading and references
              </h2>
              <p className="text-xs text-slate-400 mb-4">
                The following independent resources support the general design and technology concepts discussed in this article:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                <li>
                  <a href="https://www.aia.org/aia-architect/article/6-design-trends-driving-sustainable-regenerative-future" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C242] underline inline-flex items-center gap-1.5">
                    <span>American Institute of Architects — 6 Design Trends Driving a Sustainable, Regenerative Future</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.aia.org/design-excellence/aia-framework-for-design-excellence/resources" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C242] underline inline-flex items-center gap-1.5">
                    <span>American Institute of Architects — Design for Resources: Embodied Carbon</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.aia.org/design-excellence/aia-framework-for-design-excellence/economy" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C242] underline inline-flex items-center gap-1.5">
                    <span>American Institute of Architects — Design for Economy</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.riba.org/work/insights-and-resources/ai-report/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C242] underline inline-flex items-center gap-1.5">
                    <span>Royal Institute of British Architects — AI Report 2026</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C242] underline inline-flex items-center gap-1.5">
                    <span>Google Search Central — Creating Helpful, Reliable, People-First Content</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-[11px] text-slate-400 italic">
                Editorial note: Technical outcomes depend on the project and its professional team. The article provides general information, not project-specific architectural, engineering, regulatory or financial advice.
              </p>
            </div>

          </div>

        </div>
      </article>
    </div>
  );
}
