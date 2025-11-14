import { Module } from '@nestjs/common';
import { CreateUserController } from './create-user/create-user.controller';
import { UpdateUserController } from './update-user/update-user.controller';
import { DeleteCaronaController } from './delete-user/delete-user.controller';
import { FindOneController } from './findOne-user/findOne-user.controller';
import { FindAllController } from './find-all-user/find-all-user.controller';
import { DeleteService } from './delete-user/delete-user.service';
import { CreateUserService } from './create-user/create-user.service';
import { updateUserService } from './update-user/update-user.service';
import { FindAllService } from './find-all-user/find-all-user.service';
import { FindOneService } from './findOne-user/findOne-user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [
    CreateUserController,
    UpdateUserController,
    DeleteCaronaController,
    FindAllController,
    FindOneController,
  ],
  providers: [
    DeleteService,
    CreateUserService,
    updateUserService,
    FindAllService,
    FindOneService,
  ],
})
export class CaronaModule {}
