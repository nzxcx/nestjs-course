import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { RegistrationCommand } from '../../application/Users/Registration/RegistrationCommand';
import { RegistrationRequest } from '../Requests/Users/registrationRequest';
import { FindUserByIDQuery } from '../../application/Users/FindUserByID/FindUserByIDQuery';

@Controller('users')
export class UserController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Post('register')
    async register(@Body() registrationRequest: RegistrationRequest) {
        const command = new RegistrationCommand(
            registrationRequest.name,
            registrationRequest.email,
        );
        await this.commandBus.execute(command);
    }

    @Get('find/:id')
    async find(@Param('id', ParseIntPipe) id: number) {
        const query = new FindUserByIDQuery(id);
        return await this.queryBus.execute(query);
    }
}
