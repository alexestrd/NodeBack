import {Ruta} from "./ruta.interface";

export type Tipos = 'ligera' | 'media' | 'pesada'

export interface Order{
    tipo: Tipos;
    descripcion: string;
    ruta: Ruta;
    status: Status;
    truck: string;
}

 export enum Status {
    inicio,
    progreso,
    curso,
    finalizado
}