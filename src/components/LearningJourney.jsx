import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';

export default function LearningJourney() {
  return (
    <section id="education" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>
            ACADEMIC PEDIGREE • STRICTLY FROM CV
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            EDUCATION & QUALIFICATIONS
          </h2>
          <p className="font-sans text-base text-slate-400 max-w-2xl leading-relaxed">
            All educational institutions, degrees, and verified percentages/CGPA directly extracted from my CV, with explicit distinction between PCM and overall Intermediate marks.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className={`lab-panel p-6 sm:p-8 rounded-3xl border transition-all space-y-6 ${
                edu.isPrimary
                  ? 'border-[#00F5D4]/40 bg-[#121520]/95 shadow-[0_0_30px_rgba(0,245,212,0.1)]'
                  : 'border-white/10 bg-[#0E131F]/90'
              }`}
            >
              {/* Header: Institution, Location, and Period */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5 font-semibold">
                      <Calendar size={12} className="text-[#00F5D4]" /> {edu.period}
                    </span>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#00E5FF]" /> {edu.location}
                    </span>
                    {edu.isPrimary && (
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/40 text-[#00F5D4] font-bold">
                        CURRENT ENROLLMENT
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                    {edu.institution}
                  </h3>

                  <div className="font-heading font-semibold text-base sm:text-lg text-slate-300 flex items-center gap-2">
                    <GraduationCap size={18} className="text-[#00F5D4]" />
                    <span>{edu.degree}</span>
                    {edu.field && <span className="text-slate-400">• {edu.field}</span>}
                  </div>
                </div>

                {/* Score / Grade Badges */}
                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
                  {edu.scoreValue && (
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#00F5D4]/20 to-transparent border border-[#00F5D4]/40 text-center md:text-right min-w-[140px]">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">
                        {edu.scoreType}
                      </span>
                      <span className="text-3xl font-display font-extrabold text-[#00F5D4]">
                        {edu.scoreValue}
                      </span>
                    </div>
                  )}

                  {/* Explicit distinction for Intermediate PCM vs Overall */}
                  {edu.pcmPercentage && (
                    <div className="flex items-center gap-2">
                      <div className="p-3 rounded-2xl bg-[#00E5FF]/15 border border-[#00E5FF]/40 text-center min-w-[130px]">
                        <span className="text-[10px] font-mono text-slate-300 block uppercase font-bold">
                          PCM PERCENTAGE
                        </span>
                        <span className="text-2xl font-display font-extrabold text-[#00E5FF]">
                          {edu.pcmPercentage}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 block">Physics, Chem, Math</span>
                      </div>

                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center min-w-[130px]">
                        <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">
                          OVERALL PERCENTAGE
                        </span>
                        <span className="text-2xl font-display font-extrabold text-white">
                          {edu.overallPercentage}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 block">All Intermediate Subjects</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Details & Highlights */}
              <div className="space-y-2.5 font-mono text-xs">
                {edu.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-slate-300">
                    <CheckCircle2 size={15} className="text-[#00F5D4] shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-slate-300">{detail}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
