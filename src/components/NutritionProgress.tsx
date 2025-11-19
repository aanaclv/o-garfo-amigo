import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface NutrientData {
  name: string;
  value: number;
  max: number;
  color: string;
}

interface NutritionProgressProps {
  nutrients: NutrientData[];
}

export const NutritionProgress = ({ nutrients }: NutritionProgressProps) => {
  return (
    <Card className="p-6 bg-gradient-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Balanço Nutricional de Hoje</h3>
      <p className="text-sm text-muted-foreground mb-6">Acompanhe o que você consumiu hoje de forma visual</p>
      
      <div className="space-y-6">
        {nutrients.map((nutrient) => {
          const percentage = (nutrient.value / nutrient.max) * 100;
          
          return (
            <div key={nutrient.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{nutrient.name}</span>
                <span className="text-sm text-muted-foreground">
                  {nutrient.value}g / {nutrient.max}g
                </span>
              </div>
              <div className="relative">
                <Progress 
                  value={percentage} 
                  className="h-3"
                  style={{
                    // @ts-ignore
                    '--progress-background': nutrient.color
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
        <p className="text-xs text-muted-foreground text-center">
          Lembre-se: estes são valores estimados. O importante é consumir o que faz sentido para você.
        </p>
      </div>
    </Card>
  );
};
