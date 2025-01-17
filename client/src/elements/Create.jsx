import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import UseAxios from "../hooks/UseAxios"

function Create() {
  const { createData, values, setValues } = UseAxios()
  /* const [values, setValues] = useState({
    petName: "",
    petType: "",
    ownerName: "",
    petAvi: "",
    lastSeen: "",
  })

  const navigate = useNavigate() */

  /* const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/create", values)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err))
  } */

  return (
    <div>
      <form action="/action_page.php" onSubmit={createData}>
        <div>
          <label htmlFor="petName">Pet Name</label>
          <input
            type="text"
            id="petName"
            name="petName"
            onChange={(e) => setValues({ ...values, petName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="petName">Pet Type</label>
          <input
            type="text"
            id="petType"
            name="petType"
            onChange={(e) => setValues({ ...values, petType: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="ownerName">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            onChange={(e) =>
              setValues({ ...values, ownerName: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="petAvi">Pet Avi</label>
          <input
            type="text"
            id="petAvi"
            name="petAvi"
            onChange={(e) => setValues({ ...values, petAvi: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastSeen">Last Seen</label>
          <input
            type="date"
            id="lastSeen"
            name="lastSeen"
            onChange={(e) => setValues({ ...values, lastSeen: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create
