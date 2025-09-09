import { Button } from '@/components/ui/button';
import { Heart, Menu, X, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { useState } from 'react';
import healthcareLogo from '@/assets/healthcare-logo.png';

export const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src={healthcareLogo} 
                alt="VitalVoice Healthcare Logo"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">VitalVoice</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                  Get Started
                </Button>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a 
                  href="#features" 
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#about" 
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <div className="px-3 py-2">
                  <Link to="/auth">
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <div id="features">
        <FeaturesSection />
      </div>
      
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-3">
              <img 
                src={healthcareLogo} 
                alt="VitalVoice Healthcare Logo"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">VitalVoice</span>
            </div>
          </div>
          
          {/* Legal & Safety Disclaimers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-center p-6 bg-gradient-to-br from-destructive/5 to-card border border-destructive/20 rounded-xl">
              <div className="flex items-center justify-center mb-3">
                <AlertTriangle className="w-6 h-6 text-destructive mr-2" />
                <h4 className="font-semibold text-destructive">Emergency Notice</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                For life-threatening emergencies, <strong>call 911 immediately</strong>. 
                VitalVoice is not a substitute for emergency medical services.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-card border border-primary/20 rounded-xl">
              <div className="flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary mr-2" />
                <h4 className="font-semibold text-primary">Privacy & Data</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>No conversation data is stored.</strong> Your health information 
                remains completely private and confidential.
              </p>
            </div>
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="mb-4">
              Your AI Healthcare Assistant - Providing intelligent healthcare guidance through voice conversation
            </p>
            <p className="text-sm">
              © 2024 VitalVoice. All rights reserved. | 
              <span className="ml-2">This is not a substitute for professional medical advice.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};