import { useState, useContext } from "react"
import { DataContext, DataProvider } from "./GetData"

function MyComponent(props) {
  const { exampleData } = useContext(DataContext)
  return <>{props.component}</>
}

function SortComponentsWithData(components) {
  const [dataCopy, setDataCopy] = useState([...components])

  const mapped = dataCopy?.map((item) => {
    const itemName = item().name || item.name
    const valuesSavedWithItem = item().valuesSavedWithComponent || null
    const itemComponent = item().component || null

    return {
      name: itemName,
      valuesSavedWithComponent: valuesSavedWithItem,
      component: itemComponent,
    }

    /*** example from js problems site ***
     * 
    const hasFunctions = item().hasOwnProperty("functionsUsed")
    const hasComponent = item().hasOwnProperty("component")

    const itemFunctions = item().functionsUsed || null
    const ItemJSX = item().component || null

    console.log(`Function name is ${itemName}`) 

    hasFunctions
      ? console.log(
          `>>${itemName} uses the functions: ${item().functionsUsed.join(", ")}`
        )
      : console.log(`>>${itemName} doesn't use any functions`)

    hasComponent
      ? console.log(`>>${itemName} has component: ${itemName}`)
      : console.log(`>>${itemName} has no component`)
    

    return {
      name: itemName,
      functionsUsed: itemFunctions,
      component: ItemJSX,
    }
    */
  })

  const copy = [...mapped].sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  return (
    <DataProvider>
      {copy?.map((item, index) => (
        <MyComponent
          key={index}
          component={item.component}
          id="exampleComponent"
        />
      ))}
    </DataProvider>
  )
}

export default SortComponentsWithData
