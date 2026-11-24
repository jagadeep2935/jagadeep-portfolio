import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Download, Eye, X, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ResumeSection({ isModalOpen, setIsModalOpen }) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    // Triggers actual download
    const link = document.createElement('a');
    link.href = personalDetails.resumeFile;
    link.download = 'Jagadeep_Jaladi_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <>
      <section id="resume-experience" className="py-20 bg-[#090A0F] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="lab-panel p-8 sm:p-12 rounded-3xl border border-white/15 bg-gradient-to-r from-[#121520] via-[#090A0F] to-[#121520] flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            
            {/* Left Narrative */}
            <div className="space-y-3 max-w-2xl text-left">
              <span className="font-mono text-xs text-[#00F5D4] uppercase tracking-widest font-bold">
                CURRICULUM VITAE & VERIFIED PROFILE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
                NEED MY OFFICIAL CV?
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed">
                Download the complete, official single-page curriculum vitae covering my B.Tech CSE coursework at LPU, technical skills, verified GitHub projects, and certifications.
              </p>
            </div>

            {/* Right Buttons: Working Direct Download & Preview */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={personalDetails.resumeFile}
                download="Jagadeep_Jaladi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownload}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#00F5D4] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5D4] text-black font-mono text-xs font-black tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(0,245,212,0.35)] hover:scale-105"
              >
                <Download size={16} /> DOWNLOAD RESUME PDF
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-4 rounded-xl bg-[#121520] hover:bg-white/10 text-white font-mono text-xs font-bold border border-white/20 hover:border-[#00F5D4] transition-all flex items-center gap-2"
              >
                <Eye size={16} className="text-[#00F5D4]" /> PREVIEW RESUME
              </button>
            </div>

          </div>

          {downloadSuccess && (
            <div className="mt-4 p-4 rounded-xl bg-[#00F5D4]/15 border border-[#00F5D4]/40 font-mono text-xs text-[#00F5D4] flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 size={16} />
              <span>Official resume PDF downloaded: <strong>Jagadeep_Jaladi_Resume.pdf</strong></span>
            </div>
          )}

        </div>
      </section>

      {/* Embedded Resume Viewer Modal */}
      {isModalOpen && (
        <div id="resume-modal" className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#090A0F] max-w-4xl w-full rounded-2xl border border-white/20 p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Close resume modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-[#00F5D4] uppercase font-bold tracking-wider">
                  RESUME PREVIEW MODE
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                  JAGADEEP JALADI — CURRICULUM VITAE
                </h3>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href={personalDetails.resumeFile}
                  download="Jagadeep_Jaladi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#00F5D4] text-black font-mono text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <Download size={14} /> DOWNLOAD PDF
                </a>
                <a
                  href={personalDetails.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/10 text-white font-mono text-xs font-bold flex items-center gap-1.5 border border-white/15 hover:bg-white/15"
                >
                  OPEN IN TAB <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Embedded Resume Preview Container */}
            <div className="bg-[#121520] p-6 sm:p-8 rounded-xl border border-white/10 space-y-6 font-sans text-xs text-slate-300">
              
              {/* Header Details */}
              <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                <div>
                  <h4 className="font-display font-bold text-2xl text-white">{personalDetails.name}</h4>
                  <p className="font-mono text-xs text-[#00F5D4]">{personalDetails.degree}</p>
                  <p className="font-sans text-xs text-slate-400">{personalDetails.institution}</p>
                </div>
                <div className="font-mono text-left sm:text-right text-[11px] text-slate-400 space-y-0.5">
                  <p>Email: <strong className="text-slate-200">{personalDetails.email}</strong></p>
                  <p>Mobile: <strong className="text-slate-200">{personalDetails.phone}</strong></p>
                  <p>LinkedIn: <strong className="text-[#00F5D4]">{personalDetails.linkedin}</strong></p>
                  <p>GitHub: <strong className="text-[#00E5FF]">{personalDetails.github}</strong></p>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1">
                <h5 className="font-mono text-xs text-[#00F5D4] uppercase font-bold">OBJECTIVE & PROFILE</h5>
                <p className="leading-relaxed text-slate-300">
                  {personalDetails.bioShort}
                </p>
              </div>

              {/* Education */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <h5 className="font-mono text-xs text-[#00E5FF] uppercase font-bold">EDUCATION</h5>
                <div className="space-y-2 font-mono text-[11px]">
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                    <span><strong>Lovely Professional University</strong> — B.Tech CSE (Jul' 24 – Present)</span>
                    <strong className="text-[#00F5D4]">CGPA: 8.12</strong>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                    <span><strong>Sri Chaitanya College of Education</strong> — Intermediate (Jun' 22 – May' 24)</span>
                    <strong className="text-[#00E5FF]">PCM: 95.8% | Overall: 93.6%</strong>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                    <span><strong>Sri Chaitanya Techno School</strong> — Matriculation (Jun' 21 – May' 22)</span>
                    <strong className="text-slate-200">93.3%</strong>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <h5 className="font-mono text-xs text-[#6366F1] uppercase font-bold">PROJECTS</h5>
                <div className="space-y-3 font-mono text-[11px]">
                  <div className="bg-white/5 p-3 rounded space-y-1">
                    <div className="flex justify-between text-white font-bold">
                      <span>Aura-Telemedicine portal (Jul' 26)</span>
                      <span className="text-[#00F5D4]">React, Vite, Tailwind CSS, Express, MongoDB, Gemini</span>
                    </div>
                    <p className="font-sans text-slate-300 text-xs">Full-stack telemedicine application (team of 3); lead frontend UI/UX in React (Vite) & Tailwind; Axios API integration.</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded space-y-1">
                    <div className="flex justify-between text-white font-bold">
                      <span>Air Pollution Analysis Dashboard (May' 26)</span>
                      <span className="text-[#00E5FF]">Power BI, DAX, Data Cleaning & Visualization</span>
                    </div>
                    <p className="font-sans text-slate-300 text-xs">Analyzed air-quality across 260 cities, 498 monitoring stations, and 7 pollutants using custom DAX KPIs and geospatial visuals.</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded space-y-1">
                    <div className="flex justify-between text-white font-bold">
                      <span>E-Commerce Customer Analysis & Prediction (Jan' 26)</span>
                      <span className="text-[#6366F1]">Python, Pandas, NumPy, Matplotlib, Scikit-learn</span>
                    </div>
                    <p className="font-sans text-slate-300 text-xs">Feature engineering (customer-lifetime duration), Linear Regression on 80:20 train-test split, evaluated with MAE, MSE, RMSE, R².</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
