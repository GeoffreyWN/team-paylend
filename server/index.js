const express = require('express')
const connectDB = require('./config/db')


const app = express()

connectDB()

app.use(express.json({extended: false}))

app.get('/', (req, res) =>  res.send('Team Paylend backend API Running') )

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`nodeJS server started on port ${PORT}`)  )