import { Schema, model } from "mongoose"
import mongoose from 'mongoose';


const plantSchema = new Schema({

    plantname : String,
    category: String,
    image:String,
    price: Number,
    description: String,

})

const Plant = model("Plant" ,plantSchema )



export default Plant