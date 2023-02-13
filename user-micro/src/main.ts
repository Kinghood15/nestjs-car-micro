import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.NATS,
    options: {
      url: ['nats://localhost:82922'],
      queue: 'user-queue',
    },
  });
  await app.listen();
}
bootstrap();
