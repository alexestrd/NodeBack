import { Schema, Types, model , Model } from "mongoose";
import { Order, Tipos } from "../interface/order.interface";

const OrderSchema = new Schema<Order>(
    {
        tipo: {
            required: true,
            type: String,
            unique: true,
        },
        descripcion: {
            required: true,
            type: String,
            unique: true,
        },
        ruta: {
            required: true,
            type: Object,
            unique: true,
        },
        status: {
            required: true,
            type: Number,
            unique: true,
        },
        truck: {
            required: true,
            type: String,
            unique: true,
        }    },{
            timestamps: true,
            versionKey: false,

    }
);

const OrderModel = model("Order", OrderSchema);
export default OrderModel;