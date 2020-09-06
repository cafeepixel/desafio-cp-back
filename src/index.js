import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {routes} from './routes/index.js';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

const server = app.listen(process.env.PORT || 3000, ()=>{
    if(server){
        const address = server.address()
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else{
        console.error(`Failure upon starting server.`);
    }
})