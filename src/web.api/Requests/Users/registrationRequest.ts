import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegistrationRequest {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}
