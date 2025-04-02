import { Controller, Get } from "@nestjs/common";

// admin/offices/locations
@Controller('/locations')
export class LocationsController{

    @Get()
    getLocations(){
        return {
            message: "Hello from locations controller"
        }
    }
}