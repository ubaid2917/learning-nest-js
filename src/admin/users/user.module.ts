import { Module } from "@nestjs/common";
import { StudentsController} from './controller/students.controller'
import { UserController} from './controller/user.controller'
@Module({
    controllers: [StudentsController,UserController],
    providers: []
})

export class  AdminModule{}