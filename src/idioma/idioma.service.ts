import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Idioma } from './entities/idioma.entity';

@Injectable()
export class IdiomaService {
  static catalogoIdiomasCod: string[] = [
    "es",
    "al",
    "in",
    "po",
    "it"
  ];
  static catalogoIdiomasNom: string[] = [
    "espanol",
    "aleman",
    "ingles",
    "portugues",
    "italiano"
  ]
  idiomas: Idioma[] = [];

  static create(createIdiomaDto: CreateIdiomaDto) {
    const nuevoIdioma = new Idioma;
    nuevoIdioma.nivel = createIdiomaDto.nivel;
    if(createIdiomaDto.numero <= this.catalogoIdiomasNom.length && createIdiomaDto.numero >= 0){
      nuevoIdioma.codigo = this.catalogoIdiomasCod[createIdiomaDto.numero];
      nuevoIdioma.nombre = this.catalogoIdiomasNom[createIdiomaDto.numero];
    } else { 
      throw new NotFoundException;
    }
    return nuevoIdioma;
    /*retorna nuevoIdioma en si porque va a ir directamente a persona */
  }

  findAll() {
    return IdiomaService.catalogoIdiomasNom;
  }

  findOne(id: number) {
    return IdiomaService.catalogoIdiomasNom[id];
  }

  update(nivel: number, updateIdiomaDto: UpdateIdiomaDto) {
    /*no se me ocurre como hacerlo despues sigo. me complico pensando en como hago para encotrar el idioma correspondiente con la persona */
  }

  remove(id: number) {
    return `This action removes a #${id} idioma`;
  }

}



