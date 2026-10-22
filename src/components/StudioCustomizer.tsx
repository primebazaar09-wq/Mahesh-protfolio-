import React, { useState } from 'react';
import { X, Save, RotateCcw, Plus, Trash2, Check, Download } from 'lucide-react';
import { MaheshProfile, ProjectItem, initialMaheshProfile } from '../data/maheshData';

interface StudioCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: MaheshProfile;
  onSaveProfile: (updated: MaheshProfile) => void;
  onResetDefaults: () => void;
}

export const StudioCustomizer: React.FC<StudioCustomizerProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<MaheshProfile>(profile);
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'contact'>('profile');
  const [savedStatus, setSavedStatus] = useState(false);

  // New project draft
  const [newProject, setNewProject] = useState<Partial<ProjectItem>>({
    title: '',
    subtitle: '',
    category: 'graphic-design',
    projectType: 'Design Portfolio',
    summary: '',
    tools: ['Photoshop', 'Illustrator'],
    role: 'Creative Designer',
    focus: 'Visual Identity & Creatives',
    deliverables: ['Custom Graphics', 'Source Files'],
    problem: 'Challenge to overcome...',
    approach: 'Strategic creative approach...',
    finalResult: 'Client outcome and delivery...',
    featured: false,
    accentColor: '#6366f1',
    previewType: 'design'
  });

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveProfile(formData);
    setSavedStatus(true);
    setTimeout(() => {
      setSavedStatus(false);
      onClose();
    }, 600);
  };

  const handleAddProject = () => {
    if (!newProject.title?.trim() || !newProject.summary?.trim()) return;

    const fullItem: ProjectItem = {
      id: `project-${Date.now()}`,
      title: newProject.title || 'Untitled Project',
      subtitle: newProject.subtitle || 'Creative Work',
      category: (newProject.category as any) || 'graphic-design',
      projectType: (newProject.projectType as any) || 'Design Portfolio',
      summary: newProject.summary || '',
      tools: newProject.tools || ['Figma'],
      role: newProject.role || 'Creative Designer',
      focus: newProject.focus || 'Design',
      deliverables: newProject.deliverables || ['Assets'],
      problem: newProject.problem || 'Problem statement',
      approach: newProject.approach || 'Approach taken',
      finalResult: newProject.finalResult || 'Delivered project',
      featured: false,
      accentColor: newProject.accentColor || '#6366f1',
      previewType: (newProject.previewType as any) || 'design'
    };

    setFormData({
      ...formData,
      projects: [fullItem, ...formData.projects]
    });

    setNewProject({
      title: '',
      subtitle: '',
      category: 'graphic-design',
      projectType: 'Design Portfolio',
      summary: '',
      tools: ['Photoshop', 'Illustrator'],
    });
  };

  const handleDeleteProject = (id: string) => {
    setFormData({
      ...formData,
      projects: formData.projects.filter(p => p.id !== id)
    });
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'mahesh_portfolio_config.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0c14] border border-white/15 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden text-zinc-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e0e18] border-b border-white/10">
          <div>
            <h2 className="text-base font-bold text-white font-display">
              Studio Configuration & Customizer
            </h2>
            <p className="text-xs text-zinc-400">
              Customize your profile, contact channels, WhatsApp number, and portfolio projects in real time.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="flex items-center px-6 border-b border-white/10 bg-[#070709] gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'profile'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Identity & Bio
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'contact'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            WhatsApp & Socials
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'projects'
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Projects ({formData.projects.length})
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Availability Badge Text
                  </label>
                  <input
                    type="text"
                    value={formData.availabilityStatus}
                    onChange={e => setFormData({ ...formData, availabilityStatus: e.target.value })}
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Hero Main Heading
                </label>
                <input
                  type="text"
                  value={formData.heroHeadline}
                  onChange={e => setFormData({ ...formData, heroHeadline: e.target.value })}
                  className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Hero Supporting Text
                </label>
                <textarea
                  rows={2}
                  value={formData.heroSupportingText}
                  onChange={e => setFormData({ ...formData, heroSupportingText: e.target.value })}
                  className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  About Me Introduction
                </label>
                <textarea
                  rows={3}
                  value={formData.aboutIntro}
                  onChange={e => setFormData({ ...formData, aboutIntro: e.target.value })}
                  className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Primary Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    WhatsApp Number (with country code)
                  </label>
                  <input
                    type="text"
                    value={formData.whatsappNumber}
                    onChange={e => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    placeholder="+919876543210"
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Instagram URL
                  </label>
                  <input
                    type="text"
                    value={formData.socials.instagram}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        socials: { ...formData.socials, instagram: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-xs text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    LinkedIn URL
                  </label>
                  <input
                    type="text"
                    value={formData.socials.linkedin}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        socials: { ...formData.socials, linkedin: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-xs text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="text"
                    value={formData.socials.github}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        socials: { ...formData.socials, github: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-xs text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Behance URL
                  </label>
                  <input
                    type="text"
                    value={formData.socials.behance}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        socials: { ...formData.socials, behance: e.target.value }
                      })
                    }
                    className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-xs text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Add Project Form */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-indigo-400" />
                  <span>Add New Showcase Project</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Project Title (e.g. NeoBrand)"
                    value={newProject.title}
                    onChange={e => setNewProject({ ...newProject, title: e.target.value })}
                    className="px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-xs text-zinc-100"
                  />
                  <input
                    type="text"
                    placeholder="Subtitle"
                    value={newProject.subtitle}
                    onChange={e => setNewProject({ ...newProject, subtitle: e.target.value })}
                    className="px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-xs text-zinc-100"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    value={newProject.category}
                    onChange={e => setNewProject({ ...newProject, category: e.target.value as any })}
                    className="px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-xs text-zinc-300"
                  >
                    <option value="graphic-design">Graphic Design</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="app-dev">App Development</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Project Type (e.g. Personal Project / Client Work)"
                    value={newProject.projectType}
                    onChange={e => setNewProject({ ...newProject, projectType: e.target.value as any })}
                    className="px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-xs text-zinc-100"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Short project summary..."
                  value={newProject.summary}
                  onChange={e => setNewProject({ ...newProject, summary: e.target.value })}
                  className="w-full px-3 py-2 bg-[#070709] border border-white/10 rounded-lg text-xs text-zinc-100 resize-none"
                />

                <button
                  type="button"
                  onClick={handleAddProject}
                  disabled={!newProject.title || !newProject.summary}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Insert Project</span>
                </button>
              </div>

              {/* Existing Projects List */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-zinc-400">CURRENT PROJECTS ({formData.projects.length})</div>
                {formData.projects.map(proj => (
                  <div
                    key={proj.id}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#070709] border border-white/10 text-xs"
                  >
                    <div>
                      <div className="font-bold text-white">{proj.title}</div>
                      <div className="text-zinc-400 text-[11px] font-mono">
                        {proj.projectType} · {proj.category}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-1.5 text-zinc-500 hover:text-rose-400 rounded-md hover:bg-white/[0.05] transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0e0e18] border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleExportJSON}
              className="px-3 py-1.5 text-xs text-zinc-300 hover:text-white bg-white/[0.04] border border-white/10 rounded-lg flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={onResetDefaults}
              className="px-3 py-1.5 text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2 bg-white hover:bg-zinc-200 text-[#070709] font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              {savedStatus ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save & Apply</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
