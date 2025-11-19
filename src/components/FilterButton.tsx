import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export const FilterButton = ({ label, active, onClick }: FilterButtonProps) => {
  return (
    <Button
      variant={active ? "default" : "soft"}
      size="sm"
      onClick={onClick}
      className={cn(
        "transition-all duration-200",
        active && "shadow-soft"
      )}
    >
      {label}
    </Button>
  );
};
