import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  FileText,
  Download,
  AlertCircle,
  GraduationCap,
  Briefcase,
  Terminal,
} from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="py-16 relative bg-[#06080F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-sky-500/20 relative overflow-hidden bg-gradient-to-br from-[#0B1224] via-[#090F1E] to-[#070A15]">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Recruiter Invitation */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Recruiter &amp; Hiring Overview</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                Interested in evaluating my complete background?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am actively seeking software engineering and networking internship/entry opportunities. My resume covers my Electronics and Communication Engineering coursework, hands-on internships (Cisco simulation &amp; MERN stack), key engineering projects, and algorithmic problem-solving track record.
              </p>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060913] border border-white/[0.04]">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>B.E. ECE (Class of 2027)</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060913] border border-white/[0.04]">
                  <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>2 Practical Internships</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#060913] border border-white/[0.04]">
                  <Terminal className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>200+ LeetCode DSA</span>
                </div>
              </div>
            </div>

            {/* Right Column: Download Card Action */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-[#070B16] border border-sky-500/25 flex flex-col items-center text-center space-y-4 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-inner">
                  <FileText className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="font-heading font-bold text-white text-base">
                    Curriculum Vitae / Resume
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {PERSONAL_INFO.links.resumeFileName}
                  </p>
                </div>

                <button
                  onClick={onOpenResumeModal}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-sky-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <AlertCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Configurable PDF path with zero broken links</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
