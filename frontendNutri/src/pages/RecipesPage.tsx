import type { PageProps } from '../types';

export function RecipesPage({ setCurrentPage }: PageProps) {
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
        <h1 className="text-2xl font-bold mb-4">Recetas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Aquí irán las tarjetas de recetas */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Ensalada César</h3>
            <p className="text-gray-600 text-sm">Una deliciosa ensalada con pollo a la parrilla</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Pasta Alfredo</h3>
            <p className="text-gray-600 text-sm">Pasta con salsa cremosa y pollo</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Salmón al Horno</h3>
            <p className="text-gray-600 text-sm">Salmón con hierbas y limón</p>
          </div>
        </div>
      </div>
    </div>
  );
} 