import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline, IoAirplaneOutline } from "react-icons/io5";
import { useGoogleLogin } from "@react-oauth/google";
import { CiMobile1, CiUser } from "react-icons/ci";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

   
    async function register() {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL + "/api/users/", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phone
            });
            toast.success("Registration successful");
            navigate("/login");
            
        } catch (e) {
            console.error("Register failed", e);
            toast.error("registration  Failed. Please Check your credentials.");
        }
    }

    return (
        <div className="w-full min-h-screen bg-accent flex items-center justify-center relative overflow-x-hidden selection:bg-secondary selection:text-accent font-outfit p-4 lg:p-0">
            

            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full opacity-15" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path
                        d="M 1100 600 Q 800 500 700 300 T 400 100"
                        fill="none"
                        stroke="#00FFEF"
                        strokeWidth="1.5"
                        strokeDasharray="12,12"
                        className="animate-[drawPath_12s_linear_infinite]"
                    />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="plane-container animate-[planeMove_12s_linear_infinite]">
                        <IoAirplaneOutline
                            size={32}
                            className="text-secondary rotate-[240deg] filter drop-shadow-[0_0_12px_rgba(0,255,239,0.8)]"
                        />
                    </div>
                </div>

                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[130px]" />
            </div>

            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:px-16 z-10 my-8 lg:my-0">
                

                <div className="flex flex-col max-w-lg text-center lg:text-left items-center lg:items-start">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] w-12 bg-secondary/40 hidden lg:block" />
                        <span className="text-[11px] text-secondary tracking-[6px] uppercase font-bold bg-secondary/10 px-3 py-1.5 rounded-full lg:bg-transparent lg:p-0">
                            Global Admissions
                        </span>
                    </div>
                    <h1 className="font-syne font-extrabold text-5xl sm:text-6xl lg:text-7xl text-primary tracking-tighter leading-[1.05] lg:leading-[0.95] mb-6">
                        Fly to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-secondary/80 to-secondary/40">Seoul.</span>
                    </h1>
                    <p className="text-primary/50 text-base sm:text-lg max-w-sm font-light leading-relaxed">
                        Your academic journey to South Korea starts here. Enter your credentials to gain portal access.
                    </p>
                </div>


                <div className="w-full max-w-[500px] bg-white/90 backdrop-blur-3xl border border-white/40 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] p-8 sm:p-10 lg:p-12 relative overflow-hidden group/card transition-all duration-500 hover:shadow-[0_50px_100px_-15px_rgba(0,255,239,0.15)]">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-secondary to-transparent" />
                    
                    <div className="mb-8">
                        <h2 className="font-syne font-bold text-3xl text-accent mb-1 tracking-tight">Create Account</h2>
                        <p className="text-[10px] text-accent/40 tracking-widest font-bold uppercase">Portal Registration</p>
                    </div>

                    <div className="space-y-4">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="group relative">
                                <CiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-secondary transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full h-13 bg-accent/[0.02] border border-accent/10 rounded-xl pl-12 pr-4 text-sm text-accent placeholder-accent/30 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                                />
                            </div>
                            <div className="group relative">
                                <CiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-secondary transition-colors" size={20} />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full h-13 bg-accent/[0.02] border border-accent/10 rounded-xl pl-12 pr-4 text-sm text-accent placeholder-accent/30 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                                />
                            </div>
                        </div>


                        <div className="group relative">
                            <IoMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-secondary transition-colors" size={18} />
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-13 bg-accent/[0.02] border border-accent/10 rounded-xl pl-12 pr-4 text-sm text-accent placeholder-accent/30 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                            />
                        </div>


                        <div className="group relative">
                            <CiMobile1 className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-secondary transition-colors" size={20} />
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full h-13 bg-accent/[0.02] border border-accent/10 rounded-xl pl-12 pr-4 text-sm text-accent placeholder-accent/30 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                            />
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="group relative">
                                <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-secondary transition-colors" size={18} />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-13 bg-accent/[0.02] border border-accent/10 rounded-xl pl-12 pr-4 text-sm text-accent placeholder-accent/30 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                                />
                            </div>
                            <div className="group relative">
                                <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-accent/30 group-focus-within:text-secondary transition-colors" size={18} />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full h-13 bg-accent/[0.02] border border-accent/10 rounded-xl pl-12 pr-4 text-sm text-accent placeholder-accent/30 focus:outline-none focus:border-secondary focus:bg-white transition-all"
                                />
                            </div>
                        </div>
                    </div>


                    <button
                        onClick={register}
                        className="w-full h-14 bg-accent text-primary font-syne font-bold text-xs tracking-[3px] uppercase rounded-xl mt-8 hover:bg-secondary hover:text-accent transition-all duration-300 shadow-lg shadow-accent/10 hover:shadow-secondary/20 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Sign Up
                    </button>

                   

                    


                    <div className="mt-8 text-center">
                        <p className="text-xs text-accent/50">
                            Already have an account?{" "}
                            <button
                                onClick={() => navigate("/login")}
                                className="font-bold text-accent hover:text-secondary transition-colors duration-200 underline underline-offset-4 decoration-secondary/30"
                            >
                                Sign In Here
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes drawPath {
                    from { stroke-dashoffset: 240; }
                    to { stroke-dashoffset: 0; }
                }
                @keyframes planeMove {
                    0% { offset-distance: 0%; opacity: 0; }
                    8% { opacity: 1; }
                    92% { opacity: 1; }
                    100% { offset-distance: 100%; opacity: 0; }
                }
                .plane-container {
                    offset-path: path("M 1100 600 Q 800 500 700 300 T 400 100");
                    position: absolute;
                    width: 32px;
                    height: 32px;
                }
            `}</style>
        </div>
    );
}