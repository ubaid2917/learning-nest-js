
import { Module } from "@nestjs/common";
import {DashboardController} from './controller/dashboard.controller'
import {OfficeModule} from './offices/office.module'
import {AdminModule} from './users/user.module'
@Module({
    imports: [OfficeModule, AdminModule],  
    controllers: [DashboardController],
    providers: []
}) 


export class adminModule {}