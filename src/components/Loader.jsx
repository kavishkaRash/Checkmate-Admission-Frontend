export default function Loader() {
  return (
    <div className="w-full h-full min-h-[400px] flex flex-col justify-center items-center bg-transparent selection:bg-secondary">
      <div className="relative flex items-center justify-center">
        
        {/* Large Diffused Background Glow */}
        <div className="absolute w-32 h-32 bg-secondary/10 rounded-full blur-[40px] animate-pulse" />

        {/* Outer Orbit Ring */}
        <div className="absolute w-24 h-24 border-[0.5px] border-accent/10 rounded-full" />

        {/* The "Radar" Scanner Effect */}
        <div className="absolute w-24 h-24 rounded-full border-t-2 border-secondary/40 animate-[spin_1.5s_linear_infinite]" />

        {/* Main Spinning Core */}
        <div className="relative w-16 h-16">
            {/* Primary Spinner */}
            <div className="absolute inset-0 border-[3px] border-transparent border-t-accent rounded-full animate-[spin_0.8s_cubic_bezier(0.5,0.1,0.4,0.9)_infinite]" />
            
            {/* Secondary Opposite Spinner */}
            <div className="absolute inset-2 border-[2px] border-transparent border-b-secondary rounded-full animate-[spin_1.2s_linear_infinite_reverse] opacity-70" />
        </div>

        {/* Center Static Point */}
        <div className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]" />
      </div>

      {/* Brand & Loading Label */}
      <div className="mt-12 flex flex-col items-center">
        {/* Animated letter tracking */}
        <div className="flex items-center gap-3 mb-2">
            <div className="h-[1px] w-4 bg-accent/20" />
            <span className="font-outfit text-[9px] uppercase tracking-[0.6em] font-black text-accent/40">
                Initializing
            </span>
            <div className="h-[1px] w-4 bg-accent/20" />
        </div>

        <div className="relative">
            <span className="font-syne text-xl font-extrabold text-accent tracking-tighter">
                Checkmate
            </span>
            {/* Small cyan accent dot */}
            <span className="absolute -right-3 bottom-1.5 w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" />
        </div>

        <p className="mt-4 font-outfit text-[11px] text-accent/30 font-medium tracking-wide italic">
            Synchronizing secure data...
        </p>
      </div>
    </div>
  );
}