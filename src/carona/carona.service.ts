import { Injectable } from '@nestjs/common';
import { CreateCaronaDto } from './dto/create-carona.dto';
import { UpdateCaronaDto } from './dto/update-carona.dto';

@Injectable()
export class CaronaService {
  create(createCaronaDto: CreateCaronaDto) {
    return 'This action adds a new carona';
  }

  findAll() {
    return `This action returns all carona`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carona`;
  }

  update(id: number, updateCaronaDto: UpdateCaronaDto) {
    return `This action updates a #${id} carona`;
  }

  remove(id: number) {
    return `This action removes a #${id} carona`;
  }
}
