import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { RegistrationCommand } from '../../application/Users/Registration/RegistrationCommand';
import { RegistrationRequest } from '../Requests/Users/registrationRequest';

@Controller('users')
export class UserController {
    constructor(private readonly commandBus: CommandBus) {}

    @Post('register')
    async register(@Body() registrationRequest: RegistrationRequest) {
        const command = new RegistrationCommand(
            registrationRequest.name,
            registrationRequest.email,
        );
        await this.commandBus.execute(command);
    }
}
