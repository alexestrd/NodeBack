import { Auth } from "../interface/auth.interface"
import AuthModel from "../models/auth"
import { encrypt, verified } from "../utils/encrypt";
import { generateToken } from "../utils/jwt";

const registerNewUSer = async ({email, password}: Auth) =>{
    const checkIs = await AuthModel.findOne({email});
    if(checkIs) return "Usurario ya existe";
    const passEncry = await encrypt(`${password}`);
    const registerNewUser = await AuthModel.create({email, password: passEncry});
    return registerNewUser;
}

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await AuthModel.findOne({email});
    if(!checkIs) return "Usurario no existe";

    const passwordEncry = checkIs.password;
    const isCorrect = await verified(password, passwordEncry);
    if(!isCorrect) return "Contraseña incorrecta";
    const token = generateToken(checkIs.email);
    
    const data = {
        token,
        checkIs
    };
    console.log(data);
    return data;
} 

export {registerNewUSer, loginUser}