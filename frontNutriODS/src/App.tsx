// src/App.jsx
import { useState } from 'react';
import { UserPage } from './pages/UserPage';
import { RecipesPage } from './pages/RecipesPage';
import { PageType, SetCurrentPageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'dashboard' && (
        <Dashboard setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'user' && <UserPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'recipes' && <RecipesPage setCurrentPage={setCurrentPage} />}
    </div>
  );
}

interface DashboardProps {
  setCurrentPage: SetCurrentPageType;
}

function Dashboard({ setCurrentPage }: DashboardProps) {
  // ... (resto del código del dashboard)
}

export default App;