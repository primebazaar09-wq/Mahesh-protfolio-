import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../data/portfolioData';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              Endorsements & Collaborative Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Trusted by engineering leaders & founders.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Direct feedback from colleagues, directors, and technical co-founders on execution speed and architecture.
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(item => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div>
                <Quote className="w-6 h-6 text-indigo-400/80 mb-6" />
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/70">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-bold flex items-center justify-center font-display shrink-0">
                  {item.avatarText}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display leading-tight">{item.author}</h3>
                  <div className="text-xs text-zinc-400 leading-tight mt-0.5">
                    {item.role} · <span className="text-zinc-300">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
