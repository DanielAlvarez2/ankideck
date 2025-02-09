const express = require('express')
const app = express()

const PORT = process.env.PORT || 5999

app.listen(PORT, ()=> console.log(`Server Listening on Port: ${PORT}`))