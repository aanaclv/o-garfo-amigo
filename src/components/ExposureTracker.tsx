import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Wind, Hand, Droplet, Smile, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExposureLevel {
  id: string;
  label: string;
  icon: any;
  color: string;
}

const exposureLevels: ExposureLevel[] = [
  { id: "saw", label: "Vi", icon: Eye, color: "bg-purple-100 text-purple-700" },
  { id: "smelled", label: "Cheirei", icon: Wind, color: "bg-blue-100 text-blue-700" },
  { id: "touched", label: "Toquei", icon: Hand, color: "bg-cyan-100 text-cyan-700" },
  { id: "licked", label: "Lambuzei", icon: Droplet, color: "bg-teal-100 text-teal-700" },
  { id: "tasted", label: "Provei", icon: Smile, color: "bg-green-100 text-green-700" },
  { id: "swallowed", label: "Engoli", icon: CheckCircle, color: "bg-emerald-100 text-emerald-700" },
];

interface ExposureTrackerProps {
  foodName: string;
  currentLevel: string | null;
  onLevelSelect: (level: string) => void;
}

export const ExposureTracker = ({ foodName, currentLevel, onLevelSelect }: ExposureTrackerProps) => {
  const getCurrentLevelIndex = () => {
    if (!currentLevel) return -1;
    return exposureLevels.findIndex(level => level.id === currentLevel);
  };

  const currentIndex = getCurrentLevelIndex();

  return (
    <Card className="p-6 bg-gradient-card">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-1">Novo Alimento</h3>
        <p className="text-sm text-muted-foreground">Rastreie sua exposição gradual a: <span className="font-medium text-foreground">{foodName}</span></p>
      </div>

      <div className="space-y-3">
        {exposureLevels.map((level, index) => {
          const Icon = level.icon;
          const isCompleted = index <= currentIndex;
          const isCurrent = index === currentIndex;
          
          return (
            <button
              key={level.id}
              onClick={() => onLevelSelect(level.id)}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-200",
                isCompleted 
                  ? "border-primary bg-primary/5" 
                  : "border-border bg-background hover:border-primary/50",
                isCurrent && "ring-2 ring-primary ring-offset-2"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                isCompleted ? level.color : "bg-muted text-muted-foreground"
              )}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <p className={cn(
                  "font-medium",
                  isCompleted ? "text-foreground" : "text-muted-foreground"
                )}>
                  {level.label}
                </p>
              </div>
              {isCompleted && (
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {currentLevel && (
        <div className="mt-4 p-4 bg-primary/10 rounded-lg">
          <p className="text-sm text-foreground">
            🎉 Parabéns! Continue no seu ritmo, sem pressão.
          </p>
        </div>
      )}
    </Card>
  );
};
