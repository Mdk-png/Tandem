export class CreateIdiomaDto {
    numero: number; /*cuando va a crear un idioma, tiene que poner el numero que le corresponde y su nivel. estos numeros corresponden a un lugar en el array de idiomas predeterminados que esta en el servicio. si el usuario no ingresa uno de los numeros del array, le tira un error con el array insertado con las posiciones para que intente de nuevo */
    nivel: number;
}
