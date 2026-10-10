import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  onOpenSocialInfo: (platform: string, context?: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'draft-ready'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a message';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Message must be at least 8 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Arjun,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setStatus('draft-ready');
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0C0C0E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Get In Touch header & info matching reference */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5E1E] block mb-2">
                LET&apos;S WORK TOGETHER
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Have a project in mind, an internship opportunity, or just want to say hello? Feel free to reach out.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#141418] border border-[#23232A] flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/25 flex items-center justify-center text-[#FF5E1E]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                      Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF7A29] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#1B1B22] text-slate-400 hover:text-white"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-[#141418] border border-[#23232A] flex items-center gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/25 flex items-center justify-center text-[#FF5E1E]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF7A29] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-[#141418] border border-[#23232A] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FF5E1E]/10 border border-[#FF5E1E]/25 flex items-center justify-center text-[#FF5E1E]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form matching reference design */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#131317] border border-[#222228] shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0C0C0E] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.name
                        ? 'border-rose-500'
                        : 'border-[#24242C] focus:border-[#FF5E1E]'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0C0C0E] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-rose-500'
                        : 'border-[#24242C] focus:border-[#FF5E1E]'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0C0C0E] border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-y ${
                      errors.message
                        ? 'border-rose-500'
                        : 'border-[#24242C] focus:border-[#FF5E1E]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] font-mono text-rose-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF5E1E] hover:bg-[#FF7338] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,94,30,0.4)] transition-all"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4" />
                </button>

                {status === 'draft-ready' && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      Mail client opened! You can also message Arjun directly at{' '}
                      <strong>{PERSONAL_INFO.email}</strong>.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
