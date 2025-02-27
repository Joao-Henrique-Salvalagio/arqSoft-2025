import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { GadoService } from './gado.service';
import { CriarGadoDto } from './dto/criar-gado.dto';

@Controller('gado')
export class GadoController {
  constructor(private readonly gadoService: GadoService) {}

  @Post()
  criar(@Body() criarGadoDto: CriarGadoDto) {
    return this.gadoService.criar(criarGadoDto);
  }

  @Get()
  listarTodos() {
    return this.gadoService.listarTodos();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string) {
    return this.gadoService.buscarPorId(id);
  }
}
