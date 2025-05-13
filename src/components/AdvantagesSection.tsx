
import React, { useEffect, useRef } from 'react';

const AdvantagesSection: React.FC = () => {
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

  const techStack = [
    {
      layer: "Backend",
      tools: "Node.js, Python (FastAPI), Kubernetes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gananiya-teal">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
    {
      layer: "Real-Time Data Processing",
      tools: "Kafka, Redis, WebSockets",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gananiya-teal">
          <path d="M16 16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8C6.9 2 6 2.9 6 4v10c0 1.1.9 2 2 2H8"></path>
          <path d="M16 20H8c-1.1 0-2-.9-2-2v-2"></path>
          <path d="M13 20h6c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-2"></path>
          <path d="M22 12h-4v4h4"></path>
          <path d="M18 8V4"></path>
          <path d="M15 22v-8"></path>
          <path d="M15 13l-2 1 2 1"></path>
          <path d="M6 18l-4-4 4-4"></path>
        </svg>
      ),
    },
    {
      layer: "Location & Mapping",
      tools: "Mapbox, Google Maps API",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gananiya-teal">
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z"></path>
        </svg>
      ),
    },
    {
      layer: "AI/ML Models",
      tools: "Demand prediction, Smart routing, Delivery optimization",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gananiya-teal">
          <path d="M12 2v8"></path>
          <path d="m16 6-4 4-4-4"></path>
          <path d="M8 18a4 4 0 1 0 8 0"></path>
          <path d="M19 12c0-3.87-3.13-7-7-7"></path>
          <path d="M5 12c0-3.87 3.13-7 7-7"></path>
        </svg>
      ),
    },
    {
      layer: "Frontend Apps",
      tools: "iOS (Swift), Android (Kotlin), ReactJS",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gananiya-teal">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
  ];

  return (
    <section id="technology" className="py-20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-gananiya-purple/10 to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll"
        >
          <h2 className="section-heading mx-auto">Unified Technology Stack</h2>
          <p className="text-lg text-muted-foreground">
            Powerful and scalable technologies behind our innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div 
              key={tech.layer}
              ref={(el) => (elementsRef.current[index + 1] = el)}
              className="tech-card animate-on-scroll"
              style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-gananiya-teal/10 rounded-lg">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-medium">{tech.layer}</h3>
              </div>
              <p className="text-muted-foreground">{tech.tools}</p>
            </div>
          ))}
        </div>

        <div 
          ref={(el) => (elementsRef.current[6] = el)}
          className="mt-16 p-6 rounded-lg bg-gradient-to-r from-gananiya-blue/10 to-gananiya-teal/10 backdrop-blur-sm animate-on-scroll"
          style={{ transitionDelay: "0.8s" }}
        >
          <h3 className="text-2xl font-semibold mb-4">Why Now?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-gananiya-teal mb-2">45%</p>
              <p>of US households use online grocery services weekly.</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-gananiya-teal mb-2">30%</p>
              <p>YoY growth in app-based delivery services in Urban India.</p>
            </div>
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-gananiya-purple mb-2">$4M</p>
              <p>Expected annual revenue potential within 2 years.</p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-gananiya-teal mr-2">🌱</span>
              <p>Post-pandemic economies demand faster, greener, and more transparent logistics.</p>
            </div>
            <div className="flex items-start">
              <span className="text-gananiya-teal mr-2">🛡️</span>
              <p>ESG Compliance: Built-in carbon tracking and sustainable sourcing transparency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
