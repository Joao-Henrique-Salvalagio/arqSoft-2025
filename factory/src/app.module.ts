import { Module } from '@nestjs/common';
import { MovimentacaoController } from './movimentacao/movimentacao.controller';
import { MovimentacaoService } from './movimentacao/movimentacao.service';

@Module({
  imports: [],
  controllers: [MovimentacaoController],
  providers: [MovimentacaoService],
})
export class AppModule {}