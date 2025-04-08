import { Injectable } from '@nestjs/common';
import { LogManager } from './schema/logManager.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';

@Injectable()
export class LogManagerService {

    constructor(@InjectModel(LogManager.name) private gadoModel: Model<LogManager>) {}

    async registerLog(log: LogManager): Promise<LogManager> {
        const logCriado = new this.gadoModel(log);
        return logCriado.save();
    }

    async listarTodos(): Promise<LogManager[]> {
        return this.gadoModel.find().exec();
    }

}
