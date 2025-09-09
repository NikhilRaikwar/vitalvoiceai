import { cn } from '@/lib/utils';

interface VoiceVisualizerProps {
  isActive: boolean;
  className?: string;
}

export const VoiceVisualizer = ({ isActive, className }: VoiceVisualizerProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-gradient-to-t from-primary to-primary-glow rounded-full transition-all duration-150",
            isActive 
              ? "h-8 animate-pulse" 
              : "h-2",
            isActive && i % 2 === 0 && "animation-delay-100",
            isActive && i % 3 === 0 && "animation-delay-200"
          )}
          style={{
            animationDelay: `${i * 100}ms`
          }}
        />
      ))}
    </div>
  );
};