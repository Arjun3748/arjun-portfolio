import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Copy,
  Check,
  Globe,
  Phone,
} from 'lucide-react';

interface SocialConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  context?: string;
}

export const SocialConfigModal: React.FC<SocialConfigModalProps> = ({
  isOpen,
  onClose,
  context,
}) => {
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="social-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0F0F13] border border-[#262632] shadow-2xl text-slate-100 overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#202028] bg-[#14141A]/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/15 border border-[#FF5E1E]/30 flex items-center justify-center text-[#FF5E1E]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 id="social-modal-title" className="text-xl font-heading font-bold text-white">
                Connect with Arjun
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {context ? `Context: ${context}` : 'Professional Links'}
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
        <div className="p-6 space-y-4">
          {/* GitHub */}
          <div className="p-3.5 rounded-xl bg-[#141419] border border-[#24242E] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-purple-400 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">GitHub</div>
                <div className="text-[11px] font-mono text-slate-400">
                  {PERSONAL_INFO.links.github}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleCopy(PERSONAL_INFO.links.github, 'github')}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white"
                title="Copy link"
              >
                {copied === 'github' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FF5E1E]/15 hover:bg-[#FF5E1E]/30 text-[#FF7A29]"
                title="Visit link"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="p-3.5 rounded-xl bg-[#141419] border border-[#24242E] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">LinkedIn</div>
                <div className="text-[11px] font-mono text-slate-400">
                  {PERSONAL_INFO.links.linkedin}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleCopy(PERSONAL_INFO.links.linkedin, 'linkedin')}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white"
                title="Copy link"
              >
                {copied === 'linkedin' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FF5E1E]/15 hover:bg-[#FF5E1E]/30 text-[#FF7A29]"
                title="Visit link"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="p-3.5 rounded-xl bg-[#141419] border border-[#24242E] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">Email</div>
                <div className="text-[11px] font-mono text-slate-400">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white"
                title="Copy email"
              >
                {copied === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-[#FF5E1E]/15 hover:bg-[#FF5E1E]/30 text-[#FF7A29]"
                title="Compose email"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="p-3.5 rounded-xl bg-[#141419] border border-[#24242E] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#FF5E1E] shrink-0" />
              <div>
                <div className="text-xs font-semibold text-white">Phone / WhatsApp</div>
                <div className="text-[11px] font-mono text-slate-400">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white"
                title="Copy phone"
              >
                {copied === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#202028] bg-[#111116] flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-500">
            {PERSONAL_INFO.brandName} &bull; Coimbatore, India
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-xs font-semibold text-slate-200 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
