/* eslint-disable prettier/prettier */
import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name:string;
    @Prop()
    phone_no: string;
    @Prop()
    gmail : string;
    @Prop()
    password :string;
    @Prop()
    city : string
}
export const UserSchema = SchemaFactory.createForClass(User)