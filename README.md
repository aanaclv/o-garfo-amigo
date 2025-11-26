# 🍽️ Diário Alimentar

Um aplicativo web moderno e intuitivo para registro e acompanhamento de refeições diárias, desenvolvido com React e TypeScript.

## 📋 Sobre o Projeto

O Diário Alimentar é uma aplicação que permite aos usuários registrar suas refeições, acompanhar o progresso nutricional e monitorar a exposição a diferentes alimentos ao longo do tempo. Ideal para quem busca manter uma alimentação equilibrada e consciente.

## ✨ Funcionalidades

- 📝 **Registro de Refeições**: Adicione e acompanhe suas refeições diárias
- 📊 **Monitoramento Nutricional**: Visualize o progresso de calorias, proteínas, carboidratos e gorduras
- 🎯 **Rastreamento de Exposição**: Acompanhe a frequência de consumo de diferentes alimentos
- 🎨 **Interface Moderna**: Design responsivo e intuitivo com Tailwind CSS
- 🌓 **Modo Escuro**: Suporte para tema claro e escuro

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn-ui** - Componentes acessíveis e customizáveis
- **React Router** - Roteamento para aplicações React
- **TanStack Query** - Gerenciamento de estado assíncrono
- **Lucide React** - Biblioteca de ícones
- **Recharts** - Biblioteca de gráficos para React

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ ou Bun
- npm, yarn ou bun

### Instalação

1. Clone o repositório:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
bun install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
bun dev
```

4. Abra o navegador em `http://localhost:5173`

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
# ou
bun run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🎨 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
│   ├── foods/      # Imagens de alimentos
│   └── hero-food.jpg
├── components/      # Componentes reutilizáveis
│   ├── ui/         # Componentes de interface base (shadcn-ui)
│   ├── BenefitItem.tsx
│   ├── ExposureTracker.tsx
│   ├── FeatureCard.tsx
│   ├── FilterButton.tsx
│   ├── FoodCard.tsx
│   ├── FoodIconButton.tsx
│   ├── NavLink.tsx
│   └── NutritionProgress.tsx
├── hooks/          # React hooks customizados
├── lib/            # Utilitários e funções auxiliares
├── pages/          # Páginas da aplicação
│   ├── DiarioAlimentar.tsx
│   └── NotFound.tsx
└── main.tsx        # Ponto de entrada da aplicação
```

## 🎯 Como Editar o Projeto

### Use Lovable (Recomendado)

Visite o [projeto no Lovable](https://lovable.dev/projects/f7818954-35d3-4710-ab8f-6020c2a90579) e comece a fazer alterações através de prompts em linguagem natural. As mudanças serão automaticamente commitadas neste repositório.

### Use seu IDE Favorito

Clone o repositório e faça push das alterações. As mudanças serão refletidas automaticamente no Lovable.

### Use GitHub Codespaces

- Clique no botão "Code" (verde) no topo da página
- Selecione a aba "Codespaces"
- Clique em "New codespace" para criar um ambiente de desenvolvimento na nuvem

## 🚀 Deploy

Para fazer deploy do projeto:

1. Abra o [projeto no Lovable](https://lovable.dev/projects/f7818954-35d3-4710-ab8f-6020c2a90579)
2. Clique em Share → Publish
3. Seu app estará disponível em poucos segundos

### Domínio Customizado

Você pode conectar um domínio personalizado em Project > Settings > Domains.

Leia mais: [Configurando domínio customizado](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## 🔗 Links Úteis

- [Documentação do React](https://react.dev)
- [Documentação do Vite](https://vitejs.dev)
- [Documentação do Tailwind CSS](https://tailwindcss.com)
- [Documentação do Lovable](https://docs.lovable.dev)

---

Desenvolvido com ❤️ usando [Lovable](https://lovable.dev)