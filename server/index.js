
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config

const app = express()

app.use("/", require("./routes/authRoutes"))
const PORT = 8001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
