import { Controller, Get, Delete, Param, Body, Post, Query, Patch, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return this.usersService.findAll(role)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.usersService.findOne(id)       //+(Unary plus) can convert string to number
    }

    @Post()
    create(@Body() user: CreateUserDto){
        return this.usersService.create(user)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: UpdateUserDto){
        return this.usersService.update(id, userUpdate)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
        return this.usersService.delete(id)
    }
}
