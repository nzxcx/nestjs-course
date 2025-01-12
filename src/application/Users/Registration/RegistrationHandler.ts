import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegistrationCommand } from './RegistrationCommand';
import { UserRepository } from '../../../infrastructure/repositories/UserRepository';
import { User } from '../../../domain/entities/User';

@CommandHandler(RegistrationCommand)
export class RegistrationHandler
    implements ICommandHandler<RegistrationCommand>
{
    constructor(private readonly userRepository: UserRepository) {}

    async execute(command: RegistrationCommand): Promise<User> {
        try {
            return await this.userRepository.create(
                new User(0, command.name, command.email),
            );
        } catch (error) {
            throw new Error('Error creating user: ' + error);
        }
    }
}
