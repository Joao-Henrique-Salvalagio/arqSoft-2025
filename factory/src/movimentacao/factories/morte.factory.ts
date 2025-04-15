import { Movimentacao } from '../interfaces/movimentacao.interface';

export class Morte implements Movimentacao {
  executar(): string {
    return '☠️ Morte registrada com sucesso.';
  }
}