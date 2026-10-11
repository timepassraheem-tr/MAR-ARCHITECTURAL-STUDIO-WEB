import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  Compass,
  Building2,
  Clock,
  Copy,
  Check
} from 'lucide-react';

const STUDIOS = [
  {
    city: "PRINCIPAL ATELIER & HEADQUARTERS",
    address: "Direct Consultation with Mohammed Abdul Rahman",
    phone: "+91 9985185209",
    email: "mararchitecturalstudio@gmail.com",
    badge: "DIRECT PRACTICE"
  },
  {
    city: "DUBAI & GCC REGIONAL INQUIRIES",
    address: "Gulf Cooperation Council & UAE Project Coordination",
    phone: "+91 9985185209 (WhatsApp)",
    email: "mararchitecturalstudio@gmail.com",
    badge: "PROJECT COORDINATION"
  },
  {
    city: "LONDON & EUROPEAN COMMISSIONS",
    address: "UK & European Architectural Consultations",
    phone: "+91 9985185209 (WhatsApp)",
    email: "mararchitecturalstudio@gmail.com",
    badge: "PRIVATE CLIENTS"
  },
  {
    city: "NORTH AMERICAN CONSULTATIONS",
    address: "US & Canadian High-Rise / Residential Projects",
    phone: "+91 9985185209 (WhatsApp)",
    email: "mararchitecturalstudio@gmail.com",
    badge: "REMOTE FEASIBILITY"
  }
];

const TYPOLOGY_EXAMPLES = [
  "Ultra-Luxury Monolithic Villa",
  "High-Rise Skyscraper (300m+)",
  "Civic & Cultural Monument",
  "Luxury Resort & Alpine Retreat",
  "Corporate Global Headquarters",
  "Masterplanned Urban District",
  "Private Cantilevered Residence",
  "Bespoke Architectural Renovation"
];

const CURRENCY_OPTIONS = [
  { code: "USD ($)", label: "USD ($ - US Dollar)" },
  { code: "INR (₹)", label: "INR (₹ - Indian Rupee)" },
  { code: "AED (د.إ)", label: "AED (د.إ - UAE Dirham)" },
  { code: "EUR (€)", label: "EUR (€ - Euro)" },
  { code: "GBP (£)", label: "GBP (£ - British Pound)" },
  { code: "SAR (﷼)", label: "SAR (﷼ - Saudi Riyal)" },
  { code: "CAD ($)", label: "CAD ($ - Canadian Dollar)" },
  { code: "CHF (CHF)", label: "CHF (Swiss Franc)" },
  { code: "OTHER", label: "Other / Custom Currency..." }
];

const BUDGET_EXAMPLES = [
  "5 - 15 Million",
  "25 - 50 Million",
  "100M+ (Mega-Project)",
  "10 - 25 Crores",
  "50 - 100+ Crores",
  "Flexible / Open to Feasibility"
];

