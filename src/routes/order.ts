import { Request, Response, Router, response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getOrder, getOrders, putOrder, postOrder, deleteOrder } from "../controlers/order";
import { registerNewUSer } from "../services/auth";
import {checkJwt} from "../middleware/session"

const router = Router();

router.get("/", checkJwt,getOrders);

router.get("/:id", checkJwt,getOrder);

router.post("/", checkJwt,postOrder);

router.put("/:id", checkJwt,putOrder);

router.delete("/:id", checkJwt,deleteOrder);

export {router};