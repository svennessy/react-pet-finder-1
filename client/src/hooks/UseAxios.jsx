import { useState, useEffect } from "react"
import axios from "axios"
/* import { useNavigate, useParams } from "react-router-dom" */

/* const baseUrl = "http://localhost:5000" */

const UseAxios = () => {
  /* const { id } = useParams()
  const [data, setData] = useState([]) */
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const axiosInstance = axios.create({
    baseURL: "https://react-pet-finder-1-server.onrender.com",
  })

  axiosInstance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  let controller = new AbortController()

  useEffect(() => {
    return () => controller?.abort()
  }, [])

  const fetchData = async ({ url, method, data = {}, params = {} }) => {
    setLoading(true)

    controller.abort()
    controller = new AbortController()

    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        signal: controller.signal,
      })
      setResponse(result.data)
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error("Request cancelled", error.message)
      } else {
        setError(error.response ? error.response.data : error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return { response, error, loading, fetchData }

  /* const [values, setValues] = useState({
    petName: "",
    petType: "",
    ownerName: "",
    petAvi: "",
    lastSeen: "",
  })

  const navigate = useNavigate()

  // Fetch data on component mount
  useEffect(() => {
    fetchData()
  }, [])

  // GET
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(baseUrl)
      setData(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  // POST
  const createData = async (e) => {
    e.preventDefault()
    try {
      const response = await axios
        .post(`${baseUrl}/create`, values)
        .then((res) => navigate("/"))
      setData([...data, response.data])
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  // PUT
  const updateData = async (id, ) => {
    try {
      const initial = await axios
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
      const response = await axios
      .put("http://localhost:5000/update/" + id, values)
      .then((res) => navigate("/"))
      setData([...data, response.data])
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  // DELETE
  const deleteData = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`)
      setData(data.filter((item) => item.id !== id))
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [baseUrl]) */

  /*return {
   data,
    loading,
    error,
    createData,
    values,
    setValues,
    updateData,
    id  fetchData, deleteData ,
  }*/
}

export default UseAxios
