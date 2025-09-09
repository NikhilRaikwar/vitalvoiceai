import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Clock, User, Bot } from 'lucide-react';

interface TimelineItem {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}

interface SessionTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const SessionTimeline = ({ items, className }: SessionTimelineProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Session Summary
        </CardTitle>
        <CardDescription>
          Overview of your conversation with VitalVoice
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={item.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    item.type === 'user' 
                      ? 'bg-primary/10 text-primary' 
                      : item.type === 'assistant'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-muted/50 text-muted-foreground'
                  }`}>
                    {item.type === 'user' ? (
                      <User className="w-4 h-4" />
                    ) : item.type === 'assistant' ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <Clock className="w-4 h-4" />
                    )}
                  </div>
                  {index < items.length - 1 && (
                    <div className="w-px h-8 bg-border mt-2" />
                  )}
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium capitalize">
                      {item.type === 'assistant' ? 'VitalVoice' : item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
            
            {items.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No conversation yet</p>
                <p className="text-xs">Start speaking to see your session timeline</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};