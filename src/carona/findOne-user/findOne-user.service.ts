import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindOneService {
  constructor(private readonly prismaService: PrismaService) {}

  findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }
}
