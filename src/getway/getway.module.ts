/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MyGateway } from "./getway";
@Module({
    providers:[MyGateway]
})
export class GetWayModule{}