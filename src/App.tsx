import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { StatsCounter } from './components/StatsCounter';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { SocialConfigModal } from './components/SocialConfigModal';
import { ProjectItem } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [socialModalState, setSocialModalState] = useState<{
    isOpen: boolean;
    context?: string;
  }>({
    isOpen: false,
  });

  const handleOpenSocialInfo = (_platform: string, context?: string) => {
    setSocialModalState({
      isOpen: true,
      context,
    });
  };

  const handleCloseSocialModal = () => {
    setSocialModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-slate-100 flex flex-col font-sans selection:bg-[#FF5E1E]/30 selection:text-orange-300">
      {/* Sticky Navbar matching reference */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenResumeModal={() => setResumeModalOpen(true)}
          onOpenSocialInfo={handleOpenSocialInfo}
        />

        {/* About Section */}
        <About />

        {/* What I Do / Services */}
        <Services />

        {/* Tech Stack */}
        <Skills />

        {/* Featured Projects / Selected Work */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenSocialInfo={handleOpenSocialInfo}
        />

        {/* Horizontal Impact Stats Counter Bar */}
        <StatsCounter />

        {/* Verified Certifications */}
        <Certifications />

        {/* Research Publication & Coding Platforms */}
        <Achievements />

        {/* Practical Internships */}
        <Experience />

        {/* Contact / Get In Touch */}
        <Contact onOpenSocialInfo={handleOpenSocialInfo} />
      </main>

      {/* Footer */}
      <Footer onOpenSocialInfo={handleOpenSocialInfo} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenSocialInfo={handleOpenSocialInfo}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <SocialConfigModal
        isOpen={socialModalState.isOpen}
        onClose={handleCloseSocialModal}
        context={socialModalState.context}
      />
    </div>
  );
};

export default App;
