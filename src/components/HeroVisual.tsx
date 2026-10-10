import React, { useState, useRef } from 'react';
import { Camera, Code2, Award, BookOpen, Star, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroVisual: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setCustomPhoto(uploadEvent.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none flex items-center justify-center">
      {/* Ambient background glow matching reference */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#FF5E1E]/20 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Visual Frame */}
      <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden flex items-end justify-center">
        {/* Dynamic Bold Orange Geometric Slash Shape behind developer (from reference design) */}
        <div
          className="absolute -top-6 right-0 w-64 h-[120%] bg-gradient-to-br from-[#FF7A29] via-[#FF5E1E] to-[#E0480E] shadow-[0_0_50px_rgba(255,94,30,0.4)] pointer-events-none"
          style={{
            transform: 'skewX(-16deg) rotate(8deg)',
            transformOrigin: 'top right',
          }}
        />

        {/* Diagonal Tech Grid Lines overlay on the orange chevron */}
        <div
          className="absolute top-0 right-0 w-64 h-full opacity-15 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]"
          style={{ transform: 'skewX(-16deg)' }}
        />

        {/* Developer Image / Silhouette Presentation */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-end">
          {customPhoto ? (
            <img
              src={customPhoto}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-end">
              {/* Stylized Modern Developer Silhouette matching the reference image */}
              <svg
                viewBox="0 0 340 420"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              >
                <defs>
                  <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#1E1E24" />
                    <stop offset="100%" stop-color="#111114" />
                  </linearGradient>
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#D99B77" />
                    <stop offset="100%" stop-color="#B27653" />
                  </linearGradient>
                </defs>

                {/* Torso & Black Hoodie matching reference */}
                <path
                  d="M 50 420 L 50 280 C 50 250 80 230 110 220 L 140 250 L 200 250 L 230 220 C 260 230 290 250 290 280 L 290 420 Z"
                  fill="url(#hoodieGrad)"
                  stroke="#2A2A33"
                  stroke-width="2"
                />

                {/* Hoodie details: Strings & V-Neck */}
                <path d="M 140 250 Q 170 290 200 250" fill="none" stroke="#0E0E12" stroke-width="4" />
                <path d="M 155 255 L 155 310" stroke="#FF5E1E" stroke-width="2" stroke-linecap="round" />
                <path d="M 185 255 L 185 305" stroke="#FF5E1E" stroke-width="2" stroke-linecap="round" />

                {/* Neck */}
                <rect x="150" y="195" width="40" height="40" rx="6" fill="url(#skinGrad)" />

                {/* Head */}
                <ellipse cx="170" cy="155" rx="46" ry="56" fill="url(#skinGrad)" />

                {/* Beard / Stubble shadow */}
                <path
                  d="M 132 165 C 132 205 208 205 208 165 C 205 185 135 185 132 165 Z"
                  fill="#2A1B14"
                  opacity="0.65"
                />

                {/* Hair */}
                <path
                  d="M 120 150 C 118 115 135 95 170 95 C 205 95 222 115 220 150 C 215 110 125 110 120 150 Z"
                  fill="#141416"
                />
                <path
                  d="M 130 125 C 150 95 190 95 210 125 C 190 105 150 105 130 125 Z"
                  fill="#26262B"
                />

                {/* Subtle Glasses / Eyes */}
                <circle cx="152" cy="150" r="3" fill="#141416" />
                <circle cx="188" cy="150" r="3" fill="#141416" />
                <path d="M 145 140 Q 155 138 165 142" stroke="#141416" stroke-width="2" fill="none" />
                <path d="M 175 142 Q 185 138 195 140" stroke="#141416" stroke-width="2" fill="none" />
              </svg>
            </div>
          )}

          {/* Camera Upload Button Overlay */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-4 right-4 z-30 p-2.5 rounded-full bg-[#111114]/90 border border-[#FF5E1E]/40 text-[#FF5E1E] hover:bg-[#FF5E1E] hover:text-white transition-all shadow-lg"
            title="Upload your photograph (stored locally in browser session)"
          >
            <Camera className="w-4 h-4" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoUpload}
          />
        </div>

        {/* Floating Badge 1: 8.02 CGPA (Matching reference upper right badge) */}
        <div className="absolute top-6 right-2 z-20 px-3.5 py-2 rounded-xl bg-[#111114]/90 border border-[#2A2A33] backdrop-blur-md shadow-2xl flex items-center gap-2.5 animate-float">
          <div className="w-8 h-8 rounded-lg bg-[#FF5E1E]/20 border border-[#FF5E1E]/30 flex items-center justify-center text-[#FF5E1E]">
            <Star className="w-4 h-4 fill-[#FF5E1E]" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Academics
            </div>
            <div className="text-sm font-heading font-extrabold text-white">
              8.02 <span className="text-[10px] text-[#FF5E1E]">CGPA</span>
            </div>
          </div>
        </div>

        {/* Floating Badge 2: 320+ LeetCode with Code Bracket (Matching reference left badge) */}
        <div
          className="absolute bottom-8 left-2 z-20 px-3.5 py-2 rounded-xl bg-[#111114]/90 border border-[#2A2A33] backdrop-blur-md shadow-2xl flex items-center gap-2.5"
          style={{ animation: 'float 6s ease-in-out infinite 1s' }}
        >
          <div className="w-8 h-8 rounded-lg bg-[#FF5E1E]/20 border border-[#FF5E1E]/30 flex items-center justify-center text-[#FF5E1E]">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              LeetCode
            </div>
            <div className="text-sm font-heading font-extrabold text-white">
              320+ <span className="text-[10px] text-slate-400">Solved</span>
            </div>
          </div>
        </div>

        {/* Floating Badge 3: IEEE 6G Author (Matching reference style) */}
        <div
          className="absolute bottom-24 right-2 z-20 px-3 py-1.5 rounded-lg bg-[#111114]/90 border border-[#FF5E1E]/30 backdrop-blur-md text-xs font-mono text-white flex items-center gap-1.5 shadow-lg"
          style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}
        >
          <BookOpen className="w-3.5 h-3.5 text-[#FF5E1E]" />
          <span>IEEE 6G Author</span>
        </div>
      </div>
    </div>
  );
};
