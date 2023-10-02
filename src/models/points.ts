import { Schema, Types, model , Model } from "mongoose";
import { Points } from "../interface/points.interface";
const PointsSchema = new Schema<Points>(
    {
        name:{
            required: true,
            type: String,
            unique: true,
        },
        placeId:{
            required: true,
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const PointsModel = model("Points", PointsSchema);
export default PointsModel;