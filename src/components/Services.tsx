import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Code, Shield, Network, Cpu } from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-[#FF5E1E]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#FF5E1E]" />;
      case 'Network':
        return <Network className="w-6 h-6 text-[#FF5E1E]" />;
      default:
        return <Cpu className="w-6 h-6 text-[#FF5E1E]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5E1E] block">
            WHAT I DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Services &amp; Core Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Bridging modern full-stack web engineering, cybersecurity platforms, and network protocol architectures.
          </p>
        </div>

        {/* 4 Cards Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="card-dark p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#17171C] border border-[#272730] group-hover:border-[#FF5E1E]/50 flex items-center justify-center mb-5 transition-colors">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#FF7A29] transition-colors mb-2.5">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-[#1E1E24] flex flex-wrap gap-1.5">
                {service.techList.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#16161B] text-slate-300 border border-[#23232A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
