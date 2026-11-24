import React, { useState } from 'react';
import { editorialRevealSteps, personalDetails } from '../data/portfolioData';
import { ChevronRight, Sparkles, CheckCircle2, GraduationCap, Code2, Database, BrainCircuit, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = editorialRevealSteps[activeStepIndex];

  const pillarIcons = [
    <BrainCircuit size={18} className="text-[#00F5D4]" />,
    <Code2 size={18} className="text-[#00E5FF]" />,
    <Database size={18} className="text-[#6366F1]" />,
    <HeartHandshake size={18} className="text-[#EC4899]" />
  ];

  return (
    <section id="about" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00F5D4] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]"></span>
            ABOUT ME • ACADEMIC & TECHNICAL FOUNDATION
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            WHO IS JAGADEEP?
          </h2>
          <p className="font-sans text-base text-slate-400 max-w-2xl leading-relaxed">
            A computer science undergraduate focused on the synergy between reliable software engineering and empirical data science.
          </p>
        </div>

        {/* Core Profile Overview Card */}
        <div className="lab-panel p-6 sm:p-8 rounded-2xl border border-white/15 bg-gradient-to-r from-[#121520] to-[#0A0D14] space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs text-[#00F5D4] font-semibold uppercase tracking-wider">
                PROFESSIONAL SUMMARY & OBJECTIVE
              </span>
              <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed">
                I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at <strong>Lovely Professional University (CGPA: 8.12)</strong>. My primary technical focus centers on <strong>Data Science, exploratory data analysis, and machine learning</strong>, paired with solid practical competence in <strong>full-stack web development</strong> using React, Vite, and Tailwind CSS.
              </p>
              <p className="font-sans text-sm text-slate-400 leading-relaxed">
                Rather than treating software and data as separate disciplines, I leverage my strong quantitative foundations (<strong>95.8% PCM</strong> in Intermediate) to architect clean frontends, build interactive analytical dashboards in Power BI, and train predictive models in Scikit-learn.
              </p>
            </div>

            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[10px] uppercase font-bold">DEGREE & UNIVERSITY</span>
                <p className="text-white font-semibold">B.Tech CSE (Jul' 24 – Present)</p>
                <p className="text-[#00F5D4]">Lovely Professional University, Punjab</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-slate-400 text-[10px] uppercase font-bold">CORE DOMAINS</span>
                <p className="text-white font-semibold">Data Science & ML • Web Dev</p>
                <p className="text-[#00E5FF]">React, Power BI, Python, SQL</p>
              </div>
            </div>

          </div>
        </div>

        {/* Progressive Perspective Reveal Tabs & Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Progressive Reveal Tabs (5 Columns) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-xs text-slate-400 uppercase font-semibold block mb-1">
              EXPLORE MY ENGINEERING MINDSET:
            </span>
            {editorialRevealSteps.map((step, idx) => {
              const isSelected = idx === activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all border flex items-center justify-between group ${
                    isSelected 
                      ? 'bg-[#121520] border-[#00F5D4] text-white shadow-[0_0_25px_rgba(0,245,212,0.15)] scale-[1.01]' 
                      : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                      isSelected ? 'bg-[#00F5D4] text-black shadow-sm' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {step.number}
                    </span>
                    <div>
                      <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wide block">
                        {step.label}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={18} className={`transition-transform shrink-0 ${isSelected ? 'text-[#00F5D4] translate-x-1' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Reveal Display Card (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="lab-panel p-7 sm:p-8 rounded-2xl border border-white/15 space-y-6 relative shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-[#00F5D4] uppercase tracking-widest font-bold flex items-center gap-2">
                  <Sparkles size={14} /> PERSPECTIVE {activeStep.number} OF 04
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  JAGADEEP JALADI
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {pillarIcons[activeStepIndex]}
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {activeStep.label}
                </h3>
              </div>

              <div className="p-5 rounded-xl bg-[#090A0F] border border-white/10 text-slate-200 font-sans text-sm sm:text-base leading-relaxed">
                "{activeStep.description}"
              </div>

              {/* Verified Academic & Dev Foundations */}
              <div className="pt-2 space-y-3 border-t border-white/10">
                <h4 className="font-mono text-xs text-[#00E5FF] uppercase font-bold tracking-wider">
                  VERIFIED CV HIGHLIGHTS:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-slate-300">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <CheckCircle2 size={15} className="text-[#00F5D4] shrink-0" />
                    <span>LPU B.Tech CSE (CGPA: 8.12)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <CheckCircle2 size={15} className="text-[#00E5FF] shrink-0" />
                    <span>Intermediate PCM: 95.8%</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <CheckCircle2 size={15} className="text-[#6366F1] shrink-0" />
                    <span>Telemedicine Frontend UI/UX (React)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <CheckCircle2 size={15} className="text-[#F59E0B] shrink-0" />
                    <span>Power BI Dashboard: 260 Cities</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
