import { Global, Module } from "@nestjs/common";
import {PracticeService} from './services/practice.service';
import {PracticeController} from './controllers/practice.controller'
@Global() // its means this is global module and can be used in other modules and must be export in the app module
@Module({
    controllers: [PracticeController],
    providers: [PracticeService],
    exports: [PracticeService],
    imports: []

})
export class PracticeModule {}