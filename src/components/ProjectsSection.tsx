import React, { useState, useMemo } from 'react';
import { Layers, Film, Smartphone, ArrowUpRight, Search, FileText, Sparkles, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../data/maheshData';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  activeCategory,
  onCategoryChange,
  onSelectProject,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesCategory =
        activeCategory === 'all' || p.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [projects, activeCategory, searchQuery]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'graphic-design':
        return <Layers className="w-3.5 h-3.5 text-indigo-400" />;
      case 'video-editing':
        return <Film className="w-3.5 h-3.5 text-violet-400" />;
      case 'app-dev':
      default:
        return <Smartphone className="w-3.5 h-3.5 text-cyan-400" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'graphic-design':
        return 'Graphic Design';
      case 'video-editing':
        return 'Video Editing';
      case 'app-dev':
      default:
        return 'App Development';
    }
  };

  return (
    <section id="projects" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2 font-mono">
              Creative Portfolio & Demonstrations
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
              Selected projects, concepts & prototypes.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Clearly labeled personal projects, visual design collections, brand concepts, and prototype apps.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'graphic-design', label: 'Graphic Design' },
              { id: 'video-editing', label: 'Video Editing' },
              { id: 'app-dev', label: 'App Development' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => onCategoryChange(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-white text-[#070709] shadow-md shadow-white/10'
                    : 'text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] max-w-xs">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by tool, keyword..."
              className="w-full pl-9 pr-4 py-2 bg-[#0c0c14] border border-white/10 rounded-lg text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-white/10 rounded-2xl p-8">
            <p className="text-sm text-zinc-400 mb-2">No projects match the selected category or search filter.</p>
            <button
              onClick={() => {
                onCategoryChange('all');
                setSearchQuery('');
              }}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const isLarge = project.featured && index === 0;

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group relative cursor-pointer flex flex-col justify-between rounded-2xl bg-[#0c0c14] hover:bg-[#10101a] border border-white/10 hover:border-white/25 p-6 sm:p-7 transition-all duration-300 shadow-xl hover:-translate-y-1 ${
                    isLarge ? 'md:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Card Header & Preview Banner */}
                  <div>
                    {/* Visual Card Banner / Mockup Preview */}
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 mb-6 flex items-center justify-center p-6 text-center">
                      {/* Ambient background glow based on accent color */}
                      <div
                        className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity blur-xl"
                        style={{ backgroundColor: project.accentColor }}
                      />

                      {/* Mockup visualization icons */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/20"
                          style={{ backgroundColor: `${project.accentColor}25` }}
                        >
                          {project.category === 'app-dev' ? (
                            <Smartphone className="w-7 h-7 text-cyan-300" />
                          ) : project.category === 'video-editing' ? (
                            <Film className="w-7 h-7 text-violet-300" />
                          ) : (
                            <Layers className="w-7 h-7 text-indigo-300" />
                          )}
                        </div>
                        <div className="text-xs font-mono tracking-wider text-zinc-300 uppercase">
                          {project.focus}
                        </div>
                      </div>

                      {/* Pill indicating transparent classification */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#070709]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
                        {project.projectType}
                      </div>

                      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-zinc-400 bg-black/60 px-2 py-0.5 rounded">
                        Click for Case Study
                      </div>
                    </div>

                    {/* Metadata Header (unboxed text with dots) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                      <span className="flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        <span>{getCategoryLabel(project.category)}</span>
                      </span>
                      <span>·</span>
                      <span className="text-zinc-500">{project.role}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-indigo-200 transition-colors mb-1 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-400 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>
                  </div>

                  {/* Card Footer: Tools & View Action */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tools.slice(0, 3).map(tool => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-zinc-300"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-[10px] font-mono text-zinc-500">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-semibold text-white group-hover:text-indigo-300 shrink-0">
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
