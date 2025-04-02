import { Controller, Get, Post, Put, Delete, Body, HttpStatus, Param, Ip } from '@nestjs/common';
import { UserService } from './user.service';
import {CreateUserDto} from './user.dto'


@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    addUser(@Body() createUserDto: CreateUserDto) {
        const user = this.userService.addUser(createUserDto);
        return {
            statusCode: HttpStatus.CREATED,
            message: 'User added successfully',
        }
    }

    @Get()
     getAllUsers() {
    const users = this.userService.getAllUsers();
    return users;
}
    

    @Get(':id')
    getUserById(@Param('id') id: number) {
         this.userService.getUserById(+id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
         this.userService.updateUser(+id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(+id);
    }
}
