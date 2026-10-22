import React from 'react';
import { Compass, Milestone, Flame, TrendingUp, Sparkles, Plus } from 'lucide-react';
import { JourneyMilestone } from '../data/maheshData';

interface JourneySectionProps {
  journey: JourneyMilestone[];
  onOpenCustomizer: () => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ journey, onOpenCustomizer }) => {
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'Current Focus':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Milestone':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'Skill Expansion':
        return 'text-violet-400 bg-violet-500/10 border-violet-500/20';
      case 'Vision':
      default:
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
    }
  };

  return (
    <section id="journey" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
              Credibility & Authentic Growth
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              My Journey.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            An honest chronicle of personal prototypes, creative projects, technical skills acquired, and my roadmap for client collaborations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {journey.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0c0c14] border-2 border-indigo-500 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(99,102,241,0.5)]" />

              <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-white/20 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${getBadgeStyle(item.type)}`}>
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-4 max-w-3xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/[0.06]">
                  {item.tags.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-white/[0.03] text-[11px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editable Journey Footer */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-xs text-zinc-300 hover:text-white transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-indigo-400" />
            <span>Add Real Client Projects, Certifications & Testimonials as Earned</span>
          </button>
        </div>
      </div>
    </section>
  );
};
