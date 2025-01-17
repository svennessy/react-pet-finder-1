import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import UseAxios from "../hooks/UseAxios"

function Home() {
  const { data, loading, error } = UseAxios()

  /* const [pets, setPets] = useState([...data]) 
  
  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setPets(res.data))
      .catch((err) => console.log(err))
  }, []) 
  
  useEffect(() => {
    setPets((prev) => [...data])
  }, []) */

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/delete/" + id)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err))
  }

  if (loading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <div className="appContainer">
      <div className="homeContainer">
        <Link to="/create" className="">
          Add Pet
        </Link>
        {data.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <th>Pet Name</th>
                <th>Pet Type</th>
                <th>Owner Name</th>
                <th>Pet Avi</th>
                <th>Last Seen</th>
              </tr>
            </thead>
            <tbody>
              {data.map((pet) => (
                <tr key={pet.id}>
                  <td>{pet.petName}</td>
                  <td>{pet.petType}</td>
                  <td>{pet.ownerName}</td>
                  <td>{pet.petAvi}</td>
                  <td>{pet.lastSeen}</td>
                  <td>
                    <Link to={`/update/${pet.id}`} className="">
                      Update
                    </Link>
                    <button onClick={() => handleDelete(pet.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>No data</h2>
        )}
      </div>
    </div>
  )
}

export default Home
