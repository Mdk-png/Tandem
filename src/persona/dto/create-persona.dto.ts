export class CreatePersonaDto {
    nombre: string;
    apellido: string;
    alias: string;
    email: String;
    paisId: number;
    estadoConversacion: number;
    /*es int porque 0 = cualquiera, 1 = solo personas compatibles, 2 = nadie*/
    cuantasConversaciones: number;
    noMolestar: boolean;
    bloqueados: number[];

    idiomasHablaNivel: number[];
    idiomasHablaNum: number[];
    idiomasAprendiendoNivel: number[];
    idiomasAprendiendoNum: number[];
}
