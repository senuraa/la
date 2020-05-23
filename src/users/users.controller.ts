import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) {}

    @Get(':id')
    get(@Param() params){
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() user:UserEntity){
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user:UserEntity){
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params){
        return this.service.deleteUser(params.id)
    }

    @Get('/getAll')
    getAll(){
        return this.service.getUsers();
    }

}
