import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function Create() {
  const [values, setValues] = useState({
    petName: "",
    petType: "",
    ownerName: "",
    petAvi: "",
    /*isStillMissing: "",
    lastSeen: "",
     lastLocationLat: "",
    lastLocationLong: "", */
  })

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    axios
      .post("/add_pet", values)
      .then((res) => {
        navigate("/")
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="modal-background">
      <div className="row">
        <h3>Add Pet</h3>
        <div>
          <Link to="/">Home</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="petName">Pet Name</label>
            <input
              type="text"
              name="petName"
              required
              onChange={(e) =>
                setValues({ ...values, petName: e.target.value })
              }
            />
          </div>
          <div className="formGroup">
            <label htmlFor="petType">Pet Type</label>
            <input
              type="text"
              name="petType"
              required
              onChange={(e) =>
                setValues({ ...values, petType: e.target.value })
              }
            />
          </div>
          <div className="formGroup">
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              required
              onChange={(e) =>
                setValues({ ...values, ownerName: e.target.value })
              }
            />
          </div>
          <div className="formGroup">
            <label htmlFor="petAvi">Pet Avi</label>
            <input
              type="text"
              name="petAvi"
              required
              onChange={(e) => setValues({ ...values, petAvi: e.target.value })}
            />
          </div>
          <div className="form-group my-3">
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create
