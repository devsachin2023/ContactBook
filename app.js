// 

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const port = process.env.PORT || 4000;
// app.use(express.json());
const app = express();
// dotenv.config();
app.use(express.json());
dotenv.config();

//Db Connection Function
// const mongodbConnection = async () =>{
//     try{
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log('Connected to Database');
//     } catch(error){
//         throw error;
//     }
// }
const connectMongoDB = async () =>{
    try {
         await mongoose.connect(process.env.MONGO_URL);
         console.log("Connected to Databse!");
    } catch(error) {
        throw error;
    }
}
app.listen(port, ()=>{
    connectMongoDB();
    console.log('Server is listening on',port);
})