import { Module } from "@nestjs/common";
import {LocationsController} from './controller/location.controller'
@Module({
    controllers: [LocationsController],
    providers: []
}) 

export class OfficeModule { }