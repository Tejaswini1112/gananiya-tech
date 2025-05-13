import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 relative">
              Ready to Transform Your Business?
              <span className="block w-16 h-1 bg-emerald-500 mt-2"></span>
            </h2>
            <p className="text-lg mb-6 text-gray-300 max-w-lg">
              Join the future of integrated logistics and marketing with our AI and blockchain-powered ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-offset-slate-900">
                  Request a Demo
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-indigo-400 text-indigo-400 hover:bg-indigo-500/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="border border-slate-700 p-4 rounded-lg text-center">
                <h4 className="font-medium mb-2">Start Small</h4>
                <p className="text-sm text-gray-400">Test our platform with a single department</p>
                <Link to="/advantages" className="text-indigo-400 text-sm block mt-2 hover:underline">
                  Learn More
                </Link>
              </div>
              <div className="border border-slate-700 p-4 rounded-lg text-center">
                <h4 className="font-medium mb-2">Scale Gradually</h4>
                <p className="text-sm text-gray-400">Expand as you see results</p>
                <Link to="/roadmap" className="text-indigo-400 text-sm block mt-2 hover:underline">
                  View Roadmap
                </Link>
              </div>
              <div className="border border-slate-700 p-4 rounded-lg text-center">
                <h4 className="font-medium mb-2">Full Integration</h4>
                <p className="text-sm text-gray-400">End-to-end transformation</p>
                <Link to="/projects" className="text-indigo-400 text-sm block mt-2 hover:underline">
                  Success Stories
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="bg-slate-800/80 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-emerald-500 mr-2">Gananiya</span> Tech Solutions
              </h3>
              <p className="mb-4 text-gray-300">
                The parent company behind Lavielogique, a blockchain and AI-powered ecosystem for integrated 
                logistics, marketing, and supply chain management.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 mt-1 mr-3">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  <div>
                    <p className="font-medium">Gananiya Tech Solutions Private Limited</p>
                    <p className="text-gray-400">Bangalore, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 mt-1 mr-3">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <p>+91 (080) 1234 5678</p>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 mt-1 mr-3">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <p>info@gananiyatech.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#" className="text-gray-300 hover:text-emerald-500 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-emerald-500 transition-colors">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-emerald-500 transition-colors">Facebook</a>
              </div>
              <div className="flex items-center mt-4">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Gananiya Tech Solutions Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="text-sm text-gray-400 hover:text-emerald-500">Privacy Policy</Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-emerald-500">Terms of Service</Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-emerald-500">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
