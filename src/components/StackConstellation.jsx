import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Globe, Database, BrainCircuit, HeartHandshake, Sparkles, Check, Search, Terminal } from 'lucide-react';

export default function StackConstellation() {
  const [activeCategoryId, setActiveCategoryId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(skillCategories[0].skills[0]);

  // Category Icon Mapping
  const getCategoryIcon = (id, size = 16) => {
    switch (id) {
      case 'programming-languages':
        return <Code2 size={size} />;
      case 'web-technologies':
        return <Globe size={size} />;
      case 'databases-and-tools':
        return <Database size={size} />;
      case 'data-ml-libraries':
        return <BrainCircuit size={size} />;
      case 'soft-skills':
        return <HeartHandshake size={size} />;
      default:
        return <Terminal size={size} />;
    }
  };

  // Filter skills based on category and search query
  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(s => ({ ...s, catId: cat.id, catName: cat.name, catAccent: cat.accent }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesCategory = activeCategoryId === 'all' || skill.catId === activeCategoryId;
    const matchesSearch = searchQuery === '' || 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 bg-[#090A0F] relative border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00E5FF] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>
            TECHNICAL ARSENAL • DIRECT FROM CV
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white uppercase tracking-tight">
            SKILLS & TOOLS
          </h2>
          <p className="font-sans text-base text-slate-400 max-w-2xl leading-relaxed">
            Organized strictly into the 5 core categories from my CV. No fabricated proficiencies or inflated rankings — just the technologies I have trained and built with.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategoryId('all')}
              className={`font-mono text-xs px-3.5 py-2 rounded-xl transition-all border flex items-center gap-1.5 ${
                activeCategoryId === 'all'
                  ? 'bg-[#121520] border-[#00F5D4] text-[#00F5D4] font-bold shadow-[0_0_15px_rgba(0,245,212,0.2)]'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>ALL SKILLS</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-slate-300">
                {allSkills.length}
              </span>
            </button>

            {skillCategories.map((cat) => {
              const isSelected = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`font-mono text-xs px-3.5 py-2 rounded-xl transition-all border flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#121520] border-current font-bold shadow-[0_0_15px_rgba(0,245,212,0.15)]'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    color: isSelected ? cat.accent : undefined,
                    borderColor: isSelected ? cat.accent : undefined
                  }}
                >
                  <span style={{ color: cat.accent }}>{getCategoryIcon(cat.id, 14)}</span>
                  <span>{cat.shortName}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-slate-300">
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-[#121520] border border-white/15 text-white font-mono text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#00F5D4]"
            />
          </div>

        </div>

        {/* Skills Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skill Grid (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all border cursor-pointer relative group ${
                    isSelected
                      ? 'bg-[#121520] border-[#00F5D4] shadow-[0_0_25px_rgba(0,245,212,0.2)] scale-[1.02]'
                      : 'bg-[#0E131F]/90 border-white/10 hover:border-white/20 hover:bg-[#121827]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#00F5D4] transition-colors">
                      {skill.name}
                    </span>
                    <span 
                      className="font-mono text-[9px] px-2 py-0.5 rounded uppercase font-semibold border"
                      style={{ 
                        color: skill.catAccent, 
                        borderColor: `${skill.catAccent}40`,
                        backgroundColor: `${skill.catAccent}15` 
                      }}
                    >
                      {skill.category}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {skill.note}
                  </p>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-500">
                    <span>STATUS: FROM CV</span>
                    <span className="text-[#00F5D4] group-hover:underline flex items-center gap-1 font-semibold">
                      DETAILS →
                    </span>
                  </div>
                </div>
              );
            })}

            {filteredSkills.length === 0 && (
              <div className="col-span-2 p-8 text-center font-mono text-xs text-slate-400 bg-white/5 rounded-2xl border border-white/10">
                No matching technologies found in CV for "{searchQuery}".
              </div>
            )}
          </div>

          {/* Skill Deep-Dive Inspector (5 Columns) */}
          <div className="lg:col-span-5">
            <div className="lab-panel p-6 sm:p-7 rounded-2xl border border-white/15 space-y-6 sticky top-28 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-[#00F5D4] uppercase font-bold tracking-wider flex items-center gap-2">
                  <Sparkles size={14} /> SKILL TELEMETRY INSPECTOR
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  CV VERIFIED
                </span>
              </div>

              {selectedSkill ? (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: selectedSkill.catAccent || '#00F5D4' }}
                      ></span>
                      <span className="font-mono text-xs text-slate-400 uppercase font-semibold">
                        {selectedSkill.category}
                      </span>
                    </div>
                    <h3 className="font-display font-extrabold text-3xl text-white">
                      {selectedSkill.name}
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 space-y-2">
                    <span className="font-mono text-[10px] text-[#00F5D4] uppercase font-bold tracking-wider block">
                      APPLICATION & CONTEXT:
                    </span>
                    <p className="font-sans text-sm text-slate-200 leading-relaxed">
                      {selectedSkill.note}
                    </p>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">
                      CURRICULUM VITAE MAPPING:
                    </span>
                    
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-slate-300">
                        <span>Classification</span>
                        <strong className="text-white">{selectedSkill.category}</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-slate-300">
                        <span>Candidate</span>
                        <strong className="text-[#00F5D4]">Jagadeep Jaladi</strong>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-slate-300">
                        <span>Academic Anchor</span>
                        <strong className="text-[#00E5FF]">LPU B.Tech CSE (8.12 CGPA)</strong>
                      </div>
                    </div>
                  </div>

                  {/* Category Summary List */}
                  <div className="pt-3 border-t border-white/10">
                    <span className="font-mono text-[10px] text-slate-400 uppercase font-bold block mb-2">
                      CATEGORY PEERS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {allSkills
                        .filter(s => s.category === selectedSkill.category)
                        .map(peer => (
                          <button
                            key={peer.name}
                            onClick={() => setSelectedSkill(peer)}
                            className={`font-mono text-xs px-2.5 py-1 rounded-lg border transition-all ${
                              peer.name === selectedSkill.name
                                ? 'bg-[#00F5D4]/20 border-[#00F5D4] text-[#00F5D4] font-bold'
                                : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-white/20'
                            }`}
                          >
                            {peer.name}
                          </button>
                        ))}
                    </div>
                  </div>

                </div>
              ) : (
                <p className="font-mono text-xs text-slate-400">Select any technology to inspect its profile.</p>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
