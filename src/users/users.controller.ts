import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from "./users.service";
import { User } from "./interfaces/User";

import { createUser } from './dto/register-user.dto';

@Controller('users')
export class UsersController {

    constructor(private userSerive: UsersService) {}

    @Get()
    getUsers(): User[] {
        return this.userSerive.getUsers();
    }
    
    @Get(':id')
    getUser(@Param('id') id: string): User {
        return this.userSerive.getUser(parseInt(id));
    }
    
    @Post()
    postUser(@Body() user : createUser): string {
        console.log(user);
        return "Posting user";
    }
    
    @Put(':id')
    putUser(@Body() user : createUser, @Param('id') id): string {
        console.log(user);
        return  `Uptading user with ID: ${id}`;
    }
    
    @Delete(':id')
    deleteUser(@Param('id') id): string {
        return `Deleting user with ID: ${id}`;
    }
    
}
