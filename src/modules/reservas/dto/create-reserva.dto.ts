/* eslint-disable prettier/prettier */
import { IsISO8601, IsNotEmpty, IsNumber, IsPositive } from "class-validator"

export class CreateReservaDto {

    @IsISO8601()
    @IsNotEmpty()
    horaInicio

    @IsISO8601()
    @IsNotEmpty()
    horaFinal

    @IsNumber()
    @IsPositive()
    id_apartamento 

    @IsNumber()
    @IsPositive()
    id_usuario 

}