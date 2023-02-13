import { Injectable } from '@nestjs/common';
import { FindOneEvent } from './event.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  findOne(orderCreatedEvent: FindOneEvent) {
    console.log(orderCreatedEvent.name);
  }
}
