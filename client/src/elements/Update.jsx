import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import UseAxios from "../hooks/UseAxios"

function Update() {
  const { values, setValues, updateData, id } = UseAxios()

  const handleUpdate = (e) => {
    e.preventDefault()
    updateData()
  }

  /* const { id } = useParams()
  const [values, setValues] = useState({
    petName: "",
    petType: "",
    ownerName: "",
    petAvi: "",
    lastSeen: "",
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put("http://localhost:5000/update/" + id, values)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/getrecord/" + id)
      .then((res) =>
        setValues({
          ...values,
          petName: res.data[0].petName,
          petType: res.data[0].petType,
          ownerName: res.data[0].ownerName,
          petAvi: res.data[0].petAvi,
          lastSeen: res.data[0].lastSeen,
        })
      )
      .catch((err) => console.log(err))
  }, []) */

  return (
    <div>
      <h1>Update Pet Info</h1>
      <form action="/action_page.php" onSubmit={handleUpdate}>
        <div>
          <label htmlFor="petName">Pet Name</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={values.petName}
            onChange={(e) => setValues({ ...values, petName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="petName">Pet Type</label>
          <input
            type="text"
            id="petType"
            name="petType"
            value={values.petType}
            onChange={(e) => setValues({ ...values, petType: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="ownerName">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={values.ownerName}
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
            value={values.petAvi}
            onChange={(e) => setValues({ ...values, petAvi: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="lastSeen">Last Seen</label>
          <input
            type="date"
            id="lastSeen"
            name="lastSeen"
            value={values.lastSeen}
            onChange={(e) => setValues({ ...values, lastSeen: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Update
