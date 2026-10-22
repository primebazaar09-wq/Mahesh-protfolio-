import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Video, Smartphone, MapPin, CheckCircle2 } from 'lucide-react';
import { MaheshProfile } from '../data/maheshData';

interface HeroProps {
  profile: MaheshProfile;
  onOpenCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenCustomizer }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Split Grid: Left = Typographic Impact & Narrative, Right = Glowing Cinematic Portrait Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Tagline with Location & Availability */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300 mb-6 backdrop-blur-sm">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{profile.location}</span>
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {profile.availabilityStatus}
              </span>
            </div>

            {/* Main Headline - Required exact text with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] font-display mb-6 [text-wrap:balance]">
              {profile.heroHeadline}
            </h1>

            {/* Supporting Text - Required exact text */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8 font-normal">
              {profile.heroSupportingText}
            </p>

            {/* Discipline Pills - Non-pill clean unboxed indicators */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-zinc-400 mb-9 pb-6 border-b border-white/[0.08] w-full max-w-xl">
              <div className="flex items-center gap-1.5 text-zinc-200">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Graphic Design</span>
              </div>
              <span className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5 text-zinc-200">
                <Video className="w-3.5 h-3.5 text-violet-400" />
                <span>Video Editing</span>
              </div>
              <span className="text-zinc-700">·</span>
              <div className="flex items-center gap-1.5 text-zinc-200">
                <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                <span>App Development</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 text-xs sm:text-sm font-bold text-[#070709] bg-white hover:bg-zinc-200 rounded-xl transition-all shadow-xl shadow-white/10 flex items-center gap-2 group"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-zinc-400" />
              </a>

              <button
                onClick={onOpenCustomizer}
                className="px-3.5 py-3 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                title="Edit portfolio details"
              >
                Personalize Info
              </button>
            </div>
          </div>

          {/* Right Column: High-Tech Glowing Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Ambient radial halo behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/30 via-violet-600/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              {/* Futuristic Glass Container */}
              <div className="relative rounded-2xl bg-[#0c0c12]/90 border border-white/15 p-4 sm:p-5 shadow-2xl backdrop-blur-xl overflow-hidden group">
                {/* Tech corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-indigo-500/80 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-indigo-500/80 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-indigo-500/80 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-indigo-500/80 pointer-events-none" />

                {/* Portrait Image Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-white/10">
                  <img
                    src={profile.portraitUrl}
                    alt={`${profile.name} - Graphic Designer, Video Editor & App Developer`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle vignette gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent opacity-80" />

                  {/* Overlaid status badge inside portrait */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-[#070709]/80 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-md bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center font-bold text-xs text-indigo-300 font-display">
                        M
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white leading-tight font-display">{profile.name}</div>
                        <div className="text-[10px] text-zinc-400 font-mono leading-tight">Digital Creative</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        Open for Projects
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-card multi-disciplinary summary */}
                <div className="pt-3.5 flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                  <span>Visuals · Videos · Code</span>
                  <span className="text-zinc-500">Remote Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
