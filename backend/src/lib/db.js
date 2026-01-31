import mongoose from "mongoose"
import {ENV} from "./env.js"

const DB_URL=ENV.DB_URL;

async function connectDB(){
    try {
        const conn=await mongoose.connect(DB_URL);
        console.log("Mongodb connected successfully "+conn.connection.host);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;