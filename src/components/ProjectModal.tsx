import React from 'react';
import { ProjectItem } from '../types';
import {
  X,
  CheckCircle2,
  ExternalLink,
  Github,
  Clock,
  Layers,
  FileCode,
  TrendingUp,
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenSocialInfo: (platform: string, context?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenSocialInfo,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0F0F13] border border-[#262630] shadow-2xl text-slate-100 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[#202028] bg-[#141419]/70">
          <div className="space-y-2 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FF5E1E]/20 text-[#FF7A29] border border-[#FF5E1E]/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                {project.period}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono text-slate-400 bg-[#1A1A22] border border-[#2A2A36]">
                {project.status}
              </span>
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <FileCode className="w-3.5 h-3.5 text-[#FF5E1E]" />
              <span>Project Overview &amp; Architecture</span>
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed bg-[#14141A] p-4 rounded-2xl border border-[#22222A]">
              {project.description}
            </p>
          </div>

          {/* Key Metrics / Highlights */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#14141A] border border-[#262632] text-center"
                >
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {metric.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold font-mono text-[#FF7A29] mt-1 block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Implemented Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Core Features &amp; Capabilities</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 p-3 rounded-xl bg-[#14141A] border border-[#22222A]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E1E] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#181820] border border-[#292936] text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#202028] bg-[#111116] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF5E1E] hover:bg-[#FF7338] text-xs font-bold text-white transition-all shadow-[0_0_15px_rgba(255,94,30,0.3)]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Platform / DOI</span>
              </a>
            )}
            {project.githubUrl && (
              <button
                onClick={() => onOpenSocialInfo('github', project.title)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#191920] hover:bg-[#23232C] text-xs font-semibold text-white border border-[#2C2C38] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#1B1B22] hover:bg-[#242430] text-xs font-semibold text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
