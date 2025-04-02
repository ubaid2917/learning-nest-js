import { Global, Module } from "@nestjs/common";
import {UserService} from './services/user.service';
import {UserController} from './controllers/user.controller'
@Global() // its means this is global module and can be used in other modules and must be export in the app module
@Module({
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
    imports: []

})
export class UserModule {}