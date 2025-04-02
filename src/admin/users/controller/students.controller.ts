import { Controller, Get } from "@nestjs/common";

// admin/users/student
@Controller('/')
export class StudentsController{
    @Get()
    getStudentDetails() {
        return {
            message: "Hello from student controller"
        }
    }
}