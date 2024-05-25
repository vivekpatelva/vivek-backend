// require("dotenv").config({path: "./env"});1
import dotenv from "dotenv";
import connectDB from "./db/index.js"
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port ${process.env.PORT}`);
        })
    }).catch((err) => {
        console.log("Db connection Error", err)
    })


// import mongoose from 'mongoose';
// import { DB_NAME } from './constant';

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("Error:", error);
//     }
// })()