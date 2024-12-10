import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservasModule } from './modules/reservas/reservas.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { DepartamentosModule } from './modules/departamentos/departamentos.module';

@Module({
  imports: [ReservasModule, UsuariosModule, DepartamentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
