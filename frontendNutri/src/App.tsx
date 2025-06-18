import { useState } from 'react'
import { UserPage } from './pages/UserPage'
import { RecipesPage } from './pages/RecipesPage'
import { Dashboard } from './pages/Dashboard'
import type { PageType } from './types'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard')

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'dashboard' && (
        <Dashboard setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'user' && <UserPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'recipes' && <RecipesPage setCurrentPage={setCurrentPage} />}
    </div>
  )
}

export default App
