import { Points } from "./points.interface";

export type Tipos = 'ligera' | 'media' | 'pesada'

export interface Order{
    tipo: Tipos;
    descripcion: string;
    ruta: Points;
    status: Status;
    truck: string;
}

 export enum Status {
    inicio,
    progreso,
    curso,
    finalizado
}