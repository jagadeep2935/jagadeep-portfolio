import React, { useState, useEffect } from 'react';
import { Activity, Sparkles } from 'lucide-react';

export default function LoadingSequence({ onComplete }) {
  const [step, setStep] = useState(0);
  const stepsText = [
    "INITIALIZING PORTFOLIO...",
    "LOADING PROFILE",
    "LOADING PROJECTS",
    "LOADING DATA",
    "LOADING SYSTEMS",
    "JAGADEEP JALADI — SOFTWARE × DATA × PROBLEM SOLVING"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev < stepsText.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => onComplete(), 400);
          return prev;
        }
      });
    }, 280);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#090A0F] flex flex-col items-center justify-center p-6 bg-grid-pattern">
      <div className="max-w-lg w-full p-8 rounded-xl bg-[#121520] border border-[#00F5D4]/30 shadow-2xl flex flex-col items-center text-center space-y-6 relative overflow-hidden">
        
        {/* Glowing top line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent animate-pulse"></div>

        <div className="w-14 h-14 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/50 flex items-center justify-center text-[#00F5D4] shadow-[0_0_20px_rgba(0,245,212,0.2)]">
          <Activity size={26} className="animate-pulse" />
        </div>

        <div className="space-y-3 w-full">
          <span className="font-mono text-xs text-[#00F5D4] tracking-widest uppercase flex items-center justify-center gap-2 font-bold">
            <Sparkles size={14} />
            SYSTEM INITIALIZATION
          </span>
          
          <h2 className="font-mono text-sm sm:text-base text-slate-200 min-h-[48px] flex items-center justify-center font-semibold uppercase tracking-wider">
            {stepsText[step]}
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#00F5D4] via-[#00E5FF] to-[#6366F1] transition-all duration-200 ease-out"
            style={{ width: `${((step + 1) / stepsText.length) * 100}%` }}
          ></div>
        </div>

        <button
          onClick={onComplete}
          className="font-mono text-[10px] text-slate-400 hover:text-[#00F5D4] underline tracking-widest uppercase transition-colors"
        >
          [ CLICK OR PRESS ANY KEY TO SKIP ]
        </button>
      </div>
    </div>
  );
}
