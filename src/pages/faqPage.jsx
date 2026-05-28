import React from "react";
import Header from "../components/header";

export default function Faq() {
    return (
        <div className="bg-[#020618] text-primary relative min-h-screen w-full overflow-x-hidden font-sans select-none">
            <Header />
            
            {/* Background Video Wrapper with Dark Base */}
            <div className="absolute inset-0 w-full h-full z-0 ml-[200px] overflow-hidden bg-[#020618]">
                <video
                    className="w-full h-full object-cover object-right md:object-right mix-blend-screen opacity-70"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://res.cloudinary.com/ddrbcubf8/video/upload/v1779896868/Asian_girl_sitting_on_suitcase_202605272117_l0hxyn.mp4"
                />
                {/* Strong Left Gradient to hide the video boundary and keep text readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#020618] via-[#020618]/80 to-transparent z-10"></div>
                {/* Bottom Gradient to blend into the lower sections */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020618] via-[#020618]/30 to-transparent z-10"></div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10"></div>

            {/* Content Section */}
            <section className="relative z-20 min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-32 pb-20">
                
                <div className="absolute top-32 right-6 md:right-12 z-30 bg-secondary text-accent text-[10px] md:text-xs font-black px-4 py-2 rounded-xl shadow-xl tracking-wide">
                    🇰🇷 Sri Lanka's #1 Korea Visa Agency
                </div>

                <div className="w-full max-w-2xl relative z-30">
                    <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 text-secondary text-[11px] font-bold tracking-wider px-4 py-1.5 rounded-xl mb-6">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        ✈ Solutions for all types of student visas
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight mb-6">
                        Professional Solutions<br />
                        for <span className="text-secondary">Student Visa</span><br />
                        & <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[4px] after:bg-secondary after:rounded-full">Admissions</span>
                    </h1>

                    <p className="text-sm sm:text-base text-primary/60 leading-relaxed mb-8 max-w-lg font-medium">
                        Sri Lanka's #1 Korea student visa consultancy. We've guided 300+ students to top Korean universities with a 98% visa success rate.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-12">
                        <button className="bg-secondary text-accent text-xs font-black tracking-widest px-8 py-4 rounded-xl hover:bg-primary hover:text-accent shadow-xl shadow-secondary/10 transition-all duration-300 transform hover:-translate-y-0.5">
                            REQUEST A QUOTE →
                        </button>
                        <button className="flex items-center gap-3 bg-primary/5 text-primary text-xs font-bold px-6 py-4 rounded-xl border border-primary/10 hover:bg-primary/20 transition-all duration-200">
                            <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[10px] text-secondary pl-0.5">▶</span>
                            Watch Reviews
                        </button>
                    </div>

                    <div className="flex items-center gap-8 border-t border-primary/10 pt-8 max-w-md">
                        <div className="flex-1">
                            <div className="text-2xl sm:text-3xl font-black text-primary tracking-tight">300<span className="text-secondary font-light">+</span></div>
                            <div className="text-[11px] text-primary/40 font-bold uppercase tracking-wider mt-1">Students Placed</div>
                        </div>
                        <div className="w-px h-10 bg-primary/10"></div>
                        <div className="flex-1">
                            <div className="text-2xl sm:text-3xl font-black text-primary tracking-tight">98<span className="text-secondary font-light">%</span></div>
                            <div className="text-[11px] text-primary/40 font-bold uppercase tracking-wider mt-1">Success Rate</div>
                        </div>
                        <div className="w-px h-10 bg-primary/10"></div>
                        <div className="flex-1">
                            <div className="text-2xl sm:text-3xl font-black text-primary tracking-tight">15<span className="text-secondary font-light">+</span></div>
                            <div className="text-[11px] text-primary/40 font-bold uppercase tracking-wider mt-1">Partners</div>
                        </div>
                    </div>
                </div>

                {/* Right Floating Card */}
                <div className="hidden lg:block absolute right-12 bottom-32 z-30 bg-[#020618]/90 backdrop-blur-2xl border border-primary/10 rounded-2xl p-6 min-w-[240px] shadow-2xl">
                    <div className="text-[10px] font-black tracking-widest text-secondary uppercase mb-4">We handle everything</div>
                    <div className="space-y-3">
                        {[
                            "University admission",
                            "Visa application (D-4)",
                            "Accommodation booking",
                            "Pre-departure support"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 bg-secondary/10 border border-secondary/20 rounded-full flex items-center justify-center text-secondary text-[10px] font-bold">✓</div>
                                <div className="text-xs text-primary/80 font-semibold">{text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid Bar */}
            <div className="relative z-40 grid grid-cols-1 md:grid-cols-3 mx-6 md:mx-12 lg:mx-24 -mt-10 bg-primary rounded-2xl border border-primary/5 shadow-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-accent/10">
                {[
                    { icon: "🎓", title: "Student Visa (D-4)", desc: "Full visa application with document review & embassy interview coaching" },
                    { icon: "🏛", title: "Quick University Admission", desc: "Direct placement in 15+ partner universities across Korea" },
                    { icon: "🤝", title: "Expert Consultants", desc: "300+ Sri Lankan students guided to Korean universities successfully" }
                ].map((feat, index) => (
                    <div key={index} className="bg-primary p-6 md:p-8 flex gap-4 items-start hover:bg-white/50 transition-colors duration-200">
                        <div className="w-11 h-11 bg-accent/5 border border-accent/10 rounded-xl flex items-center justify-center text-xl shrink-0 text-accent">
                            {feat.icon}
                        </div>
                        <div>
                            <h3 className="text-sm font-extrabold text-accent mb-1 tracking-tight">{feat.title}</h3>
                            <p className="text-[11px] text-accent/50 leading-relaxed font-medium">{feat.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}