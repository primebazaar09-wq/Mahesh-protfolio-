import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ExperienceItem } from '../data/portfolioData';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 border-b border-zinc-900 bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              Career Trajectory & Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Engineering experience across scale & complexity.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Leading engineering squads, defining system architectures, and delivering dependable software from zero to millions of users.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200"
            >
              {/* Top Row: Period & Role */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-indigo-300 font-medium mt-1">
                    <span>{exp.company}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-zinc-400 flex items-center gap-1 text-xs">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-950 px-3 py-1 rounded-md border border-zinc-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-5 max-w-4xl">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="space-y-2 mb-6">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-4 border-t border-zinc-800/60 text-xs font-mono text-zinc-400">
                <span className="text-zinc-500">Core Stack:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <React.Fragment key={tech}>
                    <span className="text-zinc-300">{tech}</span>
                    {tIdx < exp.technologies.length - 1 && <span className="text-zinc-700">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
