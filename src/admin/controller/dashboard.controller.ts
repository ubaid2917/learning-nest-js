import { Controller, Get } from "@nestjs/common";

// admin/dashboard
@Controller('/dasboard')

export class DashboardController{

    @Get()
    getDashboard(){
        return {
            message: "Hello from dashboard controller"
        }
    }
}