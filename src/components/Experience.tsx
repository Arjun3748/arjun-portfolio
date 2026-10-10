import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Network, Code2, CheckCircle2, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-[#0C0C0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5E1E] block">
            PRACTICAL EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Internships &amp; Industry Training
          </h2>
          <p className="text-slate-400 text-sm">
            Applied technical internships verified with certificates in Cisco networking simulation and MERN stack engineering.
          </p>
        </div>

        {/* 2 Internship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EXPERIENCE_DATA.map((exp) => {
            const isCisco = exp.id === 'cisco-internship';

            return (
              <div
                key={exp.id}
                className="card-dark p-6 sm:p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    isCisco
                      ? 'bg-gradient-to-r from-sky-400 to-[#FF5E1E]'
                      : 'bg-gradient-to-r from-[#FF5E1E] to-amber-400'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#FF5E1E] uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#1E1E26] text-emerald-400 border border-[#2D2D38]">
                      <Award className="w-3 h-3" />
                      {exp.certificateLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#FF7A29] transition-colors">
                    {exp.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                    {exp.organization} &bull; {exp.role}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                      Core Responsibilities &amp; Learnings:
                    </span>
                    {exp.highlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#16161C] p-2.5 rounded-xl border border-[#22222A]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E1E] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="pt-6 mt-6 border-t border-[#1E1E24] flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#16161B] text-slate-300 border border-[#23232A]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
