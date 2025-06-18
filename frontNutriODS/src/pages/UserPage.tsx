// src/pages/UserPage.tsx
import { PageProps } from '../types';

export function UserPage({ setCurrentPage }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => setCurrentPage('dashboard')}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        {/* Icono y texto del botón */}
      </button>

      {/* Resto del código de la página de usuario */}
    </div>
  );
}