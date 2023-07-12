import mongoose from "mongoose";

let isConnected = false // track status

export const connectToDB = async () => {
    mongoose.set('strictQuery')

    if(isConnected) {
        console.log('Mongo connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        console.log('MongoDB connected')
    } catch(error) {
        console.error(error)
    }
}