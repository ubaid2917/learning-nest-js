import { Module } from "@nestjs/common";
import {DashboardController} from './controller/dashboard.controller'

@Module({
    controllers: [DashboardController],
    providers: []
}) 


export class adminModule {}