import { Request, Response, Router, response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getPoints, postPoints } from "../controlers/points";
import { registerNewUSer } from "../services/auth";
import {checkJwt} from "../middleware/session"

const router = Router();

router.get("/", checkJwt,getPoints);
router.post("/", checkJwt,postPoints);


export {router};