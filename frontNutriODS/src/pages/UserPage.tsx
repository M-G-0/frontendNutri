// src/pages/UserPage.tsx
import type { PageProps } from '../types';

export function UserPage({ setCurrentPage }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => setCurrentPage('dashboard')}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
            clipRule="evenodd" 
          />
        </svg>
        Volver al Dashboard
      </button>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Perfil de Usuario</h1>
        {/* Aquí irá el contenido del perfil de usuario */}
      </div>
    </div>
  );
}