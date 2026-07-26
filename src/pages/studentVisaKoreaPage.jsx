import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import UniversityModal from "../components/UniversityModal";
import { 
  HiMapPin, HiChevronRight, HiIdentification, HiCamera, HiDocumentText, 
  HiAcademicCap, HiBuildingLibrary, HiBanknotes, HiUserGroup, HiHomeModern, 
  HiPaperAirplane, HiHeart, HiBriefcase, HiPencilSquare, HiUserPlus, 
  HiShieldCheck, HiChatBubbleLeftRight, HiArrowDownTray, HiArrowRight
} from "react-icons/hi2";

import { documents, requirements, processSteps, faqs, universities } from "../data/koreaData";


function getIcon(iconId) {
  const iconClass = "text-blue-600 text-xl flex-shrink-0";
  switch(iconId) {
    case "passport": return <HiIdentification className={iconClass} />;
    case "photo": return <HiCamera className={iconClass} />;
    case "form": return <HiDocumentText className={iconClass} />;
    case "university": return <HiBuildingLibrary className={iconClass} />;
    case "academic": return <HiAcademicCap className={iconClass} />;
    case "bank": return <HiBanknotes className={iconClass} />;
    case "sponsor": return <HiUserGroup className={iconClass} />;
    case "accommodation": return <HiHomeModern className={iconClass} />;
    case "flight": return <HiPaperAirplane className={iconClass} />;
    case "medical": return <HiHeart className={iconClass} />;
    case "income": return <HiBriefcase className={iconClass} />;
    case "plan": return <HiPencilSquare className={iconClass} />;
    case "age": return <HiUserPlus className={iconClass} />;
    case "clean": return <HiShieldCheck className={iconClass} />;
    case "consultation": return <HiChatBubbleLeftRight className={iconClass} />;
    case "document": return <HiDocumentText className={iconClass} />;
    case "embassy": return <HiBuildingLibrary className={iconClass} />;
    case "coaching": return <HiAcademicCap className={iconClass} />;
    default: return <HiDocumentText className={iconClass} />;
  }
}

function Badge({ label }) {
  return (
    <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 text-blue-600 text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-xl mb-6 shadow-sm backdrop-blur-sm">
      <span className="flex h-1.5 w-1.5 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
      </span>
      {label}
    </div>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${open ? "border-blue-100 bg-blue-50/20 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`} onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <div className="flex items-start gap-3">
          <span className="text-xs font-bold text-blue-600/40 font-mono mt-0.5">{String(index + 1).padStart(2, "0")}</span>
          <span className={`text-sm font-semibold leading-snug ${open ? "text-blue-600" : "text-slate-800"}`}>{item.q}</span>
        </div>
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${open ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-400"}`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
      <div className={`px-6 overflow-hidden transition-all duration-500 ${open ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-sm text-slate-500 leading-relaxed font-medium pl-6 border-l border-slate-200">{item.a}</p>
      </div>
    </div>
  );
}

export default function StudentVisaKoreaPage() {
  const [selectedUni, setSelectedUni] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedUni ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedUni]);

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans overflow-x-hidden">
      <Header />


      <section className="relative bg-slate-950 pt-36 pb-32 px-4 sm:px-6 md:px-16 lg:px-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 65%)" }} />
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-15 md:opacity-25 mix-blend-lighten">
          <img src="https://www.shutterstock.com/image-photo/group-students-digital-tablet-laptop-600nw-2347371743.jpg" alt="Seoul" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-xl mb-6">
              <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" /> Korean D-4 Student Visa
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
              Study Korean.<br />Live in <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">South Korea.</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base font-medium mb-8 max-w-lg leading-relaxed">
              The D-4 Language Visa is your gateway to studying Korean at a top Korean university. Checkmate handles every step flawlessly.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20">Apply Now <HiArrowRight /></button>
            </div>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <div className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-5">D-4 Visa At a Glance</div>
            <div className="space-y-4">
              {[
                { label: "Visa Type", value: "D-4 — General Training" },
                { label: "Duration", value: "Up to 1 year (extendable)" },
                { label: "Issued By", value: "Korean Embassy, Colombo" },
                { label: "Processing Time", value: "2–4 weeks" },
                { label: "Eligible For", value: "Language program students" },
                { label: "Work Permission", value: "Up to 20 hrs/week" },
                { label: "Pathway To", value: "D-2 Degree Visa" },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-4 py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-slate-500 text-xs font-medium">{item.label}</span>
                  <span className="text-slate-200 text-xs font-semibold text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 px-4 sm:px-6 md:px-16 lg:px-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <Badge label="Partner Institutions" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Top Korean Universities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {universities.map((uni) => (
              <div key={uni.id} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-44 bg-slate-200 relative overflow-hidden">
                    <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                    <div className="absolute top-3 right-3 bg-white/90 border border-slate-150 backdrop-blur-sm rounded-lg px-2.5 py-1 text-[10px] font-bold text-slate-800 shadow-sm">{uni.shortName}</div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium mb-2">
                      <HiMapPin className="text-blue-600 text-base flex-shrink-0" />
                      <span className="truncate">{uni.location}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">{uni.name}</h3>
                    <div className="space-y-1 text-[11px] text-slate-500 font-medium">
                      <div>• Intakes: {uni.intakes}</div>
                      <div className="truncate">• {uni.students}</div>
                    </div>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <button onClick={() => setSelectedUni(uni)} className="w-full inline-flex items-center justify-center gap-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-blue-600 hover:text-white font-bold text-[11px] uppercase tracking-wider py-3 rounded-xl transition-all">
                    View Details <HiChevronRight className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <Badge label="Eligibility Requirements" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Do you qualify?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {requirements.map((req, i) => (
              <div key={i} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 bg-blue-50/50 border border-blue-100/50 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-blue-600/5">
                  {getIcon(req.iconId)}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{req.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 px-4 sm:px-6 md:px-16 lg:px-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <Badge label="Required Documents" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Documents checklist</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc, i) => (
              <div key={i} className="group flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-blue-150 transition-colors">
                  {getIcon(doc.iconId)}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{doc.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Badge label="Application Process" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">How we get you to Korea in 6 steps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step, i) => (
              <div key={i} className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="absolute -top-3 -right-1 text-6xl font-black text-slate-50/70 select-none pointer-events-none font-mono group-hover:text-blue-50/40 transition-colors">{step.num}</div>
                <div className="w-10 h-10 bg-blue-50/30 border border-blue-100/30 rounded-xl flex items-center justify-center mb-4">
                  {getIcon(step.iconId)}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 font-medium">{step.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[11px]">
                  <span className="text-slate-400 font-medium">⏱ {step.duration}</span>
                  <span className="font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-600 text-[10px] uppercase tracking-wider">{step.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 px-4 sm:px-6 md:px-16 lg:px-32 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <Badge label="Frequently Asked Questions" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Got questions?</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => <FAQItem key={i} item={faq} index={i} />)}
          </div>
        </div>
      </section>


      <UniversityModal selectedUni={selectedUni} onClose={() => setSelectedUni(null)} />

      <Footer />
    </div>
  );
}