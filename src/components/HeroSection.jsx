import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, Download, Mail, ExternalLink, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

export default function HeroSection() {
  const canvasRef = useRef(null);
  const [downloadNotification, setDownloadNotification] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Subtle data network particle simulation
    const particleCount = 80;
    const particles = [];
    const colors = ['#00F5D4', '#00E5FF', '#6366F1', '#38BDF8'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: colors[i % colors.length],
        label: i % 12 === 0 ? ['DATA', 'ML', 'REACT', 'PYTHON', 'SQL', 'POWER BI'][Math.floor(i / 12) % 6] : null
      });
    }

    let mouse = { x: canvas.width / 2, y: canvas.height / 2, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Coordinate grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            p.x += (dx / dist) * 0.8;
            p.y += (dy / dist) * 0.8;
          }
        }

        // Particle rendering
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.label) {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
          ctx.font = '600 9px monospace';
          ctx.fillText(p.label, p.x + 6, p.y + 3);
        }
      });

      // Subtle network connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j += 3) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 212, ${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleDownloadClick = () => {
    setDownloadNotification(true);
    setTimeout(() => setDownloadNotification(false), 4000);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden">
      
      {/* Background Interactive Data Canvas */}
      <div className="absolute inset-0 z-0 opacity-70">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Atmospheric Radial Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F5D4]/6 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#6366F1]/6 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Main Editorial Presentation (7 Columns) */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          {/* Concept Banner */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121520]/90 border border-[#00F5D4]/30 font-mono text-xs text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.12)]">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-ping"></span>
            <span className="font-semibold tracking-wide">PORTFOLIO & CASE STUDIES</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">DATA SCIENCE & SWE</span>
          </div>

          {/* Name & Tagline */}
          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[0.95]">
              JAGADEEP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#00F5D4]">
                JALADI
              </span>
            </h1>

            <div className="pt-2 space-y-1.5">
              <p className="font-heading font-bold text-xl sm:text-2xl text-[#00F5D4] tracking-wide">
                B.Tech Computer Science and Engineering @ LPU
              </p>
              <p className="font-mono text-xs sm:text-sm text-slate-400 font-medium">
                Focused on Data Science, Machine Learning, & Full-Stack Development
              </p>
            </div>
          </div>

          {/* Professional Introduction from CV */}
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed border-l-2 border-[#00F5D4]/50 pl-4 py-1">
            Undergraduate software developer at Lovely Professional University with an <strong>8.12 CGPA</strong> and strong mathematical roots (<strong>95.8% PCM</strong>). Passionate about turning complex datasets into actionable insights and engineering performant web applications with <strong>React</strong>, <strong>Tailwind CSS</strong>, <strong>Power BI</strong>, and <strong>Python</strong>.
          </p>

          {/* Required Action Buttons: View Projects, Download Resume, Contact Me */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            {/* 1. View Projects */}
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00F5D4] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5D4] text-black font-heading font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(0,245,212,0.35)] hover:scale-105"
            >
              VIEW PROJECTS
              <ArrowDownRight size={17} />
            </a>

            {/* 2. Download Resume (Actually downloads the attached CV PDF) */}
            <a
              href={personalDetails.resumeFile}
              download="Jagadeep_Jaladi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadClick}
              className="px-5 py-3.5 rounded-xl bg-[#121520] hover:bg-white/10 text-white font-mono text-xs font-bold border border-white/20 hover:border-[#00F5D4] transition-all duration-200 flex items-center gap-2 group shadow-sm"
            >
              <Download size={15} className="text-[#00F5D4] group-hover:translate-y-0.5 transition-transform" />
              DOWNLOAD RESUME
            </a>

            {/* 3. Contact Me */}
            <a
              href="#contact"
              className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-mono text-xs font-semibold border border-white/10 hover:border-white/25 transition-all flex items-center gap-2"
            >
              <Mail size={15} className="text-[#00E5FF]" />
              CONTACT ME
            </a>
          </div>

          {/* Social Links from CV */}
          <div className="pt-2 flex items-center gap-3">
            <span className="font-mono text-xs text-slate-500">PROFILES:</span>
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#121520] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00F5D4] hover:border-[#00F5D4]/40 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub: github.com/jagadeep2935"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#121520] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn: in/jagadeepjaladi"
            >
              <LinkedinIcon size={19} />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="w-10 h-10 rounded-lg bg-[#121520] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00F5D4] hover:border-[#00F5D4]/40 transition-colors"
              aria-label="Email Me"
              title={`Email: ${personalDetails.email}`}
            >
              <Mail size={19} />
            </a>
          </div>

          {/* Download Notification Banner */}
          {downloadNotification && (
            <div className="p-3.5 rounded-xl bg-[#00F5D4]/15 border border-[#00F5D4]/40 font-mono text-xs text-[#00F5D4] flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 size={16} />
              <span>Resume download started: <strong>Jagadeep_Jaladi_Resume.pdf</strong></span>
            </div>
          )}

        </div>

        {/* Clean Initials-Based Avatar & Profile Dossier (5 Columns) */}
        <div className="lg:col-span-5">
          <div className="lab-panel p-6 sm:p-7 rounded-2xl border border-white/15 space-y-6 relative shadow-2xl backdrop-blur-xl">
            
            {/* Top Identity Badge */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                {/* Clean Initials Monogram Badge */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0E131F] via-[#161B2E] to-[#1E2538] border-2 border-[#00F5D4]/50 flex items-center justify-center text-[#00F5D4] font-display font-black text-2xl tracking-tight shadow-[0_0_20px_rgba(0,245,212,0.25)]">
                    JJ
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-[#090A0F] shadow-sm" title="Active & Available"></span>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-lg text-white leading-tight">
                    Jagadeep Jaladi
                  </h2>
                  <p className="font-mono text-xs text-[#00F5D4] flex items-center gap-1">
                    <GraduationCap size={13} /> LPU B.Tech CSE (2024–Present)
                  </p>
                </div>
              </div>

              <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold tracking-wide">
                INTERN READY
              </span>
            </div>

            {/* Academic Fact Matrix from CV */}
            <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase">B.TECH CGPA</span>
                <span className="text-xl font-display font-bold text-[#00F5D4]">8.12</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">LPU Computer Science</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase">INTERMEDIATE PCM</span>
                <span className="text-xl font-display font-bold text-[#00E5FF]">95.8%</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Overall: 93.6%</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase">MATRICULATION</span>
                <span className="text-xl font-display font-bold text-[#6366F1]">93.3%</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Sri Chaitanya School</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <span className="text-[10px] text-slate-400 block uppercase">COMMUNITY IMPACT</span>
                <span className="text-xl font-display font-bold text-[#F59E0B]">40</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Residents Trained</span>
              </div>
            </div>

            {/* Core Competency Tags */}
            <div className="space-y-2 font-mono text-xs">
              <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                CORE TECHNICAL SPECIALIZATIONS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] text-[11px] font-medium">
                  Data Science & Analytics
                </span>
                <span className="px-2.5 py-1 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[11px] font-medium">
                  React & Tailwind UI/UX
                </span>
                <span className="px-2.5 py-1 rounded bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#6366F1] text-[11px] font-medium">
                  Machine Learning (Scikit-learn)
                </span>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-medium">
                  Power BI & DAX
                </span>
              </div>
            </div>

            {/* Contact Quick Strip */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#00F5D4]" />
                <span>Punjab / Andhra Pradesh, India</span>
              </div>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00F5D4] hover:underline flex items-center gap-1"
              >
                Connect <ExternalLink size={11} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
