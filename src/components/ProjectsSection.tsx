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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Lavielogique Project */}
          <Card
            ref={(el) => (elementsRef.current[1] = el)}
            className="animate-on-scroll border-gananiya-teal/20 backdrop-blur-sm bg-white/50 dark:bg-gananiya-navy/50"
            style={{ transitionDelay: "0.2s" }}
          >
            <CardHeader>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🌟</span>
                <CardTitle>Lavielogique</CardTitle>
              </div>
              <CardDescription>The Core Software Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-lg mb-4">
                A Blockchain and AI-Powered Digital Backbone for Logistics, Supply Chain, and Marketing
              </p>
              <p className="mb-4 text-muted-foreground">
                Lavielogique is an integrated, intelligent SaaS platform that brings data-driven 
                optimization, transparency, and real-time insights to the heart of enterprise operations.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Key Features:</h4>
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
            </CardContent>
            <CardFooter className="flex flex-col items-start">
              <h4 className="font-semibold mb-2">Target Industries:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gananiya-teal/10 text-gananiya-teal rounded-full text-sm">eCommerce</span>
                <span className="px-3 py-1 bg-gananiya-teal/10 text-gananiya-teal rounded-full text-sm">Pharmaceutical Logistics</span>
                <span className="px-3 py-1 bg-gananiya-teal/10 text-gananiya-teal rounded-full text-sm">Retail Chains</span>
                <span className="px-3 py-1 bg-gananiya-teal/10 text-gananiya-teal rounded-full text-sm">Consumer Goods Distribution</span>
              </div>
            </CardFooter>
          </Card>

          {/* WinkIt + Dropit Project */}
          <Card
            ref={(el) => (elementsRef.current[2] = el)}
            className="animate-on-scroll border-gananiya-teal/20 backdrop-blur-sm bg-white/50 dark:bg-gananiya-navy/50"
            style={{ transitionDelay: "0.4s" }}
          >
            <CardHeader>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">📦</span>
                <CardTitle>WinkIt + Dropit</CardTitle>
              </div>
              <CardDescription>Unified Instant Delivery Applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-lg mb-4">
                Built on Lavielogique – Serving Urban Consumers and Businesses in USA and India
              </p>
              <p className="mb-4 text-muted-foreground">
                WinkIt and Dropit combine into a single, powerful instant delivery platform, offering 
                groceries, essentials, and on-demand errands at record-breaking speed.
              </p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">WinkIt (Groceries & Essentials in a Wink):</h4>
                  <ul className="space-y-2">
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
                <div>
                  <h4 className="font-semibold mb-2">Dropit (Errands Delivered On-Demand):</h4>
                  <ul className="space-y-2">
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
              <h4 className="font-semibold mb-2">Strategic Positioning:</h4>
              <div className="space-y-1 text-sm">
                <p><strong>USA:</strong> Focus on major metro areas — NYC, LA, Chicago, San Francisco, Austin.</p>
                <p><strong>India:</strong> Focus on Tier-1 cities — Bangalore, Mumbai, Delhi NCR, Hyderabad, Pune.</p>
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
