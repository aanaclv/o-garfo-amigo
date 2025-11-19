import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { BenefitItem } from "@/components/BenefitItem";
import { MapPin, BookOpen, MessageSquare, Sparkles, Heart, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-medium text-sm">🍴 Bem-vindo ao Garfo Amigo</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Expanda seu repertório alimentar com{" "}
                <span className="text-primary">segurança e carinho</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Uma plataforma acolhedora para apoiar pessoas com seletividade alimentar. 
                Ferramentas práticas, sem julgamentos, focadas no seu bem-estar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" className="group">
                  Comece sua jornada
                  <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button variant="soft" size="xl">
                  Saiba mais
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={heroImage} 
                  alt="Alimentos coloridos e acolhedores" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ferramentas pensadas para você
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recursos práticos e validados para expandir seu repertório alimentar de forma gradual e respeitosa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={MapPin}
              title="Mapa de Texturas"
              description="Explore alimentos filtrando por textura, temperatura, cor e composição. Encontre opções que fazem sentido para você, com fotos claras e ingredientes organizados."
              gradient="bg-gradient-to-br from-primary/20 to-primary/5"
            />
            <FeatureCard
              icon={BookOpen}
              title="Diário Alimentar"
              description="Registre suas refeições de forma visual e gamificada. Acompanhe seu progresso com tentativas graduais: vi, cheirei, toquei, provei. Sem pressão, no seu ritmo."
              gradient="bg-gradient-to-br from-secondary/20 to-secondary/5"
            />
            <FeatureCard
              icon={MessageSquare}
              title="Guia de Comunicação"
              description="Scripts prontos para explicar sua seletividade em festas, restaurantes e compras. Copie e use quando precisar se comunicar com segurança."
              gradient="bg-gradient-to-br from-accent/20 to-accent/5"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/20 rounded-full">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-secondary font-medium text-sm">Feito com cuidado</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Uma abordagem diferente, baseada em respeito
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Entendemos que a seletividade alimentar é sensorial, não é escolha. 
                Nossa plataforma foi desenvolvida pensando em cada detalhe para reduzir 
                ansiedade e promover autonomia.
              </p>
              <div className="space-y-4">
                <BenefitItem text="Sem julgamentos ou linguagem que gere culpa" />
                <BenefitItem text="Interface visual clara e organizada, sem sobrecarga sensorial" />
                <BenefitItem text="Progressão gradual respeitando seu ritmo individual" />
                <BenefitItem text="Ferramentas de rastreamento nutricional sem ansiedade" />
                <BenefitItem text="Informações validadas e baseadas em evidências" />
              </div>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Compromisso com você</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground"><strong>Fotos reais:</strong> Imagens claras dos alimentos, nada abstrato ou confuso</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground"><strong>Cores suaves:</strong> Design pensado para não causar desconforto visual</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground"><strong>Instruções lineares:</strong> Passo a passo simples e direto, sem distrações</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-foreground"><strong>Privacidade:</strong> Seus dados e jornada são sempre confidenciais</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pronto para começar sua jornada alimentar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se a uma comunidade que entende e respeita suas necessidades. 
              Ferramentas práticas para expandir seu repertório no seu tempo.
            </p>
            <Button variant="hero" size="xl" className="group">
              Criar conta gratuita
              <Sparkles className="ml-2 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">O Garfo Amigo</h3>
              <p className="text-muted-foreground">
                Apoiando pessoas com seletividade alimentar a expandirem seu repertório com respeito e segurança.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Recursos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Mapa de Texturas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Diário Alimentar</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Guia de Comunicação</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Suporte</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground">
            <p>&copy; 2024 O Garfo Amigo. Feito com carinho para você.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
