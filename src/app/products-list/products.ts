import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';

//poner export para permitir que se exporte
export interface Product {
    nombre: string;
    tipo: string;
    talle: number;
    precio : number;
    stock: number;
    imagen: string;
    clearance: boolean;
    quantity: number;
}