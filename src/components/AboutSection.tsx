import React from 'react';
import { Palette, Film, Smartphone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { MaheshProfile } from '../data/maheshData';

interface AboutSectionProps {
  profile: MaheshProfile;
  onOpenCustomizer: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onOpenCustomizer }) => {
  return (
    <section id="about" className="py-24 border-b border-white/[0.08] bg-[#070709] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & 3 Pillars */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
              About Me · The Multidisciplinary Approach
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight mb-6 [text-wrap:balance]">
              Where visual storytelling meets functional technology.
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">Creative Graphic Design</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Brand identity concepts, high-impact social media creatives, and marketing collateral engineered to capture immediate visual attention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-violet-500/30 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">Dynamic Video Editing</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      High-retention Reels, Shorts, and product videos paced with rhythm, engaging sound effects, and kinetic captions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">Functional App Development</h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      Android prototypes, reactive user interfaces, and AI concept integration built with modern front-end tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0d0d14] border border-white/10 relative">
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-medium mb-6">
                {profile.aboutIntro}
              </p>

              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                {profile.aboutPhilosophy.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <span>Based in Jaipur, India</span>
                  <span>·</span>
                  <span className="text-zinc-300">Working Worldwide</span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Discuss Your Project Goals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
