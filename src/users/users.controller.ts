import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsersService } from "./users.service";

import { createUser, editUser } from './dto';

@Controller('users')
export class UsersController {

    constructor(private readonly userSerive: UsersService) {}

    @Get()
    async getUsers() {
        const data = await this.userSerive.getUsers();
        return {
            status: 200,
            data: data
        };
    }
    
    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number) {
        const data = await this.userSerive.getUser(id);
        return {
            status: 200,
            data: data
        };
    }
    
    @Post()
    async postUser(@Body() dto : createUser) {
        await this.userSerive.postUser(dto);
        return {
            status: 200,
            data: 'User added successfully'
        };
    }
    
    @Put(':id')
    async putUser(@Param('id') id, @Body() dto : editUser) {
        await this.userSerive.putUser(id, dto);
        return {
            status: 200,
            data: 'User edited successfully'
        };
    }
    
    @Delete(':id')
    deleteUser(@Param('id') id) {
        return this.userSerive.deleteUser(id);
    }
}
