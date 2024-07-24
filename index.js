import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

import { getHealth, showError } from "./controllers/health.js"
import {
    postPlant,
    getPlants,
    getPlantById,
    deletePlant,
    updatePlant
} from "./controllers/plant.js"
const app = express()
app.use(express.json())

const dbConnection = async () => {
    const conn = await mongoose.connect (process.env.DB_URL)
    if (conn){
    console.log("Connected to MongoDB")
    }
    else{
         console.log('MongoDB not Connected')
    }

}
dbConnection()

const plants = []
app.get("/health", getHealth)

app.post("/plant", postPlant)

app.get("/plant", getPlants)

app.get("/plant/:id", getPlantById)

app.delete("/plant/:id", deletePlant)

app.put("/plant/:id", updatePlant)

app.use("*", showError)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})