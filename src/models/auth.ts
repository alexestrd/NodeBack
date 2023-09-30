import { Schema, Types, model , Model } from "mongoose";
import { Auth } from "../interface/auth.interface";

const AuthSchema = new Schema<Auth>(
    {
        email:{
            required: true,
            type: String,
            unique: true,
        },
        password:{
            required: true,
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const AuthModel = model("Auth", AuthSchema);
export default AuthModel;