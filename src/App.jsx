import { APIContextProvider } from './context/apiContext'
import { Route, Routes } from 'react-router-dom'
import './app.scss'

import Navbar from './components/Navbar'
import Home from './pages/Home'

function App () {
  return (
    <APIContextProvider>
      <div className="container app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </APIContextProvider>
  )
}

export default App
