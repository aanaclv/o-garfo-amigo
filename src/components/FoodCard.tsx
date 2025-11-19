import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FoodCardProps {
  name: string;
  image: string;
  texture: string;
  temperature: string;
  color: string;
  ingredients: string[];
  allergens?: string[];
}

export const FoodCard = ({ name, image, texture, temperature, color, ingredients, allergens }: FoodCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-3">{name}</h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {texture}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {temperature}
          </Badge>
          <Badge variant="outline" className="text-xs bg-muted">
            {color}
          </Badge>
        </div>

        <div className="mb-3">
          <p className="text-sm font-medium text-foreground mb-1">Ingredientes:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {allergens && allergens.length > 0 && (
          <div className="pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Atenção:</span> {allergens.join(", ")}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};
