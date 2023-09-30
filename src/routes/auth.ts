import { Request, Response, Router, response } from "express";
import { handleHttp } from "../utils/error.handle";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    try {
        res.send("Enviando Datos")
    } catch (e) {
        handleHttp(res, "Error_Get__auth", e);
    }
});

export {router};