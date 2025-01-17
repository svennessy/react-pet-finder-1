/* import RenderExamples from "./renders/RenderExamples"
import RenderHome from "./renders/RenderHome" */
/* import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./elements/Home"
import Create from "./elements/Create"
import Update from "./elements/Update" */
import UseAxios from "./hooks/UseAxios"
import { useEffect, useState } from "react"

function App() {
  const { response, error, loading, fetchData } = UseAxios()
  const { petId, setPetId } = useState("")

  // Fetch all pets
  const fetchPets = () => {
    fetchData({
      url: "/pets",
      method: "GET",
    })
  }

  // Create new pet
  const createPet = () => {
    fetchData({
      url: "/create",
      method: "POST",
      data: {
        petName: "",
        petType: "",
        ownerName: "",
        petAvi: "",
        lastSeen: "",
      },
    })
  }

  // Update pet info
  const updatePet = () => {
    fetchData({
      url: `/update/${petId}`,
      method: "PUT",
      data: {
        id: petId,
        petName: "",
        petType: "",
        ownerName: "",
        petAvi: "",
        lastSeen: "",
      }
    })
  }

  // Delete pet
  const deletePet = () => {
    fetchData({
      url: `/${petId}`,
      method: "DELETE",
    })
  }

  /* useEffect(() => {
    fetchPets()
  }, []) */

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={fetchPets}>Fetch Pets</button>
    </div>
    
  )
}

export default App
{
  /* <RenderExamples className="section" /> */
}

{
  /* <RenderHome />
       <RenderHome /> */
}
{/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter> */}