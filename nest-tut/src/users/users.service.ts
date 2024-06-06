import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "A",
            "role": "ADMIN"
        },
        {
            "id": 2,
            "name": "B",
            "role": "ENGINEER"
        },{
            "id": 3,
            "name": "C",
            "role": "INTERN"
        },
        {
            "id": 4,
            "name": "D",
            "role": "ADMIN"
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if (role){
            return this.users.filter(user => user.role === role)
        } 
        return this.users
    }

    findOne(id: number){
        return this.users.find(user => user.id === id)
    }

    create( user: CreateUserDto){
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id : usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id:number, updatedUser:UpdateUserDto){
        this.users = this.users.map(user => {
            if (user.id === id){
                return {...user, ...updatedUser}    //updateUser's properties will overwrite existing user's properties
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id:number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
