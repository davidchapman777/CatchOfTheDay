import 'express-async-errors'
import morgan from 'morgan'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'
import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'
import express from 'express'
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import postsRouter from './routes/postsRouter.js'
import authenticateUser from './middleware/auth.js'
import fileUpload from 'express-fileupload'
import cors from 'cors'
dotenv.config()
import {v2 as cloudinary} from "cloudinary"
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})
const app = express()
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(cors())
app.use(express.static(path.resolve(__dirname, './client/build')))
app.use(express.static('./public'))
app.use(express.json())
app.use(fileUpload())
// app.use(fileUpload({useTempFiles:true}))
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.get('/', (req, res) => {
    res.json({msg:'welcome'})
})
app.get('/api/v1', (req, res) => {
    res.json({msg:'API'})
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', authenticateUser, postsRouter)
// app.use('/api/v1/posts', authenticateUser, uploadRouter)
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./client/build','index.html'))
})
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 4000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()