import "dotenv/config"
import express from "express";
import cors from "cors";
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;
const app= express()
app.use(cors({
    origin:'*'
}))

app.listen(PORT, () => console.log(`Servidor corriendo en el puesto ${PORT}`))