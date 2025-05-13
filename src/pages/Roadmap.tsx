
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Roadmap: React.FC = () => {
  const roadmapSteps = [
    {
      phase: "Initial Deployment",
      timeline: "Months 1-3",
      description: "Pilot program with select enterprise clients. Focus on single-department integrations and proof of concept.",
      goals: [
        "Onboard 5-10 initial enterprise clients",
        "Demonstrate AI and blockchain value propositions",
        "Collect initial performance data"
      ]
    },
    {
      phase: "Scalability Phase",
      timeline: "Months 4-6",
      description: "Expand platform capabilities and client base. Refine AI algorithms based on initial feedback.",
      goals: [
        "Expand to multiple departments within existing clients",
        "Develop advanced predictive analytics features",
        "Enhance blockchain authentication mechanisms"
      ]
    },
    {
      phase: "Market Expansion",
      timeline: "Months 7-12",
      description: "Aggressive growth strategy targeting key markets in USA, EU, and India.",
      goals: [
        "Reach 50+ enterprise clients",
        "Launch localized marketing campaigns",
        "Develop industry-specific solution packages"
      ]
    },
    {
      phase: "Advanced Integration",
      timeline: "Year 2",
      description: "Full ecosystem development with comprehensive cross-functional solutions.",
      goals: [
        "Complete end-to-end supply chain and marketing integration",
        "Develop AI Coach training programs",
        "Establish global partnership network"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-background to-slate-100 dark:from-background dark:to-slate-900/50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center gradient-text">
            Lavielogique Growth Roadmap
          </h1>
          
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <div 
                key={step.phase} 
                className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gananiya-teal">
                    {step.phase}
                  </h2>
                  <span className="text-muted-foreground">
                    {step.timeline}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Key Goals:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {step.goals.map((goal, goalIndex) => (
                      <li key={goalIndex}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;

