import { APIContextProvider } from './context/apiContext'
import { Route, Routes, Navigate } from 'react-router-dom'
import './app.scss'

import Navbar from './components/Navbar'
import Categories from './pages/Categories'
import Thumbs from './pages/Thumbs'

function App () {
  return (
    <APIContextProvider>
      <div className="container app-container">
        <Navbar />

        <Routes>
          <Route path="/recent" element={<Thumbs type='recent' />} />
          <Route path="/toprated" element={<Thumbs type='rated' />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Navigate to="/recent"/>} />
        </Routes>
      </div>
    </APIContextProvider>
  )
}

export default App
