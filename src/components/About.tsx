import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  User,
  GraduationCap,
  Mail,
  MapPin,
  Award,
  Briefcase,
  Phone,
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0C0C0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow and Headline matching reference */}
        <div className="mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5E1E] block mb-2">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight max-w-2xl leading-tight">
            I&apos;m a developer who loves crafting secure digital experiences &amp; scalable networks.
          </h2>
        </div>

        {/* 2-column layout matching reference design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Narrative + Signature */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am an Electronics and Communication Engineering undergraduate at{' '}
              <strong className="text-white">Sri Eshwar College of Engineering, Coimbatore</strong>{' '}
              (Class of 2027), maintaining an <span className="text-[#FF5E1E] font-semibold">8.02 CGPA</span>.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I specialize in full-stack web development with the MERN stack and Next.js, combined with deep curiosity for computer networking and cybersecurity. Whether building enterprise incident response tools like <strong className="text-slate-200">CyberSentinel</strong>, cloud platforms like <strong className="text-slate-200">Nibble</strong> and <strong className="text-slate-200">EduSync</strong>, or authoring published IEEE research on 6G security architectures, I focus on clean code, systems-level understanding, and practical solutions.
            </p>

            {/* Handwritten Signature matching reference design */}
            <div className="pt-4">
              <div className="font-signature text-4xl sm:text-5xl text-[#FF7A29] -rotate-3 select-none">
                Arjun S
              </div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                Full-Stack Developer &bull; Security Researcher
              </div>
            </div>
          </div>

          {/* Right: 6 Info Cards matching reference image */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Name */}
            <div className="p-4 rounded-2xl bg-[#141418] border border-[#23232A] flex items-start gap-3.5 hover:border-[#FF5E1E]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/25 flex items-center justify-center text-[#FF5E1E] shrink-0">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                  Name
                </span>
                <span className="text-sm font-semibold text-white mt-0.5 block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {PERSONAL_INFO.brandName}
                </span>
              </div>
            </div>

            {/* Card 2: Degree */}
            <div className="p-4 rounded-2xl bg-[#141418] border border-[#23232A] flex items-start gap-3.5 hover:border-[#FF5E1E]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/25 flex items-center justify-center text-[#FF5E1E] shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                  Education
                </span>
                <span className="text-sm font-semibold text-white mt-0.5 block">
                  B.E. ECE (2023 - 2027)
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Sri Eshwar College of Engg
                </span>
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="p-4 rounded-2xl bg-[#141418] border border-[#23232A] flex items-start gap-3.5 hover:border-[#FF5E1E]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/25 flex items-center justify-center text-[#FF5E1E] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                  Email
                </span>
                <span className="text-xs font-semibold text-white mt-0.5 block truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            {/* Card 4: Location */}
            <div className="p-4 rounded-2xl bg-[#141418] border border-[#23232A] flex items-start gap-3.5 hover:border-[#FF5E1E]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/25 flex items-center justify-center text-[#FF5E1E] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                  Location
                </span>
                <span className="text-sm font-semibold text-white mt-0.5 block">
                  Coimbatore, TN, India
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  College Campus / Native: Kumbakonam
                </span>
              </div>
            </div>

            {/* Card 5: CGPA */}
            <div className="p-4 rounded-2xl bg-[#141418] border border-[#23232A] flex items-start gap-3.5 hover:border-[#FF5E1E]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/25 flex items-center justify-center text-[#FF5E1E] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                  Academics
                </span>
                <span className="text-sm font-semibold text-white mt-0.5 block">
                  CGPA: 8.02
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Up to 6th semester
                </span>
              </div>
            </div>

            {/* Card 6: Availability / Status */}
            <div className="p-4 rounded-2xl bg-[#141418] border border-[#23232A] flex items-start gap-3.5 hover:border-[#FF5E1E]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/25 flex items-center justify-center text-[#FF5E1E] shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                  Availability
                </span>
                <span className="text-sm font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Opportunities
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Internships &amp; Roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
