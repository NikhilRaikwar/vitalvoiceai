import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  LogOut, 
  Settings
} from 'lucide-react';
import healthcareLogo from '@/assets/healthcare-logo.png';

// ElevenLabs ConvAI Widget Component
const ElevenLabsWidget = ({ className }: { className?: string }) => {
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
    <div className={`w-full max-w-4xl mx-auto ${className || ''}`}>
      <div 
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_5401k4qpbne0fapsw48w8xsvhfpy"></elevenlabs-convai>'
        }}
        className="w-full min-h-[600px] bg-muted/10 rounded-2xl border border-border/20 flex items-center justify-center shadow-strong"
      />
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
  const { toast } = useToast();

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
              <img 
                src={healthcareLogo} 
                alt="VitalVoice Healthcare Logo"
                className="w-8 h-8 rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold text-foreground">VitalVoice</h1>
                <p className="text-xs text-muted-foreground">Healthcare Assistant</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">{user.email}</span>
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

      {/* Main Content - Centered ElevenLabs Widget */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-4xl mx-auto flex items-center justify-center">
          {/* ElevenLabs Widget - Perfectly Centered */}
          <ElevenLabsWidget className="w-full" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;