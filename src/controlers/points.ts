import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getpoints,newpoints } from "../services/points";

const getPoints = async (req: Request, res: Response) => {
    try {
      const response = await getpoints();
      res.send(response);
    } catch (e) {
      handleHttp(res,"Error en la peticion",e)
    } 
}

const postPoints = async ({body}: Request, res: Response) => {
    try {
        const response =  await newpoints(body);
        res.send(response);
    } catch (e) {
        handleHttp(res,"Error en la peticion",e)
    }
}

export {getPoints, postPoints};