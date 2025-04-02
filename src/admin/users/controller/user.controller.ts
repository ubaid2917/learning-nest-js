import { Controller, Get } from "@nestjs/common";

// admin/users/
@Controller('/')
export class UserController{
    @Get()
    getHome(){
        return {
            message: "Hello from home controller"
        }
  }
}
