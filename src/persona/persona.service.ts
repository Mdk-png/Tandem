import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';
import { PaisService } from '../pais/pais.service';
import { IdiomaService } from '../idioma/idioma.service';
import { CreateIdiomaDto } from '../idioma/dto/create-idioma.dto';

@Injectable()
export class PersonaService {
  personas: Persona[] = [];

  create(createPersonaDto: CreatePersonaDto) {
    const nuevaPersona = new Persona;
    nuevaPersona.nombre = createPersonaDto.nombre;
    nuevaPersona.apellido = createPersonaDto.apellido;
    nuevaPersona.alias = createPersonaDto.alias;
    nuevaPersona.email = createPersonaDto.email;
    nuevaPersona.pais = PaisService.findOne(createPersonaDto.paisId);
    if (createPersonaDto.estadoConversacion < 0 && createPersonaDto.estadoConversacion > 3) {
      throw new NotFoundException; /* correspondiente a los valores que aclare en el entity */
    } else {
      nuevaPersona.estadoConversacion = createPersonaDto.estadoConversacion;
    }
    if (createPersonaDto.cuantasConversaciones <= 0 && createPersonaDto.cuantasConversaciones > 5) {
      throw new NotFoundException; /*maximo de 5 al mismo tiempo */
    } else {
      nuevaPersona.cuantasConversaciones = createPersonaDto.cuantasConversaciones;
    }
    nuevaPersona.noMolestar = createPersonaDto.noMolestar;
    nuevaPersona.bloqueados = createPersonaDto.bloqueados;

    /*idiomas que habla */
    if (createPersonaDto.idiomasHablaNum.length <= 0) {
      throw new NotFoundException;
    }
    for (let i = 0; i < createPersonaDto.idiomasHablaNum.length; i++) {
      const idiomaACrear = new CreateIdiomaDto;
      idiomaACrear.nivel = createPersonaDto.idiomasHablaNivel[i];
      idiomaACrear.numero = createPersonaDto.idiomasHablaNum[i];
      const idiomaNuevo = IdiomaService.create(idiomaACrear);
      nuevaPersona.idiomasHabla.push(idiomaNuevo);
    }

    /*idiomas que aprende */
    if (createPersonaDto.idiomasAprendiendoNum.length > 3) {
      throw new NotFoundException;
    } else {
      for (let i = 0; i < createPersonaDto.idiomasAprendiendoNum.length; i++) {
      const idiomaACrear = new CreateIdiomaDto;
      idiomaACrear.nivel = createPersonaDto.idiomasAprendiendoNivel[i];
      idiomaACrear.numero = createPersonaDto.idiomasAprendiendoNum[i];
      const idiomaNuevo = IdiomaService.create(idiomaACrear);
      nuevaPersona.idiomasAprendiendo.push(idiomaNuevo);
    }
    }

  }

  findAll() {
    return `This action returns all persona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
