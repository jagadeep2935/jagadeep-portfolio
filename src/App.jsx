import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LoadingSequence from './components/LoadingSequence';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StackConstellation from './components/StackConstellation';
import ProjectsCenterpiece from './components/ProjectsCenterpiece';
import LearningJourney from './components/LearningJourney';
import CertificationsEducation from './components/CertificationsEducation';
import CommunityImpact from './components/CommunityImpact';
import ResumeSection from './components/ResumeSection';
import ContactFooter from './components/ContactFooter';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'community', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#090A0F] text-[#F8FAFC] min-h-screen relative font-sans selection:bg-[#00F5D4]/30 selection:text-[#00F5D4]">
      
      {/* Custom Interactive Precision Cursor */}
      <CustomCursor />

      {/* Boot Loading Sequence (Dismissible) */}
      {loading && (
        <LoadingSequence onComplete={() => setLoading(false)} />
      )}

      {/* Modern Fixed Navbar */}
      <Navbar 
        activeSection={activeSection} 
      />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <StackConstellation />
        <ProjectsCenterpiece />
        <LearningJourney />
        <CertificationsEducation />
        <CommunityImpact />
        <ResumeSection 
          isModalOpen={isResumeModalOpen} 
          setIsModalOpen={setIsResumeModalOpen} 
        />
      </main>

      {/* Contact Section & Institutional Footer */}
      <ContactFooter />
    </div>
  );
}
