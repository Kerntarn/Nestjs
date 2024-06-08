import { IsString, IsEmail , IsEnum, IsNotEmpty} from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEnum(['INTERN','ADMIN','ENGINEER'], {
        message:"Valid role required"
    })
    role:'INTERN'|'ADMIN'|'ENGINEER';
}