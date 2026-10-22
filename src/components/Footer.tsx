import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { MaheshProfile } from '../data/maheshData';

interface FooterProps {
  profile: MaheshProfile;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenCustomizer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#070709] border-t border-white/[0.08] text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Location */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white font-display text-sm">{profile.name}</span>
          <span>·</span>
          <span>Jaipur, Rajasthan, India</span>
          <span>·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Center: Clean links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#workflow" className="hover:text-white transition-colors">
            Workflow
          </a>
          <a href="#journey" className="hover:text-white transition-colors">
            Journey
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Right: Personalize & Back to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCustomizer}
            className="text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4"
          >
            Studio Editor
          </button>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/10"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
