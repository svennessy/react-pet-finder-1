import { useEffect, useState, createContext } from "react"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [exampleData, setExampleData] = useState([])
  const [petData, setPetData] = useState([])

  const exampleUrl = "/data/exampleData.json"
  const petUrl = '/data/petData.json'

  const fetchData = async (url, setFunction) => {
    try {
      const res = await fetch(url)
      const jsonData = await res.json()
      setFunction(jsonData)
    } catch (error) {
      console.error("Error fetching data: ", error)
    }
  }

  useEffect(() => {
    fetchData(exampleUrl, setExampleData)
    fetchData(petUrl, setPetData)
  }, [])

  return (
    <>
      {exampleData ? (
        <DataContext.Provider value={{ exampleData, petData }}>
          {children}
        </DataContext.Provider>
      ) : (
        <p>...Loading</p>
      )}
    </>
  )
}
