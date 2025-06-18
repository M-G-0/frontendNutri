import type { PageProps } from '../types';

export function Dashboard({ setCurrentPage }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          onClick={() => setCurrentPage('user')}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Perfil de Usuario</h2>
          <p className="text-gray-600">Gestiona tu información personal y preferencias</p>
        </div>

        <div 
          onClick={() => setCurrentPage('recipes')}
          className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Recetas</h2>
          <p className="text-gray-600">Explora y guarda tus recetas favoritas</p>
        </div>
      </div>
    </div>
  );
} 