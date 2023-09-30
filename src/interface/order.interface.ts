export type Tipos = 'ligera' | 'media' | 'pesada'

export interface Order{
    tipo: Tipos;
    descripcion: string;
    ruuta: string;
    status: Status;
    truck: string;
}

enum Status {
    inico,
    progreso,
    curso,
    finalizado
}