import { IQuery } from '@nestjs/cqrs';

export class FindUserByIDQuery implements IQuery {
    constructor(public readonly id: number) {}
}
