export type PageType = 'dashboard' | 'user' | 'recipes';

export type SetCurrentPageType = (page: PageType) => void;

export interface PageProps {
  setCurrentPage: SetCurrentPageType;
}
