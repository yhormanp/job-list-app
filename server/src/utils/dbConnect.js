import mongoose from 'mongoose';
const cors = require('cors');
import dotenv from 'dotenv'
dotenv.config()

const dbConnect = async () => {

    mongoose.connection.on('connecting', () =>{
        console.log('connecting to mongodb');
    });

    mongoose.connection.on('connected', () =>{
        console.log('connection to mongodb was stablished successfully');
    });

    try {
        const dbURI = process.env.DATABASE_URI;
        await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})    
    } catch (error) {
        console.log('mongodb connection failed: ', error);
    }
}

export default dbConnect;