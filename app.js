import express from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();

const app = express();
app.use(cors());
const port=process.env.PORT || 5000;
const expressServer=app.listen(port,()=>{
  console.log(`listenging to the port ${port}`);
}); 