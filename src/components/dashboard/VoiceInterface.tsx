import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { VoiceVisualizer } from '@/components/ui/voice-visualizer';
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VoiceInterfaceProps {
  onStartConversation: () => void;
  onEndConversation: () => void;
  isActive: boolean;
  isSpeaking: boolean;
  className?: string;
}

export const VoiceInterface = ({
  onStartConversation,
  onEndConversation,
  isActive,
  isSpeaking,
  className
}: VoiceInterfaceProps) => {
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <Card className={cn("border-0 shadow-soft bg-gradient-to-br from-card to-muted/20", className)}>
      <CardContent className="p-8 text-center space-y-6">
        {/* Voice Visualizer */}
        <div className="flex justify-center">
          <VoiceVisualizer isActive={isActive || isSpeaking} className="h-12" />
        </div>

        {/* Status Text */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            {isActive ? (isSpeaking ? 'AI is speaking...' : 'Listening...') : 'Ready to help'}
          </h3>
          <p className="text-muted-foreground">
            {isActive 
              ? 'Speak naturally about your health concerns' 
              : 'Click the microphone to start your conversation'
            }
          </p>
        </div>

        {/* Voice Controls */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-12 w-12 rounded-full",
              isMuted ? "text-destructive" : "text-muted-foreground hover:text-foreground"
            )}
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>

          {/* Main Voice Button */}
          <Button
            onClick={isActive ? onEndConversation : onStartConversation}
            className={cn(
              "h-16 w-16 rounded-full transition-all duration-300",
              isActive 
                ? "bg-destructive hover:bg-destructive/90 animate-recording" 
                : "bg-gradient-to-r from-primary to-primary-glow hover:scale-105 animate-pulse-glow"
            )}
          >
            {isActive ? (
              <MicOff className="w-6 h-6" />
            ) : (
              <Mic className="w-6 h-6" />
            )}
          </Button>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-16 h-2 bg-muted rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>

        {/* Recording Indicator */}
        {isActive && (
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            Recording...
          </div>
        )}
      </CardContent>
    </Card>
  );
};