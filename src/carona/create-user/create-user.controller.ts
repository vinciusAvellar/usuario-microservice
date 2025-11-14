import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices'; // NOVO: Decorador de mensagens
import { CreateUserDto } from './create-user.dto';
import { CreateUserService } from './create-user.service';

@Controller() // Mantém o decorador para injetabilidade (será movido para providers)
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  // O Gateway enviará o comando { cmd: 'usuarios.create' } com o DTO como payload.
  // O argumento 'dto' é o payload da mensagem TCP.
  @MessagePattern({ cmd: 'usuarios.create' })
  create(dto: CreateUserDto) {
    // A lógica de negócio (Service/Use Case) permanece a mesma.
    return this.createUserService.create(dto);
  }
}
