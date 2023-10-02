import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { gettrucks, newtruck } from "../services/truck";

const getTrucks = async (req: Request, res: Response) => {
    try {
      const response = await gettrucks();
      res.send(response);
    } catch (e) {
      handleHttp(res,"Error en la peticion",e)
    } 
}

const postTruck = async ({body}: Request, res: Response) => {
    try {
        const response =  await newtruck(body);
        res.send(response);
    } catch (e) {
        handleHttp(res,"Error en la peticion",e)
    }
}

export {postTruck, getTrucks}