import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full sticky top-0 z-50 bg-[#080808]/97 border-b border-secondary/10 backdrop-blur-md">

            {/* Bottom center glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-px bg-secondary/20" />

            <div className="max-w-[1100px] mx-auto h-[100px] flex items-center justify-between px-9">

                {/* Logo */}
                <div className="flex items-center gap-3.5">
                    <img
                        src="https://res.cloudinary.com/ddrbcubf8/image/upload/v1778569640/Gemini_Generated_Image_ur2k1aur2k1aur2k-removebg-preview_ppmvxy.png"
                        alt="Checkmate Admission Logo"
                        className="h-[75px] w-auto object-contain"
                    />

                    {/* Vertical divider between image and wordmark */}
                    <div className="w-px h-9 bg-gradient-to-b from-transparent via-secondary/30 to-transparent mx-0.5" />

                    <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-syne font-extrabold text-[20px] text-primary tracking-[-0.5px]">
                            Checkmate
                        </span>
                        <span className="font-outfit font-light text-[10px] text-secondary tracking-[4px] uppercase">
                            Admission
                        </span>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex items-center gap-1">
                    <Link to="/" className="font-outfit text-[14px] font-normal text-primary/50 hover:text-primary hover:bg-primary/6 px-4 py-2 rounded-lg transition-all duration-200">
                        Home
                    </Link>
                    <Link to="/korea-student-visa" className="font-outfit text-[14px] font-normal text-primary/50 hover:text-primary hover:bg-primary/6 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap">
                        Student Visa Korea
                    </Link>
                    <Link to="/faq" className="font-outfit text-[14px] font-normal text-primary/50 hover:text-primary hover:bg-primary/6 px-4 py-2 rounded-lg transition-all duration-200">
                        FAQ
                    </Link>
                    <Link to="/contact" className="font-outfit text-[14px] font-normal text-primary/50 hover:text-primary hover:bg-primary/6 px-4 py-2 rounded-lg transition-all duration-200">
                        Contact
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-[18px] bg-primary/10 mx-2" />

                    {/* CTA — outlined teal style */}
                    <Link
                        to="/apply"
                        className="ml-1 inline-flex items-center gap-2 bg-transparent border border-secondary/50 text-secondary font-syne font-bold text-[13px] tracking-[0.5px] px-[22px] py-[10px] rounded-full hover:bg-secondary hover:text-accent hover:border-secondary transition-all duration-200 group"
                    >
                        Apply Now
                        <span className="text-sm group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}