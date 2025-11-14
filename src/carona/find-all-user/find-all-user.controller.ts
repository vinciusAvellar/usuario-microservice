import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FindAllService } from './find-all-user.service';

@Controller() // Mantém o decorador
export class FindAllController {
  constructor(private readonly findAllService: FindAllService) {}

  @MessagePattern({ cmd: 'usuarios.findAll' })
  findAll() {
    // Não recebe payload (ou um payload vazio, {})
    return this.findAllService.findAll();
  }
}
