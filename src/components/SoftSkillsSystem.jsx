import React, { useState } from 'react';
import { softSkills } from '../data/portfolioData';
import { Sparkles, Sliders, Users, Clock, Flame } from 'lucide-react';

export default function SoftSkillsSystem() {
  const [activeSkill, setActiveSkill] = useState(softSkills[0]);

  const icons = {
    Adaptability: <Sliders size={18} className="text-[#00F5D4]" />,
    Teamwork: <Users size={18} className="text-[#00E5FF]" />,
    "Time Management": <Clock size={18} className="text-[#6366F1]" />,
    "Self-Motivation": <Flame size={18} className="text-[#F59E0B]" />
  };

  return (
    <section id="skills-system" className="py-20 bg-[#090A0F] relative border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>
            SECTION 08 • BEYOND THE CODE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            CORE COMPETENCIES & SOFT SKILLS
          </h2>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((skill) => {
            const isSelected = activeSkill.name === skill.name;
            return (
              <button
                key={skill.name}
                onClick={() => setActiveSkill(skill)}
                data-cursor="INSPECT"
                className={`p-5 rounded-xl text-left border transition-all space-y-3 ${
                  isSelected
                    ? 'bg-[#121520] border-[#00F5D4] text-white shadow-[0_0_20px_rgba(0,245,212,0.15)] scale-[1.02]'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {icons[skill.name]}
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold uppercase">
                    {skill.label}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white">
                  {skill.name}
                </h3>

                <p className="font-sans text-xs text-slate-300">
                  {skill.desc}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
