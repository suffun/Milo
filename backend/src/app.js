import express from "express";
import { createServer} from "node:http";

import {Server} from "socket.io";
import mongoose from "mongoose";

import cors from "cors";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 8080));
app.get("/",(req,res)=>{
    return res.json({"hello" :"world"});
})

const start =  async()=>{
    app.set("mogouser")
    const connectionDb = await mongoose.connect("mongodb+srv://khansuffu79_db_user:abcd1234@milo.3rfckhd.mongodb.net/?appName=Milo");
    console.log(`MONGO Connected D Host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"),() => {
        console.log("listening on port 8080");
    });
}

start();