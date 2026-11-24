import React, { useState } from 'react';
import { thinkingPipeline } from '../data/portfolioData';
import { Cpu, ArrowRight, RefreshCw, CheckCircle } from 'lucide-react';

export default function HowIThink() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = thinkingPipeline[activeStepIndex];

  return (
    <section id="thinking" className="py-24 bg-[#090A0F] relative border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00F5D4] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]"></span>
            SECTION 04 • HOW I SOLVE PROBLEMS
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            HOW I THINK
          </h2>
          <p className="font-sans text-base text-slate-400 max-w-2xl">
            An interactive 6-stage problem-solving sequence demonstrating how raw chaotic inputs are decomposed, tested, built, and optimized into clean code systems.
          </p>
        </div>

        {/* Pipeline Sequence Bar */}
        <div className="overflow-x-auto pb-4 border-b border-white/10">
          <div className="flex items-center min-w-[700px] justify-between gap-2">
            {thinkingPipeline.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  data-cursor="PHASE"
                  className={`flex flex-col items-center p-3 rounded-lg border transition-all ${
                    isActive 
                      ? 'bg-[#121520] border-[#00F5D4] text-[#00F5D4] scale-105 shadow-[0_0_20px_rgba(0,245,212,0.2)] font-bold' 
                      : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="font-mono text-xs font-bold">{step.number}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider mt-1">{step.stage}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Phase Visual Simulation Display */}
        <div className="lab-panel p-8 rounded-2xl border border-white/15 space-y-6 max-w-4xl mx-auto shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
            <span className="text-[#00F5D4] font-bold uppercase tracking-widest flex items-center gap-2">
              <Cpu size={16} /> PHASE {activeStep.number} — {activeStep.stage}
            </span>
            <span className="text-slate-400">STATE: {activeStep.visualState.toUpperCase()}</span>
          </div>

          <div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              {activeStep.title}
            </h3>
            <p className="font-sans text-base text-slate-300 mt-3 leading-relaxed bg-[#090A0F] p-5 rounded-lg border border-white/10">
              "{activeStep.description}"
            </p>
          </div>

          {/* Interactive Node Matrix Visualizer representing phase state */}
          <div className="h-36 bg-[#121520] rounded-lg border border-white/10 p-4 relative flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 320 120">
              {activeStep.visualState === 'chaotic' && (
                <>
                  <circle cx="50" cy="30" r="8" fill="#EC4899" />
                  <circle cx="120" cy="90" r="10" fill="#F59E0B" />
                  <circle cx="210" cy="40" r="7" fill="#6366F1" />
                  <circle cx="280" cy="80" r="9" fill="#00E5FF" />
                  <line x1="50" y1="30" x2="120" y2="90" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
                </>
              )}
              {activeStep.visualState === 'grouped' && (
                <>
                  <rect x="30" y="20" width="80" height="80" rx="8" fill="rgba(0,245,212,0.1)" stroke="#00F5D4" strokeDasharray="4 4" />
                  <rect x="190" y="20" width="80" height="80" rx="8" fill="rgba(99,102,241,0.1)" stroke="#6366F1" strokeDasharray="4 4" />
                  <circle cx="70" cy="60" r="8" fill="#00F5D4" />
                  <circle cx="230" cy="60" r="8" fill="#6366F1" />
                </>
              )}
              {activeStep.visualState === 'exploring' && (
                <>
                  <line x1="40" y1="60" x2="160" y2="60" stroke="#00E5FF" strokeWidth="2" />
                  <line x1="160" y1="60" x2="280" y2="30" stroke="#00E5FF" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="160" y1="60" x2="280" y2="90" stroke="#6366F1" strokeWidth="2" />
                  <circle cx="160" cy="60" r="9" fill="#00E5FF" />
                </>
              )}
              {activeStep.visualState === 'connected' && (
                <>
                  <line x1="40" y1="60" x2="140" y2="60" stroke="#00F5D4" strokeWidth="2" />
                  <line x1="140" y1="60" x2="240" y2="60" stroke="#00F5D4" strokeWidth="2" />
                  <circle cx="40" cy="60" r="9" fill="#00F5D4" />
                  <circle cx="140" cy="60" r="9" fill="#00F5D4" />
                  <circle cx="240" cy="60" r="9" fill="#00F5D4" />
                </>
              )}
              {activeStep.visualState === 'testing' && (
                <>
                  <line x1="40" y1="60" x2="160" y2="60" stroke="#00F5D4" strokeWidth="2" />
                  <line x1="160" y1="60" x2="280" y2="60" stroke="#EC4899" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="280" cy="60" r="9" fill="#EC4899" />
                  <text x="260" y="30" fill="#EC4899" fontSize="10" fontFamily="JetBrains Mono">EDGE TEST</text>
                </>
              )}
              {activeStep.visualState === 'optimized' && (
                <>
                  <line x1="30" y1="60" x2="290" y2="60" stroke="#00F5D4" strokeWidth="3" />
                  <circle cx="80" cy="60" r="8" fill="#00F5D4" />
                  <circle cx="160" cy="60" r="8" fill="#00F5D4" />
                  <circle cx="240" cy="60" r="8" fill="#00F5D4" />
                  <text x="110" y="35" fill="#00F5D4" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">OPTIMIZED MATRIX</text>
                </>
              )}
            </svg>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-xs">
            <button
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex(prev => prev - 1)}
              className="px-4 py-2 rounded bg-white/5 border border-white/10 text-slate-300 hover:text-white disabled:opacity-30"
            >
              ← PREVIOUS STEP
            </button>
            <button
              disabled={activeStepIndex === thinkingPipeline.length - 1}
              onClick={() => setActiveStepIndex(prev => prev + 1)}
              className="px-4 py-2 rounded bg-[#00F5D4] text-black font-bold hover:bg-[#00E5FF] disabled:opacity-30"
            >
              NEXT STEP →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
