import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { GadoService } from './gado.service';
import { CriarGadoDto } from './dto/criar-gado.dto';
import { sendTestEmail } from 'src/utils/email.util';

@Controller('gado')
export class GadoController {
  constructor(
    private readonly gadoService: GadoService
  ) {}

  @Post()
  async criar(@Body() criarGadoDto: CriarGadoDto) {
    const gado = await this.gadoService.criar(criarGadoDto);
    const email = await sendTestEmail('teste@gmail.com', 'Cadastro Realizado', `<h1>Gado cadastrado no sistema com sucesso!</h1><br><p>Nome: ${criarGadoDto.nome}</p><p>Raca: ${criarGadoDto.raca}</p><p>Idade: ${criarGadoDto.idade}</p>`);
    return {gado, message: 'Gado cadastrado e e-mail enviado com sucesso!: ', email};
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
