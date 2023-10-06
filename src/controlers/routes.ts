import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getroute,getroutes, newroutes, updateroutes, deleteroutes } from "../services/routes";

const getRoutes = async (req: Request, res: Response) => {
    try {
      const response = await getroutes();
      res.send(response);
    } catch (e) {
      handleHttp(res,"Error en la peticion",e)
    } 
}

const getRoute = async ({params}: Request, res: Response) => {
    try {
        const {id} = params;
      const response = await getroute(id);
      res.send(response);
    } catch (e) {
      handleHttp(res,"Error en la peticion",e)
    } 
}

const postRoute = async ({params,body}: Request, res: Response) => {
    try {
        const {pointA,pointB} = body;
        const response =  await newroutes(body, pointA, pointB);
        res.send(response);
    } catch (e) {
        handleHttp(res,"Error en la peticion",e)
    }
}

const deleteRoute = async ({params,body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await deleteroutes(id);
        res.send(response);
    } catch (e) {
       handleHttp(res,"Error en la peticion",e) 
    }
}

const putRouter = async ({params, body}: Request, res: Response) => {
    try {
        const {id} = params;
        const response = await updateroutes(id,body);
    } catch (e) {
        handleHttp(res,"Error en la peticion",e)
    }
}

export {getRoute, getRoutes, postRoute,deleteRoute, putRouter};