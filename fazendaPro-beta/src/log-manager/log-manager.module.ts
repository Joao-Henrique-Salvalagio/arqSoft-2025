import { Module } from '@nestjs/common';
import { LogManagerService } from './log-manager.service';
import { LogManager } from './schema/logManager.schema';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: LogManager.name, schema: LogManager }])],
  providers: [LogManagerService],
  exports: [LogManagerService],
})
export class LogManagerModule {}
