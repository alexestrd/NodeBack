import { NextFunction, Request, Response } from "express";
import { verifiedToken } from "../utils/jwt";

const checkJwt = (req:Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization;
        const jwt = jwtByUser?.split(' ').pop();
        const isOk = verifiedToken(`${jwt}`);
        if(!isOk){
            res.status(401);
            res.send("Sesión_No_Valida")
        }else{
            next();
        }
        
    } catch (e) {
        res.status(400);
        res.send("Sesión_No_Valida");
    }
};
export {checkJwt};