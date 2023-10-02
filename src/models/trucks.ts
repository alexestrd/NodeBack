import { Schema, Types, model , Model } from "mongoose";
import { Truck } from "../interface/trucks.interface";

const TruckSchema = new Schema<Truck>(
    {
        model:{
            required: true,
            type: String
        },
    make:{
        required: true,
        type: String
    },
    year:{
        required: true,
        type: Number
    },
    color:{
        required: true,
        type: String
    },
    transportWeight:{
        required: true,
        type: Number
    }
    },{
        versionKey: false,
        timestamps: true
    }
);

const TruckModel = model("Truck", TruckSchema);
export default TruckModel;