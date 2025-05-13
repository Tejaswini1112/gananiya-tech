
import React from 'react';
import Navbar from '@/components/Navbar';
import StakeholderSection from '@/components/StakeholderSection';
import Footer from '@/components/Footer';

const Stakeholders: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-10 text-center gradient-text">Our Stakeholders</h1>
          <StakeholderSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stakeholders;
