import express from "express"
import {ENV} from "./lib/env.js"
import path from "path"

const __dirname=path.resolve();
const app=express()

if(ENV.ENV_MODE==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get('/{*any}',(req,res)=>{
        res.sendFile(path.join(__dirname,".","frontend","dist","index.html"));
    })
}

app.listen(ENV.PORT,()=>{
    console.log(`Server started at ${ENV.PORT}`);
})