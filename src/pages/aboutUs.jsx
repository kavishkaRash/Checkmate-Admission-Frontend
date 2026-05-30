import React, { useEffect, useRef, useState } from "react";
import { 
    HiAcademicCap, 
    HiShieldCheck, 
    HiMap, 
    HiHeart, 
    HiScale, 
    HiCheckCircle,
    HiBriefcase,
    HiGlobeAsiaAustralia,
    HiSparkles
} from "react-icons/hi2";
import { FaPassport } from "react-icons/fa6";
import Header from "../components/header";
import Footer from "../components/footer";

// ── Scroll reveal hook ─────────────────────────────────────────────────────
function useReveal(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return [ref, visible];
}

// ── Animated counter ───────────────────────────────────────────────────────
function Counter({ target, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let startTime = null;
        const step = (ts) => {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Team data (With Premium Headshot Images) ──────────────────────────────────
const team = [
  {
    name: "Kavishka Rajapaksha",
    role: "Founder & CEO",
    bio: "10+ years in international student placement. Former Education Attaché in Seoul.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
    color: "blue",
  },
  {
    name: "Dilani Perera",
    role: "Head of Visa Consulting",
    bio: "Expert in Korean D-4 & D-2 visa processes. 500+ successful visa applications.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    color: "indigo",
  },
  {
    name: "Chamara Silva",
    role: "University Relations Manager",
    bio: "Manages direct partnerships with 15+ Korean universities. Based in Seoul.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
    color: "green",
  },
  {
    name: "Nimesha Fernando",
    role: "Student Success Advisor",
    bio: "Post-arrival support specialist. Helps students settle into Korean university life.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
    color: "purple",
  },
];

const colorMap = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-100",   text: "text-blue-600",   bar: "from-blue-500 to-indigo-500" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-100", text: "text-indigo-600", bar: "from-indigo-500 to-purple-500" },
  green:  { bg: "bg-emerald-50",border: "border-emerald-100",text: "text-emerald-600",bar: "from-emerald-500 to-teal-500" },
  purple: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-600", bar: "from-purple-500 to-pink-500" },
};

// ── Values data (With Premium Icons) ───────────────────────────────────────
const values = [
  { icon: <HiSparkles className="text-blue-600 text-lg" />, title: "Precision",       desc: "Every document, every detail — reviewed twice before submission. We don't do sloppy work." },
  { icon: <HiScale className="text-blue-600 text-lg" />, title: "Transparency",    desc: "Zero hidden fees. Zero surprises. What we quote is exactly what you pay — from day one." },
  { icon: <HiBriefcase className="text-blue-600 text-lg" />, title: "Partnership",     desc: "We're not just agents. We're your partners — before, during, and after you land in Korea." },
  { icon: <HiCheckCircle className="text-blue-600 text-lg" />, title: "Excellence",      desc: "98% visa success rate isn't luck. It's the result of meticulous preparation and expert guidance." },
  { icon: <HiHeart className="text-blue-600 text-lg" />, title: "Student-First",  desc: "Every decision we make is centered on what's best for the student — not the commission." },
  { icon: <HiGlobeAsiaAustralia className="text-blue-600 text-lg" />, title: "Global Vision",  desc: "We believe every Sri Lankan student deserves access to world-class education abroad." },
];

// ── Section badge ──────────────────────────────────
function Badge({ label }) {
  return (
    <div className="inline-flex items-center gap-2.5 bg-white/90 border border-slate-200 text-blue-600 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-xl mb-6 shadow-sm backdrop-blur-sm">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
      </span>
      {label}
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function AboutUs() {
  const [heroRef, heroVisible] = useReveal(0);

  return (
    <div className="bg-[#f8fafc] text-[#0f172a] font-sans overflow-x-hidden select-none">

        <Header />
      {/* ── HERO WITH KOREAN BACKGROUND ── */}
      <section className="relative min-h-[65vh] flex items-center px-4 sm:px-6 md:px-16 lg:px-32 py-36 overflow-hidden bg-[#0f172a]">

        {/* Right Side Premium Korean Faded Image Layout */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0 opacity-15 md:opacity-30 pointer-events-none">
            <img 
                src="https://www.drmattlynch.com/wp-content/uploads/2025/04/pexels-photo-267885.jpeg" 
                alt="Seoul South Korea" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
        </div>

        {/* Radial glow */}
        <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none z-10"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 65%)" }} />

        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div
          ref={heroRef}
          className={`relative z-20 max-w-3xl transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-xl mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            About Checkmate Admission
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white mb-6">
            We get Sri Lankan<br />
            students to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Korea.
            </span>
          </h1>

          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            Checkmate Admission is Sri Lanka's most trusted Korea student visa consultancy —
            built on transparency, precision, and a genuine passion for student success.
          </p>
        </div>

        {/* Bottom fade to body */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#f8fafc] pointer-events-none z-10" />
      </section>

      {/* ── STATS COUNTER GRID ── */}
      <section className="px-4 sm:px-6 md:px-16 lg:px-32 -mt-12 pb-20 relative z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: 300, suffix: "+", label: "Students Placed",      color: "text-[#0f172a]" },
            { value: 98,  suffix: "%", label: "Visa Success Rate",    color: "text-blue-600" },
            { value: 15,  suffix: "+", label: "Partner Universities", color: "text-[#0f172a]" },
            { value: 6,   suffix: "+", label: "Years of Experience",  color: "text-[#0f172a]" },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-slate-200/80 rounded-2xl px-5 py-6 text-center hover:shadow-xl hover:border-blue-100 hover:translate-y-[-2px] transition-all duration-300">
              <div className={`text-3xl sm:text-4xl font-black tracking-tight ${s.color}`}>
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="px-4 sm:px-6 md:px-16 lg:px-32 py-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.005]"
          style={{
            backgroundImage: "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Visual Quote Box */}
          <div className="relative">
            <div className="bg-[#0f172a] rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-slate-800 shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15), transparent)" }} />

              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6">
                 <span className="text-xl text-blue-400">♟️</span>
              </div>
              
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-2 bg-white border border-slate-200 rounded-2xl p-5 shadow-xl hidden sm:block">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Founded</div>
              <div className="text-2xl font-black text-[#0f172a]">2019</div>
              <div className="text-[11px] text-slate-400 font-medium">Colombo, Sri Lanka</div>
            </div>
          </div>

          {/* Right — Story Text Content */}
          <div>
            <Badge label="Our Story" />
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-[#0f172a] mb-6">
              Born from a<br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                student's frustration.
              </span>
            </h2>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed font-medium">
              <p>
                In 2019, our founder Kavishka sat across from a brilliant student who had been rejected
                by two Korean universities — not because of her grades, but because of incorrect documentation
                prepared by an unreliable agent.
              </p>
              <p>
                That moment sparked Checkmate Admission. We built a consultancy from the ground up with
                one mission: <span className="text-[#0f172a] font-semibold">give every Sri Lankan student a fair, transparent, and expert-guided pathway to Korean higher education.</span>
              </p>
            </div>

            {/* Timeline Graphic Area */}
            <div className="mt-8 space-y-4">
              {[
                { year: "2019", event: "Checkmate Admission founded in Colombo" },
                { year: "2021", event: "First 100 students successfully placed in Korea" },
                { year: "2023", event: "Expanded to 15+ university partnerships" },
                { year: "2025", event: "300+ placements · 98% visa success rate" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 text-right">
                    <span className="text-xs font-black text-blue-600">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-1 border-2 border-blue-100" />
                    {i < 3 && <div className="w-px h-6 bg-slate-200 mt-1" />}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-[#0f172a] py-24 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge label="Our Mission" />
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-white mb-6">
                Make Korean education{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  accessible to every Sri Lankan.
                </span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed font-medium mb-8">
                We believe that geography and bureaucracy should never stand between a student
                and world-class education. Our mission is to remove every barrier — documentation,
                language, process complexity.
              </p>

              {/* Mission pillars */}
              <div className="space-y-4">
                {[
                  { icon: <FaPassport className="text-blue-400 text-base" />, title: "Eliminate Barriers",   desc: "Simplify the complex Korean visa and admission process" },
                  { icon: <HiScale className="text-blue-400 text-base" />, title: "Radical Transparency", desc: "No hidden fees, no false promises — ever" },
                  { icon: <HiMap className="text-blue-400 text-base" />, title: "Build Bridges",        desc: "Connect Sri Lankan talent with Korean opportunity" },
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-4 transition-all duration-300 hover:bg-white/[0.04]">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm mb-0.5">{p.title}</div>
                      <div className="text-white/40 text-xs font-medium">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision card block */}
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-[10px] font-bold text-blue-400 tracking-widest uppercase mb-4">Our Vision</div>
              <p className="text-white text-xl sm:text-2xl font-black leading-[1.25] mb-8">
                "To be the most trusted gateway between Sri Lankan students and South Korean universities."
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Student first" },
                  { label: "Zero hidden fees" },
                  { label: "Direct uni access" },
                  { label: "Post-arrival support" },
                  { label: "Expert counselors" },
                  { label: "98% success rate" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-[10px] font-bold flex-shrink-0">✓</div>
                    <span className="text-white/60 text-xs font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION (With Modern Interactive Grid) ── */}
      <section className="py-24 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center mb-14">
            <Badge label="Our Values" />
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-[#0f172a]">
              What we stand for.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-100 transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 bg-blue-50/50 border border-blue-100/60 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {v.icon}
                  </div>
                </div>
                <h3 className="text-sm font-black text-[#0f172a] mb-2 group-hover:text-blue-600 transition-colors duration-300">{v.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{v.desc}</p>
                <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-700 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM TEAM SECTION ── */}
      <section className="py-24 px-4 sm:px-6 md:px-16 lg:px-32 relative overflow-hidden bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <Badge label="Meet the Team" />
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] text-[#0f172a]">
                The people behind<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  your Korea journey.
                </span>
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm font-medium lg:text-right lg:pb-2">
              Our team combines deep expertise in Korean immigration, university admissions,
              and student support — all focused on your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => {
              const c = colorMap[member.color];
              return (
                <div
                  key={i}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-500 cursor-default relative flex flex-col"
                >
                  {/* Top Animated Color Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${c.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10`} />

                  {/* Member Image Container */}
                  <div className="h-56 bg-slate-50 overflow-hidden relative">
                     <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 object-top"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Details */}
                  <div className="p-5 pt-2 flex-grow flex flex-col justify-between">
                    <div>
                        <div className={`text-[9px] font-bold uppercase tracking-wider mb-1 ${c.text}`}>{member.role}</div>
                        <h3 className="text-sm font-black text-[#0f172a] mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{member.bio}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP SECTION ── */}
      <section className="py-16 px-4 sm:px-6 md:px-16 lg:px-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0f172a] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-slate-800 shadow-xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.15), transparent)" }} />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Ready to start your Korea journey?
              </h2>
              <p className="text-white/40 text-xs sm:text-sm font-medium mb-8 max-w-md mx-auto">
                Book a free consultation with our team today — no commitment, no fees.
              </p>
              <button className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5">
                Book Free Consultation
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}