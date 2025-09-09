import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ElevenLabsWidgetProps {
  className?: string;
}

export const ElevenLabsWidget = ({ className }: ElevenLabsWidgetProps) => {
  const widgetRef = useRef<HTMLDivElement>(null);

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
    <Card className={cn("border-0 shadow-soft bg-gradient-to-br from-card to-muted/20", className)}>
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <div className="space-y-4">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <Mic className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
              VitalVoice AI Assistant
            </h3>
            <p className="text-sm text-muted-foreground">
              Speak naturally about your health concerns
            </p>
          </div>

          {/* ElevenLabs Widget */}
          <div 
            ref={widgetRef}
            className="w-full min-h-[300px] sm:min-h-[400px] bg-muted/10 rounded-lg border border-border/20 flex items-center justify-center"
          >
            <div 
              dangerouslySetInnerHTML={{
                __html: '<elevenlabs-convai agent-id="agent_5401k4qpbne0fapsw48w8xsvhfpy"></elevenlabs-convai>'
              }}
              className="w-full h-full"
            />
          </div>

          {/* Instructions */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Click the microphone above to start your conversation with VitalVoice
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};