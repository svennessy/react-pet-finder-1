import { useState } from "react"

function RunConsole() {
  const [showConsole, setShowConsole] = useState(true)

  if (!showConsole) {
  } else {
    console.clear()
  }

  return {showConsole, setShowConsole}
}

export default RunConsole