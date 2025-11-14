import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CaronaModule } from './carona/carona.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CaronaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
