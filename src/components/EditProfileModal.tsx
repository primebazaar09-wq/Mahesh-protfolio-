import React, { useState } from 'react';
import { X, Save, RotateCcw, Plus, Trash2, Check, Download, Upload } from 'lucide-react';
import { PortfolioProfile, Project, initialPortfolioData } from '../data/portfolioData';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  onSaveProfile: (updated: PortfolioProfile) => void;
  onResetDefaults: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<PortfolioProfile>(profile);
  const [activeTab, setActiveTab] = useState<'basics' | 'projects' | 'theme'>('basics');
  const [savedNotification, setSavedNotification] = useState(false);

  // New project state
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    subtitle: '',
    category: 'web',
    year: '2026',
    role: 'Lead Engineer',
    summary: '',
    metrics: ['Sub-second latency', 'High availability'],
    tags: ['React', 'TypeScript'],
    featured: false,
    caseStudy: {
      overview: 'Project overview...',
      challenge: 'Main challenge...',
      solution: 'Technical solution...',
      architecture: ['Core layer: TypeScript'],
      results: ['Delivered on schedule']
    }
  });

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveProfile(formData);
    setSavedNotification(true);
    setTimeout(() => {
      setSavedNotification(false);
      onClose();
    }, 600);
  };

  const handleAddProject = () => {
    if (!newProject.title || !newProject.summary) return;

    const fullProject: Project = {
      id: `project-${Date.now()}`,
      title: newProject.title || 'Untitled Project',
      subtitle: newProject.subtitle || 'Production Application',
      category: (newProject.category as any) || 'web',
      year: newProject.year || '2026',
      role: newProject.role || 'Software Engineer',
      summary: newProject.summary || '',
      metrics: newProject.metrics || ['100% Reliability'],
      tags: newProject.tags || ['TypeScript'],
      featured: false,
      caseStudy: newProject.caseStudy || {
        overview: 'Project description',
        challenge: 'Key hurdle resolved',
        solution: 'Modern architectural pattern',
        architecture: ['Built with modern web standards'],
        results: ['Validated in production']
      }
    };

    setFormData({
      ...formData,
      projects: [fullProject, ...formData.projects]
    });

    setNewProject({
      title: '',
      subtitle: '',
      category: 'web',
      year: '2026',
      role: 'Lead Engineer',
      summary: '',
      metrics: ['Sub-second latency'],
      tags: ['TypeScript'],
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
    downloadAnchor.setAttribute('download', `portfolio_${formData.name.toLowerCase().replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden text-zinc-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
          <div>
            <h2 className="text-base font-bold text-white font-display">
              Customize Your Portfolio
            </h2>
            <p className="text-xs text-zinc-400">
              Personalize your name, bio, projects, and contact info in real time.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="flex items-center px-6 border-b border-zinc-800 bg-zinc-950 gap-4 text-xs font-medium">
          <button
            onClick={() => setActiveTab('basics')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'basics'
                ? 'border-indigo-500 text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Profile & Bio
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'projects'
                ? 'border-indigo-500 text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Projects Manager ({formData.projects.length})
          </button>
          <button
            onClick={() => setActiveTab('theme')}
            className={`py-3 border-b-2 transition-colors ${
              activeTab === 'theme'
                ? 'border-indigo-500 text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Theme & Colorway
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'basics' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Primary Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Professional Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Location / Status
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Tagline (Hero Summary)
                </label>
                <textarea
                  rows={2}
                  value={formData.tagline}
                  onChange={e => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Primary Biography (About Section)
                </label>
                <textarea
                  rows={4}
                  value={formData.bio[0]}
                  onChange={e => {
                    const newBio = [...formData.bio];
                    newBio[0] = e.target.value;
                    setFormData({ ...formData, bio: newBio });
                  }}
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-100 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="hireCheckbox"
                  checked={formData.availableForHire}
                  onChange={e => setFormData({ ...formData, availableForHire: e.target.checked })}
                  className="w-4 h-4 rounded text-indigo-600 bg-zinc-900 border-zinc-700"
                />
                <label htmlFor="hireCheckbox" className="text-xs text-zinc-300 font-medium">
                  Currently open to hire / new roles banner enabled
                </label>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Add New Project Box */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <div className="text-xs font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Plus className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Add New Showcase Project</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Project Name (e.g. Apex Data)"
                    value={newProject.title}
                    onChange={e => setNewProject({ ...newProject, title: e.target.value })}
                    className="px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-100"
                  />
                  <input
                    type="text"
                    placeholder="Subtitle (e.g. Real-Time Telemetry Engine)"
                    value={newProject.subtitle}
                    onChange={e => setNewProject({ ...newProject, subtitle: e.target.value })}
                    className="px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-100"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    value={newProject.category}
                    onChange={e => setNewProject({ ...newProject, category: e.target.value as any })}
                    className="px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-300"
                  >
                    <option value="web">Web Application</option>
                    <option value="systems">Systems & Cloud</option>
                    <option value="mobile">Mobile & UI</option>
                    <option value="opensource">Open Source</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Year (e.g. 2026)"
                    value={newProject.year}
                    onChange={e => setNewProject({ ...newProject, year: e.target.value })}
                    className="px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-100"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Short project summary..."
                  value={newProject.summary}
                  onChange={e => setNewProject({ ...newProject, summary: e.target.value })}
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-100 resize-none"
                />

                <button
                  type="button"
                  onClick={handleAddProject}
                  disabled={!newProject.title || !newProject.summary}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Insert Project into Portfolio</span>
                </button>
              </div>

              {/* Existing Projects List */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400">CURRENT PROJECTS ({formData.projects.length})</div>
                {formData.projects.map(proj => (
                  <div
                    key={proj.id}
                    className="flex items-center justify-between p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs"
                  >
                    <div>
                      <div className="font-bold text-white">{proj.title}</div>
                      <div className="text-zinc-400 text-[11px] font-mono">{proj.subtitle} · {proj.category}</div>
                    </div>

                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-1.5 text-zinc-500 hover:text-rose-400 rounded-md hover:bg-zinc-800 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'theme' && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400">
                Choose a visual theme direction aligned with the Frontend Design Constitution:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'obsidian', title: 'Obsidian Noir', desc: 'Deep zinc canvas (#09090b) with electric indigo & violet accents' },
                  { id: 'minimal-light', title: 'Studio White', desc: 'Modern gallery off-white canvas with stark high-contrast typography' },
                  { id: 'emerald', title: 'Cyber Terminal', desc: 'Deep slate background with emerald green high-precision metrics' },
                  { id: 'monograph', title: 'Editorial Monograph', desc: 'Warm paper tinted surface with dark navy text and burgundy touches' },
                ].map(th => (
                  <button
                    key={th.id}
                    onClick={() => setFormData({ ...formData, theme: th.id as any })}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      formData.theme === th.id
                        ? 'border-indigo-500 bg-indigo-950/20 shadow-md'
                        : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white font-display">{th.title}</div>
                    <div className="text-[11px] text-zinc-400 mt-1">{th.desc}</div>
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <button
                  onClick={handleExportJSON}
                  className="px-3 py-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 rounded-lg flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Profile JSON</span>
                </button>

                <button
                  onClick={onResetDefaults}
                  className="px-3 py-1.5 text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All to Defaults</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
          >
            {savedNotification ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save & Apply Changes</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
