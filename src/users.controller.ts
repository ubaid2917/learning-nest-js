import { Controller, Get, Param, Query, Request, Headers } from '@nestjs/common';


@Controller('/users')
export class UserController {


    @Get('/profile/:id')
    getProfile(@Request() req: Request) {
        console.log('req', req.url)
        return {
            userId: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'admin'
        }
    }

    @Get('/user-details/:id')
    getUserDetails(@Param('id') params: string) {
        console.log('params', params)
        return 'User Details'
    }


    @Get('/search-user')
    searchUser(@Query() query: any) {
        console.log('query', query.name)
        console.log('query', query.age)
        return 'Search User'

    }
     

    @Get('/headers')
    getHeaders(@Headers('name') headers: any) {
        console.log('headers', headers)
        return 'Headers'
    }



} 