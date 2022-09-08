import { APIContextProvider } from './context/apiContext'

import Navbar from './components/Navbar'

function App () {
  return (
    <APIContextProvider>
      <div className="container">
        <Navbar />
      </div>
    </APIContextProvider>
  )
}

export default App
