/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Departamento } from '../departamentos/entities/departamento.entity';

@Injectable()
export class UsuariosService {

  constructor(private readonly prisma:PrismaService){}
  
  create(dto: CreateUsuarioDto) {
    return this.prisma.users.create({
      data:{
        UserName:dto.UserName,
        Correo:dto.Contra,
        Contra:dto.Contra,
        Numero:dto.Numero,
        Cedula:dto.Cedula
      }
    })
  }

  findAll(){
    return this.prisma.users.findMany()
  }


  findOne(id: number) {
    return this.prisma.users.findUnique({
      where: {
        id
      }
    });
  }
}
