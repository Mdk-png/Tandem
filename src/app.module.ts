import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaisModule } from './pais/pais.module';
import { PersonaModule } from './persona/persona.module';
import { IdiomaModule } from './idioma/idioma.module';
import { IdiomaModule } from './idioma/idioma.module';
import { PaisModule } from './pais/pais.module';

@Module({
  imports: [PaisModule, IdiomaModule, PersonaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
