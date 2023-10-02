import { Schema, Types, model , Model } from "mongoose";
import { Routes } from "../interface/routes.interface";
const RoutesSchema = new Schema<Routes>(
    {
        name:{
            required: true,
            type: String,
            unique: true,
        },
        pointA:{
            required: true,
            type: String
        },
        pointB:{
            required: true,
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const RoutesModel = model("Routes", RoutesSchema);
export default RoutesModel;