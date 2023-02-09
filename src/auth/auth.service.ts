/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schema/user';
import * as bcryptjs from "bcryptjs"
import { JwtService } from '@nestjs/jwt/dist';
import { LogInDto } from './dto/logIn.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel:Model<User>,
        private jwtService:JwtService
    ){}
    async singUp(singUpDto):Promise<{token:string}>{
        const {name,phone_no,gmail,password,city} = singUpDto
        const hashedPassword = await bcryptjs.hash(password,10)

        const user = await this.userModel.create({
            name,
            phone_no,
            gmail,
            password:hashedPassword,
            city
        })
        const token = this.jwtService.sign({id : user._id})
        return {token}
    }

    async login( loginDto :LogInDto):Promise<{token:string}>{
        const {gmail,password} = loginDto
        const user = await this.userModel.findOne({gmail:gmail});
        if(!user){
            throw new UnauthorizedException('Invalid gmail or password')
        }
        const isPassWordMatched = await bcryptjs.compare(password,user.password)
        // console.log(isPassWordMatched)
        if(!isPassWordMatched){
            throw new UnauthorizedException('Invalid gmail or password')
        }
        const token = this.jwtService.sign({id : user._id})
        return {token}
        

    }
}
