/* eslint-disable prettier/prettier */
import { IsEmail,IsNotEmpty,IsString } from "class-validator";
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name :string;

    @IsNotEmpty()
    @IsString()
    phone_no:string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    gmail:string;

    @IsNotEmpty()
    @IsString()
    city:string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
