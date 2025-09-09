import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Bot, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
  onFeedback?: (helpful: boolean) => void;
  showFeedback?: boolean;
}

export const ChatBubble = ({ 
  message, 
  isUser, 
  timestamp, 
  onFeedback,
  showFeedback = false 
}: ChatBubbleProps) => {
  return (
    <div className={cn(
      "flex gap-3 animate-fade-in",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <Avatar className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20">
          <AvatarFallback>
            <Bot className="w-4 h-4 text-primary" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={cn(
        "max-w-[70%] space-y-2",
        isUser && "order-2"
      )}>
        <div className={cn(
          "px-4 py-3 rounded-2xl text-sm leading-relaxed",
          isUser 
            ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-br-sm" 
            : "bg-gradient-to-r from-muted to-card text-foreground rounded-bl-sm border border-border/50"
        )}>
          {message}
        </div>
        
        {timestamp && (
          <p className="text-xs text-muted-foreground px-2">
            {timestamp}
          </p>
        )}
        
        {!isUser && showFeedback && onFeedback && (
          <div className="flex gap-1 px-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 hover:bg-accent/20"
              onClick={() => onFeedback(true)}
            >
              <ThumbsUp className="w-3 h-3" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 w-7 p-0 hover:bg-destructive/20"
              onClick={() => onFeedback(false)}
            >
              <ThumbsDown className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>

      {isUser && (
        <Avatar className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary-glow/20 order-3">
          <AvatarFallback>
            <User className="w-4 h-4 text-primary" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};