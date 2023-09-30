import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "BeGo";
const generateToken = (id:string) => {
    const jwt = sign({id}, JWT_SECRET, { expiresIn: "1h"});
    return jwt;
}

const verifiedToken =  (jwt:string) => {
    const isValid = verify(jwt, JWT_SECRET);
    return isValid;
} 

export {generateToken, verifiedToken};