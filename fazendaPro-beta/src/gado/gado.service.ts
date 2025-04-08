import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gado } from './schema/gado.schema';
import { CriarGadoDto } from './dto/criar-gado.dto';
import { LogManagerService } from 'src/log-manager/log-manager.service';
import { LogManager } from 'src/log-manager/schema/logManager.schema';

@Injectable()
export class GadoService {
  constructor(
    @InjectModel(Gado.name) private gadoModel: Model<Gado>,
    private readonly logManagerService: LogManagerService,
  ) {}

  async criar(criarGadoDto: CriarGadoDto): Promise<Gado> {
    const gadoCriado = new this.gadoModel(criarGadoDto);
    return gadoCriado.save().then(async (gado) => {
      const dados = Object.entries(gadoCriado).map(
        ([chave, valor]) => `${chave}: ${valor}`
      );
      const log = new LogManager({
        dados: [dados],
        data_alteracao: new Date()
      });
      await this.logManagerService.registerLog(log);
      return gado;
    });
  }

  async listarTodos(): Promise<Gado[]> {
    return this.gadoModel.find().exec();
  }

  async buscarPorId(id: string): Promise<Gado | null> {
    return this.gadoModel.findById(id).exec();
  }
}
