import { Button } from '@/components/ui/button';
import { Heart, Mic, Shield, Zap, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroIllustration from '@/assets/hero-illustration.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 md:pt-28 flex items-center justify-center overflow-hidden">{/* Added top padding for navbar spacing */}
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
        {/* Hero Illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative max-w-md mx-auto">
            <img 
              src={heroIllustration} 
              alt="Person speaking to AI healthcare assistant"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-2xl shadow-strong"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-medium">
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-4 mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VitalVoice
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-muted-foreground">
            AI Healthcare Assistant
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary font-medium max-w-2xl mx-auto">
            Speak with our AI healthcare assistant. No signup, no wait.
          </p>
        </div>
        
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
          <Link to="/auth">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 hover:shadow-glow shadow-medium transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-12 sm:h-14 w-full sm:w-auto"
            >
              <Mic className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              Start Voice Chat
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/20 hover:bg-primary/5 text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 h-12 sm:h-14 group w-full sm:w-auto"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>
        
        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
              <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Voice-First Experience</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Natural conversation interface for healthcare guidance</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Instant Assessment</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Immediate symptom triage and care recommendations</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Privacy First</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Secure conversations with no data storage</p>
          </div>
        </div>
      </div>
    </section>
  );
};