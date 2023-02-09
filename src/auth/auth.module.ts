/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UserSchema } from 'src/user/schema/user';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import *as dotenv from "dotenv";

@Module({
  imports:[
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:[".env"]

    }),
  
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      
      
      
      useFactory :(configservice : ConfigService)=>{
        return{
          secret : configservice.get<string>('JWT_SECRET')
        }

      },
      

    }),
    MongooseModule.forFeature([{name:'User', schema: UserSchema}])

  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
