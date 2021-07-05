const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const path = require('path')

// const userRouter = require('./routes/users')


const app = express()

connectDB()

app.use(express.json({ extended: false }))
app.use(cors())

//test route
app.get('/', (req, res) => res.send('Team Paylend backend API Running'))

app.use('/api/v1/users', require('./routes/users'))

//serve static assets in production
if (process.env.NODE_ENV === 'production' ) {
    //set static folder
    app.use(express.static('../build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`nodeJS server started on port ${PORT}`))