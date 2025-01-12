import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IUserRepository } from '../../domain/repositories/IUserRepository';
import { User } from '../../domain/entities/User';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async create(user: User): Promise<User> {
        const newUser = await this.prismaService.user.create({
            data: user,
        });

        return new User(newUser.id, newUser.name, newUser.email);
    }
}
