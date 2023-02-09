/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel : Model<UserDocument>){

  }
  create(createUserDto: CreateUserDto) : Promise<User> {
    const model = new this.userModel();
    model.name = createUserDto.name;
    model.phone_no = createUserDto.phone_no;
    model.gmail = createUserDto.gmail;
    model.password = createUserDto.password;
    model.city = createUserDto.city
    return model.save();
  }

  findAll() : Promise<User[]>{
    return this.userModel.find().exec();
  }

  findOne(id: string) :Promise<User> {
    return this.userModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({_id: id},{
      name:updateUserDto.name,
      phone_no :updateUserDto.phone_no,
      gmail : updateUserDto.gmail,
      city : updateUserDto.city,
      password : updateUserDto.password

    }).exec();
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id : id}).exec();
  }
}
