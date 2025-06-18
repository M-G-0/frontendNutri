import type { SetCurrentPageType } from '../types';

interface DashboardProps {
  setCurrentPage: SetCurrentPageType;
}

export function Dashboard({ setCurrentPage }: DashboardProps) {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Aquí puedes agregar el contenido del dashboard */}
    </div>
  );
} 