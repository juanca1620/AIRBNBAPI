/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString } from "class-validator"

export class CreateUsuarioDto {

    @IsString()
    @IsNotEmpty()
    UserName 

    @IsString()
    @IsNotEmpty()
    Correo 

    @IsString()
    @IsNotEmpty()
    Contra 

    @IsString()
    @IsNotEmpty()
    Numero 

    @IsString()
    @IsNotEmpty()
    Cedula 
}
