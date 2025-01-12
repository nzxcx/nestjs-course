import { Module } from '@nestjs/common';
import { UserModule } from './application/Users/user.module';

@Module({
    imports: [UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
