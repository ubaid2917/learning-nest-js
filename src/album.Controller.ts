import { Body, Controller, Get, HttpCode , Request, Headers, HttpException, HttpStatus, Param, Post, Query } from "@nestjs/common";

interface videoDto{
    name: string;
    description: string;
} 

@Controller('/albums')
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
    

    @Get('/user-profile')
    userProfile(@Param('id') id: string){
        console.log('id', id)
        return 'User Profile'
    } 

    @Get('/search')
    search(@Query('name') name: string){
        console.log('name', name)

        if(!name){
            throw new HttpException(
                { message: 'Name is required for searching' },
                HttpStatus.BAD_REQUEST,
              );
        }

        return {message: `your searched:- ${name}`}
    }   


    @Get('/get-headers')
    getHeadersFromRequest(@Headers('x_api_key') x_api_key: string){
        console.log('x_api_key', x_api_key)
        if (!x_api_key) {
            return {
              statusCode: HttpStatus.UNAUTHORIZED, 
              message: 'API Key is required for accessing this endpoint',
            };
          }

          return {
            statusCode: HttpStatus.OK, 
            message: 'Headers retrieved successfully',
            headers: x_api_key,
          }
    }  
     
    @Post('/video')
    addVideo(@Body() request: videoDto){
        console.log(request);
        return {
            statusCode: HttpStatus.CREATED, 
            message: 'Video added successfully',
            data: request
            
        }   
    }




} 