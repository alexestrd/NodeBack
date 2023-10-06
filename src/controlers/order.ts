import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { neworder, getorder,getorders, updateorder, deleteorder} from "../services/order"

const getOrder = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await getorder(id);
        res.send(response);
    } catch (e) {
        handleHttp(res,"Error en la peticion",e)
    }
}

const getOrders = async (req: Request, res: Response) => {
      try {
        const response = await getorders();
        res.send(response);
      } catch (e) {
        handleHttp(res,"Error en la peticion",e)
      } 
}

const putOrder = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const {status} = body;
        const response = await updateorder(id,body,status);
    } catch (e) {
        handleHttp(res,"Error en la peticion",e)
    }
}

const postOrder = async (req: Request, res: Response) => {
    try {
        const data = req.body 
        const truck = data.truck;
        const rute = data.ruta;
        const response =  await neworder(data,truck, rute);
        res.send(response);
    } catch (e) {
        handleHttp(res,"Error en la peticion",e)
    }
}

const deleteOrder = async ({params,body}: Request, res: Response) => {
    try {
        const {id} = params;
        const {status} = body;
        const response = await deleteorder(id, status);
        res.send(response);
    } catch (e) {
       handleHttp(res,"Error en la peticion",e) 
    }
}

export {getOrder, getOrders, putOrder, postOrder, deleteOrder}