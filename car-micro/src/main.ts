import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.NATS,
    options: {
      url: ['nats://localhost:4222'],
      queue: 'car-queue',
    },
  });
  await app.listen();
}
bootstrap();
