// require("dotenv").config({path: "./env"});1
import dotenv from "dotenv";
import connectDB from "./db/index.js"

dotenv.config({
    path: "./env"
})


connectDB();


// import mongoose from 'mongoose';
// import { DB_NAME } from './constant';

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("Error:", error);
//     }
// })()