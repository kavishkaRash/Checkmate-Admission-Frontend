import React from "react";

export default function CTABanner() {
    return (
        <section className="bg-[#f8fafc] text-[#0f172a] pb-24 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden font-sans">
            
            {/* Pattern Blueprint Grid (Matches your design language) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* ── MAIN BANNER CARD ── */}
                <div className="relative rounded-3xl overflow-hidden bg-[#0f172a] border border-slate-800 shadow-2xl shadow-[#0f172a]/20 px-8 py-12 sm:px-12 sm:py-16 md:p-20 text-white">
                    
                    {/* Radial Glow Ambient Inside Card */}
                    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] pointer-events-none z-0"
                        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }}
                    />
                    <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] pointer-events-none z-0"
                        style={{ background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)" }}
                    />

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                        
                        {/* Left Column: Texts & Badges */}
                        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                            {/* Premium Mini Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-xl backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                Next Intake Closing Soon
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                                Ready to start your <br className="hidden sm:block" />
                                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                    Korean Journey?
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Don't get lost in complex documentation. Let Checkmate handle your visa, university application, and interview prep with a <span className="text-white font-semibold">98% success rate</span>.
                            </p>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-400 text-lg">✓</span>
                                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Free First Consultation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-emerald-400 text-lg">✓</span>
                                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Zero Hidden Fees</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Interactive Actions */}
                        <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end space-y-4">
                            
                            {/* Primary Button */}
                            <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden text-center">
                                <span className="absolute inset-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center justify-center gap-2">
                                    Book Free Consultation
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>

                            {/* Secondary Button */}
                            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 text-slate-200 text-center backdrop-blur-sm">
                                Talk to an Expert via WhatsApp
                            </button>

                            {/* Live Active Notice */}
                            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider pt-2">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                Counselors Online Now
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}