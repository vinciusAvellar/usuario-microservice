import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FindOneService } from './findOne-user.service';

@Controller() // Mantém o decorador
export class FindOneController {
  constructor(private readonly findOneService: FindOneService) {}

  @MessagePattern({ cmd: 'usuarios.findOne' })
  findOne(id: string) {
    // O payload será o ID (string, pois é MongoDB ObjectId)
    return this.findOneService.findOne(id);
  }
}
