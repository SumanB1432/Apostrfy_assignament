/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { GetWayModule } from './getway/getway.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:[".env"]

    }),
    MongooseModule.forRootAsync({
      imports :[ConfigModule],
      useFactory:(ConfigService)=>({uri : ConfigService.get("MONGO_URI") }),
      inject :[ConfigService]
    }),
    UserModule,
    AuthModule,
    GetWayModule,
  ],
  controllers: [],
  providers: [ChatGetWay],
})
export class AppModule {}
