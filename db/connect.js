import mongoose from 'mongoose'

const connectDB = (url) => {
    return mongoose.connect(url,
        {
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true,
    })
}

export default connectDB