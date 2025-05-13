import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCog, Database, Network, TrendingUp, Users, Truck, CheckCircle, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-background to-slate-100 dark:from-background dark:to-slate-900/50">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Improved Prominence */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Main logo background image replacing purple gradient */}
          <img 
            src="/gananiya-logo.jpg" 
            alt="Gananiya Logo" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none select-none" 
            style={{maxHeight: '100%', maxWidth: '100%'}}
          />
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-emerald-400/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-amber-400/30 to-transparent rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-slate-900 dark:text-white text-lg font-medium mb-4">
                GANANIYA TECH SOLUTIONS PRIVATE LIMITED
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white drop-shadow-lg">
              Your Wellbeing<br />Our<br />Focus
              </h1>
              <p className="text-xl text-slate-900 dark:text-white/90 mb-10 max-w-2xl mx-auto">
              Smarter Industries. Stronger Communities. 
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 dark:text-white w-full sm:w-auto"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link to="/advantages">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-slate-900 dark:border-white text-slate-900 dark:text-white hover:bg-slate-900/10 dark:hover:bg-white/10 w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <p className="text-slate-900 dark:text-white/80 text-sm">Trusted by 200+ enterprise companies</p>
            </div>
          </div>
        </section>
        
        {/* AI + Blockchain Visualization Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">AI + Blockchain Visualization</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 p-8 rounded-lg text-center shadow-md">
                <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">+43%</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">Logistics Efficiency</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 p-8 rounded-lg text-center shadow-md">
                <h3 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-3">-28%</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">Cost Reduction</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 p-8 rounded-lg text-center shadow-md">
                <h3 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-3">+35%</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">Revenue Growth</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-8 rounded-lg text-center shadow-md">
                <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-3">98%</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Features Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-slate-900 dark:text-white">Core Features</h2>
            <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
              Our platform combines cutting-edge technologies to create a seamless ecosystem for logistics, 
              marketing, and supply chain management.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* AI-Driven Analytics */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center text-slate-900 dark:text-white">
                  AI-Driven Predictive Analytics
                </h3>
                
                <Card className="bg-white dark:bg-slate-900/40 border-indigo-200 dark:border-indigo-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                        <BrainCog className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Demand Forecasting</h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          AI predicts product demand in real-time using market trends and historical data.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900/40 border-indigo-200 dark:border-indigo-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                        <Truck className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Route Optimization</h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          AI calculates the most efficient logistics routes, reducing fuel costs and delivery times.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900/40 border-indigo-200 dark:border-indigo-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Dynamic Pricing Models</h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          Machine learning identifies optimal pricing strategies based on market competition.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Blockchain Features */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 text-center text-slate-900 dark:text-white">
                  Blockchain-Powered Transparency
                </h3>
                
                <Card className="bg-white dark:bg-slate-900/40 border-emerald-200 dark:border-emerald-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Supply Chain Authentication</h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          Blockchain ensures the authenticity of goods by tracking each item's journey.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900/40 border-emerald-200 dark:border-emerald-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg">
                        <Database className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Smart Contracts</h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          Automate payments and agreements between suppliers, manufacturers, and customers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900/40 border-emerald-200 dark:border-emerald-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Carbon Footprint Tracking</h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          Blockchain records emissions data across the supply chain for sustainability goals.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Human-AI Interface */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center text-slate-900 dark:text-white">
                  Collaborative Human-AI Interface
                </h3>
                
                <Card className="bg-white dark:bg-slate-900/40 border-purple-200 dark:border-purple-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                        <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Human-AI Synergy Dashboards</h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          Interactive dashboards allow human managers to work with AI insights for informed decisions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900/40 border-purple-200 dark:border-purple-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                        <Network className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">Expert Crowdsourcing</h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          Human experts provide feedback to adjust AI suggestions accounting for nuances AI might overlook.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-slate-900/40 border-purple-200 dark:border-purple-800/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg">
                        <BrainCog className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-slate-900 dark:text-white">AI Coach for Teams</h4>
                        <p className="text-slate-600 dark:text-slate-300">
                          An AI assistant trains company employees on interpreting data and using the platform effectively.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
