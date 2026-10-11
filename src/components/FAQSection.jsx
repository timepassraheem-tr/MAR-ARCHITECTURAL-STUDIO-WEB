import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: "What specific architectural and engineering services does MAR Architectural Studio offer?",
    answer: "MAR Architectural Studio delivers integrated architectural design, structural engineering calculations, 3D architectural visualization, and turnkey project coordination. Our capabilities span luxury residential villas, commercial structures, high-density residential buildings, and civil engineering feasibility assessments."
  },
  {
    question: "How does the studio handle both architectural design and civil engineering under one roof?",
    answer: "By uniting computational architectural modeling (BIM) with Finite Element Analysis (FEA) structural simulations, we eliminate discrepancies between aesthetic vision and engineering feasibility. This unified workflow prevents costly design revisions and structural delays during site execution."
  },
  {
    question: "Where is the studio located, and do you accept inquiries from international clients?",
    answer: "Our principal atelier is based in India under Principal Architect & Civil Engineer Mohammed Abdul Rahman. We accept commissions locally and provide dedicated remote design and structural engineering consultancy for clients across the UAE, Middle East, Europe, and North America."
  },
  {
    question: "What is the typical timeline and engagement process for a new architectural commission?",
    answer: "Engagements begin with a feasibility review and zoning analysis (1–2 weeks), followed by schematic architectural design and structural concept drafting (3–4 weeks). Once approved, we produce detailed construction drawings, structural calculation dossiers, and contractor specifications."
  },
  {
    question: "How can I schedule an initial project consultation or request a quotation?",
    answer: "You can submit an inquiry via our online consultation form, contact us directly via email at mararchitecturalstudio@gmail.com, or reach Principal Mohammed Abdul Rahman directly via phone or WhatsApp at +91 9985185209 for priority scheduling."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(prev => prev === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 bg-transparent text-[#f8fafc] border-t border-white/10 overflow-hidden z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-3 font-bold">
            <HelpCircle className="w-4 h-4 text-[#F5C242]" />
            SECTION 09 // FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight drop-shadow-md">
            PRACTICE & ENGAGEMENT FAQ
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#cbd5e1] max-w-xl mx-auto font-light leading-relaxed">
            Essential answers on our structural methodology, architectural scope, and direct consultation process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-sm border transition-all duration-300 backdrop-blur-md ${
                  isOpen 
                    ? 'border-[#F5C242]/70 bg-black/50 shadow-[0_0_15px_rgba(245,194,66,0.15)]' 
                    : 'border-white/15 bg-black/30 hover:border-white/30 hover:bg-black/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-serif font-medium text-white">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 shrink-0 text-[#F5C242] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed font-sans border-t border-white/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
