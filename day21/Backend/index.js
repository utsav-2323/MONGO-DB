const express = require("express")
const port = 8000
const app = express()
const db = require("./config/db")
const cors = require("cors")


app.use(express.urlencoded())
app.use(express.json())
app.use(cors({origin:"http://localhost:5173"}))
app.use("/",require("./Routes/Rout"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at " + port);
})