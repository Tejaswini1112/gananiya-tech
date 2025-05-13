
import React, { useEffect, useRef } from 'react';

const TimelineSection: React.FC = () => {
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

  const timelineSteps = [
    {
      phase: "MVP Development",
      timeline: "3 months",
      description: "Building the core functionality of Lavielogique and initial versions of WinkIt + Dropit."
    },
    {
      phase: "Pilot Programs",
      timeline: "2 months",
      description: "Testing in select locations in India & USA with early adopters and partners."
    },
    {
      phase: "Metro City Launch",
      timeline: "6 months",
      description: "Official launch in Tier-1 US & Indian Cities with comprehensive marketing."
    },
    {
      phase: "Nationwide Expansion",
      timeline: "Post-launch growth phase",
      description: "Systematic expansion across regions based on market demand and performance metrics."
    }
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll"
        >
          <h2 className="section-heading mx-auto">Go-To-Market Timeline</h2>
          <p className="text-lg text-muted-foreground">
            Our strategic roadmap for implementation and growth
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute h-full w-1 bg-gananiya-teal/30 left-1/2 transform -translate-x-1/2 hidden md:block"></div>
          
          {timelineSteps.map((step, index) => (
            <div 
              key={step.phase}
              ref={(el) => (elementsRef.current[index + 1] = el)}
              className="relative animate-on-scroll mb-12 last:mb-0"
              style={{ transitionDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gananiya-teal z-10 hidden md:block"></div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <h3 className="text-xl font-bold text-gananiya-teal">{step.phase}</h3>
                  <p className="text-lg font-medium">{step.timeline}</p>
                </div>
                
                <div className={`md:w-5/12 tech-card mt-4 md:mt-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
