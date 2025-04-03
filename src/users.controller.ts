import { Controller, Get, Post, Put, Delete, Body, HttpStatus, Param, Ip, ParseIntPipe, Query, UsePipes, ParseBoolPipe, ParseUUIDPipe, BadRequestException, ParseEnumPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto'
import { error } from 'console';


enum statusType {
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    // @Post()
    // addUser(@Body() createUserDto: CreateUserDto) {
    //     const user = this.userService.addUser(createUserDto);
    //     return {
    //         statusCode: HttpStatus.CREATED,
    //         message: 'User added successfully',
    //     }
    // }

    // @Get()
    // getAllUsers() {
    //     const users = this.userService.getAllUsers();
    //     return users;
    // }

    // @Get()
    // getStatus(@Query('type', new ParseEnumPipe(statusType)) type: statusType) {
    //     console.log('type:', type);
    //     return `Get status: ${type}`;
    // }


    // @Get('/data/:dataId')
    // getAccount(@Param('dataId', new ParseUUIDPipe({ exceptionFactory: (error) => new BadRequestException('UUID must be valid') })) dataId: string) {
    //     console.log('======>', dataId)
    //     return 'Get data'
    // }


    // @Get(':id')
    // getUserById(@Param('id', ParseIntPipe) id: number) {
    //     console.log(typeof id)
    //     this.userService.getUserById(id);
    // }

    // @Put(':id')
    // updateUser(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number, @Body() updateUserDto: CreateUserDto) {
    //     this.userService.updateUser(+id, updateUserDto);
    // }

    // @Put('updateUserProfile/:id')
    // @UsePipes(ParseIntPipe)
    // updateUserProfile(@Param('id') id: number, @Query('code') code: number) { // here i have both param and query is number so applying seprately i can implemnet one time
    //     console.log('params', id)
    //     console.log('query', code)
    //     return {
    //         statusCode: HttpStatus.OK,
    //         message: 'User updated successfully',
    //         data: { id, code }
    //     }
    // }

    // @Put('updateUserProfileStatus/:id')
    // updateUserProfileStatus(@Param('id') id: number, @Query('status', ParseBoolPipe) status: boolean) {
    //     console.log('params', id)
    //     console.log('query', status)
    //     return {
    //         statusCode: HttpStatus.OK,
    //         message: 'User updated successfully',
    //         data: { id, status }
    //     }
    // }

    // @Delete(':id')
    // deleteUser(@Param('id', new ParseIntPipe({ exceptionFactory: (error) => new BadRequestException('Id must be a valid number') })) id: number) {
    //     return this.userService.deleteUser(id);
    // }


    // @Get('status/:type')
    // getStatusByRoute(@Param('type', new ParseEnumPipe(statusType)) type: statusType) {  
    //     console.log('type:', type);
    //     return `Get status by route: ${type}`;
    // }
        

    @Get('status/:type')
    getStatusByRoute(@Param('type', new ParseEnumPipe(statusType)) type: statusType) {  
        console.log('type:', type);
        return `Get status by route: ${type}`;
    } 




}
