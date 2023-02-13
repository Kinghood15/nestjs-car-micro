import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('get')
  handleOrderCreated(data: any) {
    console.log(data,'user send service');

    this.appService.findOne(data);
  }
  @EventPattern('gets')
  handleOrderUserCreated(data: any) {
    console.log(data,'user find service');

    this.appService.findOne(data);
  }
}
