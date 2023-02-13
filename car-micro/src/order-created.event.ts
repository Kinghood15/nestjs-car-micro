export class OrderCreatedEvent {
    constructor(
        public readonly id:string,
        public readonly name: string,
    ) {}
  }