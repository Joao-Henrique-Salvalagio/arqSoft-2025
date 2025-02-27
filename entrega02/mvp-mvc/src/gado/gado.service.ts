import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gado } from './schema/gado.schema';
import { CriarGadoDto } from './dto/criar-gado.dto';

@Injectable()
export class GadoService {
  constructor(@InjectModel(Gado.name) private gadoModel: Model<Gado>) {}

  async criar(criarGadoDto: CriarGadoDto): Promise<Gado> {
    const gadoCriado = new this.gadoModel(criarGadoDto);
    return gadoCriado.save();
  }

  async listarTodos(): Promise<Gado[]> {
    return this.gadoModel.find().exec();
  }

  async buscarPorId(id: string): Promise<Gado | null> {
    return this.gadoModel.findById(id).exec();
  }
}
