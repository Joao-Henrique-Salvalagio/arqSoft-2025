import { Movimentacao } from '../interfaces/movimentacao.interface';
import { Nascimento } from './nascimento.factory';
import { Venda } from './venda.factory';
import { Morte } from './morte.factory';

export class MovimentacaoFactory {
  static criar(tipo: string): Movimentacao {
    switch (tipo.toLowerCase()) {
      case 'nascimento':
        return new Nascimento();
      case 'venda':
        return new Venda();
      case 'morte':
        return new Morte();
      default:
        throw new Error('Tipo de movimentação inválido.');
    }
  }
}