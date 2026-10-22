import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Check, ExternalLink } from 'lucide-react';
import { PortfolioProfile } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = async () => {
    const resumeText = `${profile.name} — ${profile.title}
Email: ${profile.email} | Location: ${profile.location}

EXECUTIVE SUMMARY
${profile.bio.join('\n\n')}

EXPERIENCE
${profile.experiences
  .map(
    exp => `${exp.role} @ ${exp.company} (${exp.period})
${exp.description}
Key Achievements:
${exp.achievements.map(a => `• ${a}`).join('\n')}
Tech: ${exp.technologies.join(', ')}`
  )
  .join('\n\n')}

KEY PROJECTS
${profile.projects
  .map(
    p => `${p.title} (${p.subtitle})
${p.summary}
Metrics: ${p.metrics.join(' | ')}
Stack: ${p.tags.join(', ')}`
  )
  .join('\n\n')}
`;
    try {
      await navigator.clipboard.writeText(resumeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white text-zinc-900 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden print:max-h-none print:shadow-none print:rounded-none">
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-100 border-b border-zinc-200 print:hidden">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
            <span>Curriculum Vitae</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-500">{profile.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-900 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Plaintext'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-200"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 font-sans print:p-0">
          {/* Resume Header */}
          <div className="border-b border-zinc-300 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight font-display">
              {profile.name}
            </h1>
            <p className="text-base font-semibold text-zinc-700 mt-1">
              {profile.title}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-600 font-mono mt-3">
              <span>{profile.email}</span>
              <span aria-hidden="true">·</span>
              <span>{profile.location}</span>
              <span aria-hidden="true">·</span>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="underline">
                GitHub
              </a>
              <span aria-hidden="true">·</span>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1.5 mb-3 font-display">
              Executive Summary
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {profile.tagline} {profile.bio[0]}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1.5 mb-4 font-display">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {profile.experiences.map(exp => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-bold text-zinc-900">
                      {exp.role} <span className="font-normal text-zinc-600">at</span> {exp.company}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500 tabular-nums">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-600">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-zinc-500 pt-1">
                    Technologies: {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Production Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1.5 mb-4 font-display">
              Selected Architecture & Engineering Projects
            </h2>
            <div className="space-y-4">
              {profile.projects.slice(0, 4).map(proj => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-bold text-zinc-900">
                      {proj.title} <span className="font-normal text-zinc-600">— {proj.subtitle}</span>
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">{proj.year}</span>
                  </div>
                  <p className="text-xs text-zinc-700 leading-relaxed">{proj.summary}</p>
                  <div className="text-[11px] font-mono text-zinc-600">
                    Verified Outcomes: {proj.metrics.join(' · ')} | Tech: {proj.tags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Capabilities */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-200 pb-1.5 mb-3 font-display">
              Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-700">
              {profile.skillGroups.map(group => (
                <div key={group.category} className="space-y-1">
                  <div className="font-semibold text-zinc-900">{group.category}</div>
                  <div className="text-zinc-600">
                    {group.skills.map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
