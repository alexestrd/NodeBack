import { Request, Response } from "express";
import {registerNewUSer, loginUser} from "../services/auth";

const registrCtrl = async ({body}:Request , res:Response) => {
    const {email, password}= body;
    const responseUser = await registerNewUSer({email, password});
    res.send(responseUser);
}

const loginCtrl = async ({body}:Request , res:Response) => {
    const {email, password}= body;
    const responseUser = await loginUser({email, password});

    if(responseUser === "Contraseña incorrecta"){
        res.status(403);
        res.send(responseUser);
    }else{
        res.send(responseUser);
    }
}

export {registrCtrl, loginCtrl};