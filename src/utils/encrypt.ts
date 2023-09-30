import { hash, compare } from "bcryptjs";

const encrypt = async(pass:string) => {
    const passwordencry = await hash(pass, 8);
    return passwordencry;
}

const verified = async(pass: string, passEncry: string) => {
    const isCorrect = await compare(pass, passEncry);
    return isCorrect;
}

export {encrypt, verified};