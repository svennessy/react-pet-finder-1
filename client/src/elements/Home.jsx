import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home() {
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState(true)
  useEffect(() => {
    if (deleted) {
      setDeleted(false)
      axios
        .get("/pets")
        .then((res) => {
          setData(res.data)
        })
        .catch((err) => console.log(err))
    }
  }, [deleted])

  function handleDelete(id) {
    axios
      .delete(`/delete/${id}`)
      .then((res) => {
        setDeleted(true)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="homeContainer">
      <h3>Pets</h3>
      <div className="d-flex justify-content-end">
        <Link className="btn btn-success" to="/create">
          Add Pet
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Owner</th>
            <th>Avi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((pet) => {
            return (
              <tr>
                <td>{pet.id}</td>
                <td>{pet.petName}</td>
                <td>{pet.petType}</td>
                <td>{pet.ownerName}</td>
                <td>{pet.petAvi}</td>
                <td>
                  <Link className="btn mx-2 btn-success" to={`/read/${pet.id}`}>
                    Read
                  </Link>
                  <Link className="btn mx-2 btn-success" to={`/edit/${pet.id}`}>
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(pet.id)}
                    className="btn mx-2 btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
