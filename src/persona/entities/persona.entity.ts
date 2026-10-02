import { Idioma } from "../../idioma/entities/idioma.entity";
import { Pais } from "../../pais/entities/pais.entity";

export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    alias: string;
    email: String;
    pais: Pais;
    estadoConversacion: number;
    cuantasConversaciones: number;
    noMolestar: boolean;
    bloqueados: number[];

    idiomasHabla: Idioma[];
    idiomasAprendiendo: Idioma[];
}
