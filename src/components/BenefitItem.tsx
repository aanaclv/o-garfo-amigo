import { Check } from "lucide-react";

interface BenefitItemProps {
  text: string;
}

export const BenefitItem = ({ text }: BenefitItemProps) => {
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-4 h-4 text-primary" />
      </div>
      <p className="text-foreground leading-relaxed">{text}</p>
    </div>
  );
};
