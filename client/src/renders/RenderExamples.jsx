import { useState } from "react"
import ExampleComponents from "../components/examples"
import SortComponentsWithData from "../hooks/SortComponentsWithData"

function RenderExamples() {
  const [closeItem, setCloseItem] = useState(true)
  const ExampleGroup = () => {
    return SortComponentsWithData(ExampleComponents)
  }

  return (
    <div>
      <h1 className="titleDropBar" onClick={() => setCloseItem(!closeItem)}>
        <button>
          {closeItem ? (
            <img src={"./imgs/Open.svg"} />
          ) : (
            <img src={"./imgs/Collapse.svg"} />
          )}
        </button>
        Examples
      </h1>

      {!closeItem && <ExampleGroup className="examplesContainer" />}
    </div>
  )
}

export default RenderExamples
