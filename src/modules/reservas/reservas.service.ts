/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReservasService {

  constructor (private readonly prisma:PrismaService){};

  findByUser(id_usuario: number) {
    return this.prisma.reservas.findMany({
      where:{
        id_usuario
      }
    });
  }
}
