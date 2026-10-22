import React from 'react';
import { Palette, Film, Smartphone, Compass, Sparkles } from 'lucide-react';
import { SkillCategory } from '../data/maheshData';

interface SkillsSectionProps {
  skills: SkillCategory[];
  onOpenCustomizer: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, onOpenCustomizer }) => {
  const getIcon = (title: string) => {
    if (title.includes('Graphic')) return <Palette className="w-5 h-5 text-indigo-400" />;
    if (title.includes('Video')) return <Film className="w-5 h-5 text-violet-400" />;
    if (title.includes('App')) return <Smartphone className="w-5 h-5 text-cyan-400" />;
    return <Compass className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="skills" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
              Toolbox & Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Tools, software & creative disciplines.
            </h2>
          </div>
          <div className="text-sm text-zinc-400 max-w-md">
            An honest representation of the software, frameworks, and design principles I use to deliver client work.
          </div>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(category => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                  {getIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Tool tags list (honest tags, no fabricated percentages) */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {category.tools.map(tool => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-300 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 p-5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Continuously refining workflows with new tools, AI software, and mobile frameworks.</span>
          </div>

          <button
            onClick={onOpenCustomizer}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4 shrink-0"
          >
            Customize your tools list →
          </button>
        </div>
      </div>
    </section>
  );
};
