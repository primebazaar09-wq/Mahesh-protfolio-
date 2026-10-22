/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialMaheshProfile, MaheshProfile, ProjectItem } from './data/maheshData';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SkillsSection } from './components/SkillsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StudioCustomizer } from './components/StudioCustomizer';

const STORAGE_KEY = 'mahesh_creative_portfolio_v2';

export default function App() {
  const [profile, setProfile] = useState<MaheshProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return initialMaheshProfile;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [enquiryService, setEnquiryService] = useState<string>('Graphic Design');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveProfile = (updated: MaheshProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      showToast('Portfolio configuration updated & saved!');
    } catch {
      // ignore
    }
  };

  const handleResetDefaults = () => {
    setProfile(initialMaheshProfile);
    try {
      localStorage.removeItem(STORAGE_KEY);
      showToast('Reset portfolio to initial verified defaults.');
    } catch {
      // ignore
    }
  };

  const handleSelectServiceFilter = (categoryKey: 'graphic-design' | 'video-editing' | 'app-dev') => {
    setActiveCategory(categoryKey);
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceEnquiry = (serviceTitle: string) => {
    setEnquiryService(serviceTitle);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Preloader with geometric emblem */}
      {isLoading && (
        <Preloader name={profile.name} onLoaded={() => setIsLoading(false)} />
      )}

      {/* Performance-conscious Desktop Custom Cursor */}
      <CustomCursor />

      {/* Ambient background particles & grid canvas */}
      <BackgroundCanvas />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-2xl animate-fadeIn">
          {toastMessage}
        </div>
      )}

      {/* Top Navigation Bar */}
      <Header
        profile={profile}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      <main className="relative z-10">
        {/* Cinematic Hero Section with Glow & Portrait */}
        <Hero
          profile={profile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* About Me & Multidisciplinary Pillars */}
        <AboutSection
          profile={profile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 3 Core Services: Graphic Design, Video Editing, App Dev */}
        <ServicesSection
          services={profile.services}
          onSelectServiceFilter={handleSelectServiceFilter}
          onSelectServiceEnquiry={handleSelectServiceEnquiry}
        />

        {/* Filterable Project Portfolio */}
        <ProjectsSection
          projects={profile.projects}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectProject={setSelectedProject}
        />

        {/* Honest Skills & Tools Matrix */}
        <SkillsSection
          skills={profile.skills}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 5-Step Collaborative Workflow */}
        <WorkflowSection workflow={profile.workflow} />

        {/* My Journey (Honest Experience & Roadmap) */}
        <JourneySection
          journey={profile.journey}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Client Conversion & Real Enquiry Form */}
        <ContactSection
          profile={profile}
          initialService={enquiryService}
        />
      </main>

      {/* Quiet Footer */}
      <Footer
        profile={profile}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Detailed Project Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectServiceEnquiry={handleSelectServiceEnquiry}
      />

      {/* Live Studio Configuration Customizer */}
      <StudioCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
