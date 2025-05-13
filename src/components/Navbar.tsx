import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Advantages", href: "/advantages" },
    { name: "Stakeholders", href: "/stakeholders" },
    { name: "Timeline", href: "/timeline" },
    { name: "Roadmap", href: "/roadmap" },  // Add this line
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/90 dark:bg-slate-900/90 shadow-md backdrop-blur-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold flex items-center">
            <span className="text-emerald-500 dark:text-emerald-400 mr-1">Gananiya</span> 
            <span className={cn(
              "text-slate-900 dark:text-white"
            )}>Tech</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative py-1",
                isActive(link.href) 
                  ? "text-emerald-500 dark:text-emerald-400" 
                  : "text-slate-900 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400"
              )}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 dark:bg-emerald-400"></span>
              )}
            </Link>
          ))}
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className={cn(
              "ml-2 text-slate-900 dark:text-slate-200"
            )}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className={cn(
              "mr-2 text-slate-900 dark:text-slate-200"
            )}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <button 
            className={cn(
              "text-slate-900 dark:text-slate-200"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  isActive(link.href) 
                    ? "text-emerald-500 dark:text-emerald-400" 
                    : "text-slate-900 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

