import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  X,
  FileText,
  Download,
  AlertCircle,
  Copy,
  Check,
  Info,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyPath = () => {
    navigator.clipboard.writeText(`public/${PERSONAL_INFO.links.resumeFileName}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0F0F13] border border-[#262632] shadow-2xl text-slate-100 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#202028] bg-[#14141A]/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/15 border border-[#FF5E1E]/30 flex items-center justify-center text-[#FF5E1E]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-xl font-heading font-bold text-white">
                Download Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {PERSONAL_INFO.links.resumeFileName}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-slate-300 leading-relaxed">
            Download the official engineering resume of{' '}
            <strong className="text-white">{PERSONAL_INFO.name}</strong> ({PERSONAL_INFO.education.statusLabel}), Sri Eshwar College of Engineering.
          </p>

          <a
            href={`/${PERSONAL_INFO.links.resumeFileName}`}
            download
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF5E1E] hover:bg-[#FF7338] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,94,30,0.4)] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF Resume</span>
          </a>

          <div className="p-4 rounded-xl bg-[#14141A] border border-[#23232C] space-y-2 text-xs">
            <span className="font-mono text-slate-400 uppercase tracking-wider block text-[11px]">
              Candidate Summary:
            </span>
            <div className="text-slate-300">
              &bull; <strong>CGPA:</strong> 8.02 (up to 6th sem), B.E. ECE
            </div>
            <div className="text-slate-300">
              &bull; <strong>Coding:</strong> 320+ LeetCode, 183 CodeChef, 430+ SkillRack
            </div>
            <div className="text-slate-300">
              &bull; <strong>Research:</strong> IEEE ICCIRT 2024 Author (6G Security)
            </div>
            <div className="text-slate-300">
              &bull; <strong>Certifications:</strong> 8 credentials (Cisco, CCNA, HackerRank, Udemy)
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#202028] bg-[#111116] flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            {PERSONAL_INFO.brandName} &bull; 2027
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-xs font-semibold text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
