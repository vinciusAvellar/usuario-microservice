import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaronaService } from './carona.service';
import { CreateCaronaDto } from './dto/create-carona.dto';
import { UpdateCaronaDto } from './dto/update-carona.dto';

@Controller('carona')
export class CaronaController {
  constructor(private readonly caronaService: CaronaService) {}

  @Post()
  create(@Body() createCaronaDto: CreateCaronaDto) {
    return this.caronaService.create(createCaronaDto);
  }

  @Get()
  findAll() {
    return this.caronaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caronaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaronaDto: UpdateCaronaDto) {
    return this.caronaService.update(+id, updateCaronaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caronaService.remove(+id);
  }
}
