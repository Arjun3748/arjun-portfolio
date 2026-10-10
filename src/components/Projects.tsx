import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Shield,
  UtensilsCrossed,
  GraduationCap,
  Network,
  Sparkles,
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenSocialInfo: (platform: string, context?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectProject,
  onOpenSocialInfo,
}) => {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'AI & Security' | 'Research & 6G'>('All');

  const filteredProjects =
    filter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  const getProjectPreview = (id: string) => {
    switch (id) {
      case 'cybersentinel':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#1A141A] via-[#120F16] to-[#0D0B10] p-4 flex flex-col justify-between border-b border-[#23232A] relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
                <Shield className="w-4 h-4" />
                CyberSentinel Dashboard
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/15 text-rose-300 border border-rose-500/30">
                AI Threat Triage Active
              </span>
            </div>
            <div className="space-y-1.5 bg-[#0D0B10]/90 p-3 rounded-xl border border-white/[0.06] font-mono text-[11px]">
              <div className="flex justify-between text-slate-300">
                <span>Incident: #SEC-9842</span>
                <span className="text-amber-400 font-bold">Risk Score: 88/100</span>
              </div>
              <div className="text-[10px] text-slate-500">
                JWT Auth &bull; Evidence Integrity &bull; Automated Timeline
              </div>
            </div>
          </div>
        );

      case 'nibble':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#191512] via-[#13100E] to-[#0D0B0A] p-4 flex flex-col justify-between border-b border-[#23232A] relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <UtensilsCrossed className="w-4 h-4" />
                Nibble Ordering App
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Next.js Cloud App
              </span>
            </div>
            <div className="space-y-1.5 bg-[#0E0C0A]/90 p-3 rounded-xl border border-white/[0.06] font-mono text-[11px]">
              <div className="flex justify-between text-slate-300">
                <span>Cart State: Dynamic Sync</span>
                <span className="text-emerald-400 font-bold">200 OK</span>
              </div>
              <div className="text-[10px] text-slate-500">
                Next.js App Router &bull; MongoDB Atlas &bull; Tailwind CSS
              </div>
            </div>
          </div>
        );

      case 'edusync':
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#131620] via-[#0E111A] to-[#0A0C13] p-4 flex flex-col justify-between border-b border-[#23232A] relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                <GraduationCap className="w-4 h-4" />
                EduSync Campus Platform
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-sky-500/15 text-sky-300 border border-sky-500/30">
                Full MERN Stack
              </span>
            </div>
            <div className="space-y-1.5 bg-[#0A0D15]/90 p-3 rounded-xl border border-white/[0.06] font-mono text-[11px]">
              <div className="flex justify-between text-slate-300">
                <span>Leave &amp; OD Approval Engine</span>
                <span className="text-sky-300 font-bold">Verified</span>
              </div>
              <div className="text-[10px] text-slate-500">
                Circular Read Receipts &bull; REST APIs &bull; Faculty UI
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-44 w-full bg-gradient-to-br from-[#1A1513] via-[#14100E] to-[#0D0B0A] p-4 flex flex-col justify-between border-b border-[#23232A] relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-1.5 text-[#FF5E1E] font-semibold">
                <Network className="w-4 h-4" />
                IEEE 6G Security Research
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-[#FF5E1E]/15 text-[#FF7A29] border border-[#FF5E1E]/30">
                ICCIRT 2024
              </span>
            </div>
            <div className="space-y-1.5 bg-[#0F0C0A]/90 p-3 rounded-xl border border-white/[0.06] font-mono text-[11px]">
              <div className="flex justify-between text-slate-300">
                <span>Federated Learning + Multi-Agent</span>
                <span className="text-emerald-400 font-bold">DOI: 10.1109/...</span>
              </div>
              <div className="text-[10px] text-slate-500">
                Decentralized Anomaly Defense &bull; IEEE Indexed
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative bg-[#0C0C0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5E1E] block mb-2">
              FEATURED PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              Selected Work
            </h2>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {(['All', 'Full-Stack', 'AI & Security', 'Research & 6G'] as const).map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    filter === category
                      ? 'bg-[#FF5E1E] text-white shadow-[0_0_15px_rgba(255,94,30,0.35)]'
                      : 'bg-[#141418] text-slate-400 hover:text-white border border-[#23232A]'
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Projects Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-dark rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Preview */}
                {getProjectPreview(project.id)}

                {/* Details Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-[#FF5E1E] uppercase tracking-wider">
                      {project.category} &bull; {project.period}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1C1C22] text-slate-400 border border-[#282832]">
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-[#FF7A29] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 2).map((hl, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-slate-400 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E1E] shrink-0 mt-1.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#16161B] text-slate-300 border border-[#23232A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-[#1E1E24] mt-4 flex items-center justify-between gap-2 pt-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#FF5E1E] hover:text-[#FF7A29] transition-colors"
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#18181E] hover:bg-[#202028] text-slate-300 hover:text-white border border-[#25252E] transition-colors"
                      title="Live link / IEEE DOI"
                    >
                      <ExternalLink className="w-4 h-4 text-[#FF5E1E]" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <button
                      onClick={() => onOpenSocialInfo('github', project.title)}
                      className="p-2 rounded-lg bg-[#18181E] hover:bg-[#202028] text-slate-300 hover:text-white border border-[#25252E] transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
