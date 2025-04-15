import { Controller, Get, Query } from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';

@Controller('movimentacao')
export class MovimentacaoController {
  constructor(private readonly service: MovimentacaoService) {}

  @Get()
  registrar(@Query('tipo') tipo: string) {
    return { resultado: this.service.criarMovimentacao(tipo) };
  }
}