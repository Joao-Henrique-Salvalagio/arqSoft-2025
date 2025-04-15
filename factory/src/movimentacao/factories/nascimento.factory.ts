import { Movimentacao } from '../interfaces/movimentacao.interface';

export class Nascimento implements Movimentacao {
  executar(): string {
    return '🐄 Nascimento registrado com sucesso.';
  }
}