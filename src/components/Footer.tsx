import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

interface FooterProps {
  onOpenSocialInfo: (platform: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSocialInfo }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080A] border-t border-[#1C1C22] py-14 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#1A1A20]">
          {/* Col 1: Brand matching reference */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FF5E1E] flex items-center justify-center font-heading font-black text-white text-xs">
                ▲
              </div>
              <div className="font-heading font-extrabold text-white text-base tracking-wider">
                ARJUN <span className="text-[#FF5E1E]">DEV</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              Building secure full-stack web platforms and high-speed network architectures.
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              Sri Eshwar College of Engineering, Coimbatore &bull; ECE &apos;27
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white block mb-3">
              QUICK LINKS
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#FF5E1E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FF5E1E] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FF5E1E] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#FF5E1E] transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#FF5E1E] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[#FF5E1E] transition-colors">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Follow Me */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white block mb-1">
              FOLLOW ME
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenSocialInfo('github')}
                className="w-8 h-8 rounded-full bg-[#131317] border border-[#23232A] hover:border-[#FF5E1E] text-slate-300 hover:text-[#FF5E1E] flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onOpenSocialInfo('linkedin')}
                className="w-8 h-8 rounded-full bg-[#131317] border border-[#23232A] hover:border-[#FF5E1E] text-slate-300 hover:text-[#FF5E1E] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onOpenSocialInfo('email')}
                className="w-8 h-8 rounded-full bg-[#131317] border border-[#23232A] hover:border-[#FF5E1E] text-slate-300 hover:text-[#FF5E1E] flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://leetcode.com/u/arjun-s"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#131317] border border-[#23232A] hover:border-[#FF5E1E] text-slate-300 hover:text-[#FF5E1E] flex items-center justify-center transition-all"
                title="LeetCode"
              >
                <Code2 className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#FF7A29] block">
                Available for internships &amp; software roles!
              </span>
              <span className="text-[10px] text-slate-500">
                Let&apos;s build something amazing together.
              </span>
            </div>
          </div>

          {/* Col 4: Top button */}
          <div className="flex flex-col md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#141418] border border-[#23232A] hover:border-[#FF5E1E] text-slate-300 hover:text-white transition-all text-xs font-mono w-fit"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF5E1E]" />
            </button>

            <div className="text-left md:text-right text-[11px] font-mono text-slate-500">
              Coimbatore &bull; Kumbakonam &bull; India
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <div>
            &copy; {currentYear} {PERSONAL_INFO.brandName} ({PERSONAL_INFO.name}). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Made with passion for clean code &amp; network security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
