const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const path = require("path")

// creates instance of express app
// serves as backbone of server
const app = express()

// middleware functions for handling static files
// access point for client side assets like js and css
app.use(express.static(path.join(__dirname, "public")))

// address security concerns with cross origin resource sharing
app.use(cors())

// parses json data from incoming http requests aka data sent from client
app.use(express.json())

// specify where server will listen for incoming requests
const port = 5000

// set up connection to mysql database so our server can communicate
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pets",
})

// add pet object
app.post("/add_pet", (req, res) => {
  const sql =
    "INSERT INTO pet_details (`petName`, `petType`, `ownerName`, `petAvi`) VALUES (?, ?, ?, ?)"
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
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err })
    return res.json({ success: "Pet added successfully" })
  })
})

app.get("/pets", (req, res) => {
  const sql = "SELECT * FROM pet_details"
  db.query(sql, (err, result) => {
    if (err) res.json({ message: "Server error" })
    return res.json(result)
  })
})

app.get("/get_pet/:id", (req, res) => {
  const id = req.params.id
  const sql = "SELECT * FROM pet_details WHERE `id`= ?"
  db.query(sql, [id], (err, result) => {
    if (err) res.json({ message: "Server error" })
    return res.json(result)
  })
})

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id
  const sql = "DELETE FROM pet_details WHERE id=?"
  const values = [id]
  db.query(sql, values, (err, result) => {
    if (err)
      return res.json({ message: "Something unexpected has occured" + err })
    return res.json({ success: "Student updated successfully" })
  })
})

// start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
