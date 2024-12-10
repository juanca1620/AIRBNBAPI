import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly service: ReservasService) {}

  @Get("usuario/:id_usuario")
  async findByUser(@Param("id_usuario")id_usuario: number) {
    return await this.service.findByUser(+id_usuario)
  }
}
