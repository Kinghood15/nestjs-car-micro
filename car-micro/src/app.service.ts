import { Inject, Injectable } from '@nestjs/common';
import { FindOneEvent,FindOneAndSendEvent } from './event.event';
import { GetUserRequest } from './get-request.dto';
import { ClientNats } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AppService {
  constructor(
    // @InjectModel(Car.name) private readonly model: Model<CarDocument>,
    @Inject('USER_SERVICE') private readonly carMicroClient: ClientNats,
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  findOne(orderCreatedEvent: FindOneEvent) {
    console.log(orderCreatedEvent.id);
  }

  async handleOrderCreated(orderCreatedEvent: FindOneAndSendEvent) {

    console.log("handleOrderCreated ",orderCreatedEvent.id,orderCreatedEvent.name)
    // await new this.model({
    //   _id:orderCreatedEvent.id,
    //   name: orderCreatedEvent.name,
    //   created_at: new Date(),
    //   update_at: new Date(),
    // }).save();
    return this.carMicroClient.emit('get', new GetUserRequest(orderCreatedEvent.name.toString()));
    if(orderCreatedEvent.id){
    }
    return;
  }
}
