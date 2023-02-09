/* eslint-disable prettier/prettier */
import { IsEmail,IsNotEmpty,IsString } from "class-validator";
export class LogInDto {
   @IsNotEmpty()
    @IsString()
    @IsEmail()
    gmail:string;

    @IsNotEmpty()
    @IsString()
    password: string;
  
}