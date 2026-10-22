import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Layers, Film, Smartphone, Sparkles, Send } from 'lucide-react';
import { ProjectItem } from '../data/maheshData';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectServiceEnquiry: (serviceTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectServiceEnquiry,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside to close backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c14] border border-white/15 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col text-zinc-100">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#0c0c14]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-white font-medium">
              {project.projectType}
            </span>
            <span>·</span>
            <span className="text-zinc-400 capitalize">{project.category.replace('-', ' ')}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-10">
          {/* Title Area */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base text-zinc-300 font-medium">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-mono text-zinc-400">
              <div>
                <span className="text-zinc-600">Role: </span>
                <span className="text-zinc-200">{project.role}</span>
              </div>
              <span>·</span>
              <div>
                <span className="text-zinc-600">Focus: </span>
                <span className="text-zinc-200">{project.focus}</span>
              </div>
            </div>
          </div>

          {/* Project Summary Banner */}
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 leading-relaxed text-zinc-300 text-sm sm:text-base">
            {project.summary}
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3 font-mono">
                01. The Problem / Opportunity
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 font-mono">
                02. Creative & Technical Approach
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Deliverables Produced */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 font-mono">
              03. Deliverables Produced
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3.5 rounded-lg bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final Result / Learnings */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-950/20 via-zinc-950/40 to-transparent border border-indigo-500/30">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2 font-mono">
              04. Final Result & Key Insights
            </h3>
            <p className="text-sm text-zinc-200 leading-relaxed">
              {project.finalResult}
            </p>
          </div>

          {/* Tools Used */}
          <div>
            <h3 className="text-xs font-mono text-zinc-500 uppercase mb-3">Tools & Software Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-5 bg-[#070709] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-zinc-400">
            Interested in a similar project for your brand?
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onSelectServiceEnquiry(project.title);
              }}
              className="px-4 py-2 text-xs font-semibold text-[#070709] bg-white hover:bg-zinc-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Discuss Similar Project</span>
            </button>

            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
