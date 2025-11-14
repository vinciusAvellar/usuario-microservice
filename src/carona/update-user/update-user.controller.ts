import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UpdateUserDto } from './update-carona.dto'; // DTO de atualização
import { updateUserService } from './update-user.service';

@Controller() // Mantém o decorador para injetabilidade (Providers)
export class UpdateUserController {
  constructor(private readonly updateUserService: updateUserService) {}

  // O Gateway enviará o comando { cmd: 'usuarios.update' } com um objeto contendo ID e DTO.
  @MessagePattern({ cmd: 'usuarios.update' })
  update(payload: { id: string; dto: UpdateUserDto }) {
    // O payload é desestruturado na camada do Gateway antes de ser enviado.
    // O handler recebe o objeto completo, por isso desestruturamos aqui.
    return this.updateUserService.update(payload.id, payload.dto);
  }
}
