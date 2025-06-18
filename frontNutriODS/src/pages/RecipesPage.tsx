// src/pages/RecipesPage.tsx
// src/pages/RecipesPage.tsx
import type { PageProps } from '../types';

interface Recipe {
  id: number;
  name: string;
  calories: number;
  time: number;
  ingredients: string[];
  favorite: boolean;
}

export function RecipesPage({ setCurrentPage }: PageProps) {
  const recipes: Recipe[] = [
    // ... tus recetas
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Contenido de la página de recetas */}
    </div>
  );
}