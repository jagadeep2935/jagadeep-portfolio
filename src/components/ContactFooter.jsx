import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Mail, Phone, Send, Copy, Check, Terminal, FileText, ArrowUp, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link with pre-filled subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalDetails.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalDetails.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 bg-[#090A0F] relative border-t border-white/10 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Editorial Headline */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00F5D4] uppercase tracking-widest px-3 py-1 rounded-full bg-[#121520] border border-[#00F5D4]/30">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping"></span>
            GET IN TOUCH • READY FOR INTERNSHIP OPPORTUNITIES
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-none">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#00F5D4]">
              SOMETHING IMPACTFUL.
            </span>
          </h2>

          <p className="font-sans text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Interested in software engineering or data science internships? I am actively seeking opportunities to contribute to high-impact projects.
          </p>
        </div>

        {/* Contact Cards Grid: Email, Phone, LinkedIn, GitHub */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 1. Email Card */}
          <div className="lab-panel p-6 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between hover:border-[#00F5D4] transition-all">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#00F5D4]/15 border border-[#00F5D4]/30 flex items-center justify-center text-[#00F5D4]">
                <Mail size={20} />
              </div>
              <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">
                PRIMARY EMAIL
              </span>
              <a
                href={`mailto:${personalDetails.email}`}
                className="font-mono text-xs text-white hover:text-[#00F5D4] transition-colors break-all block font-semibold"
                title="Send Email"
              >
                {personalDetails.email}
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={`mailto:${personalDetails.email}`}
                className="font-mono text-[11px] text-[#00F5D4] font-bold hover:underline flex items-center gap-1"
              >
                OPEN MAILTO <ExternalLink size={11} />
              </a>
              <button
                onClick={handleCopyEmail}
                className="font-mono text-[10px] px-2 py-1 rounded bg-white/5 hover:bg-white/15 text-slate-300 transition-colors flex items-center gap-1"
              >
                {copiedEmail ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                {copiedEmail ? 'COPIED' : 'COPY'}
              </button>
            </div>
          </div>

          {/* 2. Phone / Mobile Card */}
          <div className="lab-panel p-6 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between hover:border-[#00E5FF] transition-all">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                <Phone size={20} />
              </div>
              <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">
                MOBILE PHONE
              </span>
              <a
                href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}
                className="font-mono text-xs text-white hover:text-[#00E5FF] transition-colors block font-semibold"
                title="Call Mobile"
              >
                {personalDetails.phone}
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}
                className="font-mono text-[11px] text-[#00E5FF] font-bold hover:underline flex items-center gap-1"
              >
                CALL NOW <ExternalLink size={11} />
              </a>
              <button
                onClick={handleCopyPhone}
                className="font-mono text-[10px] px-2 py-1 rounded bg-white/5 hover:bg-white/15 text-slate-300 transition-colors flex items-center gap-1"
              >
                {copiedPhone ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                {copiedPhone ? 'COPIED' : 'COPY'}
              </button>
            </div>
          </div>

          {/* 3. LinkedIn Card */}
          <div className="lab-panel p-6 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between hover:border-[#0077B5] transition-all">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#0077B5]/20 border border-[#0077B5]/40 flex items-center justify-center text-[#00E5FF]">
                <LinkedinIcon size={20} />
              </div>
              <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">
                LINKEDIN NETWORK
              </span>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white hover:text-[#00E5FF] transition-colors break-all block font-semibold"
              >
                in/jagadeepjaladi
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[#00E5FF] font-bold hover:underline flex items-center gap-1"
              >
                VISIT PROFILE <ExternalLink size={11} />
              </a>
              <span className="font-mono text-[10px] text-slate-500">OFFICIAL</span>
            </div>
          </div>

          {/* 4. GitHub Card */}
          <div className="lab-panel p-6 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between hover:border-[#6366F1] transition-all">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#6366F1]/20 border border-[#6366F1]/40 flex items-center justify-center text-[#6366F1]">
                <GithubIcon size={20} />
              </div>
              <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block">
                GITHUB REPOSITORIES
              </span>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white hover:text-[#00F5D4] transition-colors break-all block font-semibold"
              >
                github.com/jagadeep2935
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[#00F5D4] font-bold hover:underline flex items-center gap-1"
              >
                EXPLORE CODE <ExternalLink size={11} />
              </a>
              <span className="font-mono text-[10px] text-slate-500">VERIFIED</span>
            </div>
          </div>

        </div>

        {/* Interactive Direct Message Form */}
        <div className="max-w-2xl mx-auto">
          <div className="lab-panel p-8 sm:p-10 rounded-3xl border border-white/15 space-y-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
              <span className="text-[#00F5D4] font-bold flex items-center gap-2">
                <Send size={14} /> DIRECT RECRUITER TRANSMISSION
              </span>
              <span className="text-slate-400">DISPATCHES VIA MAILTO</span>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3 font-mono">
                <div className="w-12 h-12 rounded-full bg-[#00F5D4]/20 border border-[#00F5D4] text-[#00F5D4] mx-auto flex items-center justify-center">
                  <Check size={24} />
                </div>
                <h4 className="text-white font-bold text-lg">TRANSMISSION DISPATCHED</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your default email client was opened to transmit the message to <code>{personalDetails.email}</code>.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  className="text-xs text-[#00F5D4] underline font-bold pt-3 block mx-auto"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="text-slate-300 block mb-1 font-semibold">YOUR NAME / RECRUITER NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Technical Hiring Team"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-[#00F5D4] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-slate-300 block mb-1 font-semibold">YOUR EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-[#00F5D4] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-slate-300 block mb-1 font-semibold">INQUIRY / INTERNSHIP ROLE DETAILS</label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Describe the opportunity, role expectations, or technical questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090A0F] border border-white/15 text-white font-sans text-sm focus:outline-none focus:border-[#00F5D4] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00F5D4] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5D4] text-black font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:scale-[1.01]"
                >
                  <Send size={15} /> SEND INQUIRY VIA EMAIL
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Back to Top & Institutional Verification Footer Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-7 h-7 rounded-lg bg-[#121520] border border-[#00F5D4]/40 flex items-center justify-center font-display font-black text-xs text-[#00F5D4]">
              JJ
            </div>
            <div>
              <p className="text-white font-semibold">Jagadeep Jaladi • Lovely Professional University (LPU)</p>
              <p className="text-[11px] text-slate-500">B.Tech Computer Science and Engineering (2024–Present)</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalDetails.resumeFile}
              download="Jagadeep_Jaladi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-[#00F5D4] transition-colors flex items-center gap-1"
            >
              <FileText size={13} /> Resume PDF
            </a>

            <button
              onClick={scrollToTop}
              className="px-3 py-2 rounded-lg bg-[#121520] border border-white/10 hover:border-[#00F5D4] text-slate-300 hover:text-[#00F5D4] transition-all flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
