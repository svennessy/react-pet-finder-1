import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
/* import { DataProvider } from "./hooks/GetData.jsx" */
import "@fontsource/geist-sans"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <DataProvider> */}
    <App />
    {/* </DataProvider> */}
  </React.StrictMode>
)
