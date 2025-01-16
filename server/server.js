import express from "express"
import mysql from "mysql"
import cors from "cors"
import path from "path"

// creates instance of express app
// serves as backbone of server
const app = express()

// specify where server will listen for incoming requests
const port = 5000

// middleware functions for handling static files
// access point for client side assets like js and css
/* app.use(express.static(path.join(__dirname, "public"))) */

// parses json data from incoming http requests aka data sent from client
app.use(express.json())

// address security concerns with cross origin resource sharing
app.use(cors())

// set up connection to mysql database so our server can communicate
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pets",
})

app.get("/", (req, res) => {
  const sql = "SELECT * FROM pet_details"
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Error" })
    }
    return res.json(data)
  })
})

// add pet object
app.post("/create", (req, res) => {
  const sql =
    "INSERT INTO pet_details (petName, petType, ownerName, petAvi) VALUES (?)"
  const values = [
    req.body.petName,
    req.body.petType,
    req.body.ownerName,
    req.body.petAvi,
    /*req.body.isStillMissing,
    req.body.lastSeen,
     req.body.lastLocationLat,
    req.body.lastLocationLong, */
  ]
  db.query(sql, [values], (err, data) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err })
    return res.json(data)
  })
})

app.put("/update/:id", (req, res) => {
  const sql =
    "update pet_details set petName = ?, petType = ?, ownerName = ?, petAvi = ? where id = ?"
  const values = [
    req.body.petName,
    req.body.petType,
    req.body.ownerName,
    req.body.petAvi,
  ]
  const id = req.params.id
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" })
    }
    return res.json(data)
  })
})

app.delete("/delete/:id", (req, res) => {
  const sql = "delete from pet_details where id = ?"
  const id = req.params.id
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json({ Error: "Error" })
    }
    return res.json(data)
  })
})

// start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
