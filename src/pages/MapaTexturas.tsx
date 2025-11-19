import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FoodCard } from "@/components/FoodCard";
import { FilterButton } from "@/components/FilterButton";
import { ArrowLeft, Filter } from "lucide-react";
import { Link } from "react-router-dom";

import bananaImg from "@/assets/foods/banana.jpg";
import toastImg from "@/assets/foods/toast.jpg";
import yogurtImg from "@/assets/foods/yogurt.jpg";
import chipsImg from "@/assets/foods/chips.jpg";
import appleImg from "@/assets/foods/apple.jpg";
import mashedPotatoImg from "@/assets/foods/mashed-potato.jpg";

const allFoods = [
  {
    id: 1,
    name: "Banana",
    image: bananaImg,
    texture: "Lisa",
    temperature: "Neutro",
    color: "Amarelo",
    ingredients: ["Banana madura"],
    category: "Frutas",
  },
  {
    id: 2,
    name: "Torrada",
    image: toastImg,
    texture: "Crocante",
    temperature: "Quente",
    color: "Marrom",
    ingredients: ["Pão de forma integral", "Sem manteiga"],
    allergens: ["Glúten"],
    category: "Pães",
  },
  {
    id: 3,
    name: "Iogurte Natural",
    image: yogurtImg,
    texture: "Cremosa",
    temperature: "Frio",
    color: "Branco",
    ingredients: ["Leite", "Fermento lácteo"],
    allergens: ["Lactose"],
    category: "Laticínios",
  },
  {
    id: 4,
    name: "Batata Chips",
    image: chipsImg,
    texture: "Crocante",
    temperature: "Neutro",
    color: "Amarelo",
    ingredients: ["Batata", "Óleo vegetal", "Sal"],
    category: "Lanches",
  },
  {
    id: 5,
    name: "Maçã Fatiada",
    image: appleImg,
    texture: "Crocante",
    temperature: "Frio",
    color: "Verde",
    ingredients: ["Maçã verde"],
    category: "Frutas",
  },
  {
    id: 6,
    name: "Purê de Batata",
    image: mashedPotatoImg,
    texture: "Pastosa",
    temperature: "Quente",
    color: "Branco",
    ingredients: ["Batata cozida", "Leite", "Sal"],
    allergens: ["Lactose"],
    category: "Acompanhamentos",
  },
];

const textureOptions = ["Todos", "Lisa", "Crocante", "Cremosa", "Pastosa"];
const temperatureOptions = ["Todos", "Quente", "Frio", "Neutro"];
const colorOptions = ["Todos", "Branco", "Amarelo", "Verde", "Marrom"];

const MapaTexturas = () => {
  const [selectedTexture, setSelectedTexture] = useState("Todos");
  const [selectedTemperature, setSelectedTemperature] = useState("Todos");
  const [selectedColor, setSelectedColor] = useState("Todos");

  const filteredFoods = allFoods.filter((food) => {
    const matchTexture = selectedTexture === "Todos" || food.texture === selectedTexture;
    const matchTemperature = selectedTemperature === "Todos" || food.temperature === selectedTemperature;
    const matchColor = selectedColor === "Todos" || food.color === selectedColor;
    return matchTexture && matchTemperature && matchColor;
  });

  const resetFilters = () => {
    setSelectedTexture("Todos");
    setSelectedTemperature("Todos");
    setSelectedColor("Todos");
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
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Mapa de Texturas</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore alimentos do seu jeito
            </h1>
            <p className="text-lg text-muted-foreground">
              Filtre por textura, temperatura e cor para encontrar opções que fazem sentido para você. 
              Todas as imagens são reais e os ingredientes estão organizados de forma clara.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border/50 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Texture Filter */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Textura</label>
              <div className="flex flex-wrap gap-2">
                {textureOptions.map((option) => (
                  <FilterButton
                    key={option}
                    label={option}
                    active={selectedTexture === option}
                    onClick={() => setSelectedTexture(option)}
                  />
                ))}
              </div>
            </div>

            {/* Temperature Filter */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Temperatura</label>
              <div className="flex flex-wrap gap-2">
                {temperatureOptions.map((option) => (
                  <FilterButton
                    key={option}
                    label={option}
                    active={selectedTemperature === option}
                    onClick={() => setSelectedTemperature(option)}
                  />
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Cor</label>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((option) => (
                  <FilterButton
                    key={option}
                    label={option}
                    active={selectedColor === option}
                    onClick={() => setSelectedColor(option)}
                  />
                ))}
              </div>
            </div>

            {/* Reset Button */}
            {(selectedTexture !== "Todos" || selectedTemperature !== "Todos" || selectedColor !== "Todos") && (
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Limpar filtros
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Mostrando <span className="font-semibold text-foreground">{filteredFoods.length}</span> {filteredFoods.length === 1 ? "alimento" : "alimentos"}
              </p>
            </div>

            {filteredFoods.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFoods.map((food) => (
                  <FoodCard
                    key={food.id}
                    name={food.name}
                    image={food.image}
                    texture={food.texture}
                    temperature={food.temperature}
                    color={food.color}
                    ingredients={food.ingredients}
                    allergens={food.allergens}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Nenhum alimento encontrado
                </h3>
                <p className="text-muted-foreground mb-4">
                  Tente ajustar os filtros para ver mais opções
                </p>
                <Button variant="default" onClick={resetFilters}>
                  Ver todos os alimentos
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Como usar o Mapa de Texturas?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-foreground">Escolha seus filtros</h3>
                <p className="text-sm text-muted-foreground">
                  Selecione textura, temperatura e cor que você prefere
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-foreground">Veja as opções</h3>
                <p className="text-sm text-muted-foreground">
                  Explore alimentos com fotos reais e informações claras
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-foreground">Experimente no seu ritmo</h3>
                <p className="text-sm text-muted-foreground">
                  Sem pressão, escolha quando e como experimentar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapaTexturas;
