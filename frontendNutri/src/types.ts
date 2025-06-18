export type PageType = 'dashboard' | 'user' | 'recipes';

export interface PageProps {
  setCurrentPage: (page: PageType) => void;
} 