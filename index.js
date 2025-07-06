const express = require("express")
const cors = require("cors")
const { conectDb } = require("./config/connect.mongodb")
const { authorRouter } = require("./routes/author.routes")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())
conectDb()

const PORT = process.env.PORT || 3000

// routes
app.use(authorRouter)

app.listen(PORT,()=>{console.log(`server run in ${PORT}`);})