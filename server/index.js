const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
// const userRouter = require('./routes/users')


const app = express()

connectDB()

app.use(express.json({ extended: false }))
app.use(cors())

//test route
app.get('/', (req, res) => res.send('Team Paylend backend API Running'))

app.use('/api/v1/users', require('./routes/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`nodeJS server started on port ${PORT}`))