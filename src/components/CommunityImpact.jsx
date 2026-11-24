import React from 'react';
import { communityEngagement } from '../data/portfolioData';
import { Users, ExternalLink, CheckCircle2, Calendar, Award } from 'lucide-react';

export default function CommunityImpact() {

  return (
    <section id="community" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00F5D4] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]"></span>
            COMMUNITY ENGAGEMENT • DIRECT FROM CV
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            COMMUNITY IMPACT
          </h2>
          <p className="font-sans text-base text-slate-400 max-w-2xl leading-relaxed">
            Translating cybersecurity awareness and digital safety into practical community empowerment.
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="lab-panel p-6 sm:p-10 rounded-3xl border border-white/15 space-y-8 relative overflow-hidden bg-gradient-to-r from-[#121520] via-[#0E131F] to-[#121520] shadow-2xl">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/40 text-[#00F5D4] font-bold uppercase tracking-wider">
                  SOCIAL ENGAGEMENT
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold flex items-center gap-1.5">
                  <Calendar size={12} className="text-[#00F5D4]" /> {communityEngagement.period}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                {communityEngagement.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[#00E5FF]">
                Door-to-Door Cybersecurity Awareness & Digital Safety Education
              </p>
            </div>

            {/* Direct Google Drive Certificate Link */}
            <div className="shrink-0">
              <a
                href={communityEngagement.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#00F5D4] hover:bg-[#00E5FF] text-black font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all hover:scale-105"
                title="View Community Development Program Certificate on Google Drive"
              >
                <Award size={16} /> VIEW CERTIFICATE DRIVE <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Metrics & Key Highlights Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Highlights (7 Columns) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs text-[#00F5D4] uppercase font-bold tracking-wider block">
                CORE INITIATIVE HIGHLIGHTS (FROM CV):
              </span>

              <div className="space-y-3">
                {communityEngagement.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 size={16} className="text-[#00F5D4] shrink-0 mt-0.5" />
                    <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Awareness Topics Strip */}
              <div className="pt-2 space-y-2">
                <span className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  SYLLABUS & AWARENESS DOMAINS COVERED:
                </span>
                <div className="flex flex-wrap gap-2">
                  {communityEngagement.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-3 py-1 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Card (5 Columns) */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#090A0F] border border-white/10 space-y-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00F5D4]/15 border border-[#00F5D4]/40 text-[#00F5D4]">
                  <Users size={32} />
                </div>

                <div className="space-y-1">
                  <span className="text-4xl sm:text-5xl font-display font-black text-white block">
                    40+
                  </span>
                  <span className="font-mono text-xs text-[#00F5D4] font-bold uppercase tracking-wider block">
                    LOCAL RESIDENTS REACHED
                  </span>
                  <p className="font-sans text-xs text-slate-400 max-w-xs mx-auto pt-1">
                    Direct door-to-door educational sessions followed by retention quizzes on password hygiene and phishing prevention.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                  <span>Knowledge Evaluation</span>
                  <strong className="text-emerald-400">Quiz Administered</strong>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
