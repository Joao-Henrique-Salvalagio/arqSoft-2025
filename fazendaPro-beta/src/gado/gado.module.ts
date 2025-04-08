import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GadoService } from './gado.service';
import { GadoController } from './gado.controller';
import { Gado, GadoSchema } from './schema/gado.schema';
import { LogManagerModule } from 'src/log-manager/log-manager.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Gado.name, schema: GadoSchema }]),
    LogManagerModule
  ],
  controllers: [GadoController],
  providers: [GadoService],
  exports: [GadoService], 
})
export class GadoModule {}
