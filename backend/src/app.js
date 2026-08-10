import express from "express";
import { createServer} from "node:http";

import {Server} from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js"

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port",(process.env.PORT || 8080));
app.use(cors());
app.use(express.json({limit :"40kb"}));
app.use(express.urlencoded({limit : "40kb", extended: true}));
app.use("/api/v1/users", userRoutes);



const start =  async()=>{
    app.set("mogouser")
    const connectionDb = await mongoose.connect("mongodb+srv://khansuffu79_db_user:abcd1234@milo.3rfckhd.mongodb.net/?appName=Milo");
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"),() => {
        console.log("listening on port 8080");
    });
}

start();