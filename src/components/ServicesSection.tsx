import React from 'react';
import { Palette, Film, Smartphone, ArrowUpRight, Check } from 'lucide-react';
import { ServiceItem } from '../data/maheshData';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectServiceFilter: (categoryKey: 'graphic-design' | 'video-editing' | 'app-dev') => void;
  onSelectServiceEnquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectServiceFilter,
  onSelectServiceEnquiry,
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'design':
        return <Palette className="w-6 h-6 text-indigo-400" />;
      case 'video':
        return <Film className="w-6 h-6 text-violet-400" />;
      case 'code':
      default:
        return <Smartphone className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'design':
        return 'hover:border-indigo-500/50 hover:shadow-indigo-500/10';
      case 'video':
        return 'hover:border-violet-500/50 hover:shadow-violet-500/10';
      case 'code':
      default:
        return 'hover:border-cyan-500/50 hover:shadow-cyan-500/10';
    }
  };

  return (
    <section id="services" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
              Core Capabilities & Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Three creative disciplines. One cohesive vision.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Click on any discipline to filter matching project case studies or start a targeted project enquiry.
          </p>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              className={`flex flex-col justify-between rounded-2xl bg-[#0c0c14] border border-white/10 p-7 sm:p-8 transition-all duration-300 shadow-xl ${getBorderColor(
                service.iconType
              )} group`}
            >
              <div>
                {/* Header with icon & index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                    {getIcon(service.iconType)}
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    SERVICE // 0{service.id === 'graphic-design' ? '1' : service.id === 'video-editing' ? '2' : '3'}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-2xl font-bold text-white font-display mb-3 group-hover:text-indigo-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2.5 mb-8">
                  {service.capabilities.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectServiceFilter(service.categoryKey)}
                  className="text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>View Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
                </button>

                <button
                  onClick={() => onSelectServiceEnquiry(service.title)}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white text-zinc-200 hover:text-[#070709] border border-white/10 text-xs font-semibold transition-all"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
