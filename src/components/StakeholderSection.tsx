
import React, { useEffect, useRef } from 'react';

const StakeholderSection: React.FC = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const stakeholders = [
    {
      type: "Logistics Teams",
      benefits: "Lower costs, optimized dispatch, predictive maintenance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gananiya-teal">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
    },
    {
      type: "Marketing Teams",
      benefits: "Campaign automation, customer behavior insights",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gananiya-teal">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
    },
    {
      type: "CXOs/Executives",
      benefits: "Real-time KPIs, sustainability compliance, risk management",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gananiya-teal">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      type: "End Users (Consumers)",
      benefits: "15-minute groceries, instant errands, live-tracked delivery",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gananiya-teal">
          <path d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6"></path>
          <path d="M12 3a5 5 0 0 1 5 5v3H7V8a5 5 0 0 1 5-5"></path>
        </svg>
      ),
    }
  ];

  return (
    <section id="value" className="py-20 relative bg-gray-50 dark:bg-gananiya-blue">
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-radial from-gananiya-teal/10 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll"
        >
          <h2 className="section-heading mx-auto">Stakeholder Value</h2>
          <p className="text-lg text-muted-foreground">
            Creating value for every stakeholder in the ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div 
              key={stakeholder.type}
              ref={(el) => (elementsRef.current[index + 1] = el)}
              className="flex bg-white dark:bg-gananiya-navy p-6 rounded-lg shadow animate-on-scroll"
              style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="mr-4 p-3 bg-gananiya-teal/10 rounded-lg self-start">
                {stakeholder.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{stakeholder.type}</h3>
                <p className="text-muted-foreground">{stakeholder.benefits}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholderSection;
