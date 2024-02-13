import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { Server } from "socket.io";

dotenv.config();

const app = express();
app.use(cors());
const port=process.env.PORT || 5000;
const expressServer=app.listen(port,()=>{
  console.log(`listenging to the port ${port}`);
}); 

const io = new Server(expressServer, {
    cors: {
      origin: ["http://localhost:3000","https://frontend-tn6p.onrender.com/"],
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.on('chat message', (msg) => {
      console.log(msg);
      io.emit('chat message', msg); 
    });
  });