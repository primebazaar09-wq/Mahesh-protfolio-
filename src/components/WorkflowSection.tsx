import React from 'react';
import { Compass, Calendar, Code, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { WorkflowStep } from '../data/maheshData';

interface WorkflowSectionProps {
  workflow: WorkflowStep[];
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ workflow }) => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case '02':
        return <Calendar className="w-5 h-5 text-violet-400" />;
      case '03':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case '04':
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      case '05':
      default:
        return <Send className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="workflow" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
              Collaborative Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              A transparent, 5-step creative workflow.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Every project scope, deliverables, pricing, revision rounds, and turnaround timeline are agreed upon before work starts.
          </p>
        </div>

        {/* 5-Step Cards Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {workflow.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#0c0c14] border border-white/10 hover:border-white/20 transition-all duration-200 group"
            >
              <div>
                {/* Step index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                    {getStepIcon(step.stepNumber)}
                  </div>
                  <span className="text-2xl font-black text-zinc-600 font-display">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-indigo-300 transition-colors">
                  {step.title}
                </h3>
                <div className="text-xs font-medium text-zinc-400 mb-4 leading-tight">
                  {step.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Key Deliverable */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Milestone Outcome</div>
                <div className="text-xs font-medium text-zinc-200 flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{step.keyDeliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Agreement Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/20 via-zinc-950 to-transparent border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-zinc-300">
            <span className="font-semibold text-white">Client Assurance:</span> No hidden fees, unexpected delays, or unagreed scopes. You are involved at every review milestone.
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-white text-[#070709] hover:bg-zinc-200 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Start at Step 1
          </a>
        </div>
      </div>
    </section>
  );
};
