import { HiMapPin, HiCalendarDays, HiAcademicCap, HiSparkles, HiUsers, HiXMark, HiArrowRight } from "react-icons/hi2";

export default function UniversityModal({ selectedUni, onClose }) {
  if (!selectedUni) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 backdrop-blur-md transition-opacity duration-300">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl shadow-2xl z-10 overflow-hidden max-h-[85vh] flex flex-col">
        

        <div className={`relative h-48 bg-gradient-to-r ${selectedUni.bgGradient} p-6 sm:p-8 flex items-end`}>
          <div className="absolute inset-0 opacity-15 mix-blend-overlay">
            <img src={selectedUni.image} alt="" className="w-full h-full object-cover" />
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 p-2.5 rounded-xl backdrop-blur-md transition-all">
            <HiXMark className="text-lg" />
          </button>
          <div className="relative z-10">
            <span className="bg-white/10 text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
              Partner University Profile
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2 leading-tight">{selectedUni.name}</h2>
          </div>
        </div>


        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3.5">
              <HiMapPin className="text-blue-600 text-xl flex-shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Campus Location</div>
                <div className="text-xs font-semibold text-slate-800 mt-0.5">{selectedUni.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3.5">
              <HiCalendarDays className="text-blue-600 text-xl flex-shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Available Intakes</div>
                <div className="text-xs font-semibold text-slate-800 mt-0.5">{selectedUni.intakes}</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              <HiAcademicCap className="text-blue-600 text-lg" /> Offered Academic Programs
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedUni.programs.map((prog, i) => (
                <span key={i} className="bg-blue-50/50 text-blue-600 border border-blue-100/70 text-xs font-medium px-3 py-1.5 rounded-lg">
                  {prog}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              <HiSparkles className="text-blue-600 text-lg" /> Campus Highlights
            </h4>
            <div className="space-y-2">
              {selectedUni.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                  <span className="w-5 h-5 rounded-md bg-blue-100/60 text-blue-600 font-bold flex items-center justify-center text-[10px] flex-shrink-0">
                    0{i + 1}
                  </span>
                  <span className="mt-0.5 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500">
              <HiUsers className="text-lg" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Global Demographics</div>
              <div className="text-xs font-bold text-slate-800">{selectedUni.students}</div>
            </div>
          </div>
        </div>

        
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left hidden sm:block">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Consultation Fee</div>
            <div className="text-sm font-bold text-emerald-600">LKR 0 (100% Free)</div>
          </div>
          <button onClick={onClose} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md transition-all">
            Apply for {selectedUni.shortName} Now <HiArrowRight className="text-sm" />
          </button>
        </div>

      </div>
    </div>
  );
}