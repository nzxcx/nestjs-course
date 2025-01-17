import { ICommand } from '@nestjs/cqrs';

export class RegistrationCommand implements ICommand {
    constructor(
        public readonly name: string,
        public readonly email: string,
    ) {}
}
