import { cn } from '@/lib/utils';
import { AlertTriangle, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: 'self-care' | 'consult-doctor' | 'urgent' | 'emergency';
  className?: string;
}

const statusConfig = {
  'self-care': {
    label: 'Self-care',
    icon: CheckCircle,
    className: 'bg-accent/10 text-accent border-accent/20'
  },
  'consult-doctor': {
    label: 'See doctor soon',
    icon: Clock,
    className: 'bg-primary/10 text-primary border-primary/20'
  },
  'urgent': {
    label: 'Urgent care needed',
    icon: AlertTriangle,
    className: 'bg-orange-500/10 text-orange-600 border-orange-500/20'
  },
  'emergency': {
    label: 'Seek emergency care!',
    icon: AlertCircle,
    className: 'bg-destructive/10 text-destructive border-destructive/20'
  }
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium",
      config.className,
      className
    )}>
      <Icon className="w-4 h-4" />
      {config.label}
    </div>
  );
};