export default function ContactSection({ isStandalone = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [emailLink, setEmailLink] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    typology: '',
    currency: 'USD ($)',
    customCurrency: '',
    budgetAmount: '',
    location: '',
    message: ''
  });

  const getComputedBudget = () => {
    const activeCurrency = formData.currency === 'OTHER'
      ? (formData.customCurrency.trim() || 'Custom Currency')
      : formData.currency;
    return formData.budgetAmount.trim() 
      ? `${activeCurrency} ${formData.budgetAmount.trim()}`
      : `${activeCurrency} (Flexible / To Be Discussed)`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mararchitecturalstudio@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const activeBudget = getComputedBudget();
    const activeTypology = formData.typology.trim() || 'Custom Architectural Commission';

    // Construct detailed WhatsApp message for Owner Mohammed Abdul Rahman
    const whatsappMessage = `🏛️ *MAR ARCHITECTURAL STUDIO - NEW COMMISSION INQUIRY*

👤 *Principal Name:* ${formData.name}
🏢 *Organization:* ${formData.organization || 'Individual / Private Client'}
📧 *Direct Email:* ${formData.email}
📱 *Phone Number:* ${formData.phone || 'Not provided'}
📍 *Target Location:* ${formData.location || 'Not specified'}
🏗️ *Project Typology:* ${activeTypology}
💰 *Estimated Budget:* ${activeBudget}

📝 *Project Vision & Requirements:*
"${formData.message || 'No additional notes provided.'}"

---
Transmitted via MAR Architectural Studio Official Portal to mararchitecturalstudio@gmail.com`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const waUrl = `https://wa.me/919985185209?text=${encodedMessage}`;
    setWhatsappLink(waUrl);

    // Construct mailto link to mararchitecturalstudio@gmail.com
    const emailSubject = encodeURIComponent(`MAR Commission Inquiry: ${formData.name || 'Private Client'} - ${activeTypology}`);
    const emailBody = encodeURIComponent(
`MAR ARCHITECTURAL STUDIO - COMMISSION INTAKE DOSSIER

Principal Name: ${formData.name}
Organization: ${formData.organization || 'Individual / Private Client'}
Direct Email: ${formData.email}
Phone Number: ${formData.phone || 'Not provided'}
Target Site Location: ${formData.location || 'Not specified'}
Project Typology: ${activeTypology}
Estimated Budget: ${activeBudget}

Project Vision & Requirements:
"${formData.message || 'No additional notes provided.'}"

---
Transmitted to Owner Mohammed Abdul Rahman (mararchitecturalstudio@gmail.com)`
    );
    const mailUrl = `mailto:mararchitecturalstudio@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    setEmailLink(mailUrl);

    setSubmitted(true);

    // Open WhatsApp in new tab automatically
    try {
      window.open(waUrl, '_blank');
    } catch (err) {}
  };

  return (
    <section id="contact" className={`relative w-full ${isStandalone ? 'pt-4 pb-12 md:pb-16' : 'pt-12 pb-16 md:pt-20 md:pb-20 border-t border-white/10'} bg-transparent text-[#f8fafc] overflow-hidden z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div id="contact-header-text" className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-5 border-b border-white/15 gap-4 sm:gap-6">
          <div>
            <div className="text-xs font-mono text-gold-radiant tracking-ultra uppercase mb-3 flex items-center gap-2 font-bold">
              <span className="w-2 h-2 bg-[#F5C242] shadow-[0_0_8px_#F5C242]" />
              {isStandalone ? 'PAGE 05 // DIRECT ENGAGEMENT' : 'SECTION 09 // COMMISSION A LANDMARK'}
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold text-white tracking-tight break-words">
              COMMISSION A <span className="text-gold-shining inline-block">LANDMARK.</span>
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-slate-400 max-w-xs">
            CONFIDENTIAL ARCHITECTURAL INTAKE<br />
            DIRECT TRANSMISSION TO OWNER MOHAMMED ABDUL RAHMAN
          </div>
        </div>

        {/* Technical Intake Status Bar with Official Gmail & WhatsApp */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-5 border-b border-white/15 gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5C242] shadow-[0_0_10px_#F5C242] animate-ping shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono text-gold-radiant uppercase tracking-wider font-bold">
              DIRECT PRINCIPAL ENGAGEMENT // INTAKE DOSSIER
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono max-w-full">
            <a 
              href="mailto:mararchitecturalstudio@gmail.com" 
              className="px-2.5 py-1.5 bg-white/10 hover:bg-white/20 border border-white/30 rounded-sm text-white font-bold flex items-center gap-1.5 transition-all shadow-sm break-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#F5C242] shrink-0" />
              <span className="truncate">mararchitecturalstudio@gmail.com</span>
            </a>
            <a 
              href="https://wa.me/919985185209" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/60 rounded-sm text-[#25D366] font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(37,211,102,0.2)] shrink-0"
            >
              <span>+91 9985185209</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Inquiry Form - Solid Matte Black Background with strict h-fit */}
          <div className="lg:col-span-7 rounded-sm bg-[#14171f] border border-white/20 p-4 sm:p-6 md:p-8 relative shadow-2xl h-fit font-sans">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 min-w-[32px] max-w-[32px] min-h-[32px] max-h-[32px] rounded-full border border-[#F5C242]/50 bg-black/80 p-0.5 flex items-center justify-center shrink-0 overflow-hidden">
                  <img src="/logo.png" alt="MAR Architectural Studio" className="w-full h-full max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <div className="text-xs font-sans text-gold-radiant tracking-widest uppercase font-bold">
                    PROJECT INTAKE DOSSIER
                  </div>
                  <div className="text-[10px] font-sans text-slate-300">
                    OFFICIAL GMAIL: mararchitecturalstudio@gmail.com
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[10px] font-sans px-2.5 py-1 bg-white/5 border border-white/20 text-slate-300 hover:text-white hover:border-white rounded-sm flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#F5C242]" />}
                <span>{copiedEmail ? 'COPIED GMAIL!' : 'COPY GMAIL'}</span>
              </button>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-6">
                <CheckCircle2 className="w-16 h-16 text-[#22c55e] mx-auto animate-bounce filter drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    DOSSIER COMPILED & FORWARDED
                  </h3>
                  <p className="text-xs font-sans text-[#cbd5e1] max-w-lg mx-auto leading-relaxed">
                    Your project brief has been formatted for Owner <strong className="text-white">Mohammed Abdul Rahman</strong> and routed to WhatsApp <strong className="text-white font-bold">+91 9985185209</strong> and Gmail <strong className="text-gold-radiant font-bold">mararchitecturalstudio@gmail.com</strong>.
                  </p>
                </div>

                {/* Direct Action Buttons: WhatsApp + Email + Copy Gmail */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-sans font-extrabold text-xs tracking-wider uppercase rounded-sm shadow-xl shadow-[#25D366]/30 transition-all transform hover:scale-[1.02]"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>OPEN WHATSAPP (+91 9985185209)</span>
                  </a>

                  <a
                    href={emailLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-black font-sans font-extrabold text-xs tracking-wider uppercase rounded-sm shadow-xl transition-all transform hover:scale-[1.02]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>OPEN EMAIL CLIENT</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto px-4 py-3.5 bg-black/60 border border-white/25 hover:border-[#F5C242] text-xs font-sans text-white rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#F5C242]" />}
                    <span>{copiedEmail ? 'COPIED GMAIL!' : 'COPY GMAIL'}</span>
                  </button>
                </div>

                {/* Message preview snippet */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-sm text-left max-w-lg mx-auto font-sans text-[11px] text-slate-300 space-y-1">
                  <div className="text-[#F5C242] font-bold pb-1 border-b border-white/10 mb-2 flex items-center justify-between">
                    <span>TRANSMITTED DOSSIER PREVIEW:</span>
                    <span className="text-[10px] text-white">ROUTED TO GMAIL & WA</span>
                  </div>
                  <div><strong className="text-white">Principal:</strong> {formData.name}</div>
                  {formData.organization && <div><strong className="text-white">Organization:</strong> {formData.organization}</div>}
                  <div><strong className="text-white">Email:</strong> {formData.email}</div>
                  {formData.phone && <div><strong className="text-white">Phone:</strong> {formData.phone}</div>}
                  <div><strong className="text-white">Location:</strong> {formData.location}</div>
                  <div><strong className="text-white">Typology:</strong> {formData.typology || 'Custom Architecture'}</div>
                  <div><strong className="text-white">Budget:</strong> {getComputedBudget()}</div>
                  {formData.message && (
                    <div className="pt-1 text-slate-400 italic">
                      "{formData.message}"
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 border border-white/20 text-xs font-sans text-white hover:border-[#F5C242] hover:text-[#F5C242] transition-colors cursor-pointer"
                >
                  TRANSMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                      PRINCIPAL NAME *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sir Julian Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#0a0c10] border border-white/20 px-3.5 py-3 text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                      ORGANIZATION / ENTITY
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vance Holdings AG"
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      className="w-full bg-[#0a0c10] border border-white/20 px-3.5 py-3 text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                      DIRECT EMAIL *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="julian@vance-invest.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#0a0c10] border border-white/20 px-3.5 py-3 text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                      PHONE NUMBER *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 9985185209"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#0a0c10] border border-white/20 px-3.5 py-3 text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm"
                    />
                  </div>
                </div>

                {/* TARGET SITE LOCATION & CUSTOM PROJECT TYPOLOGY WRITE-IN */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                      TARGET SITE LOCATION
                    </label>
                    <input
                      type="text"
                      placeholder="City, Coordinates or Region (Optional)"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full bg-[#0a0c10] border border-white/20 px-3.5 py-3 text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                      PROJECT TYPOLOGY (WRITE OR CHOOSE)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ultra-Luxury Villa, Skyscraper, Resort..."
                      value={formData.typology}
                      onChange={(e) => setFormData({...formData, typology: e.target.value})}
                      className="w-full bg-[#0a0c10] border border-white/20 px-3.5 py-3 text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm"
                    />
                  </div>
                </div>

                {/* TYPOLOGY QUICK SUGGESTION EXAMPLES */}
                <div className="space-y-1.5 -mt-2">
                  <div className="text-[10px] font-mono text-slate-400">
                    <span className="text-gold-radiant font-bold">TYPOLOGY EXAMPLES (Click to select/write):</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {TYPOLOGY_EXAMPLES.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, typology: item }))}
                        className={`px-2 py-1 text-[10px] font-mono rounded-sm border transition-all cursor-pointer ${
                          formData.typology === item
                            ? 'gold-shining-btn border-[#F5C242] font-bold shadow-sm'
                            : 'bg-white/5 border-white/15 text-slate-300 hover:border-[#F5C242] hover:text-[#F5C242]'
                        }`}
                      >
                        + {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* BUDGET SECTION: CUSTOM CURRENCY + CUSTOM AMOUNT */}
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                    {/* Currency Selector */}
                    <div className={formData.currency === 'OTHER' ? 'sm:col-span-3' : 'sm:col-span-5'}>
                      <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                        CURRENCY TYPE
                      </label>
                      <select
                        value={formData.currency}
                        onChange={(e) => setFormData({...formData, currency: e.target.value})}
                        className="w-full bg-[#0a0c10] border border-white/20 px-3 py-3 text-sm font-sans text-white focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm cursor-pointer"
                      >
                        {CURRENCY_OPTIONS.map((c) => (
                          <option key={c.code} value={c.code} className="bg-[#14171f] text-white">
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Custom Currency Write-in (if OTHER chosen) */}
                    {formData.currency === 'OTHER' && (
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                          CUSTOM CURRENCY
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. KWD, QAR, JPY"
                          value={formData.customCurrency}
                          onChange={(e) => setFormData({...formData, customCurrency: e.target.value})}
                          className="w-full bg-[#0a0c10] border border-white/20 px-3 py-3 text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm"
                        />
                      </div>
                    )}

                    {/* Budget Amount Custom Write-in */}
                    <div className={formData.currency === 'OTHER' ? 'sm:col-span-6' : 'sm:col-span-7'}>
                      <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                        BUDGET AMOUNT (ENTER OR CHOOSE)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 50,000,000 or 25 Crores or 100M+ (Optional)"
                        value={formData.budgetAmount}
                        onChange={(e) => setFormData({...formData, budgetAmount: e.target.value})}
                        className="w-full bg-[#0a0c10] border border-white/20 px-4 py-3 text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm"
                      />
                    </div>
                  </div>

                  {/* BUDGET AMOUNT EXAMPLES */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-sans text-slate-400">
                      <span className="text-white font-bold">BUDGET EXAMPLES (Click to auto-fill):</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {BUDGET_EXAMPLES.map((bEx, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, budgetAmount: bEx }))}
                          className={`px-2.5 py-1 text-[11px] font-sans rounded-sm border transition-all cursor-pointer ${
                            formData.budgetAmount === bEx
                              ? 'bg-white text-black border-white font-bold shadow-sm'
                              : 'bg-white/5 border-white/15 text-slate-300 hover:border-white hover:text-white'
                          }`}
                        >
                          {bEx}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-sans text-[#cbd5e1] uppercase mb-1.5 font-semibold">
                    PROJECT VISION & STRUCTURAL AMBITIONS
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Outline spatial requirements, geotechnical context, site constraints, and completion horizon..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#0a0c10] border border-white/20 p-3.5 sm:p-4 text-sm font-sans text-white placeholder-slate-500 focus:outline-none focus:border-[#F5C242] focus:shadow-[0_0_12px_rgba(245,194,66,0.3)] rounded-sm"
                  />
                </div>

                <div className="space-y-3">
                  <button
                    type="submit"
                    className="gold-shining-btn w-full py-4 text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#F5C242]/30 rounded-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT BRIEF & SEND TO WHATSAPP</span>
                  </button>
                  <p className="text-[11px] font-sans text-slate-400 text-center">
                    Submissions are directly forwarded to Owner Mohammed Abdul Rahman at +91 9985185209
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Owner Details & Global Studio Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* OWNER & STUDIO PRINCIPAL SPOTLIGHT CARD */}
            <div className="p-6 rounded-sm bg-gradient-to-br from-black/90 via-[#0d1117] to-black border border-[#F5C242]/70 shadow-2xl relative overflow-hidden shadow-[#F5C242]/20">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#F5C242]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 min-w-[48px] max-w-[48px] min-h-[48px] max-h-[48px] rounded-full border-2 border-[#F5C242] bg-black/80 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-[0_0_12px_rgba(245,194,66,0.4)]">
                  <img src="/logo.png" alt="MAR Emblem" className="w-full h-full max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <div className="text-[10px] font-sans text-white uppercase tracking-widest font-bold">
                    OWNER & MANAGING DIRECTOR
                  </div>
                  <h3 className="text-xl font-serif font-black text-white tracking-tight">
                    Mohammed Abdul Rahman
                  </h3>
                  <div className="text-xs font-sans text-gold-radiant font-bold">
                    Master Architect & Civil Engineer
                  </div>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs border-t border-white/10 pt-4 mb-5">
                <div className="flex items-center justify-between text-[#cbd5e1]">
                  <span className="text-slate-400">PHONE NUMBER:</span>
                  <a href="tel:9985185209" className="text-white hover:text-[#F5C242] font-bold transition-colors">
                    +91 9985185209
                  </a>
                </div>
                <div className="flex items-center justify-between text-[#cbd5e1]">
                  <span className="text-slate-400">WHATSAPP NO.:</span>
                  <a 
                    href="https://wa.me/919985185209?text=Hello%20Mohammed%20Abdul%20Rahman,%20I%20would%20like%20to%20inquire%20about%20a%20project%20with%20MAR%20Architectural%20Studio."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline font-bold"
                  >
                    9985185209
                  </a>
                </div>
                <div className="flex items-center justify-between text-[#cbd5e1] flex-wrap gap-1">
                  <span className="text-slate-400">GMAIL ID:</span>
                  <div className="flex items-center gap-1.5 max-w-full">
                    <a 
                      href="mailto:mararchitecturalstudio@gmail.com?subject=Project%20Commission%20Inquiry%20-%20MAR%20Architectural%20Studio"
                      className="text-white hover:underline font-bold text-[10px] sm:text-[11px] tracking-tight truncate max-w-[190px] xs:max-w-none"
                    >
                      mararchitecturalstudio@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopyEmail('mararchitecturalstudio@gmail.com')}
                      className="p-1 hover:text-[#F5C242] text-slate-400 transition-colors"
                      title="Copy Gmail Address"
                    >
                      {copiedEmail ? <Check className="w-3 h-3 text-[#22c55e]" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[#cbd5e1]">
                  <span className="text-slate-400">AVAILABILITY:</span>
                  <span className="text-white flex items-center gap-1.5 font-bold text-[11px] sm:text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                    DIRECT CONSULTATION
                  </span>
                </div>
              </div>

              {/* Direct Quick Action Buttons (Call, WhatsApp, Gmail) */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 font-sans">
                <a
                  href="tel:9985185209"
                  className="py-2.5 px-1 sm:px-2 bg-black/60 border border-white/20 hover:border-white text-white hover:text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 rounded-sm transition-all shadow-sm"
                  title="Call +91 9985185209"
                >
                  <Phone className="w-3 h-3 text-white" />
                  <span>CALL</span>
                </a>
                <a
                  href="https://wa.me/919985185209?text=Hello%20Mohammed%20Abdul%20Rahman,%20I%20would%20like%20to%20inquire%20about%20a%20project%20with%20MAR%20Architectural%20Studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-1 sm:px-2 bg-[#25D366]/20 border border-[#25D366] hover:bg-[#25D366] text-[#25D366] hover:text-black text-[10px] sm:text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 rounded-sm transition-all shadow-md"
                  title="WhatsApp 9985185209"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WHATSAPP</span>
                </a>
                <a
                  href="mailto:mararchitecturalstudio@gmail.com?subject=Project%20Commission%20Inquiry%20-%20MAR%20Architectural%20Studio"
                  className="py-2.5 px-1 sm:px-2 bg-white/10 border border-white hover:bg-white text-white hover:text-black text-[10px] sm:text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 rounded-sm transition-all shadow-sm"
                  title="Email mararchitecturalstudio@gmail.com"
                >
                  <Mail className="w-3 h-3 text-[#F5C242]" />
                  <span>EMAIL</span>
                </a>
              </div>
            </div>

            {/* Global Studio Hubs */}
            <div className="text-xs font-mono text-gold-radiant tracking-widest uppercase mb-2 flex items-center gap-2 font-bold">
              <Compass className="w-4 h-4 text-[#F5C242] drop-shadow-[0_0_6px_rgba(245,194,66,0.5)]" />
              GLOBAL ATELIERS & HUBS
            </div>

            <div className="space-y-4">
              {STUDIOS.map((st, i) => (
                <div key={i} className="p-5 rounded-sm bg-[#12151d] border border-white/15 hover:border-[#F5C242]/50 transition-all font-sans shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-display font-bold text-white drop-shadow-sm">{st.city}</span>
                    <span className="text-[10px] text-gold-radiant font-bold border border-[#F5C242]/40 px-2 py-0.5 rounded-sm">{st.badge}</span>
                  </div>
                  <div className="text-xs text-[#cbd5e1] mb-1 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#F5C242] shrink-0" />
                    <span>{st.address}</span>
                  </div>
                  <div className="text-xs text-[#94a3b8] flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{st.email}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Emergency Hotline */}
            <div className="p-5 rounded-sm backdrop-blur-sm bg-black/30 border border-[#F5C242]/40 font-mono text-xs text-[#cbd5e1] shadow-lg">
              <div className="text-white font-bold mb-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#F5C242]" />
                URGENT FEASIBILITY AUDITS
              </div>
              <p className="text-[11px] leading-relaxed">
                For time-sensitive commercial acquisitions and rapid structural due-diligence, contact Owner Mohammed Abdul Rahman directly: <a href="tel:9985185209" className="text-[#F5C242] font-bold hover:underline drop-shadow-[0_0_6px_rgba(245,194,66,0.4)]">+91 9985185209</a> or email <a href="mailto:mararchitecturalstudio@gmail.com" className="text-white font-bold hover:underline">mararchitecturalstudio@gmail.com</a>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
