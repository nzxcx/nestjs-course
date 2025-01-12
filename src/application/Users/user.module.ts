import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from '../../web.api/Controllers/UserController';
import { UserRepository } from '../../infrastructure/repositories/UserRepository';
import { RegistrationHandler } from './Registration/RegistrationHandler';
import { RegistrationCommand } from './Registration/RegistrationCommand';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';

@Module({
    imports: [CqrsModule, PrismaModule],
    controllers: [UserController],
    providers: [UserRepository, RegistrationHandler, RegistrationCommand],
})
export class UserModule {}
