import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import dummyRoute from "./routes/dummy.js"

const app = express()
dotenv.config()

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to DB")
    } catch (error) {
        throw error;
    } 
};

//middlewares
app.use("/dummy", dummyRoute);

app.listen(8800, () => {
    connect();
    console.log("Backend works")
});