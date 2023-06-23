import express from 'express'
import config from 'config'
import {router as ugnRoute} from './routes/ugn.route.js'
import {router as directionRoute} from './routes/direction.route.js'
import {router as profileRoute} from './routes/profile.route.js'
import {router as userRoute} from './routes/user.route.js'
import {router as departamentRoute} from './routes/departament.route.js'
import {router as informationProfileRoute} from './routes/informationProfile.route.js'
import {router as disciplineEntryRoute} from './routes/disciplineEntry.route.js'
import {router as subjectRoute} from './routes/subject.route.js'
import {router as courseRoute} from './routes/course.route.js'

const app = express()

const PORT = config.get('server.port')

app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers')
    next()
})

app.use('/api', ugnRoute)
app.use('/api', directionRoute)
app.use('/api', profileRoute)
app.use('/api', userRoute)
app.use('/api', departamentRoute)
app.use('/api', informationProfileRoute)
app.use('/api', disciplineEntryRoute)
app.use('/api', subjectRoute)
app.use('/api', courseRoute)


app.listen(PORT, () => {
    console.log(`App running on port ${PORT} ...`)
})
