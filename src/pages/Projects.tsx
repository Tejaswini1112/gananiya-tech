
import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectsSection from '@/components/ProjectsSection';
import TechStack3D from '@/components/TechStack3D';
import Footer from '@/components/Footer';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-10 text-center gradient-text">Our Projects</h1>
          <TechStack3D />
          <div className="mt-16">
            <ProjectsSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
