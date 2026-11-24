import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Terminal, ArrowUpRight } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Community', href: '#community' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand with Monogram Initials Avatar */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#00F5D4] rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#121520] to-[#1E2336] border border-[#00F5D4]/40 flex items-center justify-center font-display font-black text-sm text-[#00F5D4] group-hover:border-[#00F5D4] group-hover:shadow-[0_0_15px_rgba(0,245,212,0.35)] transition-all">
            JJ
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-wider text-sm sm:text-base text-white group-hover:text-[#00F5D4] transition-colors leading-tight">
              JAGADEEP JALADI
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-tight flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse"></span>
              B.Tech CSE • LPU
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with Active Indicators */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#121520]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-xs px-3 py-1.5 rounded-full transition-all relative ${
                  isActive
                    ? 'text-[#00F5D4] font-semibold bg-[#00F5D4]/15 border border-[#00F5D4]/40 shadow-[0_0_12px_rgba(0,245,212,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalDetails.resumeFile}
            download="Jagadeep_Jaladi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs px-4 py-2 rounded-lg bg-gradient-to-r from-[#00F5D4]/20 to-[#00E5FF]/20 hover:from-[#00F5D4] hover:to-[#00E5FF] text-[#00F5D4] hover:text-black font-bold border border-[#00F5D4]/40 hover:border-transparent transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,245,212,0.15)] group"
          >
            <Download size={13} className="group-hover:translate-y-0.5 transition-transform" />
            RESUME PDF
          </a>

          <a
            href="#contact"
            className="font-mono text-xs px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/15 hover:border-white/30 transition-all flex items-center gap-1.5"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-[#121520] border border-white/10 text-slate-300 hover:text-[#00F5D4] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090A0F]/98 backdrop-blur-xl border-b border-white/15 px-4 pt-4 pb-6 space-y-3 transition-all animate-in fade-in duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-mono text-xs p-2.5 rounded-lg border text-center transition-all ${
                    isActive
                      ? 'bg-[#00F5D4]/15 border-[#00F5D4]/50 text-[#00F5D4] font-bold'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a
              href={personalDetails.resumeFile}
              download="Jagadeep_Jaladi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-[#00F5D4] text-black font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <Download size={14} /> DOWNLOAD RESUME
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-mono text-xs text-center font-medium"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
