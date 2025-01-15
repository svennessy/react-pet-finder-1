/* import RenderExamples from "./renders/RenderExamples"
import RenderHome from "./renders/RenderHome" */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./elements/Home"
import Create from "./elements/Create"
import Read from "./elements/Read"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
{/* <RenderExamples className="section" /> */}

      {/* <RenderHome />
       <RenderHome /> */}