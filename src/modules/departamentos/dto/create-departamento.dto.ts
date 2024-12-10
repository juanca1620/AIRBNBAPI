/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateDepartamentoDto {

    @IsString()
    @IsNotEmpty()

    @IsString()
    @IsNotEmpty()
    lugar

    @IsNumber()
    @IsNotEmpty()
    precio_noche 

    @IsNotEmpty()
    @IsString()
    descripcion 

    @IsNotEmpty()
    @IsString()
    URL_imagen 
}
