import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartamentosService {

  constructor(private readonly prisma:PrismaService){}


  async findAll() {
    return await this.prisma.apartments.findMany();
  }

}
