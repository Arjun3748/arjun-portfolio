import React from 'react';
import { PUBLICATION_DATA, ACHIEVEMENTS_STATS } from '../data/portfolioData';
import { BookOpen, ExternalLink, Code2, Award, Terminal, Trophy } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5E1E] block">
            RESEARCH &amp; COMPETITIVE CODING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Research Publication &amp; Achievements
          </h2>
          <p className="text-slate-400 text-sm">
            Peer-reviewed IEEE research and competitive algorithmic achievements.
          </p>
        </div>

        {/* IEEE Paper Card */}
        <div className="card-dark p-6 sm:p-8 rounded-3xl mb-10 max-w-5xl mx-auto border border-[#FF5E1E]/30 bg-gradient-to-br from-[#141217] via-[#101013] to-[#0D0D10]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF5E1E]/20 text-[#FF7A29] border border-[#FF5E1E]/30 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  IEEE Conference Publication
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {PUBLICATION_DATA.conference}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-snug">
                {PUBLICATION_DATA.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PUBLICATION_DATA.abstract}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {PUBLICATION_DATA.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-[#17171F] text-slate-300 border border-[#272732]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:items-end justify-between gap-4 shrink-0">
              <div className="text-left sm:text-right font-mono text-xs">
                <span className="text-slate-500 block">Publication DOI</span>
                <span className="text-[#FF7A29] font-bold">{PUBLICATION_DATA.doi}</span>
              </div>

              <a
                href={`https://doi.org/${PUBLICATION_DATA.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5E1E] hover:bg-[#FF7338] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,94,30,0.4)] transition-all"
              >
                <span>View on IEEE Xplore</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Competitive Coding Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* LeetCode */}
          <div className="card-dark p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A181C] border border-[#2A2630] flex items-center justify-center text-amber-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-500">Platform</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white">LeetCode</h4>
              <div className="text-3xl font-extrabold font-mono text-white mt-1">
                {ACHIEVEMENTS_STATS.leetCodeSolved}+ <span className="text-xs text-slate-400 font-sans">Solved</span>
              </div>
              <p className="text-xs text-[#FF7A29] font-mono mt-1">
                Max Rating: {ACHIEVEMENTS_STATS.leetCodeRating}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#1E1E24] text-[11px] text-slate-400 font-mono">
              Arrays, DP, Graphs, Binary Search, Trees
            </div>
          </div>

          {/* CodeChef */}
          <div className="card-dark p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A181C] border border-[#2A2630] flex items-center justify-center text-amber-500">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-500">Platform</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white">CodeChef</h4>
              <div className="text-3xl font-extrabold font-mono text-white mt-1">
                {ACHIEVEMENTS_STATS.codeChefSolved} <span className="text-xs text-slate-400 font-sans">Solved</span>
              </div>
              <p className="text-xs text-[#FF7A29] font-mono mt-1">
                Max Rating: {ACHIEVEMENTS_STATS.codeChefRating}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#1E1E24] text-[11px] text-slate-400 font-mono">
              Rated Contests &bull; Math &bull; Greedy Algorithms
            </div>
          </div>

          {/* SkillRack */}
          <div className="card-dark p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A181C] border border-[#2A2630] flex items-center justify-center text-emerald-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-500">Platform</span>
              </div>
              <h4 className="text-lg font-heading font-bold text-white">SkillRack</h4>
              <div className="text-3xl font-extrabold font-mono text-white mt-1">
                {ACHIEVEMENTS_STATS.skillRackSolved}+ <span className="text-xs text-slate-400 font-sans">Solved</span>
              </div>
              <p className="text-xs text-emerald-400 font-mono mt-1">
                Continuous Problem Solving
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#1E1E24] text-[11px] text-slate-400 font-mono">
              C, C++, Java Programming &bull; Logic Building
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
