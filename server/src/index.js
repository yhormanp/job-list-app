import express from 'express';
import dotenv from 'dotenv'
import jobsRouter from './jobs/jobs.router'
import searchesRouter from './searches/searches.router'
import { developmentErrors, notFound } from './utils/errorHandler';
import dbConnect from './utils/dbConnect';
const cors = require('cors');
dotenv.config()


const app = express();
app.use(cors());
// app.use(
//     express.urlencoded({
//         extended: true
//     })
// )


// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if(req.method === "OPTIONS"){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
// })


app.use(express.json())
app.use('/jobs', jobsRouter);

app.use('/searches', searchesRouter)


app.use (notFound);
app.use(developmentErrors);


dbConnect()
.then(() => {
app.listen(3001, () => console.log('NodeJs server listening port 3001'))
    
})

