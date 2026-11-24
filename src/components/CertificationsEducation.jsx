import React from 'react';
import { certificatesList } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export default function CertificationsEducation() {
  return (
    <section id="certifications" className="py-24 bg-[#090A0F] relative border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00F5D4] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]"></span>
            CREDENTIAL VERIFICATION • STRICTLY FROM CV
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            VERIFIED CERTIFICATES
          </h2>
          <p className="font-sans text-base text-slate-400 max-w-2xl leading-relaxed">
            All certifications earned and documented in my CV. Each credential links directly to its verified certificate folder on Google Drive.
          </p>
        </div>

        {/* Credentials Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesList.map((cert, idx) => (
            <div
              key={idx}
              className="lab-panel p-6 rounded-3xl border border-white/10 hover:border-[#00F5D4] transition-all duration-300 hover:-translate-y-2 group space-y-5 flex flex-col justify-between bg-gradient-to-b from-[#121520] to-[#0A0D14] shadow-xl"
            >
              <div className="space-y-4">
                {/* Top Badge & Date */}
                <div className="flex items-center justify-between">
                  <span 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border font-bold"
                    style={{ 
                      borderColor: `${cert.accent}50`, 
                      color: cert.accent, 
                      backgroundColor: `${cert.accent}15` 
                    }}
                  >
                    <Award size={24} />
                  </span>

                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-slate-300 font-semibold border border-white/10 flex items-center gap-1">
                    <Calendar size={11} className="text-[#00F5D4]" /> {cert.date}
                  </span>
                </div>

                {/* Certificate Title */}
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#00F5D4] block mb-1">
                    {cert.badge}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00F5D4] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                </div>

                {/* Issuer */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                  <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">
                    ISSUING ORGANIZATION:
                  </span>
                  <span className="font-sans text-xs font-semibold text-slate-200 block">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              {/* Verified Verification Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-emerald-400 text-[11px] flex items-center gap-1 font-semibold">
                  <ShieldCheck size={13} /> VERIFIED
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#00F5D4]/15 hover:bg-[#00F5D4] text-[#00F5D4] hover:text-black font-bold transition-all flex items-center gap-1.5 border border-[#00F5D4]/40 hover:border-transparent"
                  title="View Certificate on Google Drive"
                >
                  VIEW DRIVE <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
