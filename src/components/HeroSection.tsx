
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useTheme } from './ThemeProvider';

const HeroSection: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Updated gradient background with improved colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-900 dark:to-purple-900 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-amber-400/20 to-transparent rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-white text-lg font-medium mb-4">
              GANANIYA TECH SOLUTIONS PRIVATE LIMITED
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              Your Wellbeing, Our Focus
            </h1>
            <p className="text-xl text-white/90 mb-4">
              📍 Bangalore, India
            </p>
          </div>

          {/* Light/Dark mode toggle */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sun className="h-4 w-4 text-white" />
              <Switch 
                id="theme-mode" 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
              <Moon className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <p className="text-lg md:text-xl text-white/90">
              At Gananiya, we are redefining industries through AI, blockchain, and human expertise. 
              Our mission is to deliver instant value, transparency, and sustainability—empowering 
              businesses and consumers alike.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Link to="/projects">
              <Button 
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
          
          <h3 className="text-2xl font-medium text-white mb-6">Proven Impact</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-emerald-500/50 transition-all transform hover:-translate-y-1">
              <p className="text-3xl font-bold text-emerald-300 mb-2">30%</p>
              <p className="text-white">Reduction in operational costs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-amber-500/50 transition-all transform hover:-translate-y-1">
              <p className="text-3xl font-bold text-amber-300 mb-2">20%+</p>
              <p className="text-white">Increase in campaign ROI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-sky-500/50 transition-all transform hover:-translate-y-1">
              <p className="text-3xl font-bold text-sky-300 mb-2">15min</p>
              <p className="text-white">Delivery time for essentials</p>
            </div>
          </div>

          {/* What Gananiya Does */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 mb-16">
            <h3 className="text-2xl font-bold text-white mb-4">What Does Gananiya Do?</h3>
            <p className="text-white/90 mb-4">
              Gananiya builds intelligent ecosystems that combine technology, trust, and convenience 
              to transform logistics, marketing, and consumer services. Whether you're managing supply 
              chains, launching marketing campaigns, or delivering groceries in minutes, our solutions 
              ensure efficiency, transparency, and satisfaction at every step.
            </p>
          </div>

          {/* AI Coach Feature Preview */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="bg-indigo-500/30 backdrop-blur-sm rounded-xl p-6 cursor-pointer border border-indigo-500/20 hover:border-indigo-500/50 transition-all">
                <h3 className="text-xl font-semibold text-white mb-2">AI Coach Integration</h3>
                <p className="text-white/80">Hover to learn more about our AI-powered assistant</p>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-slate-900/90 backdrop-blur-sm border-indigo-500/30 text-white">
              <div className="space-y-2">
                <h4 className="text-lg font-medium">Lavielogique's AI Coach</h4>
                <p className="text-sm text-white/80">Personalized intelligence for every role:</p>
                <ul className="text-sm space-y-1 list-disc pl-4">
                  <li>Route optimization for logistics teams</li>
                  <li>Campaign insights for marketers</li>
                  <li>Anomaly detection for analysts</li>
                  <li>Integrates with Slack, Teams, and more</li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
