import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DeleteService {
  constructor(private readonly prismaService: PrismaService) {}
  remove(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
