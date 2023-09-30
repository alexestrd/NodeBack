import { Request, Response, Router, response } from "express";
import { handleHttp } from "../utils/error.handle";
import { loginCtrl,registrCtrl } from "../controlers/auth";
import { registerNewUSer } from "../services/auth";

const router = Router();

router.post("/register", registrCtrl);


router.post("/login", loginCtrl);

export {router};