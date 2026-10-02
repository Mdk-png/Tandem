import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Pais } from './entities/pais.entity';

@Injectable()
export class PaisService {
  static paises: Pais[] = [];

  create(createPaisDto: CreatePaisDto) {
    const nuevoPais = new Pais;
    nuevoPais.nombre = createPaisDto.nombre;
    nuevoPais.id = Math.floor(Math.random() * 195) + 1;

    PaisService.paises.push(nuevoPais);

    return nuevoPais.id;
  }

  findAll() {
    return PaisService.paises;
  }

  static findOne(id: number) {
    const paisBuscado = PaisService.paises.find(p => p.id == id);
    if (!paisBuscado){
      throw new NotFoundException;
    }
    return paisBuscado;
  }

  update(id: number, updatePaisDto: UpdatePaisDto) {
    const paisBuscado = PaisService.paises.find(p => p.id == id);
    if (!paisBuscado){
      throw new NotFoundException;
    }
    paisBuscado.nombre = updatePaisDto.nombre!;
  }

  remove(id: number) {
    PaisService.paises = PaisService.paises.filter(p => p.id !== id);
    return true;
  }
}
