import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GadoModule } from './gado/gado.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/gado_db'),
    GadoModule,
  ],
})
export class AppModule {}
