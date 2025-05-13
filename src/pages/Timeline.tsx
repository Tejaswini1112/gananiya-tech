
import React from 'react';
import Navbar from '@/components/Navbar';
import TimelineSection from '@/components/TimelineSection';
import Footer from '@/components/Footer';

const Timeline: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-background to-slate-100 dark:from-background dark:to-slate-900/50">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-10 text-center gradient-text">Our Journey</h1>
          <TimelineSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Timeline;
