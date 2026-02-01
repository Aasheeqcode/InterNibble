import express from "express"
import connectDB from "./lib/db.js"
import {ENV} from "./lib/env.js"
import path from "path"
import {serve} from "inngest/express"
import {inngest,functions} from "./lib/inngest.js"
import cors from "cors"
const __dirname=path.resolve();

const app=express()

app.use(express.json())

app.use(cors({
    origin:ENV.CLIENT_URL,
    credentials:true
}))

app.use('/api/inngest',serve({client:inngest,functions}))

if(ENV.ENV_MODE==="production"){
    const frontendPath = path.join(__dirname, "..", "frontend", "dist");
    app.use(express.static(frontendPath));

    // 2. Correct the wildcard (use '*' instead of '{*any}')
    app.get('/{*any}', (req, res) => {
        res.sendFile(path.join(frontendPath, "index.html"));
    });
}

app.listen(ENV.PORT,'0.0.0.0',()=>{
    console.log(`Server started at ${ENV.PORT}`);
    connectDB();
})