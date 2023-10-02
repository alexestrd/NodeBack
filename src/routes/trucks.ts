import { Request, Response, Router, response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getTrucks, postTruck } from "../controlers/truck";
import { registerNewUSer } from "../services/auth";
import {checkJwt} from "../middleware/session"

const router = Router();

router.get("/", checkJwt,getTrucks);
router.post("/", checkJwt,postTruck);


export {router};