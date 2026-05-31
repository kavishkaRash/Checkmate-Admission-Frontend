import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-50 bg-accent backdrop-blur-xl border-b border-white/5 selection:bg-secondary selection:text-accent">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-[30%] h-[1px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

            <div className="max-w-[1200px] mx-auto h-[90px] flex items-center justify-between px-6 lg:px-10">
                
                <Link to="/" className="flex items-center gap-4 group transition-opacity hover:opacity-90">
                    <div className="relative">
                        <img
                            src="https://res.cloudinary.com/ddrbcubf8/image/upload/v1778569640/Gemini_Generated_Image_ur2k1aur2k1aur2k-removebg-preview_ppmvxy.png"
                            alt="Checkmate Admission Logo"
                            className="h-[60px] md:h-[70px] w-auto object-contain relative z-10"
                        />
                        <div className="absolute inset-0 bg-secondary/10 blur-2xl rounded-full scale-50 group-hover:scale-100 transition-transform duration-500" />
                    </div>

                    <div className="hidden sm:flex items-center gap-4">
                        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                        <div className="flex flex-col">
                            <span className="font-syne font-extrabold text-[18px] md:text-[22px] text-primary tracking-tight leading-none">
                                Checkmate
                            </span>
                            <span className="font-outfit font-bold text-[9px] text-secondary tracking-[0.3em] uppercase mt-1">
                                Admission
                            </span>
                        </div>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-2">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Student Visa Korea", path: "/korea-student-visa" },
                        { name: "About", path: "/about" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className="relative font-outfit text-[13px] font-medium text-primary/60 hover:text-primary px-4 py-2 transition-colors duration-300 group"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-secondary shadow-[0_0_10px_#00ffef] transition-all duration-300 group-hover:w-1/2" />
                        </Link>
                    ))}

                    <div className="w-[1px] h-5 bg-white/10 mx-4" />

                    <Link
                        to="/appointment"
                        className="relative inline-flex items-center gap-2 bg-transparent border border-secondary/30 text-secondary font-syne font-bold text-[12px] tracking-wider px-7 py-3 rounded-full overflow-hidden transition-all duration-300 hover:border-secondary hover:shadow-[0_0_20px_rgba(0,255,239,0.2)] group active:scale-95"
                    >
                        <span className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover:text-accent flex items-center gap-2">
                            APPLY NOW
                            <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </Link>
                </nav>

                <button onClick={() => setIsSideBarOpen(true)} className="lg:hidden p-2 text-primary">
                    <div className="w-6 h-0.5 bg-primary mb-1.5" />
                    <div className="w-6 h-0.5 bg-primary mb-1.5" />
                    <div className="w-4 h-0.5 bg-secondary ml-auto" />
                </button>

                <div 
                    onClick={() => setIsSideBarOpen(false)}
                    className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
                        isSideBarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                />

                <div className={`lg:hidden fixed top-0 right-0 w-[280px] sm:w-[320px] h-screen bg-[#080808] backdrop-blur-sm  border-l border-white/5 z-150 flex flex-col p-8 transition-transform duration-300 ease-in-out ${
                    isSideBarOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex flex-col">
                            <span className="font-syne font-extrabold text-[16px] text-primary tracking-tight leading-none">
                                Checkmate
                            </span>
                            <span className="font-outfit font-bold text-[8px] text-secondary tracking-[0.3em] uppercase mt-1">
                                Admission
                            </span>
                        </div>
                        <button onClick={() => setIsSideBarOpen(false)} className="p-2 text-primary/60 hover:text-primary transition-colors text-xl">
                            ✕
                        </button>
                    </div>
                    
                    <div className="flex flex-col gap-5">
                        {[
                            { name: "Home", path: "/" },
                            { name: "Student Visa Korea", path: "/korea-student-visa" },
                            { name: "About", path: "/about" },
                            { name: "Contact", path: "/contact" }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsSideBarOpen(false)}
                                className="font-outfit text-[16px] font-medium text-primary/70 hover:text-secondary transition-colors py-1"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pt-6">
                        <Link
                            to="/appointment"
                            onClick={() => setIsSideBarOpen(false)}
                            className="w-full inline-flex items-center justify-center bg-secondary text-accent font-syne font-bold text-[13px] tracking-wider py-3.5 rounded-full hover:shadow-[0_0_20px_rgba(0,255,239,0.3)] transition-all active:scale-95"
                        >
                            APPLY NOW →
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    );
}