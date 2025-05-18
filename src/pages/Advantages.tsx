
import React from 'react';
import Navbar from '@/components/Navbar';
import AdvantagesSection from '@/components/AdvantagesSection';
import Footer from '@/components/Footer';

const Advantages: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-10 text-center gradient-text">About Us</h1>
          <AdvantagesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Advantages;
