
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-10 text-center gradient-text">Contact Us</h1>
          
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-foreground font-medium">Name</label>
                  <Input id="name" placeholder="Your name" className="bg-white/20" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-foreground font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-white/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-foreground font-medium">Subject</label>
                <Input id="subject" placeholder="Subject" className="bg-white/20" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-foreground font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" className="bg-white/20" rows={5} />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gananiya-green hover:bg-gananiya-green/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
