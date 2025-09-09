import { Button } from '@/components/ui/button';
import { Heart, Mic, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-strong">
            <Heart className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            VitalVoice
          </span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground">
            AI Healthcare Assistant
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience healthcare guidance through intelligent voice conversations. 
          Get immediate symptom assessment, health information, and care coordination 
          - all through natural speech.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/auth">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 shadow-medium">
              <Mic className="w-5 h-5 mr-2" />
              Start Voice Chat
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            Learn More
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Mic className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Voice-First Experience</h3>
            <p className="text-muted-foreground">Natural conversation interface for healthcare guidance</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Instant Assessment</h3>
            <p className="text-muted-foreground">Immediate symptom triage and care recommendations</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Privacy First</h3>
            <p className="text-muted-foreground">Secure conversations with no data storage</p>
          </div>
        </div>
      </div>
    </section>
  );
};