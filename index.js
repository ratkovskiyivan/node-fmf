import express from 'express'
import config from 'config'
import {router as ugnRouter} from './routes/ugn.router.js'
import {router as directionRouter} from './routes/direction.route.js'
import {router as profileRouter} from './routes/profile.router.js'

const app = express()

const PORT = config.get('server.port')

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers')
    next()
})

app.use('/api', ugnRouter)
app.use('/api', directionRouter)
app.use('/api', profileRouter)


app.listen(PORT, () => {
    console.log(`App running on port ${PORT} ...`)
})
