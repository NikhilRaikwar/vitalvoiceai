import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  User, 
  LogOut, 
  Settings, 
  MessageCircle,
  Activity,
  Shield,
  HelpCircle,
  Mic,
  Volume2,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { VoiceInterface } from '@/components/dashboard/VoiceInterface';
import { ChatBubble } from '@/components/ui/chat-bubble';
import { StatusBadge } from '@/components/ui/status-badge';
import { SessionTimeline } from '@/components/dashboard/SessionTimeline';
import healthcareLogo from '@/assets/healthcare-logo.png';

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, loading, signOut } = useAuth();
  const { toast } = useToast();
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [activeMode, setActiveMode] = useState<'health-check' | 'ask-question' | 'emergency'>('ask-question');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [sessionItems, setSessionItems] = useState([
    {
      id: '1',
      type: 'system' as const,
      content: 'Session started - VitalVoice AI Healthcare Assistant ready',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

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

  const handleStartConversation = () => {
    setIsVoiceActive(true);
    toast({
      title: "Voice Assistant Active",
      description: "Start speaking about your health concerns.",
    });
  };

  const handleEndConversation = () => {
    setIsVoiceActive(false);
    setIsSpeaking(false);
    toast({
      title: "Conversation Ended",
      description: "Voice assistant has been deactivated.",
    });
  };

  const handleFeedback = (helpful: boolean) => {
    toast({
      title: "Feedback Received",
      description: `Thank you for your ${helpful ? 'positive' : 'constructive'} feedback!`,
    });
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chat Interface - Main Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Mode Selection */}
            <Card className="border-0 shadow-soft bg-gradient-to-r from-card to-muted/20">
              <CardContent className="p-6">
                <Tabs value={activeMode} onValueChange={(value) => setActiveMode(value as any)}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="health-check" className="flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      Health Check
                    </TabsTrigger>
                    <TabsTrigger value="ask-question" className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Ask Question
                    </TabsTrigger>
                    <TabsTrigger value="emergency" className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Emergency Info
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardContent>
            </Card>

            {/* Voice Interface */}
            <VoiceInterface
              onStartConversation={handleStartConversation}
              onEndConversation={handleEndConversation}
              isActive={isVoiceActive}
              isSpeaking={isSpeaking}
            />

            {/* Chat Area */}
            <Card className="border-0 shadow-strong bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Conversation</CardTitle>
                    <CardDescription>
                      Your healthcare conversation with VitalVoice AI
                    </CardDescription>
                  </div>
                  {activeMode === 'health-check' && (
                    <StatusBadge status="self-care" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    {chatMessages.length === 0 ? (
                      <div className="text-center py-12 text-muted-foreground">
                        <Mic className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-semibold mb-2">Ready to help</h3>
                        <p className="text-sm">
                          {activeMode === 'health-check' && "Start by describing your symptoms or health concerns"}
                          {activeMode === 'ask-question' && "Ask me anything about your health"}
                          {activeMode === 'emergency' && "For emergencies, call 911. I can help with urgent care guidance."}
                        </p>
                      </div>
                    ) : (
                      chatMessages.map((message) => (
                        <ChatBubble
                          key={message.id}
                          message={message.content}
                          isUser={message.isUser}
                          timestamp={message.timestamp}
                          onFeedback={!message.isUser ? handleFeedback : undefined}
                          showFeedback={!message.isUser}
                        />
                      ))
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Session Timeline */}
            <SessionTimeline items={sessionItems} />

            {/* Quick Actions */}
            <Card className="border-0 shadow-soft bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant={activeMode === 'health-check' ? 'default' : 'outline'} 
                  className="w-full justify-start"
                  onClick={() => setActiveMode('health-check')}
                >
                  <Activity className="w-4 h-4 mr-2" />
                  Health Check
                </Button>
                <Button 
                  variant={activeMode === 'ask-question' ? 'default' : 'outline'} 
                  className="w-full justify-start"
                  onClick={() => setActiveMode('ask-question')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask Question
                </Button>
                <Button 
                  variant={activeMode === 'emergency' ? 'default' : 'outline'} 
                  className="w-full justify-start"
                  onClick={() => setActiveMode('emergency')}
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Emergency Info
                </Button>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card className="border-0 shadow-soft bg-gradient-to-br from-accent/5 to-card border-accent/20">
              <CardHeader>
                <CardTitle className="text-lg text-accent">Health Tip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Describe symptoms clearly, including when they started, 
                  their severity, and any factors that make them better or worse.
                </p>
              </CardContent>
            </Card>

            {/* Help Widget */}
            <Card className="border-0 shadow-soft bg-gradient-to-br from-primary/5 to-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-primary" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Having trouble? Check our FAQ or get assistance.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            {/* Safety Notice */}
            <Card className="border-0 shadow-soft bg-gradient-to-br from-destructive/5 to-card border-destructive/20">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-destructive" />
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