import { Module } from '@nestjs/common';
import { CaronaService } from './carona.service';
import { CaronaController } from './carona.controller';

@Module({
  controllers: [CaronaController],
  providers: [CaronaService],
})
export class CaronaModule {}
