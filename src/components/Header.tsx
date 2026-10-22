import React, { useState, useEffect } from 'react';
import { Menu, X, Sliders, ArrowUpRight } from 'lucide-react';
import { MaheshProfile } from '../data/maheshData';

interface HeaderProps {
  profile: MaheshProfile;
  onOpenCustomizer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ profile, onOpenCustomizer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Strict Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <a
          href="#"
          className="group flex items-center gap-3 text-lg font-bold tracking-tight text-white hover:text-indigo-300 transition-colors whitespace-nowrap shrink-0 font-display"
        >
          {/* Futuristic geometric badge icon */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-500 p-[1px] shadow-sm shadow-indigo-500/20">
            <div className="w-full h-full bg-[#0d0d12] rounded-[11px] flex items-center justify-center font-display font-black text-sm text-white group-hover:scale-105 transition-transform">
              M
            </div>
          </div>
          <div className="flex flex-col">
            <span className="leading-none">{profile.name}</span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">
              Jaipur · Digital Creative
            </span>
          </div>
        </a>

        {/* Zone 2: 5 single-line clean text nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-zinc-400">
          <a
            href="#services"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Skills & Tools
          </a>
          <a
            href="#workflow"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Workflow
          </a>
          <a
            href="#journey"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            My Journey
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action + Availability + Quick Studio Customizer */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Availability signal */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="truncate max-w-[170px]">{profile.availabilityStatus}</span>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-[#070709] bg-white hover:bg-zinc-200 rounded-lg transition-all shadow-md shadow-white/5 flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onOpenCustomizer}
            title="Edit Portfolio (Change info, WhatsApp, email, links)"
            className="p-2 text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-lg transition-colors shrink-0"
            aria-label="Customize Portfolio Settings"
          >
            <Sliders className="w-4 h-4" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm font-medium animate-fadeIn">
          <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{profile.availabilityStatus}</span>
          </div>

          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            Projects & Case Studies
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            Skills & Tools
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            5-Step Workflow
          </a>
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            My Journey & Credibility
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-1"
          >
            Contact & Enquiries
          </a>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-indigo-400 font-semibold"
            >
              Start a Project →
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Edit Info</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
