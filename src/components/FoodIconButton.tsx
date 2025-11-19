import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FoodIconButtonProps {
  emoji: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

export const FoodIconButton = ({ emoji, label, selected, onClick }: FoodIconButtonProps) => {
  return (
    <Button
      variant={selected ? "default" : "outline"}
      size="lg"
      onClick={onClick}
      className={cn(
        "flex flex-col h-auto py-4 px-6 gap-2 transition-all duration-200",
        selected && "ring-2 ring-primary ring-offset-2 shadow-medium"
      )}
    >
      <span className="text-3xl">{emoji}</span>
      <span className="text-xs font-medium">{label}</span>
    </Button>
  );
};
