import { Controller, Get, HttpCode , HttpStatus } from "@nestjs/common";

@Controller('/albums')
export class albumController {
    @Get()
    @HttpCode(HttpStatus.OK)
    getAlbum(){
        return 'Photo'
    }
}