import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Stethoscope, 
  MessageCircle, 
  Clock, 
  Users, 
  Phone, 
  Brain,
  Heart,
  CheckCircle 
} from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Symptom Assessment',
    description: 'Intelligent symptom evaluation through voice conversation with appropriate care level recommendations.'
  },
  {
    icon: MessageCircle,
    title: 'Natural Conversation',
    description: 'Speak naturally about your health concerns. No forms to fill out or complex interfaces to navigate.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Get health guidance whenever you need it, day or night, without scheduling appointments.'
  },
  {
    icon: Users,
    title: 'Care Coordination',
    description: 'Receive guidance on the right healthcare setting and what to prepare for your visit.'
  },
  {
    icon: Phone,
    title: 'Emergency Ready',
    description: 'Immediate escalation to emergency services when critical symptoms are detected.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Advanced AI trained on medical knowledge to provide accurate health information and guidance.'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Assistance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            VitalVoice combines advanced AI with medical expertise to provide intelligent 
            healthcare guidance through natural voice conversation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* How it works section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How VitalVoice Works
            </h3>
            <p className="text-lg text-muted-foreground">
              Simple, secure, and effective healthcare guidance in three steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-xl font-bold">
                1
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Speak Your Concern</h4>
              <p className="text-muted-foreground">
                Simply describe your health concern or symptoms in natural language through voice
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-xl font-bold">
                2
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Get Assessment</h4>
              <p className="text-muted-foreground">
                VitalVoice asks targeted questions and provides intelligent symptom assessment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-accent rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-xl font-bold">
                3
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Receive Guidance</h4>
              <p className="text-muted-foreground">
                Get clear recommendations on next steps and appropriate level of care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};