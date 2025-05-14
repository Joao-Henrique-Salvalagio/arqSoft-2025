import { Movimentacao } from '../interfaces/movimentacao.interface';

export class Venda implements Movimentacao {
  executar(): string {
    return '💰 Venda registrada com sucesso.';
  }
}