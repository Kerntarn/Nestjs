import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(){
        return []
    }

    @Get('/:id')
    findOne(@Param('id') id: string){
        return []
    }
}