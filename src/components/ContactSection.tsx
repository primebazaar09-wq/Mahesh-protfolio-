import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Copy,
  Check,
  Send,
  ExternalLink,
  Instagram,
  Linkedin,
  Github,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { MaheshProfile } from '../data/maheshData';

interface ContactSectionProps {
  profile: MaheshProfile;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    serviceRequired: initialService || 'Graphic Design',
    budget: 'Flexible / Open to Discuss',
    deadline: '1-2 Weeks',
    projectDescription: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Update service if prop changes
  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const generateBriefText = () => {
    return `PROJECT INQUIRY FOR MAHESH
---------------------------------------
Client Name: ${formData.name || 'Not provided'}
Business/Brand: ${formData.businessName || 'Independent Creator / Individual'}
Service Required: ${formData.serviceRequired}
Budget Range: ${formData.budget}
Timeline: ${formData.deadline}

Project Details:
${formData.projectDescription || 'No description entered.'}
---------------------------------------
Sent via Mahesh Portfolio Website`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyBrief = async () => {
    if (!formData.name || !formData.projectDescription) {
      setValidationError('Please provide your name and project description before copying the brief.');
      return;
    }
    setValidationError(null);
    try {
      await navigator.clipboard.writeText(generateBriefText());
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    } catch {
      setCopiedBrief(true);
      setTimeout(() => setCopiedBrief(false), 2500);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.projectDescription.trim()) {
      setValidationError('Please describe your project.');
      return;
    }
    setValidationError(null);

    const cleanNumber = profile.whatsappNumber.replace(/[^0-9]/g, '');
    const brief = generateBriefText();
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(brief)}`;
    window.open(url, '_blank');
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!formData.projectDescription.trim()) {
      setValidationError('Please describe your project.');
      return;
    }
    setValidationError(null);

    const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceRequired} - ${formData.name}`);
    const body = encodeURIComponent(generateBriefText());
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-b border-white/[0.08] relative bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
                Initiate Project Discussion
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight mb-4 [text-wrap:balance]">
                Let's turn your vision into high-impact reality.
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Ready to elevate your visuals, produce magnetic videos, or build an intuitive mobile application? Get in touch directly via WhatsApp or email.
              </p>

              {/* Direct Email Card */}
              <div className="p-5 rounded-2xl bg-[#0c0c14] border border-white/10 mb-6 space-y-2">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  DIRECT EMAIL INBOX
                </div>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-indigo-300 font-mono transition-colors truncate"
                  >
                    {profile.email}
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-zinc-300 transition-colors flex items-center gap-1.5 shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* WhatsApp Quick Trigger Card */}
              <div className="p-5 rounded-2xl bg-[#0c0c14] border border-white/10 mb-8 space-y-2">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  INSTANT WHATSAPP DIRECT
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-bold text-zinc-200 font-mono">
                    {profile.whatsappNumber}
                  </div>

                  <a
                    href={`https://wa.me/${profile.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      profile.whatsappMessageTemplate
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open Chat</span>
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  PORTFOLIO & SOCIAL PLATFORMS
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-400" />
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>

                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>

                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-zinc-300" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>

                  <a
                    href={profile.socials.behance}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <span className="font-bold text-xs text-indigo-400">Bē</span>
                    <span>Behance</span>
                    <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] text-xs text-zinc-500 font-mono">
              Working remotely with clients across India & worldwide.
            </div>
          </div>

          {/* Right Column: Real Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0c0c14] border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white font-display">
                  Project Enquiry Brief
                </h3>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  DIRECT CLIENT CONVERSION
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the specifications below. You can send this instantly to Mahesh via WhatsApp or standard email.
              </p>

              {validationError && (
                <div className="mb-6 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium">
                  {validationError}
                </div>
              )}

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Your Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full px-3.5 py-2.5 bg-[#070709] border border-white/10 rounded-xl text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Business / Brand Name <span className="text-zinc-500 text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Acme Media or Creator Channel"
                      className="w-full px-3.5 py-2.5 bg-[#070709] border border-white/10 rounded-xl text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={e => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#070709] border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="App Development">App Development</option>
                      <option value="Multidisciplinary Project">Full Creative Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Approximate Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={e => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#070709] border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Flexible / Open to Discuss">Flexible / Open</option>
                      <option value="₹5,000 - ₹15,000 ($60 - $200)">₹5k - ₹15k ($60-$200)</option>
                      <option value="₹15,000 - ₹40,000 ($200 - $500)">₹15k - ₹40k ($200-$500)</option>
                      <option value="₹40,000+ ($500+)">₹40k+ ($500+)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Deadline / Timeline
                    </label>
                    <select
                      value={formData.deadline}
                      onChange={e => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#070709] border border-white/10 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-indigo-500"
                    >
                      <option value="1-2 Weeks">1 - 2 Weeks</option>
                      <option value="Urgent (< 1 Week)">Urgent (&lt; 1 Week)</option>
                      <option value="Flexible">Flexible Timeline</option>
                      <option value="Ongoing Monthly Retainer">Monthly Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Project Goals & Requirements <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.projectDescription}
                    onChange={e => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Describe what you want to create (e.g. 10 Instagram Reels with kinetic captions, brand identity concept for a clothing brand, or mobile app prototype)..."
                    className="w-full px-3.5 py-2.5 bg-[#070709] border border-white/10 rounded-xl text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {/* Dual Dispatch Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Chat</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="flex-1 py-3 px-4 bg-white hover:bg-zinc-200 text-[#070709] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email to Mahesh</span>
                  </button>
                </div>

                {/* Copy Plaintext Brief option */}
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={handleCopyBrief}
                    className="text-[11px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    {copiedBrief ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Project Brief Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Or click here to copy complete brief text to clipboard</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
