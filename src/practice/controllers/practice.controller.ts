
import {BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes} from '@nestjs/common'
import { error } from 'console'
import {CreateJobDto} from '../dto/create-dto'
import { JoiValidationPipe } from '../pipe validation/joi.pipe.validation'
import { createJobSchema } from '../schema/job.schema'

@Controller('/practice')
export class PracticeController {


    @Get()
    getPractices(){
        return {
            message: "Hello from practice controller"
        }
    }    


    @Get(':id')
    getPracticeById(
        @Param('id', new ParseIntPipe({exceptionFactory: (error) => new BadRequestException('Id must be a valid number in params')})) id: number,
        @Body('code', new ParseIntPipe({exceptionFactory: (error) => new BadRequestException('Code must be valid number in body')})) code: number,   
    ){
        return {
            message: `Hello from practice controller with id: ${id}`
        }
    }


    @Post()
    @UsePipes(new JoiValidationPipe(createJobSchema))
    createJob(@Body() createJobDto: CreateJobDto){
        return {
            message: "All good"
            
        }
    }
}