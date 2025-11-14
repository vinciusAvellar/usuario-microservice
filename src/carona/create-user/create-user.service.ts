import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreateUserService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({ data: createUserDto });
  }
}
