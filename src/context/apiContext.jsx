import React, { useContext, useState, useEffect, createContext } from 'react'

const APIContext = createContext()

export const useAPI = () => {
  const context = useContext(APIContext)
  if (context === undefined) {
    throw new Error('Context used within a provider')
  }
  return context
}

export const APIContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = 'https://firebasestorage.googleapis.com/v0/b/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const formattedData = Object.keys(data).map(key => [key, data[key]])
        setData(formattedData)
        setLoading(false)
      })
  }, [])

  return (
    <APIContext.Provider value={{
      data,
      loading
    }}>
      {children}
    </APIContext.Provider>
  )
}
