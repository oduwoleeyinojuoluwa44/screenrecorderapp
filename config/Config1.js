import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../routes/router.js";





const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


app.use('/api/v1/record', router)


const PORT = process.env.PORT || 3000;


export{app, PORT};