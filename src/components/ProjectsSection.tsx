import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection: React.FC = () => {
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

  return (
    <section id="projects" className="py-20 relative bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div
          ref={(el) => (elementsRef.current[0] = el)}
          className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll"
        >
          <h2 className="section-heading mx-auto">Our Projects</h2>
          <p className="text-lg text-muted-foreground">
            Innovative solutions powered by AI and blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 lg:gap-12">
          {/* Combined Lavielogique & WinkIt+Dropit Project */}
          <Card
            ref={(el) => (elementsRef.current[1] = el)}
            className="animate-on-scroll border-gananiya-teal/20 backdrop-blur-sm bg-white/50 dark:bg-gananiya-navy/50"
            style={{ transitionDelay: "0.2s" }}
          >
            <CardHeader>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🌟</span>
                <CardTitle>Lavielogique with WinkIt + Dropit</CardTitle>
              </div>
              <CardDescription>Integrated Enterprise & Consumer Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-lg mb-4">
                A Comprehensive Blockchain and AI-Powered Ecosystem for Business Operations and Consumer Services
              </p>
              <p className="mb-4 text-muted-foreground">
                Lavielogique powers both enterprise operations and consumer-facing applications through a unified platform,
                delivering value across the entire supply chain from business logistics to last-mile delivery.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Lavielogique Enterprise Platform:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-gananiya-teal mr-2">•</span>
                    <span><strong>Predictive AI Analytics:</strong> Real-time demand forecasting, dynamic route planning, and intelligent inventory management.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gananiya-teal mr-2">•</span>
                    <span><strong>Blockchain Security & Trust:</strong> Immutable supply chain authentication, smart contracts, and carbon footprint tracking.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gananiya-teal mr-2">•</span>
                    <span><strong>Sales & Marketing Intelligence:</strong> AI-driven campaign optimization, upselling and cross-selling insights.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gananiya-teal mr-2">•</span>
                    <span><strong>Human-AI Collaboration:</strong> Empowering teams with AI-assisted dashboards for smarter decision-making.</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 space-y-4 border-t pt-6">
                <h4 className="font-semibold mb-2">Consumer Applications Powered by Lavielogique:</h4>
                <div>
                  <h5 className="font-semibold text-gananiya-teal">WinkIt (Groceries & Essentials in a Wink):</h5>
                  <ul className="space-y-2 ml-6 mt-2">
                    <li className="flex items-start">
                      <span className="text-gananiya-teal mr-2">•</span>
                      <span>AI-powered dark stores for instant urban delivery (under 15 minutes).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gananiya-teal mr-2">•</span>
                      <span>Eco-friendly last-mile fulfillment using e-bikes and scooters.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold text-gananiya-teal">Dropit (Errands Delivered On-Demand):</h5>
                  <ul className="space-y-2 ml-6 mt-2">
                    <li className="flex items-start">
                      <span className="text-gananiya-teal mr-2">•</span>
                      <span>Door-to-door errands like document delivery, gift runs, and personal tasks.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gananiya-teal mr-2">•</span>
                      <span>Verified gig workforce ensuring trust, speed, and professionalism.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <div>
                  <h4 className="font-semibold mb-2">Target Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gananiya-teal/10 text-gananiya-teal border border-gananiya-teal/20">Retail</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gananiya-teal/10 text-gananiya-teal border border-gananiya-teal/20">Logistics</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gananiya-teal/10 text-gananiya-teal border border-gananiya-teal/20">E-commerce</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gananiya-teal/10 text-gananiya-teal border border-gananiya-teal/20">Manufacturing</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gananiya-teal/10 text-gananiya-teal border border-gananiya-teal/20">FMCG</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Strategic Positioning:</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>USA:</strong> Focus on major metro areas — NYC, LA, Chicago, San Francisco, Austin.</p>
                    <p><strong>India:</strong> Focus on Tier-1 cities — Bangalore, Mumbai, Delhi NCR, Hyderabad, Pune.</p>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Core Advantages */}
        <div 
          ref={(el) => (elementsRef.current[3] = el)}
          className="mt-16 animate-on-scroll"
          style={{ transitionDelay: "0.6s" }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Core Advantages</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="tech-card">
              <h4 className="text-lg font-medium mb-2 text-gananiya-teal">Real-Time Tracking</h4>
              <p>End-to-end live ETA and route visibility.</p>
            </div>
            <div className="tech-card">
              <h4 className="text-lg font-medium mb-2 text-gananiya-teal">Task Batching & AI Optimization</h4>
              <p>Reduces operational costs by 30%.</p>
            </div>
            <div className="tech-card">
              <h4 className="text-lg font-medium mb-2 text-gananiya-teal">Business Integrations</h4>
              <p>Custom APIs allow local businesses to offer instant delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
