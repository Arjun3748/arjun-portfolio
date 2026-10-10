import React from 'react';
import { TECH_STACK } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-[#0C0C0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5E1E] block">
            TECH STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Technologies &amp; Tools
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Core technologies utilized in building full-stack platforms, simulating networks, and solving algorithmic problems.
          </p>
        </div>

        {/* Tech Stack Grid matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-xl bg-[#131317] border border-[#222228] hover:border-[#FF5E1E]/40 hover:bg-[#18181E] flex flex-col items-center justify-center text-center group transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1B1B22] border border-[#2B2B36] group-hover:border-[#FF5E1E]/30 flex items-center justify-center mb-2.5 transition-colors">
                <span className="font-heading font-black text-xs text-[#FF5E1E] group-hover:scale-110 transition-transform">
                  {tech.badge}
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
