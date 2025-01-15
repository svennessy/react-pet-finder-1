import { useState, useContext } from "react"
import { DataContext } from "../../hooks/GetData"

export function ExampleOne() {
  const valueSavedWithComponent = ["exampleValue"]
  const Component = () => {
    const [closeItem, setCloseItem] = useState(true)
    const { exampleData: exampleData } = useContext(DataContext)

    const filteredList = exampleData?.filter(
      (example) => example.exampleName !== "Breakfast"
    )

    const mapFilteredList = filteredList?.map((example) => ({
      exampleName: example["exampleName"],
    }))

    return (
      <div>
        <h3 onClick={() => setCloseItem(!closeItem)}>
          <button>
            {closeItem ? (
              <img src={"./imgs/Open.svg"} />
            ) : (
              <img src={"./imgs/Collapse.svg"} />
            )}
          </button>
          Example One
        </h3>
        {!closeItem && (
          <>
            <img src={"./imgs/Examples/ExampleOne.png"} />
            <p>
              {`JSON.stringify(mapFilteredList)`} {"=>"}{" "}
              {JSON.stringify(mapFilteredList)}
            </p>
          </>
        )}
      </div>
    )
  }

  return {
    component: <Component />,
    valueSavedWithComponent: valueSavedWithComponent,
  }
}

export default ExampleOne
