import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Send, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'CERTIFICATIONS', href: '#certifications', id: 'certifications' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-b border-[#202026] py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo matching reference: Orange chevron A + brand name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5E1E] rounded-lg"
            aria-label={`${PERSONAL_INFO.brandName} - Return to top`}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF7A29] to-[#FF5E1E] flex items-center justify-center font-heading font-black text-white text-sm shadow-[0_0_15px_rgba(255,94,30,0.4)] group-hover:scale-105 transition-transform">
              ▲
            </div>
            <div className="flex items-baseline font-heading font-extrabold text-white text-lg tracking-wider">
              {PERSONAL_INFO.brandName}
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-xs font-semibold tracking-wider transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#FF5E1E]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5E1E] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: LET'S TALK button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white border border-[#2A2A33] hover:border-[#FF5E1E]/50 transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF5E1E]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white border border-[#FF5E1E] hover:bg-[#FF5E1E] shadow-sm hover:shadow-[0_0_20px_rgba(255,94,30,0.4)] transition-all"
            >
              <span>LET&apos;S TALK</span>
              <Send className="w-3 h-3 text-white" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white border border-[#23232A]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0A0A0C]/98 backdrop-blur-xl border-b border-[#23232A] z-40 px-6 py-8 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2 px-3">
              Navigation
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#FF5E1E]/15 text-[#FF5E1E] border border-[#FF5E1E]/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF5E1E]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#23232A] flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF5E1E] text-white text-sm font-bold shadow-[0_0_20px_rgba(255,94,30,0.4)]"
            >
              <span>LET&apos;S TALK</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
