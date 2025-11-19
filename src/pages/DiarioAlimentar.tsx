import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FoodIconButton } from "@/components/FoodIconButton";
import { ExposureTracker } from "@/components/ExposureTracker";
import { NutritionProgress } from "@/components/NutritionProgress";
import { ArrowLeft, BookOpen, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface SafeFood {
  id: string;
  emoji: string;
  label: string;
  protein: number;
  carbs: number;
  fat: number;
}

const safeFoods: SafeFood[] = [
  { id: "banana", emoji: "🍌", label: "Banana", protein: 1, carbs: 27, fat: 0 },
  { id: "toast", emoji: "🍞", label: "Torrada", protein: 3, carbs: 15, fat: 1 },
  { id: "yogurt", emoji: "🥛", label: "Iogurte", protein: 5, carbs: 7, fat: 2 },
  { id: "chips", emoji: "🥔", label: "Batata", protein: 2, carbs: 15, fat: 8 },
  { id: "apple", emoji: "🍎", label: "Maçã", protein: 0, carbs: 14, fat: 0 },
  { id: "rice", emoji: "🍚", label: "Arroz", protein: 3, carbs: 28, fat: 0 },
];

const DiarioAlimentar = () => {
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [exposureLevel, setExposureLevel] = useState<string | null>(null);
  const [newFoodName, setNewFoodName] = useState("Brócolis");
  const { toast } = useToast();

  const toggleFood = (foodId: string) => {
    setSelectedFoods(prev => 
      prev.includes(foodId) 
        ? prev.filter(id => id !== foodId)
        : [...prev, foodId]
    );
  };

  const calculateNutrients = () => {
    const totals = selectedFoods.reduce(
      (acc, foodId) => {
        const food = safeFoods.find(f => f.id === foodId);
        if (food) {
          acc.protein += food.protein;
          acc.carbs += food.carbs;
          acc.fat += food.fat;
        }
        return acc;
      },
      { protein: 0, carbs: 0, fat: 0 }
    );

    return [
      { name: "Proteínas", value: totals.protein, max: 50, color: "hsl(160 45% 55%)" },
      { name: "Carboidratos", value: totals.carbs, max: 130, color: "hsl(25 75% 68%)" },
      { name: "Gorduras", value: totals.fat, max: 35, color: "hsl(200 70% 60%)" },
    ];
  };

  const saveEntry = () => {
    toast({
      title: "Registro salvo! 🎉",
      description: "Seu diário foi atualizado com sucesso.",
    });
  };

  const clearAll = () => {
    setSelectedFoods([]);
    setExposureLevel(null);
    toast({
      title: "Registro limpo",
      description: "Todos os itens foram removidos.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-xl font-semibold text-foreground">O Garfo Amigo</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/20 rounded-full">
              <BookOpen className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-medium text-sm">Diário Alimentar</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Registre sua jornada alimentar
            </h1>
            <p className="text-lg text-muted-foreground">
              Acompanhe o que você consumiu e experimente novos alimentos no seu ritmo, sem pressão.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Left Column - Food Selection */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-1">Alimentos de Hoje</h2>
                    <p className="text-sm text-muted-foreground">Clique nos alimentos que você consumiu</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{selectedFoods.length}</p>
                    <p className="text-xs text-muted-foreground">selecionados</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {safeFoods.map((food) => (
                    <FoodIconButton
                      key={food.id}
                      emoji={food.emoji}
                      label={food.label}
                      selected={selectedFoods.includes(food.id)}
                      onClick={() => toggleFood(food.id)}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="flex-1"
                    onClick={saveEntry}
                    disabled={selectedFoods.length === 0}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Salvar registro
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={clearAll}
                    disabled={selectedFoods.length === 0}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>

              {/* Nutrition Progress */}
              <NutritionProgress nutrients={calculateNutrients()} />
            </div>

            {/* Right Column - Exposure Tracker */}
            <div className="space-y-6">
              <ExposureTracker
                foodName={newFoodName}
                currentLevel={exposureLevel}
                onLevelSelect={setExposureLevel}
              />

              {/* Tips Card */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">💡 Dicas para usar o diário</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Não há "falha" - cada passo conta, mesmo apenas olhar para um alimento novo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>O progresso não é linear - alguns dias são melhores que outros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Celebre cada pequena vitória no rastreador de exposição</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Use o balanço nutricional como guia, não como regra rígida</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Como funciona a exposição gradual?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👀</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Etapas Iniciais</h3>
                <p className="text-sm text-muted-foreground">
                  Comece apenas vendo e cheirando. Não há pressa para avançar.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤏</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Etapas Intermediárias</h3>
                <p className="text-sm text-muted-foreground">
                  Tocar e lambuze quando se sentir confortável. Cada passo é importante.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😋</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Etapas Finais</h3>
                <p className="text-sm text-muted-foreground">
                  Provar e engolir acontece naturalmente, no seu tempo.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiarioAlimentar;
