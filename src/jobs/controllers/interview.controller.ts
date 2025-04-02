import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('interview')
export class interviewController {

  @Get('/get-interviews')
  findAll() {
    return {
       message: "Hello from job controller"
    };
  }


}
