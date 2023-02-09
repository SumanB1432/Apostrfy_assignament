/* eslint-disable prettier/prettier */
import { Controller, Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDto } from './dto/logIn.dto';
import { SignUpDto } from './dto/signUp.dto';


@Controller('auth')

export class AuthController {
    constructor( private authService : AuthService) {}
     @Post('/signup')
  signUp(@Body() signUpDto : SignUpDto): Promise<{ token : string}>{
    return this.authService.singUp(signUpDto)
  
  }
  @Post('/login')
  login(@Body() loginDto : LogInDto): Promise<{ token : string}>{
    return this.authService.login(loginDto)
  
  }
}
