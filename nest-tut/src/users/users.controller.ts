import { Controller, Get, Param, Body, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(){
        return []
    }

    @Get('interns')
    findAllInterns(){
        return ['all interns']
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return { id }
    }

    @Post()
    create(@Body() user: {}){
        return user
    }
}
