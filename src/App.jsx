import { APIContextProvider } from './context/apiContext'

function App () {
  return (
    <APIContextProvider>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </APIContextProvider>
  )
}

export default App
