import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Activity, Database, Cpu, Sparkles, CheckCircle2, Users, Calendar } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

// --- WORLD 1: AURA TELEMEDICINE INTERACTIVE ARCHITECTURE SIMULATOR ---
function AuraTelemedicineInteractive() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: '01. PATIENT PORTAL', desc: 'Patient onboarding, profiles, health history input, and initial triage interface.', icon: '👤', tag: 'UI/UX React' },
    { label: '02. DOCTOR DISCOVERY', desc: 'Specialty search, doctor availability filtering, and profile credential viewing.', icon: '🔍', tag: 'Vite & Tailwind' },
    { label: '03. APPOINTMENT BOOKING', desc: 'Real-time slot scheduling, consultation reservations, and automated confirmation.', icon: '📅', tag: 'Axios REST API' },
    { label: '04. CLINICAL CONSULTATION', desc: 'Doctor and patient dashboards for ongoing care, appointment tracking, and notes.', icon: '🩺', tag: 'Role-Based Dashboards' },
    { label: '05. AI ASSISTANT (GEMINI)', desc: 'AI-powered preliminary medical assistance powered by Gemini 2.5 Flash, integrated by the team.', icon: '✨', tag: 'Gemini 2.5 Flash' }
  ];

  return (
    <div className="bg-[#090A0F] p-5 sm:p-6 rounded-2xl border border-[#00F5D4]/40 space-y-5 font-mono text-xs shadow-inner">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2 text-[#00F5D4] font-bold">
          <Activity size={16} /> SYSTEM FLOW ARCHITECTURE (AURA TELEMED)
        </div>
        <span className="text-[10px] text-slate-300 bg-[#00F5D4]/10 px-2.5 py-1 rounded-full border border-[#00F5D4]/30 font-semibold">
          TEAM OF THREE • FRONTEND UI/UX LEAD
        </span>
      </div>

      {/* Step navigation tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-xl text-center border transition-all ${
              activeStep === idx
                ? 'bg-[#00F5D4]/15 border-[#00F5D4] text-[#00F5D4] font-bold shadow-[0_0_15px_rgba(0,245,212,0.25)] scale-[1.02]'
                : 'bg-[#121520] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <div className="text-xl mb-1">{s.icon}</div>
            <div className="text-[10px] uppercase font-bold tracking-tight truncate">{s.label}</div>
          </button>
        ))}
      </div>

      {/* Active step explanation */}
      <div className="p-4 rounded-xl bg-[#121520] border border-white/10 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[#00F5D4] font-bold uppercase">{steps[activeStep].label}</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
            {steps[activeStep].tag}
          </span>
        </div>
        <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
          {steps[activeStep].desc}
        </p>
      </div>
    </div>
  );
}

