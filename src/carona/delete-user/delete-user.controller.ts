import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DeleteService } from './delete-user.service';

@Controller() // Mantém o decorador para injetabilidade (Providers)
export class DeleteCaronaController {
  constructor(private readonly deleteService: DeleteService) {}

  @MessagePattern({ cmd: 'usuarios.remove' })
  remove(id: string) {
    // O payload será o ID
    return this.deleteService.remove(id);
  }
}
