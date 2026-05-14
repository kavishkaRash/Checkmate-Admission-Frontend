import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline, IoAirplaneOutline, IoSchoolOutline, IoLanguageOutline } from "react-icons/io5";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login() {
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + "/api/users/login", {
                email: email,
                password: password,
            });
            localStorage.setItem("token", response.data.token);
            const user = response.data.user;
            if (user.role == "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } catch (e) {
            console.error("Login failed", e);
            toast.error("Login Failed. Please Check your credentials.");
        }
    }

    return (
        <div className="w-full h-screen bg-primary flex items-center justify-center relative overflow-hidden selection:bg-secondary selection:text-accent font-outfit">
            
            {/* --- REALISTIC MOTION BACKGROUND --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                
                {/* SVG Path Animation */}
                <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path
                        id="flightPath"
                        d="M 1100 600 Q 800 500 700 300 T 400 100" // Path from Right-Center to Top-Center
                        fill="none"
                        stroke="#00FFEF" // Your secondary color
                        strokeWidth="2"
                        strokeDasharray="10,10"
                        className="animate-[drawPath_10s_linear_infinite]"
                    />
                </svg>

                {/* Flying Plane following the path */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="plane-container animate-[planeMove_10s_linear_infinite]">
                        <IoAirplaneOutline 
                            size={40} 
                            className="text-secondary rotate-[240deg] filter drop-shadow-[0_0_8px_rgba(0,255,239,0.5)]" 
                        />
                        {/* Vapor Trail */}
                        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-secondary/30 absolute right-full top-1/2 -translate-y-1/2 mr-2" />
                    </div>
                </div>

                {/* Background Glows */}
                <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[100px]" />
            </div>

            {/* --- LOGIN CONTENT --- */}
            <div className="w-full max-w-[1200px] flex items-center justify-between px-8 lg:px-20 z-10">
                
                {/* Left Branding */}
                <div className="hidden lg:flex flex-col max-w-lg">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-secondary/50" />
                        <span className="text-[10px] text-secondary tracking-[5px] uppercase font-bold">Global Admissions</span>
                    </div>
                    <h1 className="font-syne font-extrabold text-7xl text-accent tracking-tighter leading-[0.9] mb-6">
                        Fly to <br /> 
                        <span className="text-secondary">Seoul.</span>
                    </h1>
                    <p className="text-accent/40 text-lg max-w-xs font-light">
                        Your academic journey to South Korea starts with a single click.
                    </p>
                </div>

                {/* Login Card */}
                <div className="w-full max-w-[440px] bg-white/80 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] p-12">
                    <div className="mb-10">
                        <h2 className="font-syne font-bold text-3xl text-accent mb-1 tracking-tight">Welcome</h2>
                        <p className="text-xs text-accent/40 uppercase tracking-widest font-bold">Portal Access</p>
                    </div>

                    <div className="space-y-5">
                        <div className="group">
                            <div className="relative">
                                <IoMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-secondary transition-colors" size={18} />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-secondary transition-all"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <div className="relative">
                                <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-secondary transition-colors" size={18} />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-14 bg-accent/[0.02] border border-accent/10 rounded-2xl pl-12 pr-4 text-sm focus:outline-none focus:border-secondary transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={login}
                        className="w-full h-14 bg-accent text-primary font-syne font-bold text-[11px] tracking-[3px] uppercase rounded-2xl mt-10 hover:bg-secondary hover:text-accent transition-all duration-500 shadow-lg shadow-accent/10"
                    >
                        Sign In
                    </button>

                    <button className="w-full h-14 flex items-center justify-center gap-3 bg-white border border-accent/5 rounded-2xl text-[10px] font-bold text-accent/50 uppercase tracking-widest mt-4 hover:border-secondary transition-all">
                        <FcGoogle size={18} /> Google Login
                    </button>
                </div>
            </div>

            {/* Realistic Animations */}
            <style>
                {`
                @keyframes drawPath {
                    from { stroke-dashoffset: 200; }
                    to { stroke-dashoffset: 0; }
                }

                @keyframes planeMove {
                    0% {
                        offset-distance: 0%;
                        opacity: 0;
                    }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% {
                        offset-distance: 100%;
                        opacity: 0;
                    }
                }

                .plane-container {
                    offset-path: path("M 1100 600 Q 800 500 700 300 T 400 100");
                    position: absolute;
                    width: 40px;
                    height: 40px;
                }
                `}
            </style>
        </div>
    );
}