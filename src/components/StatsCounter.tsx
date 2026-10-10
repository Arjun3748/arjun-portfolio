import React from 'react';
import { ACHIEVEMENTS_STATS } from '../data/portfolioData';
import { Code2, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      value: `${ACHIEVEMENTS_STATS.leetCodeSolved}+`,
      label: 'LeetCode Solved',
      sublabel: 'Rating: 1545',
      icon: <Code2 className="w-5 h-5 text-[#FF5E1E]" />,
    },
    {
      value: `${ACHIEVEMENTS_STATS.cgpa}`,
      label: 'Academic CGPA',
      sublabel: 'B.E. ECE (Up to 6th Sem)',
      icon: <Award className="w-5 h-5 text-[#FF5E1E]" />,
    },
    {
      value: `${ACHIEVEMENTS_STATS.certificationsCount}+`,
      label: 'Certifications',
      sublabel: 'Cisco, HackerRank, Udemy',
      icon: <CheckCircle2 className="w-5 h-5 text-[#FF5E1E]" />,
    },
    {
      value: '1',
      label: 'IEEE Publication',
      sublabel: 'ICCIRT 2024 (6G Security)',
      icon: <BookOpen className="w-5 h-5 text-[#FF5E1E]" />,
    },
  ];

  return (
    <div className="py-12 bg-[#09090B] border-y border-[#1E1E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#111115] border border-[#202027] hover:border-[#FF5E1E]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1A1A22] border border-[#2B2B38] flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-300">
                  {stat.label}
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