// --- WORLD 2: AIR POLLUTION POWER BI TELEMETRY SIMULATOR ---
function AirPollutionInteractive() {
  const [activePollutant, setActivePollutant] = useState('PM2.5');

  const cityData = {
    'PM2.5': [
      { name: 'Delhi NCR', val: 92, status: 'Severe' },
      { name: 'Kanpur', val: 84, status: 'Poor' },
      { name: 'Patna', val: 78, status: 'Poor' },
      { name: 'Lucknow', val: 71, status: 'Moderate' },
      { name: 'Mumbai', val: 54, status: 'Moderate' },
      { name: 'Bengaluru', val: 36, status: 'Satisfactory' }
    ],
    'NO2': [
      { name: 'Delhi NCR', val: 81, status: 'Poor' },
      { name: 'Kolkata', val: 75, status: 'Moderate' },
      { name: 'Mumbai', val: 68, status: 'Moderate' },
      { name: 'Ahmedabad', val: 59, status: 'Moderate' },
      { name: 'Chennai', val: 42, status: 'Satisfactory' },
      { name: 'Hyderabad', val: 38, status: 'Satisfactory' }
    ],
    'SO2': [
      { name: 'Singrauli', val: 88, status: 'High' },
      { name: 'Chandrapur', val: 72, status: 'Moderate' },
      { name: 'Korba', val: 65, status: 'Moderate' },
      { name: 'Dhanbad', val: 58, status: 'Moderate' },
      { name: 'Visakhapatnam', val: 41, status: 'Satisfactory' },
      { name: 'Nagpur', val: 33, status: 'Good' }
    ]
  };

  const currentDataset = cityData[activePollutant] || cityData['PM2.5'];

  return (
    <div className="bg-[#090A0F] p-5 sm:p-6 rounded-2xl border border-[#00E5FF]/40 space-y-5 font-mono text-xs shadow-inner">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2 text-[#00E5FF] font-bold">
          <Database size={16} /> POWER BI MULTI-CITY TELEMETRY (260 CITIES, 498 STATIONS)
        </div>
        <span className="text-[10px] text-slate-300 bg-[#00E5FF]/10 px-2.5 py-1 rounded-full border border-[#00E5FF]/30 font-semibold">
          DAX MEASURES & GEOSPATIAL VISUALS
        </span>
      </div>

      {/* Prominent dataset scale figures directly from CV */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-[#121520] border border-white/10 text-center">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#00E5FF] block">260</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase">Cities Analyzed</span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#121520] border border-white/10 text-center">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#00F5D4] block">498</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase">Stations Monitored</span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#121520] border border-white/10 text-center">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#6366F1] block">7</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase">Pollutant Types</span>
        </div>
      </div>

      {/* Pollutant selector */}
      <div className="flex items-center gap-2">
        <span className="text-slate-400 text-[11px]">SELECT POLLUTANT:</span>
        {['PM2.5', 'NO2', 'SO2'].map(pol => (
          <button
            key={pol}
            onClick={() => setActivePollutant(pol)}
            className={`px-3 py-1 rounded-lg border font-bold transition-all ${
              activePollutant === pol
                ? 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF]'
                : 'bg-[#121520] border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {pol}
          </button>
        ))}
      </div>

      {/* Interactive Bar Chart Simulation */}
      <div className="space-y-2 pt-1">
        <div className="text-[11px] text-slate-400 flex justify-between">
          <span>CITY BENCHMARK EXPOSURE ({activePollutant})</span>
          <span>DAX EXPOSURE INDEX</span>
        </div>

        <div className="space-y-2">
          {currentDataset.map(city => (
            <div key={city.name} className="flex items-center gap-3">
              <span className="w-24 text-[11px] text-slate-300 font-medium truncate">{city.name}</span>
              <div className="flex-1 h-3.5 bg-[#121520] rounded-full overflow-hidden border border-white/10 p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00E5FF]/50 to-[#00E5FF] transition-all duration-500"
                  style={{ width: `${city.val}%` }}
                ></div>
              </div>
              <span className="w-10 text-right text-[11px] text-[#00E5FF] font-bold">{city.val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-white/10">
        <span>Identified city rankings, dominant pollutants & hotspots</span>
        <span className="text-[#00E5FF]">DAX KPI & Slicers Validated</span>
      </div>
    </div>
  );
}

// --- WORLD 3: E-COMMERCE CUSTOMER SPENDING REGRESSION SIMULATOR ---
function EcommerceMLInteractive() {
  const [splitRatio, setSplitRatio] = useState(80);

  return (
    <div className="bg-[#090A0F] p-5 sm:p-6 rounded-2xl border border-[#6366F1]/40 space-y-5 font-mono text-xs shadow-inner">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2 text-[#6366F1] font-bold">
          <Cpu size={16} /> SCIKIT-LEARN LINEAR REGRESSION PIPELINE
        </div>
        <span className="text-[10px] text-slate-300 bg-[#6366F1]/10 px-2.5 py-1 rounded-full border border-[#6366F1]/30 font-semibold">
          80:20 TRAIN-TEST SPLIT & FEATURE ENGINEERING
        </span>
      </div>

      {/* Feature Engineering & Pipeline Steps from CV */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px]">
        <div className="p-2.5 rounded-lg bg-[#121520] border border-white/10">
          <span className="text-[#00F5D4] font-bold block">1. DATA CLEANING</span>
          <span className="text-slate-400">Handled missing values</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#121520] border border-white/10">
          <span className="text-[#00E5FF] font-bold block">2. DATE ENCODING</span>
          <span className="text-slate-400">Parsed timestamps</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#121520] border border-white/10">
          <span className="text-[#6366F1] font-bold block">3. FEATURE ENG.</span>
          <span className="text-slate-400">Customer lifetime</span>
        </div>
        <div className="p-2.5 rounded-lg bg-[#121520] border border-white/10">
          <span className="text-[#F59E0B] font-bold block">4. REGRESSION</span>
          <span className="text-slate-400">Spending prediction</span>
        </div>
      </div>

      {/* Train-Test Split Interactive Slider */}
      <div className="p-4 rounded-xl bg-[#121520] border border-white/10 space-y-2">
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-[#6366F1] font-bold">TRAIN SET: {splitRatio}%</span>
          <span className="text-slate-400">CV Benchmark: 80%</span>
          <span className="text-[#00F5D4] font-bold">TEST SET: {100 - splitRatio}%</span>
        </div>
        <input 
          type="range" 
          min="60" 
          max="90" 
          step="5" 
          value={splitRatio} 
          onChange={(e) => setSplitRatio(Number(e.target.value))}
          className="w-full accent-[#6366F1] cursor-pointer"
        />
      </div>

      {/* Evaluation Metrics from CV: MAE, MSE, RMSE, R² */}
      <div>
        <span className="text-slate-400 text-[10px] uppercase font-bold block mb-2">
          MODEL EVALUATION METRICS (FROM CV):
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
          <div className="p-3 bg-[#121520] rounded-xl border border-white/10">
            <span className="text-[10px] text-slate-400 block font-bold">MAE</span>
            <span className="text-base font-display font-bold text-white">Evaluated</span>
            <span className="text-[9px] text-slate-500 block">Mean Absolute Error</span>
          </div>
          <div className="p-3 bg-[#121520] rounded-xl border border-white/10">
            <span className="text-[10px] text-slate-400 block font-bold">MSE</span>
            <span className="text-base font-display font-bold text-white">Evaluated</span>
            <span className="text-[9px] text-slate-500 block">Mean Squared Error</span>
          </div>
          <div className="p-3 bg-[#121520] rounded-xl border border-white/10">
            <span className="text-[10px] text-slate-400 block font-bold">RMSE</span>
            <span className="text-base font-display font-bold text-white">Evaluated</span>
            <span className="text-[9px] text-slate-500 block">Root Mean Squared</span>
          </div>
          <div className="p-3 bg-[#121520] rounded-xl border border-[#00F5D4]/40 bg-[#00F5D4]/5">
            <span className="text-[10px] text-[#00F5D4] block font-bold">R² SCORE</span>
            <span className="text-base font-display font-bold text-[#00F5D4]">Evaluated</span>
            <span className="text-[9px] text-slate-400 block">Coeff. Determination</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsCenterpiece() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projectsData[activeProjectIndex];

  return (
    <section id="projects" className="py-24 bg-[#090A0F] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00F5D4] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]"></span>
            PORTFOLIO CASE STUDIES • DIRECT FROM CV
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            FEATURED PROJECTS
          </h2>
          <p className="font-sans text-base text-slate-400 max-w-2xl leading-relaxed">
            All three projects featured in my CV presented as detailed technical case studies with verified GitHub repositories and clear representations of my contributions.
          </p>
        </div>

        {/* Project Case Study Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-white/10 pb-6">
          {projectsData.map((project, idx) => {
            const isSelected = idx === activeProjectIndex;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProjectIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all border relative overflow-hidden group ${
                  isSelected
                    ? 'bg-[#121520] border-[#00F5D4] shadow-[0_0_25px_rgba(0,245,212,0.2)] scale-[1.02]'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                  <span className="text-[#00F5D4] font-bold uppercase tracking-wider">
                    CASE STUDY 0{idx + 1}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1 font-semibold">
                    <Calendar size={11} /> {project.period}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#00F5D4] transition-colors leading-snug">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-slate-400 block mt-1 line-clamp-1">
                  {project.tagline}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Project Case Study Deep-Dive Card */}
        <div className="lab-panel p-6 sm:p-10 rounded-3xl border border-white/15 space-y-8 relative overflow-hidden shadow-2xl backdrop-blur-xl">
          
          {/* Top Bar: Title, Date, Role, and GitHub Button */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/40 text-[#00F5D4] font-bold uppercase tracking-wider">
                  {activeProject.badge}
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold flex items-center gap-1.5">
                  <Calendar size={12} /> {activeProject.period}
                </span>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold flex items-center gap-1.5">
                  <Users size={12} /> {activeProject.role}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                {activeProject.title}
              </h3>
              <p className="font-heading text-base text-[#00F5D4] font-medium">
                {activeProject.tagline}
              </p>
            </div>

            {/* GitHub Button with Verified Link from CV */}
            <div className="shrink-0 flex items-center gap-3">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#00F5D4] hover:bg-[#00E5FF] text-black font-mono text-xs font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all hover:scale-105"
                title={`View ${activeProject.title} on GitHub`}
              >
                <GithubIcon size={16} /> VIEW REPOSITORY
              </a>
            </div>
          </div>

          {/* Project Summary Description */}
          <div className="p-5 rounded-2xl bg-[#090A0F] border border-white/10 space-y-2">
            <span className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              PROJECT OVERVIEW (FROM CV):
            </span>
            <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed">
              {activeProject.summary}
            </p>
          </div>

          {/* Actual Contribution Breakdown (Explicitly highlights user's role) */}
          <div className="p-5 rounded-2xl bg-[#121520]/80 border-l-4 border-[#00F5D4] space-y-2">
            <span className="font-mono text-xs text-[#00F5D4] uppercase font-bold tracking-wider flex items-center gap-2">
              <CheckCircle2 size={15} /> MY ACTUAL CONTRIBUTION:
            </span>
            <p className="font-sans text-sm text-slate-300 leading-relaxed">
              {activeProject.myContribution}
            </p>
            {activeProject.teamAiContribution && (
              <p className="font-sans text-xs text-slate-400 pt-1 italic">
                * Note: {activeProject.teamAiContribution}
              </p>
            )}
          </div>

          {/* Embedded Interactive Telemetry/System Flow */}
          <div className="pt-2">
            {activeProject.type === 'aura' && <AuraTelemedicineInteractive />}
            {activeProject.type === 'pollution' && <AirPollutionInteractive />}
            {activeProject.type === 'ecommerce' && <EcommerceMLInteractive />}
          </div>

          {/* Key Features & Highlights Checklist */}
          <div className="space-y-3 font-mono text-xs pt-2">
            <h4 className="text-[#00F5D4] font-bold uppercase tracking-wider flex items-center gap-2">
              <Sparkles size={14} /> KEY FEATURES & CAPABILITIES:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-slate-300">
              {activeProject.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 size={15} className="text-[#00F5D4] shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges from CV */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-slate-400 font-bold mr-2">TECH USED:</span>
            {activeProject.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 font-semibold hover:border-[#00F5D4] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
