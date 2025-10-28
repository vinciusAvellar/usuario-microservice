import { PartialType } from '@nestjs/mapped-types';
import { CreateCaronaDto } from './create-carona.dto';

export class UpdateCaronaDto extends PartialType(CreateCaronaDto) {}
