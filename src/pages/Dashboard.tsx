import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { 
  Heart, 
  Mic, 
  User, 
  LogOut, 
  Settings, 
  MessageCircle,
  Activity,
  Shield
} from 'lucide-react';

// ElevenLabs ConvAI Widget Component
const VoiceAssistantWidget = () => {
  useEffect(() => {
    // Load ElevenLabs ConvAI script if not already loaded
    if (!document.querySelector('script[src*="convai-widget-embed"]')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
      script.async = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full min-h-[400px] bg-muted/10 rounded-lg border border-border/20 flex items-center justify-center">
      <div 
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_5401k4qpbne0fapsw48w8xsvhfpy"></elevenlabs-convai>'
        }}
      />
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
  const { toast } = useToast();
  const [isVoiceActive, setIsVoiceActive] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Sign Out Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed Out",
        description: "You've been successfully signed out.",
      });
      navigate('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">VitalVoice</h1>
                <p className="text-xs text-muted-foreground">Healthcare Assistant</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <Button variant="ghost" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Voice Assistant Section */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-strong bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <Mic className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">AI Voice Assistant</CardTitle>
                    <CardDescription>
                      Speak with your healthcare assistant about any health concerns
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                    <VoiceAssistantWidget />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-4 text-center">
                        <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Natural Conversation</p>
                        <p className="text-xs text-muted-foreground">Speak naturally about your health</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-accent/5 border-accent/20">
                      <CardContent className="p-4 text-center">
                        <Activity className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="text-sm font-medium">Symptom Assessment</p>
                        <p className="text-xs text-muted-foreground">Get intelligent health guidance</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="border-0 shadow-soft bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="w-4 h-4 mr-2" />
                  Health Check
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask Question
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  Emergency Info
                </Button>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card className="border-0 shadow-soft bg-gradient-to-br from-accent/5 to-card">
              <CardHeader>
                <CardTitle className="text-lg">Health Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Remember to describe your symptoms clearly, including when they started, 
                  their severity, and any factors that make them better or worse.
                </p>
              </CardContent>
            </Card>

            {/* Safety Notice */}
            <Card className="border-0 shadow-soft bg-gradient-to-br from-primary/5 to-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  VitalVoice provides guidance only. For emergencies, call 911. 
                  Always consult healthcare professionals for medical decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;