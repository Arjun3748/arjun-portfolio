import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, ACHIEVEMENTS_STATS } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  FileText,
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
  onOpenSocialInfo: (platform: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onOpenSocialInfo }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeRole, setFadeRole] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeRole(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
        setFadeRole(true);
      }, 250);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-subtle"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF5E1E]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Code card + Headline + CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Floating Code Snippet from Reference Image */}
            <div className="hidden sm:block p-3.5 rounded-xl bg-[#111114]/85 border border-[#232328] font-mono text-xs text-slate-400 backdrop-blur-md shadow-lg max-w-md w-full">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-[#1E1E24] text-[10px] text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-slate-400">developer.config.ts</span>
              </div>
              <div className="space-y-0.5 leading-relaxed text-[11px]">
                <p>
                  <span className="text-[#FF5E1E]">const</span>{' '}
                  <span className="text-white">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-amber-300">&apos;Arjun S&apos;</span>,
                </p>
                <p className="pl-4">
                  college: <span className="text-emerald-300">&apos;Sri Eshwar (ECE)&apos;</span>,
                </p>
                <p className="pl-4">
                  skills: [<span className="text-orange-300">&apos;React&apos;</span>,{' '}
                  <span className="text-orange-300">&apos;Next.js&apos;</span>,{' '}
                  <span className="text-orange-300">&apos;Node.js&apos;</span>,{' '}
                  <span className="text-orange-300">&apos;6G Security&apos;</span>]
                </p>
                <p>&#125;;</p>
              </div>
            </div>

            {/* "👋 Hello, I'm" */}
            <div className="flex items-center gap-2 text-sm sm:text-base text-slate-300 font-medium">
              <span>👋</span>
              <span>Hello, I&apos;m</span>
            </div>

            {/* Large Name Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.05]">
                {PERSONAL_INFO.brandName}
              </h1>

              {/* Animated Rotating Sub-headline with blinking cursor */}
              <div className="flex items-center gap-1.5 text-base sm:text-xl font-mono font-bold text-slate-300 tracking-wide pt-1 min-h-[32px]">
                <span
                  className={`transition-opacity duration-300 text-white ${
                    fadeRole ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {PERSONAL_INFO.roles[currentRoleIndex]}
                </span>
                <span className="text-[#FF5E1E] animate-pulse">|</span>
              </div>
            </div>

            {/* Bio paragraph from reference */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Two Primary Buttons matching reference: VIEW MY WORK & DOWNLOAD RESUME */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5E1E] hover:bg-[#FF7338] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,94,30,0.45)] hover:shadow-[0_0_35px_rgba(255,94,30,0.6)] transition-all"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#111114] hover:bg-[#18181D] text-slate-200 hover:text-white border border-[#282830] hover:border-[#FF5E1E]/50 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>DOWNLOAD RESUME</span>
                <Download className="w-4 h-4 text-[#FF5E1E]" />
              </button>
            </div>

            {/* "FIND ME ON" with icons matching reference */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                FIND ME ON
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenSocialInfo('github')}
                  className="w-8 h-8 rounded-full bg-[#141418] border border-[#24242C] hover:border-[#FF5E1E] text-slate-300 hover:text-[#FF5E1E] flex items-center justify-center transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenSocialInfo('linkedin')}
                  className="w-8 h-8 rounded-full bg-[#141418] border border-[#24242C] hover:border-[#FF5E1E] text-slate-300 hover:text-[#FF5E1E] flex items-center justify-center transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onOpenSocialInfo('email')}
                  className="w-8 h-8 rounded-full bg-[#141418] border border-[#24242C] hover:border-[#FF5E1E] text-slate-300 hover:text-[#FF5E1E] flex items-center justify-center transition-all"
                  aria-label="Email Arjun S"
                >
                  <Mail className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://leetcode.com/u/arjun-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#141418] border border-[#24242C] hover:border-[#FF5E1E] text-slate-300 hover:text-[#FF5E1E] flex items-center justify-center transition-all"
                  title="LeetCode (320+ Solved)"
                >
                  <Code2 className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Orange Polygon Backdrop */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
