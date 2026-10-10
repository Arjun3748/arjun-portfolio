import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Terminal, Database } from 'lucide-react';

export const Certifications: React.FC = () => {
  const getIssuerBadge = (issuer: string) => {
    switch (issuer) {
      case 'Cisco':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/25';
      case 'HackerRank':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25';
      default:
        return 'text-purple-400 bg-purple-500/10 border-purple-500/25';
    }
  };

  return (
    <section id="certifications" className="py-24 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5E1E] block">
            VERIFIED CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Certifications &amp; Training
          </h2>
          <p className="text-slate-400 text-sm">
            8 professional industry certifications across Cisco Networking Academy, HackerRank, and advanced engineering bootcamps.
          </p>
        </div>

        {/* 8 Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="card-dark p-5 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${getIssuerBadge(
                      cert.issuer
                    )}`}
                  >
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-sm font-heading font-bold text-white group-hover:text-[#FF7A29] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-[11px] text-slate-400 mt-2 font-mono">
                  {cert.domain}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#1C1C22] flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
