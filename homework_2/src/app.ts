import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/userRoutes'
import database from './models/database'

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use('/users', userRouter)

app.listen(port, (err) => {
    if (err) {
        return console.error(err)
    }

    database.connect()
    return console.log(`Server is listening on ${port}`)
})
