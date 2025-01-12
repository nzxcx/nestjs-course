import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { FindUserByIDQuery } from './FindUserByIDQuery';
import { UserRepository } from '../../../infrastructure/repositories/UserRepository';
import { User } from '../../../domain/entities/User';

@QueryHandler(FindUserByIDQuery)
export class FindUserByIDHandler
    implements IQueryHandler<FindUserByIDQuery, User>
{
    constructor(private readonly userRepository: UserRepository) {}

    async execute(query: FindUserByIDQuery): Promise<User> {
        try {
            return await this.userRepository.findById(query.id);
        } catch (error) {
            throw new Error('Error finding user: ' + error);
        }
    }
}
