const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const userRoutes = require('./route/userRoutes')
const { Notfound,errorHandler } =  require('./middlewares/errorMiddleware')
const noteRoutes = require('./route/noteRoutes')

const app = express()
// console.log(arguments)

connectDB()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('kamran')
})

app.use('/api/users',userRoutes)
app.use('/api/notes',noteRoutes)

app.use(Notfound)
app.use(errorHandler)


app.listen(process.env.PORT,console.log("5000"))