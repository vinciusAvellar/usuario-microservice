import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Microservice Usuarios');

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3000, // Porta TCP exclusiva para o Microservice Usuarios
    },
  });

  await app.listen();
  logger.log('Microservice Usuarios está ouvindo na porta TCP 3000');
}
void bootstrap();
