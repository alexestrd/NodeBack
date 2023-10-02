import { Order } from "../interface/order.interface";
import OrderModel from "../models/order";

const neworder = async (data: Order) => {
    const ResponseNewOrderr = await OrderModel.create(data);
    return ResponseNewOrderr;
};

const getorders = async () => {
    const response = await OrderModel.find({});
    return response;
  };
  
  const getorder = async (id: string) => {
    const response = await OrderModel.findOne({ _id: id });
    return response;
  };
  
  const updateorder = async (id: string, data: Order, status: string) => {
    if (status != "progreso" ||  "curso") {
        const response = await OrderModel.findOneAndUpdate({ _id: id }, data, {
            new: true,
          });
          return response;
    } else {
        return "No se puede editar una orden en curso";
    }
  };
  
  const deleteorder = async (id: string, status: string) => {
    if (status != "progreso" ||  "curso") {
        const response = await OrderModel.findOneAndRemove({ _id: id });
    return response;
    } else {
        return "No se puede eliminar una orden en progreso o en curso";
    }
  };
  
  export { neworder, getorder, getorders, deleteorder, updateorder};