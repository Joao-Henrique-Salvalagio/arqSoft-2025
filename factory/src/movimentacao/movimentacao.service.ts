import { Injectable } from '@nestjs/common';
import { MovimentacaoFactory } from './factories/movimentacao.factory';

@Injectable()
export class MovimentacaoService {
  criarMovimentacao(tipo: string): string {
    const movimentacao = MovimentacaoFactory.criar(tipo);
    return movimentacao.executar();
  }
}