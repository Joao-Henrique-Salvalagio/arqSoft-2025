import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GadoModule } from './gado/gado.module';
import { LogManagerModule } from './log-manager/log-manager.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/gado_db'),
    GadoModule,
    LogManagerModule,
  ],
})
export class AppModule {}
