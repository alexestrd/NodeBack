import { Request, Response, Router, response } from "express";
import { getRoute, getRoutes, postRoute, deleteRoute, putRouter } from "../controlers/routes";
import {checkJwt} from "../middleware/session"

const router = Router();

router.get("/", checkJwt,getRoutes);
router.get("/:id", checkJwt,getRoute);
router.post("/", checkJwt,postRoute);
router.delete("/:id", checkJwt, deleteRoute);
router.put("/:id", checkJwt, putRouter);


export {router};