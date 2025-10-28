import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaronaModule } from './carona/carona.module';

@Module({
  imports: [CaronaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
