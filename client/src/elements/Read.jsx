import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

function Read() {
  const [data, setData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    axios
      .get(`/get_pets/${id}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [id])
  return (
    <div className="container-fluid vw-100 vh-100 bg-primary">
      <h1>Pet {id}</h1>
      <Link to="/" className="btn btn-success">
        Back
      </Link>
      {data.map((pet) => {
        return (
          <ul className="list-group">
            <li className="list-group-item">
              <b>ID: </b>
              {pet["id"]}
            </li>
            <li className="list-group-item">
              <b>Name: </b>
              {pet["petName"]}
            </li>
            <li className="list-group-item">
              <b>Type: </b>
              {pet["petType"]}
            </li>
            <li className="list-group-item">
              <b>Owner: </b>
              {pet["ownerName"]}
            </li>
            <li className="list-group-item">
              <b>Avi: </b>
              {pet["petAvi"]}
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default Read
